import { JSX, useState } from "react";

export default function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const menuItem = ["Home", "About", "Blog", "Business", "Contact"] as const;
  const menuBtnStyle: string =
    "block md:hidden absolute right-5 top-5 w-[40px] cursor-pointer";

  const ulStyle: string = `${
    isOpen ? "flex" : "hidden"
  } absolute top-10 left-1/2 -translate-x-1/2 z-10 w-1/2 text-center flex-col bg-amber-50 text-black p-4 rounded-2xl
              md:static md:flex md:flex-row md:bg-transparent md:text-white md:p-0 md:rounded-none md:mr-2  md:gap-8`;

  return (
    <header className="bg-black">
      <nav className="flex items-center justify-between px-4 py-2 ">
        <div className="flex justify-between w-full md:w-auto items-center nav__logo__container">
          <img
            className="w-[150px] h-[60px] md:h-[90px] md:w-auto"
            src="/assets/logo-light.png"
            alt="nav logo"
          />
          {!isOpen && (
            <img
              className={menuBtnStyle}
              src="/assets/hamburger-menu.png"
              alt="open btn"
              onClick={() => setIsOpen(true)}
            />
          )}
          {isOpen && (
            <img
              className={menuBtnStyle}
              src="/assets/close-window-.png"
              alt="close btn"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
        <div className="md:static md:flex md:justify-center">
          <ul className={ulStyle}>
            {menuItem.map((item) => (
              <li
                key={item}
                className="my-[10px] md:my-0 transition-transform transform hover:scale-[1.3] cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
