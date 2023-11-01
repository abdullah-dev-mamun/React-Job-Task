import { Slide, Zoom } from "react-awesome-reveal";

const CardData = [
  {
    id: 1,
    img: "/images/testimonial-1.jpg",
    userName: "Stella Sanitary Ltd.",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut ad minim veniam, quis nostrud exercitation.",
  },
  {
    id: 2,
    img: "/images/testimonial-2.jpg",
    userName: "Stella Sanitary Ltd.",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut ad minim veniam, quis nostrud exercitation.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-dark-primary2 mb-12 mt-40 md:mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 container_section md:py-20">
        <div className="relative">
          <div className="bg-brand-secondary p-10 md:p-20 -mt-32">
            <Zoom down>
              <p className="text-white font-bold text-3xl">
                Our average customer rating is 4.8 / 5 based on 2.549 reviews
              </p>
            </Zoom>
          </div>
        </div>

        <ul>
          <li className="pb-6 mb-10 border-b border-dark-semiLight/50">
            <Slide direction="right" duration={1000}>
              <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-white">
                What Our Customers Say
              </h2>
            </Slide>
          </li>
          {CardData.map((item, index) => {
            return (
              <li
                key={index}
                className="pb-6 mb-10 text-white border-b border-dark-semiLight/50"
              >
                <Slide direction="right" duration={2000}>
                  <p>{item.des}</p>{" "}
                </Slide>
                <Zoom>
                  <div className="flex align-align-items-center mt-8">
                    <img
                      className="rounded-full w-16 inline-block"
                      src={item.img}
                      alt="Testmonial user img"
                    />

                    <p className=" ml-3 my-auto font-bold text-18">
                      {item.userName}
                    </p>
                  </div>
                </Zoom>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
