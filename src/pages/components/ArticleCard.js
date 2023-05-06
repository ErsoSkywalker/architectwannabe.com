import React from "react";
const ArticleCard = () => {
  return (
    <>
      <div className="w-full group h-full rounded-md shadow-md flex flex-row relative">
        <img
          className="w-full object-cover rounded-md"
          src="https://pilbox.themuse.com/image.jpg?filter=antialias&h=385&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F01212022-1047259374-coding-classes_scanrail.jpg&w=700"
        />
        <div className="w-full h-full bg-black opacity-70 z-0 absolute rounded-md" />
        <div className="absolute bg-white bottom-0 w-full md:h-[10%] h-[15%] p-2 rounded-b-md md:group-hover:h-1/2 group-hover:h-full duration-300">
          <p className="text-center md:text-4xl font-bold font-mono h-1/5">
            Titulo
          </p>
          <div className=" p-2 h-3/5 text-justify scale-y-0 group-hover:scale-y-100 duration-400 transition-all origin-bottom ">
            <p className="md:line-clamp-4 line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
              turpis a lacus viverra rutrum ac hendrerit ex. Curabitur egestas
              turpis id lacus tincidunt, a convallis odio porta. Curabitur
              dapibus consequat enim, sed volutpat purus varius sit amet. Nullam
              fermentum id quam laoreet viverra. Curabitur ipsum quam, semper et
              diam sit amet, mattis condimentum sem. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Curabitur dapibus consequat enim, sed
              volutpat purus varius sit amet. Nullam fermentum id quam laoreet
              viverra. Curabitur ipsum quam, semper et diam sit amet, mattis
              condimentum sem. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <button
            className="w-full bg-slate-200 hover:bg-slate-300 scale-y-0 py-2 h-1/5 group-hover:scale-y-100 duration-400 transition-all origin-bottom rounded-md"
            onClick={() => console.log("¡Veámoslo!")}
          >
            ¡Veámoslo!
          </button>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
