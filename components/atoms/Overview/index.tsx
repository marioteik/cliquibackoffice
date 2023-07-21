"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { RadioSelect } from "@/components/molecules/RadioSelect";

const data = [
  {
    name: "16/06",
    total: Math.floor(Math.random() * 5000) + 1000,
    oldTotal: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "17/06",
    total: Math.floor(Math.random() * 5000) + 1000,
    oldTotal: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "18/06",
    total: Math.floor(Math.random() * 5000) + 1000,
    oldTotal: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "19/06",
    total: Math.floor(Math.random() * 5000) + 1000,
    oldTotal: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "20/06",
    total: Math.floor(Math.random() * 5000) + 1000,
    oldTotal: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "21/06",
    total: Math.floor(Math.random() * 5000) + 1000,
    oldTotal: Math.floor(Math.random() * 5000) + 1000,
  },
];

const radioSelectOptions = [
  {
    label: "Total de vendas",
    value: "total-sales",
  },
  {
    label: "Valor total",
    value: "total-value",
  },
  {
    label: "Valor médio",
    value: "average-value",
  },
  {
    label: "Novos clientes",
    value: "new-clients",
  },
];

export function Overview() {
  return (
    <div className="flex flex-col space-y-4">
      <RadioSelect options={radioSelectOptions} defaultValue="total-sales" />

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />

          {/* TODO: fix legend to a better one */}
          <Tooltip />
          <CartesianGrid strokeDasharray="1" vertical={false} />
          <Line type="monotone" dataKey="total" stroke={"#F87171"} />
          <Line type="monotone" dataKey="oldTotal" stroke={"#FBBF24"} />
        </LineChart>
      </ResponsiveContainer>

      <div className="flex justify-end items-center">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span className="text-sm">Vendas</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <span className="text-sm">Vendas Anteriores</span>
          </div>
        </div>
      </div>
    </div>
  );
}
