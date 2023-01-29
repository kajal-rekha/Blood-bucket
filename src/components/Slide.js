const Slide = ({ image }) => {
  return (
    <div
      className="slide"
      style={{ backgroundImage: `url(${image.src})` }}
      key={image.id}
    >
      <div className="slide-texts container mx-auto flex flex-col items-start justify-center h-full gap-5 text-gray-100">
        <h1 className="text-4xl text-gray-50 font-semibold space-font w-4/5 uppercase">
          {image.headline}
        </h1>
        <p className="w-3/5">{image.body}</p>
        <a
          href="#"
          className="slide-btn uppercase text-gray-50 h-14 w-72 bg-gray-900 text-center pt-4 hover:text-gray-100 rounded-md"
        >
          <span className="z-[2] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full text-center">
            {image.cta}
          </span>
        </a>
      </div>
    </div>
  );
};

export default Slide;
