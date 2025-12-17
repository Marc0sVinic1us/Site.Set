import { useCallback, useMemo } from "react"
import { ShareConfig, SocialProvider, SOCIAL_PROVIDERS } from "./social-providers"
import { useClipboard } from "../use-clipboard"
import { Check, Link } from "lucide-react"

type UseShareProps = ShareConfig & {
    clipboardTimeout?: number
}

export const UseShare = ( { url, text, title, clipboardTimeout = 2000 }: UseShareProps ) => {

    const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout });
    
    const shareCofig = useMemo(() => ({
        url,
        ...(title && { title }),
        ...(text && { text })
    }), [text, title, url])

    const share = useCallback(async (provider: SocialProvider) => {
        try {
            if (provider === 'clipboard') {
                return await handleCopy(url);
            }

            const providerConfig = SOCIAL_PROVIDERS[provider];

            if (!providerConfig) {
                throw new Error(`Provedor não suportado: ${provider}`)
            }

            const shareUrl = providerConfig.shareUrl(shareCofig)
            const shareWindow = window.open(shareUrl, '_blank', 'width=600,height=600, location=yes,status=yes')
            
            return !!shareWindow

        } catch (error) {
            console.error(error)
        }

        return false
    
    }, [handleCopy, shareCofig, url])

    const shareButtons = useMemo(() => [
        ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
            provider: key,
            name: provider.name,
            icon: provider.icon,
            action: () => share(key as SocialProvider)
        })), 
        {
            provider: 'clipboard',
            name: isCopied ? 'Link copiado!' : 'Copiar link',
            icon: isCopied ? <Check className="h-4 w-4" /> : <Link className="h-4 w-4" />,
            action: () => share('clipboard')
        }

    ], [isCopied, share]);
    
    return {
        shareButtons
    }
}