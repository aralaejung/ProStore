// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
import ProductCarousel from '@/components/shared/products/product-carousel';
import ProductList from '@/components/shared/products/product-list';
import {
  getFeaturedProducts,
  getLatestProducts,
} from '@/lib/actions/product.action';
import ViewAllProductsButton from '@/components/view-all-products-button';
const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();
  //   await delay(2000);
  //   console.log(sampleData);
  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="Newest Arrivals" />
      <ViewAllProductsButton />
    </>
  );
};
export default HomePage;
