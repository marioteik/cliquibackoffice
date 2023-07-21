import Link from "next/link";
import {
  BookOpenCheck,
  ChevronRight,
  Clock,
  Landmark,
  Map,
  Store,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/atoms/Badge";
import { buttonVariants } from "@/components/atoms/Button";

interface MediaItemProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  title?: string;
  time?: string;
}

function MediaItem({ children, icon, title, time }: MediaItemProps) {
  return (
    <div className="flex p-4 justify-stretch items-stretch space-x-4">
      <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-orange-50 text-orange-400">
        {icon}
      </div>
      <div className="grow">
        <h3 className="text-md font-semibold text-normal">
          {title}
          {time && (
            <Badge variant="outline" className="ml-4 text-gray-500">
              <Clock className="w-4 h-4 mr-1" /> {time}
            </Badge>
          )}
        </h3>
        <p className="text-gray-500 text-sm">{children}</p>
      </div>

      <div className="self-end">
        <Link
          href="/financeiro"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          começar <ChevronRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}

export function ActivationProgressInstructions() {
  const progress = 0;

  return (
    <div
      className={cn(
        progress === 0 ? "flex" : "hidden",
        "flex-col space-y-4 w-full"
      )}
    >
      <h3 className="text-xl font-semibold">Configure a sua loja!</h3>

      <div className="grid grid-cols-1 border divide-y rounded-md w-full">
        <MediaItem icon={<Landmark />} title="Financeiro" time="5 min">
          Cadastre uma conta bancária para receber os repasses da Cliqui e
          selecione as formas de pagamento
        </MediaItem>
        <MediaItem icon={<Store />} title="Perfil da loja" time="10 min">
          Configure o perfil da sua loja, essas informações aparecerão para os
          seus clientes
        </MediaItem>
        <MediaItem
          icon={<Clock />}
          title="Horário de funcionamento"
          time="3 min"
        >
          Escolha os dias e horários que o seu restaurante vai receber pedidos
        </MediaItem>
        <MediaItem icon={<Map />} title="Áreas de entrega" time="10 min">
          Selecione as taxas e as áreas que você vai entregar seus pedidos
        </MediaItem>
        <MediaItem icon={<BookOpenCheck />} title="Cardápio" time="20 min">
          Defina quais itens vão estar no seu cardápio para que os clientes
          possam pedir
        </MediaItem>
      </div>
    </div>
  );
}
