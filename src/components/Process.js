//import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    img: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/gallery/g1.jpg",
    title: " Registration",
    body: "Blood Bucket is a community-driven project aimed at raising awareness about the importance of blood donation and increasing the availability of safe blood for those in need.",
    cta: "Readme more",
  },
  {
    id: 2,
    img: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/gallery/g2.jpg",
    title: " Seeing",
    body: "Blood Bucket is a community-driven project aimed at raising awareness about the importance of blood donation and increasing the availability of safe blood for those in need.",
    cta: "Readme more",
  },
  {
    id: 3,
    img: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/gallery/g3.jpg",
    title: " Donation",
    body: "Blood Bucket is a community-driven project aimed at raising awareness about the importance of blood donation and increasing the availability of safe blood for those in need.",
    cta: "Readme more",
  },
  {
    id: 4,
    img: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/gallery/g4.jpg",
    title: " Save Life",
    body: "Blood Bucket is a community-driven project aimed at raising awareness about the importance of blood donation and increasing the availability of safe blood for those in need.",
    cta: "Readme more",
  },
];

const Process = () => {
  return (
    <div className="process container mx-auto mt-40">
      <h2 className=" text-gray-600 text-center text-4xl font-medium mb-2">
        Donation Process
      </h2>
      <p className="text-center text-gray-500">
        The donation process from the time you arrive center until the time you
        leave
      </p>
      <div className="process-wrapper grid grid-cols-4 gap-5 py-1 ">
        {cards.map((card) => (
          <div
            className="card w-72 gap-2 mt-10  overflow-hidden bg-white/75 rounded-2xl shadow-xl p-5 shadow-gray-300 border-2 border-white"
            key={card.id}
          >
            <img
              src={card.img}
              alt=""
              className="card-img overflow-hidden object-cover w-full rounded-xl border shadow-md group hover:scale-105 duration-300"
            />

            <div className="card-body text-center text-gray-500 mt-5">
              <h3 className="title text-2xl capitalize truncate font-semibold text-gray-700">
                {card.title}
              </h3>
              <p className="mt-2">{card.body}</p>
              <a
                href="#"
                className="bg-gradient-to-br from-red-400 to-red-600 text-rose-50 p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-2 inline-block shadow-md shadow-rose-200 hover:shadow-lg hover:shadow-rose-300 duration-300"
              >
                {card.cta} <span className="text-xl">➡</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
