/* eslint-disable @typescript-eslint/no-explicit-any */

import { Product } from '@/types';
import ProductCard from './product-card';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const limitData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols3 lg:grid-cols-4 gap-4">
          {limitData.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};
export default ProductList;
