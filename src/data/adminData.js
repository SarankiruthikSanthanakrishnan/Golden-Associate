import { productData, servicesData, workData } from './data';
import { officeBranches } from './companyInfo';

export const inventoryItems = productData.map((item, index) => {
  let categoryStr = '';
  if (index === 0 || index === 1) categoryStr = 'Water Heaters';
  else if (index === 2 || index === 5) categoryStr = 'Kitchen Tools';
  else categoryStr = 'Kitchen Appliances';

  return {
    id: item.id,
    sku: `SKU-${categoryStr.substring(0,4).toUpperCase().replace(' ','')}-00${item.id}`,
    name: item.name,
    category: categoryStr,
    price: item.price,
    stock: 22 + index * 6,
    reorderLevel: 20,
    status: 22 + index * 6 <= 20 ? 'Low Stock' : 'In Stock',
  };
});

export const orderWorkflow = productData.map((item, index) => {
  const statuses = ['New', 'Confirmed', 'Packed', 'Shipped', 'Delivered'];
  return {
    orderId: `GA-ORD-${2026 + index}`,
    product: item.name,
    customer: ['Arun Stores', 'Metro Mart', 'Sakthi Hardware', 'Vetri Traders'][
      index % 4
    ],
    amount: item.price,
    date: `2026-03-${String(20 + index).padStart(2, '0')}`,
    status: statuses[index % statuses.length],
    payment: index % 2 === 0 ? 'Paid' : 'Pending',
  };
});

export const galleryUpdateQueue = workData.map((item, index) => ({
  id: item.id,
  title: `Showcase Image ${item.id}`,
  image: item.image,
  section: index % 2 === 0 ? 'Installations' : 'Customer Stories',
  updatedAt: `2026-03-${String(10 + index).padStart(2, '0')}`,
  status: index % 3 === 0 ? 'Pending Review' : 'Published',
  owner: index % 2 === 0 ? 'Design Team' : 'Marketing Team',
}));

export const serviceRecords = servicesData.map((item, index) => ({
  id: item.id,
  service: item.name,
  owner: 'Service Team',
  status: index % 2 === 0 ? 'Active' : 'Review',
}));

export const contentModules = [
  {
    key: 'inventory',
    title: 'Inventory',
    route: '/admin/inventory',
    records: inventoryItems.length,
    status: 'Live',
    note: 'Products used in Home and Shop pages',
  },
  {
    key: 'orders',
    title: 'Order Status',
    route: '/admin/orders',
    records: orderWorkflow.length,
    status: 'Live',
    note: 'Order flow with statuses from New to Delivered',
  },
  {
    key: 'gallery',
    title: 'Gallery Updates',
    route: '/admin/gallery-updates',
    records: galleryUpdateQueue.length,
    status: 'Live',
    note: 'Images used in Gallery and Home pages',
  },
  {
    key: 'services',
    title: 'Services',
    route: '/admin/customers',
    records: serviceRecords.length,
    status: 'Live',
    note: 'Service content and Reach Us details',
  },
  {
    key: 'contacts',
    title: 'Reach Us Details',
    route: '/reach-us',
    records: officeBranches.length,
    status: 'Live',
    note: 'Frontend contact details module',
  },
];

export const dashboardActivities = [
  'Inventory module synced with product catalog source.',
  'Order statuses normalized to New, Confirmed, Packed, Shipped, Delivered.',
  'Gallery update queue mapped to frontend image assets.',
  'Services and Reach Us records linked to shared data files.',
];

export const adminTasks = [
  {
    task: 'Review low stock SKUs',
    owner: 'Inventory Admin',
    due: 'Today',
    priority: 'High',
  },
  {
    task: 'Update pending gallery assets',
    owner: 'Design Team',
    due: 'Tomorrow',
    priority: 'Medium',
  },
  {
    task: 'Verify Sunday support timing',
    owner: 'Support Admin',
    due: 'This Week',
    priority: 'Low',
  },
];
