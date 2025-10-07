interface FrontCardProps {
isReverse:boolean;
};


const FrontCard = ({isReverse}:FrontCardProps) => {
  return (
    <div className={`bg-gray-300 w-200 h-100 flex ${
    isReverse ? 'flex-row-reverse' : ''
  }`}>
      <div className="flex items-center pl-5 w-70 ">
        <img
          className="h-92 rounded-3xl "
          src="https://images.unsplash.com/photo-1759503076789-f35229bf5123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center w-130">
        <h1 className="text-purple-700 text-3xl pt-6 font-semibold">Massive Marger</h1>
        <h2 className="px-7 py-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At mollitia
          libero dolorum deserunt quaerat, minima cum nisi molestias laudantium.
          Fuga porro pariatur magni suscipit accusamus delectus consectetur
          saepe exercitationem voluptas! Facilis, harum minima libero iure,
          incidunt vel at aliquid modi saepe veritatis consequatur distinctio
          quasi voluptatibus in id exercitationem dolore, alias odio. Facere,
          sint vitae atque adipisci cupiditate delectus maiores.
        </h2>
        <button className="bg-gray-400 px-9 py-1 rounded-md mt-10">Learn More</button>
      </div>
    </div>
  );
};

export default FrontCard;
