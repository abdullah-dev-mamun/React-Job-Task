import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
const WhyChooseUsData = [
  {
    img: "images/icons/lock-solid.svg",
    title: "Certified Locksmiths",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  },
  {
    img: "images/icons/comment-solid.svg",
    title: "Quickest Response",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  },
  {
    img: "images/icons/user-solid.svg",
    title: "Customer Support",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  },
  {
    img: "images/icons/book-solid.svg",
    title: "Extensive Knowledge",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <h2 id="why-choose-us" className="font-semibold mb-4">
        Why choose us
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full max-w-md">
          <Slide>
            <h2 className="text-4xl font-bold">
              Fully Licensed, Bonded, And Insured
            </h2>{" "}
          </Slide>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WhyChooseUsData.map((item, index) => {
            return (
              <div key={index}>
                <Zoom>
                  <div className="flex align-items-start">
                    <div className="w-12 mr-3 mt-1">
                      <img src={item.img} alt="" />
                    </div>

                    <div className="">
                      <h2 className="text-2xl font-bold">{item.title}</h2>
                      <p className="text-muted">{item.des}</p>
                    </div>
                  </div>
                </Zoom>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
