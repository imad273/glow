"use client"

import ProductCard from "@/components/productCard";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="h-screen container">
        hero
      </section>
      <section className="min-h-screen flex flex-col">
        <h3 className="text-4xl text-center font-semibold">Featured Products</h3>

        <div className="container flex-1 flex items-center my-12 md:my-0">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 w-full">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-4xl text-center font-semibold">Exceptional Service</h3>

        <div className="container flex-1 flex items-center my-16 md:my-32">
          <div className="grid md:grid-cols-3 gap-16 w-full">
            <div className="flex items-center flex-col">
              <img width="80" height="80" src="https://img.icons8.com/00CCCC/technical-support.png" alt="technical-support" />
              <h3 className="text-3xl mt-5 mb-3 font-semibold text-center">Customer Service</h3>
              <p className="text-sm text-center text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa reiciendis ipsa sapiente laborum alias.</p>
            </div>

            <div className="flex items-center flex-col">
              <img width="80" height="80" src="https://img.icons8.com/00CCCC/pulsar-line/fast-delivery.png" alt="technical-support" />
              <h3 className="text-3xl mt-5 mb-3 font-semibold text-center">Fast Delivery</h3>
              <p className="text-sm text-center text-gray-300">Lorem ipsum dolor sit amet consectetur, ipsa itaque ex quaerat. Tempora impedit rerum est sapiente laborum alias.</p>
            </div>

            <div className="flex items-center flex-col">
              <img width="80" height="80" src="https://img.icons8.com/00CCCC/guarantee.png" alt="technical-support" />
              <h3 className="text-3xl mt-5 mb-3 font-semibold text-center">High-quality Products</h3>
              <p className="text-sm text-center text-gray-300">Lorem ipsum elit. Culpa reiciendis ipsa. Tempora impedit rerum est sapiente laborum alias.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex flex-col">
        <h3 className="text-4xl text-center font-semibold">Clients Feedback</h3>

        <div className="container flex-1 flex items-center">
          <div className="w-full">
            good
          </div>
        </div>
      </section>

      <section className="min-h-screen relative">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Sanjana Airlines, <br /> Sajana Textiles.
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center">
            Get the best advices from our experts, including expert artists,
            painters, marathon enthusiasts and RDX, totally free.
          </p>
        </BackgroundLines>
      </section>

      <section className="min-h-screen flex flex-col">
        <h3 className="text-4xl text-center font-semibold">Contact Us</h3>

        <div className="container flex-1 flex items-center">
          <div className="w-full">
            email
          </div>
        </div>
      </section>
    </div>
  );
}
