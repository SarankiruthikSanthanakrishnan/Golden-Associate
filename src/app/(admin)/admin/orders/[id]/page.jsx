import OrderDetail from '../../../../../screens/admins/OrderDetail';

// Pre-render a set of known order IDs for static export
export async function generateStaticParams() {
  const sampleOrderIds = [
    'GA-2026-001', 'GA-2026-002', 'GA-2026-003',
    'GA-2026-004', 'GA-2026-005',
  ];
  return sampleOrderIds.map((id) => ({ id }));
}

export default function Page() {
  return <OrderDetail />;
}
