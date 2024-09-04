// import viteLogo from '/vite.svg'
import Navbar from "./component/Navbar";
import ProductCatalog from "./component/ProductCatalog";

function App() {
  return (
    <>
        <Navbar />
        <section className="relative w-full  px-4 bg-neutral-100">
            <header className="w-full flex justify-center my-2">
                <h1 className="font-bold lg:text-[1.3em] md:text-[1.2em] text-[1.1em] text-gray-500 border-b border-gray-800 mb-4 w-fit">
                    New Products
                </h1>
            </header>
            <main className="w-full grid justify-center">
              <ProductCatalog/>
            </main>
        </section>
    </>
);
}

export default App;
