import ProductCard from "@/components/productCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="h-screen container">
        hero
      </section>
      <section className="min-h-screen flex flex-col">
        <h3 className="text-4xl text-center font-semibold">Featured Products</h3>

        <div className="container flex-1 flex items-center">
          <div className="grid grid-cols-4 gap-5 w-full">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </div>
  );
}
