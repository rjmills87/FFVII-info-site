import Characters from "./Characters";
import CharacterProfile from "./CharacterProfile";
import bannerImage from "../assets/ffviir-shinra-tower.jpg";
import { useState } from "react";
import cloudProfileImage from "../assets/cloud-profile-img.webp";

export default function CharactersBanner() {
  const [selectedCharacter, setSelectedCharacter] = useState({
    name: "Cloud Strife",
    profileImage: cloudProfileImage,
    description:
      "Cloud Strife is the iconic protagonist of Final Fantasy VII, known for his striking appearance and complex personality. He is a skilled and stoic mercenary with a mysterious past, often portrayed with spiky blonde hair and wielding a massive sword known as the Buster Sword. Initially distant and reserved, Cloud gradually reveals layers of vulnerability and self-doubt as the story unfolds. Despite his troubled past and internal struggles, he possesses a strong sense of duty and loyalty to his friends. Throughout the game, Cloud evolves from a lone wolf to a key member and leader of the resistance group Avalanche. His journey is defined by themes of identity, redemption, and the search for purpose, making him one of the most iconic and enduring characters in gaming history.",
  });

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="lg:relative">
      <img className="hidden lg:block" src={bannerImage} alt="" />
      <div className="hidden lg:absolute lg:inset-0 lg:bg-black lg:opacity-10"></div>
      <div className="bg-gradient-to-b from-teal-500 to-teal-900 lg:absolute lg:top-1/2 xl:top-[525px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-full lg:bg-transparent lg:bg-none">
        <h3 className="text-4xl xl:text-5xl text-white font-outline-1-blue font-bold text-center pt-10 pb-10 lg:mt-10 xl:mt-20">
          Characters
        </h3>
        <Characters onCharacterSelect={handleCharacterSelect} />
        {selectedCharacter && (
          <CharacterProfile
            imgPath={selectedCharacter.profileImage}
            altText={selectedCharacter.name}
            characterName={selectedCharacter.name}
            characterDescription={selectedCharacter.description}
          />
        )}
      </div>
    </div>
  );
}
