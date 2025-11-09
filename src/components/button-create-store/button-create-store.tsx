import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function ButtonCreateStore() {
    return (
        <Button variant='primary' asChild className="w-full">
            <Link href="/criar-loja">
                Criar loja grátis
                <ArrowRight />
            </Link>
        </Button>
    );
}