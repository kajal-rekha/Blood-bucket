const categories = [
  {
    id: 1,
    img: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/gallery/g1.jpg",
  },
  {
    id: 2,
    img: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/gallery/g2.jpg",
  },
  {
    id: 3,
    img: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/gallery/g3.jpg",
  },
  {
    id: 4,
    img: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/gallery/g4.jpg",
  },
  {
    id: 5,
    img: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/gallery/g9.jpg",
  },
  {
    id: 6,
    img: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/gallery/g6.jpg",
  },
  {
    id: 7,
    img: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/gallery/g7.jpg",
  },
  {
    id: 8,
    img: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/gallery/g8.jpg",
  },
  {
    id: 9,
    img: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/gallery/g10.jpg",
  },
];

const Gallery = () => {
  return (
    <div className="gallery container mx-auto mt-20">
      <h2 className=" text-gray-600 text-center text-4xl font-medium mb-10">
        Checkout Our Gallery
      </h2>
      <div className="gallery-wrapper grid grid-cols-3 gap-10 py-1">
        {categories.map((category) => (
          <div className="gallery-image w-96.2" key={category.id}>
            <img
              src={category.img}
              alt=""
              className="w-full h-96 object-cover rounded-lg hover:scale-105 duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
