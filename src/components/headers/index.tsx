import { BurgerMenuIcon, LogoIcon, SearchIcon } from "../../assets";
import "./headers.css";

type HeadersProps = { onClick?: () => void };

const Headers = ({ onClick }: HeadersProps) => {
  return (
    <div className="headers-container flex justify-between px-5 items-center rounded-b-[40%] sticky">
      <div className="-mt-4 flex justify-between w-full">
        <img src={BurgerMenuIcon} alt="burger-menu" />
        <img src={LogoIcon} alt="logo" />
        <img
          src={SearchIcon}
          alt="search"
          className="cursor-pointer"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Headers;
