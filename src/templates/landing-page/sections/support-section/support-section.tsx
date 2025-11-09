import { HeartHandshakeIcon, PaintbrushVertical, StoreIcon } from "lucide-react";


const cardsSupport = [
    {
        icon: {
            image: PaintbrushVertical,
            bgColor: "bg-blue-300"
        },
        title: "Personalize seu site",
        bodyContent: "Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara.",
        bgColor: "bg-blue-400"
    },
    {
        icon: {
            image: StoreIcon,
            bgColor: "bg-cyan-200"
        },
        title: "Venda de qualquer loja",
        bodyContent: "Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado.",
        bgColor: "bg-cyan-300"
    },
    {
        icon: {
            image: HeartHandshakeIcon,
            bgColor: "bg-blue-300"
        },
        title: "Receba suporte amigável",
        bodyContent: "Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.",
        bgColor: "bg-blue-400"
    },
]


export function SupportSection() {
    return (
        <section className="relative pb-8 md:py-10 bg-gray-700">
            <div className="absolute inset-0 hidden md:block bg-[url('/background-support-section.svg')] bg-cover bg-center bg-no-repeat opacity-90"/>
            
            <div className="container pb-8 py-3 w-full md:py-10 relative">
                <div className="flex flex-col items-center gap-12">
                    <h2 className="font-sans text-balance text-center text-heading-xl text-gray-100">
                        Sua loja de afiliados, simples, do jeito que deveria ser
                    </h2>
                    
                    <div className="grid gap-6 md:grid-cols-3">
                        {cardsSupport.map((card, index) => (
                            <div key={index} className={`flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 ${card.bgColor}`}>
                                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4 ${card.icon.bgColor}`}>
                                    <card.icon.image className="h-6 w-6 text-white" />
                                </div>
                                
                                <strong className="text-heading-sm text-gray-100">
                                    {card.title}
                                </strong>
                                <p className="text-body-sm text-gray-200">
                                    {card.bodyContent}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}