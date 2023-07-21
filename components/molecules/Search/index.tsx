import { Input } from "@/components/atoms/Input";

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Buscar pedido, item no cardápio ou entregador..."
        className="h-9 md:w-[140px] lg:w-[360px]"
      />
    </div>
  );
}
