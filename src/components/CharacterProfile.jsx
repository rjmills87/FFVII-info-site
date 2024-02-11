export default function CharacterProfile(props) {
  return (
    <div className="flex justify-evenly items-center ml-40 mr-40 pt-8 pb-8">
      <div className="w-1/2">
        <img className="w-auto h-96" src={props.imgPath} alt={props.altText} />
      </div>
      <div className="w-1/2">
        <h4 className="text-4xl font-bold pb-4">{props.characterName}</h4>
        <p className="text-lg">{props.characterDescription}</p>
      </div>
    </div>
  );
}
