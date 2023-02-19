const Footer = () => {
  return (
    <div className="footer  mx-auto text-center mt-20 bg-gray-800 text-gray-100 text-xl font-medium h-40">
      <h2 className="py-10 text-3xl text-red-500 font-semibold">
        Blood <span className="text-gray-400"> Bucket</span>
      </h2>
      <h4>
        &copy; {new Date().getFullYear()} Blood Bucket | Developed by{" "}
        <a href="/" className="hover:underline duration-300">
          Kajal Rekha
        </a>{" "}
        . All right reserved.
      </h4>
    </div>
  );
};

export default Footer;
