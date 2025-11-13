import React from 'react';
import { Fugaz_One } from 'next/font/google';
import Image from 'next/image';

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-center items-center mt-4 mb-8">
      <small className={`text-stone-600 mb-1 md:mb-0 md:mr-1 md:translate-y-1`}>
        Created by
      </small>
      <a
        className={`flex items-center gap-1 p-1 pr-2 text-xs md:text-sm text-amber-700 rounded-4xl border-2 border-amber-700 hover:opacity-60 duration-200 ${fugaz.className}`}
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
