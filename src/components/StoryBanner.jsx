import bannerImage from "../assets/images/landscape-high-VmmC7e28e.webp";

export default function AboutBanner() {
  return (
    <div className="lg:relative">
      <img
        src={bannerImage}
        alt="The main protagonists of Final Fantasy VII standing on a bridge looking out over the city of Midgar"
      />
      {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
      <div className="lg:absolute bg-gray-900 p-8">
        <h2 className=" text-xl md:text-2xl font-bold text-white text-center font-outline-1-red pb-4">
          The Story of FINAL FANTASY VII REMAKE
        </h2>
        <p className="text-xs md:text-lg text-white text-center font-outline-half-red">
          "Final Fantasy VII Remake" revisits the iconic tale of the original
          1997 RPG, offering a reimagined and expanded experience for both
          longtime fans and newcomers. Set in the dystopian city of Midgar, the
          game follows the journey of mercenary Cloud Strife as he joins the
          eco-terrorist group Avalanche in their fight against the corrupt
          Shinra Electric Power Company. The narrative delves deep into themes
          of identity, environmentalism, and the consequences of ambition, while
          introducing new layers of depth to the story and characters. As Cloud
          and his allies navigate through Midgar's sprawling urban landscape,
          they uncover dark secrets about their pasts and confront powerful
          adversaries, including the enigmatic Sephiroth, whose intentions
          threaten the very fabric of existence. With stunning visuals, dynamic
          combat mechanics, and a reimagined soundtrack, "Final Fantasy VII
          Remake" offers a fresh perspective on a beloved classic, setting the
          stage for future installments to further explore the epic saga.
        </p>
      </div>
    </div>
  );
}
