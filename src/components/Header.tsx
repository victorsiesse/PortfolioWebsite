"use client";

import { MobileNav } from "./MobileNav";
import { Nav } from "./Nav";
import { ThemeToggler } from "./ThemeToggler";

export const Header = () => {
  return (
    <header>
      <ThemeToggler />
      <Nav />

      <div className="">
        <MobileNav />
      </div>
    </header>
  );
};
