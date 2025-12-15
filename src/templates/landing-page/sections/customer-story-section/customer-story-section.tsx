import { Avatar } from "@/components/avatar";

const arrCustomersStories = [
    {
        content: "Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.",
        author: {
            name: "Annette Bones",
            role: "CEO na Anne Corp",
            avatar: "/customer-01.png"
        },
    },
    {
        content: "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
        author: {
            name: "Jacob Jones",
            role: "CEO na JJ Org",
            avatar: "/customer-02.png"
        },
    }
]

export function CustomerStorySection() {
    return (
        <section className="container py-8 md:py-10">
            <div className="flex flex-col items-center gap-12">
                <h2 className="font-sans text-heading-xl text-gray-100">
                    Quem utiliza, aprova!
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {arrCustomersStories.map((customer, index) => (
                        <div key={index} className="flex flex-col gap-6 rounded-lg bg-gray-600 border border-gray-400 p-4 md:p-12">
                            <p className="text-balance text-gray-200">
                                {customer.content}
                            </p>
                            <div className="flex items-center gap-3">
                                <Avatar.Container>
                                    <Avatar.Image 
                                        src={customer.author.avatar}
                                        alt={customer.author.avatar}
                                    />
                                    <Avatar.Content>
                                        <Avatar.Title>{customer.author.name}</Avatar.Title>
                                        <Avatar.Description>{customer.author.role}</Avatar.Description>
                                    </Avatar.Content>
                                </Avatar.Container>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}