import bannerImage from "../assets/images/landscape-high-VmmC7e28e.webp";

export default function AboutBanner() {
  return (
    <div className="relative">
      <img
        src={bannerImage}
        alt="The main protagonists of Final Fantasy VII standing on a bridge looking out over the city of Midgar"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className=" text-4xl font-bold text-white w-3/4 ml-8 pb-4 font-outline-1-red">
          The Story of FINAL FANTASY VII REMAKE
        </h2>
        <p className="text-lg text-white w-2/3 ml-8 leading-7 font-outline-half-red">
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
