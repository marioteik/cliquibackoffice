import {
  BookOpen,
  CalendarClock,
  Home,
  LayoutDashboard,
  PlayCircle,
  ScrollText,
  Soup,
  Users,
  Wallet,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/atoms/Logo";
import NavLink from "@/components/atoms/NavLink";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/atoms/Tooltip";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2 ">
          <Logo />
        </div>

        <div className="px-4 py-2 space-y-1">
          <NavLink href="/" targetSegment={null}>
            <Home className="mr-2 h-4 w-4" />
            Início
          </NavLink>
          <NavLink href="/dashboard" targetSegment="dashboard">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </NavLink>
        </div>

        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Pedidos
          </h2>
          <div className="space-y-1">
            <NavLink
              href="/pedidos/gerenciar"
              targetSegment="pedidos/gerenciar"
            >
              <Soup className="mr-2 h-4 w-4" />
              Gerenciar
            </NavLink>
            <NavLink
              href="/pedidos/historico"
              targetSegment="pedidos/historico"
            >
              <ScrollText className="mr-2 h-4 w-4" />
              Histórico
            </NavLink>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Configurações
          </h2>
          <div className="space-y-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  href="/gerenciamento/cardapio"
                  targetSegment="gerenciamento/cardapio"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cardápio
                </NavLink>
              </TooltipTrigger>
              <TooltipContent>
                <p>Gerencie suas categorias e items</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  href="/gerenciamento/cardapio"
                  targetSegment="gerenciamento/cardapio"
                >
                  <CalendarClock className="mr-2 h-4 w-4" />
                  Horário de funcionamento
                </NavLink>
              </TooltipTrigger>
              <TooltipContent>
                <p>Abertura e fechamento do estabelecimento</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  href="/gerenciamento/cardapio"
                  targetSegment="gerenciamento/cardapio"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Usuários
                </NavLink>
              </TooltipTrigger>
              <TooltipContent>
                <p>Cadastrar usuários do applicativo de gerencimento</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  href="/gerenciamento/cardapio"
                  targetSegment="gerenciamento/cardapio"
                >
                  <Wallet className="mr-2 h-4 w-4" />
                  Financeiro
                </NavLink>
              </TooltipTrigger>
              <TooltipContent>
                <p>Gerencie meio de pagamentos e repasses de valores.</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
