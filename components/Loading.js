import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <i className="fa-solid fa-spinner text-slate-800 animate-spin text-4xl sm:text-5xl"></i>
    </div>
  );
}
