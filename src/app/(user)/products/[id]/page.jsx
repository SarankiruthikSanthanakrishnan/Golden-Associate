import SingleProduct from '../../../../components/user/SingleProduct';
import { productData } from '../../../../data/data';

export async function generateStaticParams() {
  return productData.map((product) => ({
    id: String(product.id),
  }));
}

export default function Page() {
  return <SingleProduct />;
}
