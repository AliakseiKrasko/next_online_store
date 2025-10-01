import React from 'react';
import LogoBlock from '@/components/header/LogoBlock';
import SearchBlock from '@/components/header/SearchBlock';
import UserBlock from '@/components/header/UserBlock';

function Header() {
  return (
    <header
      className="md:gap:10 flex w-full flex-col justify-center gap-y-5 bg-white p-2 md:flex-row
        md:shadow-(--shadow-default) relative z-10 xl:gap-y-7"
    >
      <div
        className="flex flex-row gap-4 xl:gap-10 py-2 px-4 items-center shadow-(--shadow-default)
          md:shadow-none"
      >
        <LogoBlock />
        <SearchBlock />
        <nav aria-label="Основное меню">
          <UserBlock />
        </nav>
      </div>
    </header>
  );
}

export default Header;
