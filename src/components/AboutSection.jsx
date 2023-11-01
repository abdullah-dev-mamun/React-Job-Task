import { Fade, Zoom } from "react-awesome-reveal";

const AboutSection = () => {
  return (
    <div className="grid md:grid-cols-5 md:gap-10 xl:gap-20 mt-16">
      <div className="md:col-span-2 mb-4 md:mb-0 w-full">
        <Zoom>
          <img className="rounded-md" src="./images/user.jpg" alt="" />{" "}
        </Zoom>
      </div>

      <div className="md:col-span-3">
        <Fade cascade damping={0.1}>
          <h1 className="font-semibold text-lg">About Us</h1>

          <h2 className="text-3xl font-bold mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
          </h2>
          <p className="text-[18px] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
          </p>
          <p className="text-dark-secondary font-thin mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <p className="text-dark-secondary font-thin mb-6">
            Elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default AboutSection;
