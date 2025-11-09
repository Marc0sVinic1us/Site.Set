import { Inter, PT_Sans_Caption } from "next/font/google"
import { Header } from "./header"
import { Footer } from "./footer"

type LayoutProps = {
    children: React.ReactNode
}

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-inter'
})

const ptSansCaptions = PT_Sans_Caption({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-sans'
})

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={`${inter.className} ${ptSansCaptions} bg-gray-500 relative flex min-h-screen flex-col dark font-inter`}>
            <Header />
            <main className="flex-1 flex flex-col mt-10 mb-12">
                {children}
            </main>
            <Footer />
        </div>
    )
}