import ProductCard from "./ProductCard";
const ProductCatalog = () => {
  return (
    <div className="w-full h-full grid grid-cols-2   md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-4 justify-center">
        <ProductCard />
    </div>
  );
};

export default ProductCatalog;
