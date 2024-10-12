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

        <div className="container flex-1 flex items-center my-12 md:my-0">
          <div className="grid md:grid-cols-4 gap-5 w-full">
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
              <h3 className="text-3xl mt-5 mb-3 font-semibold">Customer Service</h3>
              <p className="text-sm text-center text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa reiciendis ipsa itaque ex quaerat. Tempora impedit rerum est sapiente laborum alias.</p>
            </div>

            <div className="flex items-center flex-col">
              <img width="80" height="80" src="https://img.icons8.com/00CCCC/pulsar-line/fast-delivery.png" alt="technical-support" />
              <h3 className="text-3xl mt-5 mb-3 font-semibold">Fast Delivery</h3>
              <p className="text-sm text-center text-gray-300">Lorem ipsum dolor sit amet consectetur, elit. Culpa reiciendis ipsa itaque ex quaerat. Tempora impedit rerum est sapiente laborum alias.</p>
            </div>

            <div className="flex items-center flex-col">
              <img width="80" height="80" src="https://img.icons8.com/00CCCC/guarantee.png" alt="technical-support" />
              <h3 className="text-3xl mt-5 mb-3 font-semibold">High-quality Products</h3>
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
