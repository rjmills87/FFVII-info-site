import Carousel from "./Carousel";
import bannerImage from "../assets/ffviir-colosseum.jpg";
import screenshot1 from "../assets/screenshot-1.jpeg";
import screenshot2 from "../assets/screenshot-2.jpeg";
import screenshot3 from "../assets/screenshot-3.jpeg";
import screenshot4 from "../assets/screenshot-4.jpeg";
import screenshot5 from "../assets/screenshot-5.jpeg";
import screenshot6 from "../assets/screenshot-6.jpeg";
import screenshot7 from "../assets/screenshot-7.jpeg";
import screenshot8 from "../assets/screenshot-8.jpeg";
import screenshot9 from "../assets/screenshot-9.jpeg";
import screenshot10 from "../assets/screenshot-10.jpeg";
import screenshot11 from "../assets/screenshot-11.jpeg";
import screenshot12 from "../assets/screenshot-12.jpeg";
import screenshot13 from "../assets/screenshot-13.jpeg";
import screenshot14 from "../assets/screenshot-14.jpeg";
import screenshot15 from "../assets/screenshot-15.jpeg";
import screenshot16 from "../assets/screenshot-16.jpeg";
import screenshot17 from "../assets/screenshot-17jpeg";

export default function ScreenshotsBanner() {
  const slides = [
    {
      imgPath: { screenshot1 },
      altText: "Barrett Wallace firing a machine gun",
    },
    {
      imgPath: { screenshot2 },
      altText:
        "Aerith Gainsborough casting a magic spell on an enemy character during battle",
    },
    {
      imgPath: { screenshot3 },
      altText: "Guardian Summon Ifrit fighting against an enemy robot",
    },
    {
      imgPath: { screenshot4 },
      altText: "Wall Market at night",
    },
    {
      imgPath: { screenshot5 },
      altText: "7th Heaven Bar",
    },
    {
      imgPath: { screenshot6 },
      altText: "Tifa Lockheart leaning on the bar in 7th Heaven",
    },
    {
      imgPath: { screenshot7 },
      altText: "Cloud Strife",
    },
    {
      imgPath: { screenshot8 },
      altText: "Cloud Strife having a conversation with Aerith Gainsborough",
    },
    {
      imgPath: { screenshot9 },
      altText:
        "Cloud Strife and Tifa Lockheart stading back to back ready for battle",
    },
    {
      imgPath: { screenshot10 },
      altText: "Sephiroth standing infront of a firey backdrop ",
    },
    {
      imgPath: { screenshot11 },
      altText: "Cloud Strife looking up at a Mako Reactor",
    },
    {
      imgPath: { screenshot12 },
      altText: "Cloud Strife in battle gainst Shinra Guards",
    },
    {
      imgPath: { screenshot13 },
      altText: "Aerith Gainsborough in battle against a large monster",
    },
    {
      imgPath: { screenshot14 },
      altText: "Inside the church in the Sector 5 slums",
    },
    {
      imgPath: { screenshot15 },
      altText: "Aerith Gainsborough's house in the sector 5 slums",
    },
    {
      imgPath: { screenshot16 },
      altText:
        "Cloud, Jessie, Biggs and Wedge on motorcycles in a chase with Shinra guards",
    },
    {
      imgPath: { screenshot17 },
      altText:
        "Tifa Lockheart in battle against a large monster performing a somersault kick",
    },
  ];
  return (
    <div className="relative">
      <img
        className="h-96 md:h-auto"
        src={bannerImage}
        alt="Wall Market Colosseum"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <h4 className="text-2xl md:text-4xl xl:text-5xl text-white font-outline-1-red font-bold text-center pb-6 lg:pb-10">
          Screenshots
        </h4>
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
