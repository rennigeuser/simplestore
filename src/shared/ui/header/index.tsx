import { appRoutes } from "@shared/config/routes";
import { BurgerMenu } from "../burger-menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "About", href: "#" },
  { title: "Share with us", href: "#" },
  { title: "Yet another", href: "#" },
] as {
  title: string;
  href: string;
}[];

const HeaderMenu = () => {
  return (
    <>
      <ul className="font-medium flex flex-col gap-y-1 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
        {menuItems.map(({ title, href }) => (
          <li
            className="text-center block text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
            key={title}
          >
            <Link className="block py-2 pl-3 pr-4 text-lg" to={href}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

type Props = {
  sticky?: boolean;
};

export const Header = ({ sticky: isSticky }: Props) => {
  const [navToggled, setNavToggled] = useState(false);

  return (
    <>
      <header className={`${isSticky ? "sticky top-0" : "static"}`}>
        <nav className="bg-gray-100 border-gray-200 dark:bg-[#1D1B1B]">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to={appRoutes.ROOT}>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                SimpleStore
              </span>
            </Link>
            <button
              onClick={() => setNavToggled((prev) => !prev)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <BurgerMenu />
            </button>
            {/* <button onClick={() => console.log("Baset opened")}>
              <span className="sr-only">Open basket</span>
              <Basket fill="#fff" />
            </button> */}

            <div
              className={`${
                navToggled ? "block" : "hidden"
              } w-full md:block md:w-auto`}
            >
              <HeaderMenu />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
