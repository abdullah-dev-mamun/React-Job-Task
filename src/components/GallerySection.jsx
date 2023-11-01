import { Zoom } from "react-awesome-reveal";
import { Gallery1, Gallery2, Gallery3, Gallery4, Gallery5 } from "./ALL-IMAGES";

const GallerySection = () => {
  return (
    <section className="container_section  text-center">
      <Zoom>
        <h2 id="gallery" className="text-4xl lg:text-5xl font-semibold mb-8">
          Gallery
        </h2>
      </Zoom>
      <div className="flex gap-4 w-full h-auto lg:h-[650px] flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 group rounded-md overflow-hidden transition-all duration-500 ease-in">
          <img
            src={Gallery1}
            alt="Gallery img 1"
            className="w-full h-full object-cover rounded-md  transition-all duration-500 ease-in group-hover:scale-105 transform cursor-pointer"
          />
        </div>

        <div className="w-full lg:w-1/2  flex flex-col">
          <div className="lg:h-[calc(50%-0.5rem)] mb-[1rem] rounded-md overflow-hidden group transition-all duration-500 ease-in">
            <img
              src={Gallery2}
              alt="Gallery img left section"
              className="w-full h-full object-cover rounded-md  transition-all duration-500 ease-in group-hover:scale-105 transform cursor-pointer"
            />
          </div>
          <div className="lg:h-[calc(50%-0.5rem)] flex gap-4">
            <div className="w-full lg:w-1/2 rounded-md overflow-hidden group transition-all duration-500 ease-in">
              <img
                src={Gallery3}
                alt="Gallery img left section"
                className="w-full h-full object-cover rounded-md  transition-all duration-500 ease-in group-hover:scale-105 transform cursor-pointer"
              />
            </div>
            <div className="w-full lg:w-1/2 rounded-md overflow-hidden group transition-all duration-500 ease-in">
              <img
                src={Gallery4}
                alt="Gallery img left section"
                className="w-full h-full object-cover rounded-md  transition-all duration-500 ease-in group-hover:scale-105 transform cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/4 rounded-md overflow-hidden group transition-all duration-500 ease-in">
          <img
            src={Gallery5}
            alt="Gallery img left section"
            className="w-full h-full object-cover rounded-md  transition-all duration-500 ease-in group-hover:scale-105 transform cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
