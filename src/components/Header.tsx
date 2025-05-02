import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-black">
      <nav className="nav relative flex items-center justify-between px-4 py-2">
        <div className="flex justify-between w-full md:w-auto items-center nav__logo__container">
          <img
            className="w-[150px] h-[60px] md:h-[90px] md:w-auto"
            src="/assets/logo-light.png"
            alt="nav logo"
          />
          {!isOpen && (
            <img
              className="block md:hidden absolute right-[5%] top-[10%] w-[40px] cursor-pointer"
              src="/assets/hamburger-menu.png"
              alt="open btn"
              onClick={() => setIsOpen(true)}
            />
          )}
          {isOpen && (
            <img
              className="block md:hidden absolute right-[5%] top-[10%] w-[40px] cursor-pointer"
              src="/assets/close-window-.png"
              alt="close btn"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>

        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute left-1/2 top-40 -translate-x-1/2 -translate-y-1/2 z-10 w-[50%] text-center flex-col bg-amber-50 text-black p-[15px] rounded-[20px]
          md:static md:flex md:flex-row md:text-white md:bg-transparent md:p-0 md:rounded-none md:w-auto md:gap-[30px] md:mr-[80px]`}
        >
          <li className="my-[10px] md:my-0 transition-transform transform hover:scale-[1.3] cursor-pointer">
            Home
          </li>
          <li className="my-[10px] md:my-0 transition-transform transform hover:scale-[1.3] cursor-pointer">
            About
          </li>
          <li className="my-[10px] md:my-0 transition-transform transform hover:scale-[1.3] cursor-pointer">
            Blog
          </li>
          <li className="my-[10px] md:my-0 transition-transform transform hover:scale-[1.3] cursor-pointer">
            Business
          </li>
          <li className="my-[10px] md:my-0 transition-transform transform hover:scale-[1.3] cursor-pointer">
            Our Team
          </li>
        </ul>
      </nav>
    </header>
  );
}
