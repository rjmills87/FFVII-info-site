export default function CharacterProfile(props) {
  return (
    <div className="flex justify-between items-center mr-8 pt-8 pb-8">
      <div className="w-1/3">
        <img src={props.imgPath} alt={props.altText} />
      </div>
      <div className="w-2/3">
        <h4 className="text-4xl text-white font-outline-1-blue font-bold pb-4">
          {props.characterName}
        </h4>
        <p className="text-lg text-white font-outline-half-blue">
          {props.characterDescription}
        </p>
      </div>
    </div>
  );
}
