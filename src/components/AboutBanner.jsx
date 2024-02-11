import bannerImage from "../assets/images/landscape-high-VmmC7e28e.webp";

export default function AboutBanner() {
  return (
    <div className="relative">
      <img
        src={bannerImage}
        alt="The main protagonists of Final Fantasy VII standing on a bridge looking out over the city of Midgar"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className=" text-4xl font-bold text-white w-3/4 ml-8 pb-4 font-outline-1">
          The Story of FINAL FANTASY VII
        </h2>
        <p className="text-lg text-white w-2/3 ml-8 leading-7 font-outline-half">
          Final Fantasy VII is a beloved Japanese role-playing game developed by
          Square Enix. Set in the dystopian world of Gaia, the story follows the
          adventures of Cloud Strife, a former member of an elite group known as
          SOLDIER, as he joins a group of rebels called AVALANCHE to fight
          against the corrupt Shinra Electric Power Company. Shinra is draining
          the planet's life force, known as Mako, to sustain their power and
          dominance. Along the way, Cloud and his rag-tag group of comrades
          including the spirited Aerith Gainsborough, the tough but kind-hearted
          Tifa Lockhart, and the mysterious Vincent Valentine, uncover dark
          secrets about their pasts and confront a powerful antagonist named
          Sephiroth, whose intentions threaten the very existence of the planet.
          The game explores themes of identity, environmentalism, and the
          consequences of unchecked ambition, all wrapped in an epic tale of
          heroism and sacrifice.
        </p>
      </div>
    </div>
  );
}
