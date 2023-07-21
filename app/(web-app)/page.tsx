import { PartyPopper } from "lucide-react";

import { ActivationProgressInstructions } from "@/components/molecules/ActivationInstructions";
import { ActivationProgress } from "@/components/molecules/ActivationProgress";
import { PageContainer } from "@/components/templates/PageContainer/indext";

export default async function HomePage() {
  return (
    <div className="flex-1 space-y-4">
      <div className="h-[180px] bg-red-50 flex justify-start items-center p-8 pl-12">
        <div className="text-primary">
          <PartyPopper className="w-[60px] h-[60px] mr-8" />
        </div>
        <div className="flex flex-col text-slate-800">
          <h1 className="text-3xl font-semibold">
            Bem-vindo, mario.teik@gmail.com
          </h1>
          <p className="">Falta pouco para abrir a sua loja</p>
        </div>
      </div>

      <PageContainer className="px-12 space-y-12">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">
              Conclua as etapas para começar a vender
            </h2>
          </div>

          <ActivationProgress />
        </div>

        <ActivationProgressInstructions />
      </PageContainer>
    </div>
  );
}
