export default function CharacterProfile(props) {
  return (
    <div className="flex flex-col-reverse justify-between items-center lg:mr-8 lg:pt-8 lg:pb-8">
      <div className="lg:w-1/3">
        <img className="h-96" src={props.imgPath} alt={props.altText} />
      </div>
      <div className="p-8 lg:w-2/3">
        <h4 className="text-4xl text-center text-white font-outline-1-blue font-bold pb-4">
          {props.characterName}
        </h4>
        <p className="text-lg text-center text-white font-outline-half-blue">
          {props.characterDescription}
        </p>
      </div>
    </div>
  );
}
