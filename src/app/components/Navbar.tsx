"use client";
import LocaleSwitcher from "./LocaleSwitcher";

const Nav = ({ locale }: { locale: string }) => {
  return (
    <header className="w-full h-16">
      <nav
        className="fixed w-full bg-black z-40 p-4 flex justify-between"
        aria-label="navbar"
      >
        <div className="flex items-center justify-between">
          <a href="/">
            <img
              src="https://nodetron.dev/nextjs.svg"
              alt="Logo"
              className="w-20 h-15"
            />
          </a>
        </div>
        <div className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block px-10">
          <div className="text-lg flex flex-col gap-5 mt-5 sm:flex-row sm:items-center justify-center sm:mt-0 sm:ps-5">
            <a
              className="text-white hover:scale-105"
              href={`/${locale}`}
              aria-current="page"
            >
              Home
            </a>
            <a className="text-white hover:scale-105" href={`/${locale}/about`}>
              About
            </a>
          </div>
        </div>
        <LocaleSwitcher />
      </nav>
    </header>
  );
};

export default Nav;
