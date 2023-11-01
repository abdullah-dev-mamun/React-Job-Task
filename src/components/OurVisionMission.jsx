import { Fade, Zoom } from "react-awesome-reveal";

const OurValuesData = [
  {
    title: "World-Class Research and Development",
    des1: "Be a leading provider of innovative electrical and electronic products and solutions that enhance people's lives and transform  industries towards a sustainable future for all. Central to our  pursuit of innovation is our world-class Research and Development facility, equipped with high-precision machinery. This facility serves as the nucleus of our production process, enabling us to  explore uncharted territories of technology. With a focus on lean manufacturing, we maximize customer value through our products and  services, all while minimizing waste.",
    des2: "Join us on this journey of innovation, sustainability, and luminosity. Together, we illuminate the path towards a brighter,  more promising future.",
    img: "/images/mision.png",
  },
  {
    title: "Brand Architecture: The Innovator Archetype",
    des1: "In the dynamic realm of technology, we proudly embrace the role of the Innovator archetype. Being at the forefront of change, we continually push boundaries, question conventions, and redefine what's possible. This archetype defines us as pioneers in our industry, consistently introducing revolutionary products that reshape the market.",
    des2: "LAXFO stands as a beacon of technological expertise and forward-thinking vision. With each innovation, we exemplify our ability to anticipate and meet the ever-evolving needs of our consumers. Just as light leads the way, we lead our industry, guided by the unwavering commitment to innovation that defines the Innovator archetype.",
    img: "/images/brand-architecture.png",
  },
];
const OurVisionMission = () => {
  return (
    <section className="mt-16">
      {OurValuesData.map((item, index) => {
        return (
          <div
            key={index}
            className="grid items-center gap-6 xl:gap-16 md:grid-cols-2 lg:grid-cols-3 mb-8 lg:mb-14"
          >
            <div
              className={
                index % 2 === 0
                  ? "order-1 md:order-none px-4 md:px-0 lg:col-span-2"
                  : "order-1 px-4 md:px-0 lg:col-span-2"
              }
            >
              <Fade cascade damping={0.1}>
                <h2 className="text-3xl font-bold mb-3">{item.title}</h2>
                <p>{item.des1}</p>
                <p>{item.des2}</p>
              </Fade>
            </div>
            <div
              className={
                index % 2 === 0
                  ? "group order-none md:order-1 flex justify-center items-center lg:justify-start"
                  : "group order-none flex justify-center items-center lg:justify-start"
              }
            >
              <Zoom>
                <img
                  className="group-hover:scale-105 transition-all duration-300 ease-in"
                  src={item.img}
                  alt=""
                />
              </Zoom>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default OurVisionMission;
