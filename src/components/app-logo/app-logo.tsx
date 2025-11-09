import Image from "next/image";
import Link from "next/link";

export function AppLogo() {
    return (
        <Link href="/" title="Página inicial">
            <Image
                src="/app-logo.svg"
                alt="Logo Site"
                width={116}
                height={32}
            />
        </Link>
    );
}