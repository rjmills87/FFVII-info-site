import Characters from "./Characters";
import CharacterProfile from "./CharacterProfile";
import bannerImage from "../assets/images/ffviir-zoom-shinra.jpg";
import { useState } from "react";
import cloudProfileImage from "../assets/images/character-profile-images/cloud-profile-img.webp";

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
    <div className="relative">
      <img src={bannerImage} alt="" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <h3 className="text-5xl text-white font-outline-1-blue font-bold text-center pt-6 pb-10 mt-12">
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
