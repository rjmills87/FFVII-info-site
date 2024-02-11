import logo from "../assets/images/ffvii-logo.png";
import squareLogo from "../assets/images/square-enix-logo-small.png";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between p-4 ml-10 mr-10">
        <img className="h-20" src={logo} alt="FFVII Logo" />
        <img className="h-4" src={squareLogo} alt="Square-Enix Logo" />
      </div>
    </header>
  );
}
