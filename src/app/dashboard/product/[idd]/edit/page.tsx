import axios, { endpoints } from 'src/utils/axios';

import { ProductEditView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Product Edit',
};

type Props = {
  params: {
    idd: string;
  };
};

export default function ProductEditPage({ params }: Props) {
  const { idd } = params;

  return <ProductEditView id={idd} />;
}

export async function generateStaticParams() {
  const res = await axios.get(endpoints.product.list);

  return res.data.products.map((product: { id: string }) => ({
    id: product.id,
  }));
}
