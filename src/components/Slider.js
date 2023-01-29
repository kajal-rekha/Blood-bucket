import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://cdn2.hubspot.net/hubfs/2027031/Lanermc_January2018/Images/D53297C6-155D-D235-07048C3BAF7898A0.jpeg",
    headline: "Three Great Reasons To Donate Blood",
    body: "Blood donation is a vital part of worldwide healthcare. It allows for blood transfusion as a life-sustaining and life-saving procedure. Over one hundred million units of blood are donated each year throughout the world.",
    cta: "Book Appoinment",
  },
  {
    id: 2,
    src: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/slider/slide-03.jpg",
    headline:
      "Why risk behaviours,not orientation,should decide who gives blood",
    body: "Blood donation for transfusion is a vital step in the management of many clinical problems, with the two primary indications being anemia and acute blood loss. Blood donation itself is also used to primarily treat a small subset of medical conditions.",
    cta: "Donate now",
  },
  {
    id: 3,
    src: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/slider/slide-02.jpg",
    headline: "Donate Blood & Save a Life",
    body: "Blood donation for transfusion is a vital step in the management of many clinical problems, with the two primary indications being anemia and acute blood loss. Blood donation itself is also used to primarily treat a small subset of medical conditions.",
    cta: "Contact us",
  },
];
const Slider = () => {
  return (
    <div className="frame relative">
      <div className="slider">
        {data.map((image) => (
          <Slide key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
