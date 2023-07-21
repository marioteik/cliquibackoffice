import { Activity, ChevronUp, DollarSign, Download } from "lucide-react";

import { Button } from "@/components/atoms/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/Card";
import { Overview } from "@/components/atoms/Overview";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/Tabs";
import { CalendarDateRangePicker } from "@/components/molecules/DateRangePicker";
import { DetailCard } from "@/components/molecules/DetailCard";
import { RadioSelect } from "@/components/molecules/RadioSelect";
import { RecentSales } from "@/components/molecules/RecentSales";
import { PageContainer } from "@/components/templates/PageContainer/indext";

const periods = [
  {
    label: "Personalizado",
    value: "personalized",
  },
  {
    label: "Ontem",
    value: "yesterday",
  },
  {
    label: "Últimos 7 dias",
    value: "last-7-days",
  },
  {
    label: "Últimos 30 dias",
    value: "last-30-days",
  },
];

const platforms = [
  {
    label: "Todos",
    value: "all",
  },
  {
    label: "App e Site",
    value: "app-and-site",
  },
  {
    label: "Cardápio Digital",
    value: "digital-menu",
  },
];

export default async function DashboardPage() {
  return (
    <PageContainer>
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button size="sm">
              <Download className="mr-2 h-4 w-4" />
              Baixar
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4 relative">
          <TabsList>
            <TabsTrigger value="overview">Vendas</TabsTrigger>
            <TabsTrigger value="analytics">Cardápio</TabsTrigger>
            <TabsTrigger value="reports">Operação</TabsTrigger>

            <div className="absolute right-0 text-sm">
              <div className="flex gap-8">
                <div className="flex justify-start items-center space-x-2">
                  <div>Período:</div>
                  <RadioSelect defaultValue="last-7-days" options={periods} />
                </div>

                <div className="flex justify-start items-center space-x-2">
                  <div>Plataforma:</div>
                  <RadioSelect
                    defaultValue="app-and-site"
                    options={platforms}
                  />
                </div>
              </div>
            </div>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <DetailCard
                percentage={20.1}
                title="Total de vendas realizadas"
                icon={<Activity className="h-4 w-4 text-muted-foreground" />}
                value="167"
              />

              <DetailCard
                percentage={125.5}
                title="Valor total das vendas"
                icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
                value="R$ 18.255,00"
              />

              <DetailCard
                percentage={-19}
                title="Valor médio por pedido"
                icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
                value="R$ 109,00"
              />

              <DetailCard
                percentage={201}
                title="Novos clientes"
                icon={<Activity className="h-4 w-4 text-muted-foreground" />}
                value="71"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader className="flex flex-row items-center justify-start space-x-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <CardTitle className="!mt-0">Vendas</CardTitle>
                </CardHeader>
                <CardContent>
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}
