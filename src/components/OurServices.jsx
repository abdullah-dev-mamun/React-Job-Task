import { Zoom } from "react-awesome-reveal";
import { CodeIcon, DesignIcon, AppIcon } from "../components/ALL-IMAGES";
const MyServicesData = [
  {
    id: 1,
    icon: CodeIcon,
    title: "Web development",
    des: "Highly scalable web applications using ReactJS. User interaction and better user experience would be more convenient for users with the react application.",
  },
  {
    id: 2,
    icon: AppIcon,
    title: "Mobile development",
    des: "Web build native and cross platform mobile app for your business and institution as per as your requirements",
  },

  {
    id: 3,
    icon: DesignIcon,
    title: "Graphics & Creative Design",
    des: "We design responsive websites and applications that are researched, focused on the end-user, and engineered to meet business goals.",
  },
];

const OurServices = () => {
  return (
    <div>
      <h2 id="our-services" className="text-4xl lg:text-5xl font-semibold mb-8">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 flex-col md:flex-row">
        {MyServicesData.map((items, index) => {
          const { title, des, icon } = items;
          return (
            <div
              key={index}
              className="services_card group cursor-pointer relative text-white border p-6 3xl:p-8 bg-dark-primary transition-all duration-300 ease-in-out hover:translate-x-3 hover:translate-y-3 isolate z-0 text-center"
            >
              <div className="services_border absolute -z-50 top-0 left-0 w-full h-full border-2 border-brand-secondary transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="services_content">
                <Zoom down>
                  <div className="flex justify-center items-center mb-4">
                    <img
                      className="h-[60px] group-hover:rotate-[360deg] transition-all duration-300 ease-in-out"
                      src={icon}
                      alt="Device Icon"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-primary mb-5">
                    {title}
                  </h2>
                  <p>{des}</p>
                </Zoom>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
