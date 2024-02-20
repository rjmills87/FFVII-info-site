import logo from "../assets/ffvii-logo.png";
import squareLogo from "../assets/square-enix-logo-small.png";

export default function Header() {
  return (
    <header>
      <div className="flex flex-col gap-7 md:flex-row items-center justify-center md:justify-between p-4 ml-10 mr-10">
        <img className="h-20 md:h-28 lg:h-32" src={logo} alt="FFVII Logo" />
        <img className="h-3 md:h-6" src={squareLogo} alt="Square-Enix Logo" />
      </div>
    </header>
  );
}
