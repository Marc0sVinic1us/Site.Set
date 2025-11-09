import { Clock, Store } from "lucide-react";
import Image from "next/image";
import { ButtonCreateStore } from "../../../../components/button-create-store";

export function HeroSection() {
  return (
    <section className="container mt-16 relative flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
          <h1 className="text-gray-100 text-center md:text-start lg:text-start text-heading-hg font-sans">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col sm:items-center justify-center gap-4 md:items-start lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="text-cyan-100 h-4 w-4" />
                <span className="text-body-md text-gray-200">
                  Crie o seu site me menos de 5 minutos
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Store className="text-cyan-100 h-4 w-4" />
                <span className="text-body-md text-gray-200">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>

              <div className="text-white flex flex-col gap-4 mt-10 items-center md:items-start lg:items-start">
                <div className="w-100">
                  <ButtonCreateStore />
                </div>

                <p className="text-gray-300 text-body-xs">
                  Não precisa de cartão de crédito
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[20rem] hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex">
          <Image
            className="h-full w-auto object-contain"
            src="hero-section.svg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={200}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
