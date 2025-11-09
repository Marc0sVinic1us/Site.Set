import Image from "next/image";
import { ButtonCreateStore } from "../../../../components/button-create-store";

export function CallToActionSection() {
    return (
        <section className="py-24 relative">
            <div className="absolute inset-0 bg-[url('/background-call-to-action.svg')] bg-center bg-cover bg-no-repeat opacity-90"/>

            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <Image 
                    src="/store-cyan.svg"
                    alt="Loja"
                    width={50}
                    height={50}
                />
            </div>
            
            <div className="container relative">
                <div className="flex flex-col items-center gap-6 text-center">    

                    <h2 className="font-sans text-gray-100 text-balance text-heading-xl">
                        Crie uma loja online e inicie suas vendas ainda hoje
                    </h2>

                    <div className="w-100 mt-8">
                        <ButtonCreateStore />
                    </div>
                </div>
            </div>
        </section>
    );
}