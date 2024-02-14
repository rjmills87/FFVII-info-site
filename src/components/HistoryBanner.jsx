import bannerImage from "../assets/images/ffviir-midgar-city.jpg";
import boxArtImage from "../assets/images/ffviir-boxart.png";

export default function AboutBanner() {
  return (
    <div className="lg:relative  bg-gray-900 lg:bg-transparent">
      <img
        className="w-full lg:w-auto"
        src={bannerImage}
        alt="The main protagonists of Final Fantasy VII standing on a bridge looking out over the city of Midgar"
      />
      <div className="lg:absolute lg:inset-0 lg:bg-black lg:opacity-30"></div>

      <div className="lg:absolute lg:top-1/4 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg-translate-y-1/2 lg:w-full">
        <div className="flex flex-col-reverse justify-evenly items-center lg:flex-row">
          <div className="p-8 lg:p-0">
            <img
              className="h-52 w-42 md:h-80 md:w-64 lg:h-96 lg:w-72"
              src={boxArtImage}
              alt="Final Fantasy VII Remake Box Art for PlayStation 4"
            />
          </div>
          <div className="flex flex-col p-8 lg:p-0 lg:w-1/2">
            <h2 className="text-xl font-bold text-white text-center pb-4 font-outline-1-blue md:text-2xl lg:text-left lg:text-4xl lg:scroll-pb-4">
              The History of FINAL FANTASY VII REMAKE
            </h2>
            <p className="text-sm md:text-lg text-white text-center leading-7 font-outline-half-blue lg:text-left lg:leading-7">
              The development history of the "Final Fantasy VII Remake" is a
              tale of anticipation and ambition. Originally announced in 2015,
              the project promised to reimagine the iconic 1997 RPG with modern
              graphics, expanded gameplay, and a reimagined narrative structure.
              Directed by Tetsuya Nomura, who also worked on the original game
              as a character designer, the remake aimed to appeal both to
              longtime fans and newcomers alike. However, the project faced
              numerous challenges, including changes in development teams,
              shifting priorities, and the complexities of reimagining a beloved
              classic. Despite these obstacles, the first part of the remake was
              released in 2020, receiving widespread praise for its stunning
              visuals, engaging combat system, and faithful reinterpretation of
              the game's world and characters. The "Final Fantasy VII Remake"
              represents a monumental undertaking in gaming history,
              demonstrating the enduring legacy of a timeless classic while
              embracing the possibilities of modern technology and storytelling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
