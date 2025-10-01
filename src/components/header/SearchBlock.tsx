import React from 'react';
import Image from 'next/image';
import iconSearch from '../../../public/icon-header/icon-search.svg';

function SearchBlock() {
  return (
    <div className="flex flex-row gap-4 flex-grow">
      <button
        className="bg-(--color-primary) hover:shadow-(--shadow-button-default)
          active:shadow-(--shadow-button-active) hidden md:flex w-10 p-2 gap-4 lg:w-35
          cursor-pointer duration-300 rounded"
      >
        <Image
          src="/icon-header/icon-menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="hidden md:block"
        />
        <span className="text-base text-white hidden lg:block">Каталог</span>
      </button>
      <div className="relative min-w-[261px] flex-grow">
        <input
          type="text"
          placeholder="Найти товар"
          className="w-full h-10 rounded p-2 outline outline-(--color-primary)
            focus:shadow-(--shadow-button-default) text-[#8f8f8f] text-base leading-[150%]"
        />
        <button className="absolute top-2 right-2 cursor-pointer">
          <Image src={iconSearch} alt="Поиск" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

export default SearchBlock;
