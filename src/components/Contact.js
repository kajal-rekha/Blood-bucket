const Form = () => {
  return (
    <form className="form container mx-auto flex flex-col  mt-40 items-center bg-white/75 rounded-2xl shadow-xl p-5 shadow-gray-300 border-2 border-white bg-gray-400 gap-10 overflow-hidden">
      <h2 className="text-3xl font-medium text-red-700 mt-3">Quick Message</h2>
      <div className="form-control overflow-hidden flex flex-row gap-20 ">
        <input
          type="text"
          placeholder="Enter name"
          className="px-36 py-7 rounded-lg outline-none border border-red-300 duration-500 focus:border-gray-900 "
        />

        <input
          type="text"
          placeholder="Enter mobile no"
          className="px-36 py-7 rounded-lg outline-none border border-red-300 focus:border-gray-900 duration-500"
        />
      </div>
      <div className="form-control overflow-hidden  flex flex-row gap-20 rounded-lg">
        <input
          type="text"
          placeholder="Enter Email"
          className="px-36 py-7 rounded-lg outline-none border border-red-300 duration-500 focus:border-gray-900 "
        />

        <input
          type="text"
          placeholder="Enter message"
          className="px-36 py-7 rounded-lg outline-none border border-red-300 duration-500 focus:border-gray-900 "
        />
      </div>
      <button className="w-[67rem] bg-red-700 py-6 text-gray-200 font-medium text-xl rounded-lg mb-10">
        Send Request
      </button>
    </form>
  );
};

export default Form;
