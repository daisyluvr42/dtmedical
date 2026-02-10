
import { Header, Footer } from "./components/HeaderFooter";
import { Hero, About } from "./components/Content";
import { Products, News } from "./components/ProductsNews";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="pt-16 bg-[#f2f2f2]">
          <Hero />
          <About />
          <Products />
          <News />
        </div>
      </main>
      <Footer />
    </div>
  );
}
