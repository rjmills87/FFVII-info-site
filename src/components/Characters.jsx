import cloud from "../assets/images/character-thumbnails/cloud-thumbnail.webp";
import tifa from "../assets/images/character-thumbnails/tifa-thumbnail.webp";
import barrett from "../assets/images/character-thumbnails/barrett-thumbnail.webp";
import aerith from "../assets/images/character-thumbnails/aerith-tumbnail.webp";
import redXiii from "../assets/images/character-thumbnails/red-xiii-thumbnail.webp";
import sephiroth from "../assets/images/character-thumbnails/sephiroth-thumbnail.webp";

export default function Characters() {
  const characterImages = [cloud, tifa, barrett, aerith, redXiii, sephiroth];
  const characterNames = [
    "Cloud Strife",
    "Tifa Lockheart",
    "Barrett Wallace",
    "Aerith Gainsborough",
    "Red XIII",
    "Sephiroth",
  ];

  return (
    <div className="flex justify-center gap-10 p-6 ">
      {characterImages.map((image, index) => (
        <div className="border-4 border-teal-500 cursor-pointer" key={index}>
          <img
            className="hover:bg-slate-300"
            src={image}
            alt={characterNames[index]}
          />
        </div>
      ))}
    </div>
  );
}
