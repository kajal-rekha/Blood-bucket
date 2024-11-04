const categories = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/4680228/pexels-photo-4680228.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/4047146/pexels-photo-4047146.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/6940861/pexels-photo-6940861.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/6629391/pexels-photo-6629391.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/5206949/pexels-photo-5206949.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/6629394/pexels-photo-6629394.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/5554409/pexels-photo-5554409.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/6994983/pexels-photo-6994983.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/7653131/pexels-photo-7653131.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Gallery = () => {
  return (
    <div className="gallery container mx-auto mt-32">
      <h2 className=" text-gray-600 text-center text-4xl font-medium mb-10">
        Checkout Our Gallery
      </h2>
      <div className="gallery-wrapper grid grid-cols md:grid-cols-3 gap-10 py-1">
        {categories.map((category) => (
          <div className="gallery-image w-96.2 overflow-hidden" key={category.id}>
            <img
              src={category.img}
              alt=""
              className="w-full h-96 object-cover rounded-lg hover:scale-125 duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
