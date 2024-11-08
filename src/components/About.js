const About = () => {
  return (
    <div className="about container mx-auto mt-32 text-gray-600" id="about">
      <div className="text-center ">
        <h2 className="text-4xl font-medium mb-5">About us</h2>
        <p>
          Blood camp organized by "Blood Bucket" collects blood donations from
          volunteers to save lives.
        </p>
      </div>

      <div className="about-wrapper mt-20 grid grid-cols md:grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left">
          <h2 className="text-3xl font-medium mb-2">About Blood Doners</h2>
          <p className="mb-3 text-justify">
            Blood Bucket is a community-driven project aimed at raising
            awareness about the importance of blood donation and increasing the
            availability of safe blood for those in need. The project relies on
            the generosity of blood donors, who voluntarily offer a portion of
            their blood to help save lives. The process of donating blood is
            quick and easy.
          </p>
          <p className="text-justify mb-3">
            Prior to donating, blood donors undergo a comprehensive screening
            process to ensure that the donated blood is safe for use. This
            screening process also protects the health and well-being of the
            donor.Blood Bucket is a community-driven project aimed at raising
            awareness about the importance of blood donation and increasing the
            availability of safe blood for those in need.
          </p>
          <p className="text-justify">
            The project relies on the generosity of blood donors, who
            voluntarily offer a portion of their blood to help save lives. The
            process of donating blood is quick and easy, and typically takes
            less than an hour.The project's goal is to bring people together to
            promote the importance of blood donation.
          </p>
        </div>
        <div className="about-left w-full h-full group  overflow-hidden">
          <img
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="blood donation camp"  className="w-full h-full object-cover  group-hover:scale-125 duration-300 "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
