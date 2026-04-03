import '../index.css';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from './Providers';

export const metadata = {
  title: 'Golden Associate',
  description: 'Enterprise E-commerce Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-gray-50 text-gray-900">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
