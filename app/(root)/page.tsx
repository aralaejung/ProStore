// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
import ProductList from '@/components/products/product-list';
import { getLatestProducts } from '@/lib/actions/product.action';

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  //   await delay(2000);
  //   console.log(sampleData);
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  );
};
export default HomePage;
