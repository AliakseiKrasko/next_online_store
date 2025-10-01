import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function LogoBlock() {
  return (
    <Link href="/" className="flex flex-row gap-3 items-center cursor-pointer">
      <div className="relative w-10 h-8 md:w-12 md:h-10 xl:w-10 xl:h-8">
        <Image
          src="/icon-header/icon-header.svg"
          alt="Header Logo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </Link>
  );
}

export default LogoBlock;
