const blogs = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkvFlM56iDW5wbfNWAFsHRG5oRWjqebXY82g&usqp=CAU",
    title: "Wade smith",
    body: "A blood donor is a person who voluntarily donates blood for medical purposes, helping save lives by providing essential components for transfusions. ",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0W1EYk_7Kb6fDg67XbSIHjGMUEGRUiTDqw&usqp=CAU",
    title: "Wade smith",
    body: " Blood donation is a simple and important process, with donors typically giving every 8-12 weeks. Blood donors are valued for their generosity and role in improving and saving lives.",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2x8w6ElyyJP0eG2JsDKUb33QYok5O0Fk0A&usqp=CAU",
    title: "Wade smith",
    body: "A blood donor is a person who voluntarily donates blood for medical purposes, helping save lives by providing essential components for transfusions. ",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSden0mP1zeWSqBlLQVf1prr7ziyfjb8mWa7Q&usqp=CAU",
    title: "Robert json",
    body: "A blood donor is a person who voluntarily donates blood for medical purposes, helping save lives by providing essential components for transfusions. ",
  },
];

const Blog = () => {
  return (
    <div className="blog container mx-auto mt-40 text-gray-600" id="blog">
      <div className="text-center ">
        <h2 className="text-4xl font-medium mb-3">Latest Blog</h2>
        <p className="w-3/5 mx-auto">
          Blood Donate Project is a blog dedicated to spreading awareness and
          encouraging individuals to become blood donors. Join the movement to
          save lives!
        </p>
      </div>
      <div className="blog-wrapper grid grid-cols-2 gap-10 pt-20">
        {blogs.map((blog) => (
          <div
            className="blog-card flex gap-5 overflow-hidden bg-white/75 rounded-2xl shadow-xl  hover:shadow-gray-300 "
            key={blog.id}
          >
            <img
              src={blog.img}
              alt=""
              className="h-32 w-40 rounded-md hover:scale-105 duration-300"
            />
            <div className="">
              <h4 className="text-xl font-semibold">{blog.title}</h4>
              <p>{blog.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
