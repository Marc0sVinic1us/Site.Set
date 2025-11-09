import Image from "next/image";
import { ButtonCreateStore } from "../../../../components/button-create-store";

export function FeatureSection() {
    return (
        <section className="container bg-gray-700 grid gap-6 md:grid-cols-2 py-8 md:py-10 rounded-lg">
            <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-500 md:p-12">
                <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">Simples</span>
                <h2 className="font-sans text-gray-100 text-heading-lg">Crie um catálogo de produtos online em poucos minutos</h2>
            </div>
            
            <div className="flex flex-col gap-4 rounded-lg p-6 bg-gray-500 md:p-12">
                <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">Prático</span>
                <h2 className="font-sans text-gray-100 text-heading-lg">Venda para seu público através de uma plataforma única</h2>
            </div>

            <div className="col-span-full flex flex-col gap-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-lg bg-gray-500 p-6 md:p-12">

                    <div className="flex flex-col gap-4 justify-between rounded-lg p-6 bg-gray-500 md:p-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm uppercase">
                                Personalisável
                            </span>
                            
                            <h2 className="font-sans text-gray-100 text-heading-lg">
                                Tenha uma loja online personalizada com a cara da sua marca
                            </h2>
                        </div>
                        <div className="mt-4 hidden w-fit md:flex md:w-100">
                            <ButtonCreateStore />
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="w-full max-w-md overflow-hidden">
                            <Image
                                src="/feature-section.svg"
                                alt="Features"
                                width={440}
                                height={330}
                                className="object-cover w-full"
                            />
                        </div>

                        <div className="gap-2 w-full mt-4 md:m-auto md:hidden">
                            <ButtonCreateStore />
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}