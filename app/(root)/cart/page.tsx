import CartTable from './cart-table';
import { getMyCart } from '@/lib/actions/cart.action';

export const metadata = {
  title: 'Shopping Cart',
};

const CartPage = async () => {
  const cart = await getMyCart();
  return (
    <>
      <CartTable cart={cart} />
    </>
  );
};
export default CartPage;
