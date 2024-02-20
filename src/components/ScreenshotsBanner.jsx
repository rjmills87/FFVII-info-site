import Carousel from "./Carousel";
import bannerImage from "../assets/ffviir-colosseum.jpg";

export default function ScreenshotsBanner() {
  const slides = [
    {
      imgPath: "/screenshot-1.jpeg",
      altText: "Barrett Wallace firing a machine gun",
    },
    {
      imgPath: "/screenshot-2.jpeg",
      altText:
        "Aerith Gainsborough casting a magic spell on an enemy character during battle",
    },
    {
      imgPath: "/screenshot-3.jpeg",
      altText: "Guardian Summon Ifrit fighting against an enemy robot",
    },
    {
      imgPath: "/screenshot-4.jpeg",
      altText: "Wall Market at night",
    },
    {
      imgPath: "/screenshot-5.jpeg",
      altText: "7th Heaven Bar",
    },
    {
      imgPath: "/screenshot-6.jpeg",
      altText: "Tifa Lockheart leaning on the bar in 7th Heaven",
    },
    {
      imgPath: "/screenshot-7.jpeg",
      altText: "Cloud Strife",
    },
    {
      imgPath: "/screenshot-8.jpeg",
      altText: "Cloud Strife having a conversation with Aerith Gainsborough",
    },
    {
      imgPath: "/screenshot-9.jpeg",
      altText:
        "Cloud Strife and Tifa Lockheart stading back to back ready for battle",
    },
    {
      imgPath: "/screenshot-10.jpeg",
      altText: "Sephiroth standing infront of a firey backdrop ",
    },
    {
      imgPath: "/screenshot-11.jpeg",
      altText: "Cloud Strife looking up at a Mako Reactor",
    },
    {
      imgPath: "/screenshot-12.jpeg",
      altText: "Cloud Strife in battle gainst Shinra Guards",
    },
    {
      imgPath: "/screenshot-13.jpeg",
      altText: "Aerith Gainsborough in battle against a large monster",
    },
    {
      imgPath: "/screenshot-14.jpeg",
      altText: "Inside the church in the Sector 5 slums",
    },
    {
      imgPath: "/screenshot-15.jpeg",
      altText: "Aerith Gainsborough's house in the sector 5 slums",
    },
    {
      imgPath: "/screenshot-16.jpeg",
      altText:
        "Cloud, Jessie, Biggs and Wedge on motorcycles in a chase with Shinra guards",
    },
    {
      imgPath: "/screenshot-17.jpeg",
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
