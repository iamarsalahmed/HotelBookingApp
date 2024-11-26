// import '../globals.css';
// import type { Metadata } from 'next';
// import { Open_Sans } from 'next/font/google';
// import { ThemeProvider } from '@/contexts/ThemeProvider';
// import ProgressBarProvider from '@/contexts/ProgressBarProvider';

// const openSans = Open_Sans({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Admin dashboard',
//   description: 'Admin dashboard',
// };

// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <html lang="en">
//       <body className={openSans.className}>
//         <ProgressBarProvider>
//           <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//             {children}
//           </ThemeProvider>
//         </ProgressBarProvider>
//       </body>
//     </html>
//   );
// };

// export default RootLayout;
// import '../globals.css';
// import type { Metadata } from 'next';
// import { Open_Sans } from 'next/font/google';
// import { ThemeProvider } from '@/contexts/ThemeProvider';
// import ProgressBarProvider from '@/contexts/ProgressBarProvider';
// import { Provider } from 'react-redux'; // Import Provider
// import store from '../(store)/store'; // Import your Redux store

// const openSans = Open_Sans({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Admin dashboard',
//   description: 'Admin dashboard',
// };

// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <html lang="en">
//       <body className={openSans.className}>
//         <ProgressBarProvider>
//           <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//             {/* Wrap the children with Redux Provider */}
//             <Provider store={store}>
//               {children}
//             </Provider>
//           </ThemeProvider>
//         </ProgressBarProvider>
//       </body>
//     </html>
//   );
// };

// export default RootLayout;
import '../globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import ProgressBarProvider from '@/contexts/ProgressBarProvider';
import ClientWrapper from '../(root)/ClientWrapper'; // Import your Client Wrapper

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin dashboard',
  description: 'Admin dashboard',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ProgressBarProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ClientWrapper> {/* Wrap with ClientWrapper */}
              {children}
            </ClientWrapper>
          </ThemeProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
};

export default RootLayout;
