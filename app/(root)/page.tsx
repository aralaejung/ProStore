// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
import ProductList from '@/components/products/product-list';
import sampleData from '@/db/sample-data';

const HomePage = async () => {
  //   await delay(2000);
  //   console.log(sampleData);
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};
export default HomePage;
