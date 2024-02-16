export default function CharacterProfile(props) {
  return (
    <div className="flex flex-col-reverse justify-between items-center lg:pt-8 lg:pb-8 lg:flex-row lg:ml-0 lg:mr-16 xl:ml-0 xl:mr-40 xl:justify-evenly">
      <div className=" lg:w-1/3 xl:w-1/2 ">
        <img
          className="h-96 xl:w-auto xl:h-auto"
          src={props.imgPath}
          alt={props.altText}
        />
      </div>
      <div className="p-8 lg:w-2/3 xl:w-1/2">
        <h4 className="text-4xl text-center text-white font-outline-1-blue font-bold pb-4 lg:text-left">
          {props.characterName}
        </h4>
        <p className="text-lg text-center text-white font-outline-half-blue lg:text-sm lg:text-left xl:text-lg xl:mb-40">
          {props.characterDescription}
        </p>
      </div>
    </div>
  );
}
