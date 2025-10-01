import React from 'react';
import LogoBlock from "@/components/header/LogoBlock";
import SearchBlock from "@/components/header/SearchBlock";
import HeaderUserBlock from "@/components/header/HeaderUserBlock";

function Header() {
    return (
        <header>
            <LogoBlock />
            <SearchBlock />
            <nav aria-label="Основное меню">
                <HeaderUserBlock/>
            </nav>
        </header>
    );
}

export default Header;