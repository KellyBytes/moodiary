import React from 'react';
import { Fugaz_One } from 'next/font/google';
import Image from 'next/image';

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-center items-center mt-4 mb-8">
      <small
        className={`textGradient mb-1 md:mb-0 md:mr-1 md:translate-y-1 ${fugaz.className}`}
      >
        Created by
      </small>
      <a
        className="flex items-center gap-1 p-1 pr-2 bg-amber-100 rounded-4xl border border-transparent shadow-md hover:border-amber-700 hover:shadow hover:scale-[0.98] hover:opacity-80 duration-200"
        alt="pfp"
        href="https://github.com/KellyBytes"
        target="_blank"
      >
        <Image
          src="/images/kb.png"
          alt="github avatar"
          className="rounded-full"
          width={30}
          height={30}
        />
        <p>@KellyBytes</p>
        <i className="fa-brands fa-github"></i>
      </a>
    </footer>
  );
}
