import bannerImage from "../assets/images/ffviir-midgar-city.jpg";
import boxArtImage from "../assets/images/ffviir-boxart.png";

export default function AboutBanner() {
  return (
    <div className="relative">
      <img
        src={bannerImage}
        alt="The main protagonists of Final Fantasy VII standing on a bridge looking out over the city of Midgar"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="flex justify-evenly items-center ">
          <div>
            <img
              className="h-96 w-72"
              src={boxArtImage}
              alt="Final Fantasy VII Remake Box Art for PlayStation 4"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <h2 className="text-4xl font-bold text-white pb-4 font-outline-1-blue">
              The History of FINAL FANTASY VII REMAKE
            </h2>
            <p className="text-lg text-white leading-7 font-outline-half-blue">
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
