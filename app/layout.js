import { Fugaz_One, Open_Sans, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });
const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Moodiary',
  description: 'Track your daily mood every day of the year!',
};

const header = (
  <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
    <h1 className={`text-base sm:text-lg textGradient ${fugaz.className}`}>
      Moodiary
    </h1>
    <div className="flex items-center justify-between">
      PLACEHOLDER CTA || STATS
    </div>
  </header>
);
const footer = (
  <footer className="p-4 sm:p-8 grid place-items-center">
    <p className={`text-amber-600 ${fugaz.className}`}>Created with 💕</p>
  </footer>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ${openSans.className}`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
