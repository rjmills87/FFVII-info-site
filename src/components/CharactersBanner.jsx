import Characters from "./Characters";
import CharacterProfile from "./CharacterProfile";
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
    <div>
      <h3 className="text-4xl font-bold text-center">Characters</h3>
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
  );
}
