import cloudThumbnail from "../assets/images/character-thumbnails/cloud-thumbnail.webp";
import tifaThumbnail from "../assets/images/character-thumbnails/tifa-thumbnail.webp";
import barrettThumbnail from "../assets/images/character-thumbnails/barrett-thumbnail.webp";
import aerithThumbnail from "../assets/images/character-thumbnails/aerith-tumbnail.webp";
import redXiiiThumbnail from "../assets/images/character-thumbnails/red-xiii-thumbnail.webp";
import sephirothThumbnail from "../assets/images/character-thumbnails/sephiroth-thumbnail.webp";

import cloudProfileImage from "../assets/images/character-profile-images/cloud-profile-img.webp";
import tifaProfileImage from "../assets/images/character-profile-images/tifa-profile-img.webp";
import barrettProfileImage from "../assets/images/character-profile-images/barrett-profile-img.webp";
import aerithProfileImage from "../assets/images/character-profile-images/aerith-profile-img.webp";
import redXiiiProfileImage from "../assets/images/character-profile-images/red-xiii-profile-img.webp";
import sephirothProfileImage from "../assets/images/character-profile-images/sephiroth-profile-img.webp";

export default function Characters(props) {
  const characters = [
    {
      id: 1,
      name: "Cloud Strife",
      thumbnailImage: cloudThumbnail,
      profileImage: cloudProfileImage,
      description:
        "Cloud Strife is the iconic protagonist of Final Fantasy VII, known for his striking appearance and complex personality. He is a skilled and stoic mercenary with a mysterious past, often portrayed with spiky blonde hair and wielding a massive sword known as the Buster Sword. Initially distant and reserved, Cloud gradually reveals layers of vulnerability and self-doubt as the story unfolds. Despite his troubled past and internal struggles, he possesses a strong sense of duty and loyalty to his friends. Throughout the game, Cloud evolves from a lone wolf to a key member and leader of the resistance group Avalanche. His journey is defined by themes of identity, redemption, and the search for purpose, making him one of the most iconic and enduring characters in gaming history.",
    },
    {
      id: 2,
      name: "Tifa Lockheart",
      thumbnailImage: tifaThumbnail,
      profileImage: tifaProfileImage,
      description:
        "Tifa Lockhart is a central character in Final Fantasy VII, renowned for her courage, compassion, and martial arts prowess. With long, dark hair and a striking yet gentle demeanor, Tifa is depicted as both caring and determined. As a childhood friend of Cloud Strife, she shares a deep bond with him and plays a vital role in his journey. Tifa serves as a moral compass within the group, providing emotional support and guidance to her comrades in the resistance group Avalanche. Despite her graceful and nurturing nature, Tifa is also a formidable fighter, specializing in hand-to-hand combat and using her strength to protect her friends and confront the forces of oppression. Throughout the game, Tifa's unwavering loyalty and resilience make her a beloved and indispensable member of the party.",
    },
    {
      id: 3,
      name: "Barrett Wallace",
      thumbnailImage: barrettThumbnail,
      profileImage: barrettProfileImage,
      description:
        "Barrett Wallace is a prominent character in Final Fantasy VII, recognized for his imposing physique, booming voice, and strong sense of justice. With a muscular build, a bald head, and a distinctive gun-arm replacing his right hand, Barrett cuts an intimidating figure. He is the passionate leader of the eco-terrorist group Avalanche, driven by a fervent desire to protect the planet from the exploitation of the Shinra Electric Power Company. Barrett's fiery personality often leads him to speak his mind without hesitation, and his brash demeanor belies a deep-seated concern for the well-being of his comrades and the world at large. Despite his gruff exterior, Barrett harbors a compassionate heart, and his unwavering commitment to his cause inspires those around him. Throughout the game, Barrett serves as a pillar of strength and resilience, embodying the struggle for freedom and environmental preservation.",
    },
    {
      id: 4,
      name: "Aerith Gainsborough",
      thumbnailImage: aerithThumbnail,
      profileImage: aerithProfileImage,
      description:
        "Aerith Gainsborough, often affectionately referred to as Aeris, is a key character in Final Fantasy VII, known for her gentle nature, spiritual connection, and inner strength. With long brown hair, expressive green eyes, and a flowing pink dress, Aerith possesses an ethereal beauty that captures the hearts of those around her. As the last of the Cetra, a race with a deep connection to the planet, Aerith is pursued by the Shinra Electric Power Company for her unique abilities. Despite the dangers she faces, Aerith maintains a sense of optimism and kindness, often offering words of encouragement and solace to her companions. She harbors a playful and mischievous side, but also demonstrates a profound understanding of the world and its mysteries. Throughout the game, Aerith's unwavering faith and compassion serve as a guiding light for the party, leaving a lasting impact on all who encounter her.",
    },
    {
      id: 5,
      name: "Red XIII",
      thumbnailImage: redXiiiThumbnail,
      profileImage: redXiiiProfileImage,
      description:
        "Red XIII, also known as Nanaki, is a unique and enigmatic character in Final Fantasy VII. He is a member of the mysterious species known as the Cetra, but resembles a large, red-furred feline with tribal markings and a fiery mane. Despite his animalistic appearance, Red XIII possesses intelligence and wisdom far beyond his years, making him a valuable ally to the party. Raised in the Cosmo Canyon by his grandfather, Bugenhagen, Red XIII grapples with questions of identity and purpose throughout the game. Despite his initial skepticism and aloof demeanor, he gradually forms deep bonds with his companions, displaying loyalty, bravery, and a dry wit. As the group traverses through the trials and tribulations of their journey, Red XIII's strength and insight prove invaluable, cementing his place as a cherished member of the team.",
    },
    {
      id: 6,
      name: "Sephiroth",
      thumbnailImage: sephirothThumbnail,
      profileImage: sephirothProfileImage,
      description:
        "Sephiroth is the iconic antagonist of Final Fantasy VII, renowned for his imposing presence, unparalleled strength, and tragic backstory. Tall, with long silver hair and piercing green eyes, Sephiroth exudes an aura of menace and mystery. Once revered as a legendary hero and the greatest SOLDIER in Shinra's history, Sephiroth's descent into madness and villainy shapes the central conflict of the game. Driven by a desire to claim the power of the planet for himself, Sephiroth seeks to harness the destructive force of the meteor to reshape the world in his image. Possessing incredible swordsmanship and magical abilities, he proves to be a formidable adversary capable of manipulating both minds and matter. Sephiroth's complex motivations and tragic past, intertwined with the fate of Cloud Strife and the planet itself, make him one of gaming's most iconic and memorable villains.",
    },
  ];

  const handleClick = (character) => {
    props.onCharacterSelect(character);
  };

  return (
    <div className="flex justify-center gap-10 p-6 ">
      {characters.map((character, id) => (
        <div
          className="border-4 border-teal-500 cursor-pointer"
          key={id}
          onClick={() => handleClick(character)}
        >
          <img
            className="hover:bg-slate-300"
            src={character.thumbnailImage}
            alt={character.name}
          />
        </div>
      ))}
    </div>
  );
}
