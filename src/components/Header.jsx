import { useEffect, useState } from "react";
import HeadlessSlideOver from "./HeadlessSlideOver";
import { Zoom } from "react-awesome-reveal";

const NavListData = [
  {
    id: 1,
    navitems: "Home",
    pathLink: "#home",
  },
  {
    id: 2,
    navitems: "About Us",
    pathLink: "#about",
  },
  {
    id: 3,
    navitems: "Services",
    pathLink: "#services",
  },
  {
    id: 4,
    navitems: "Why choose us",
    pathLink: "#why_choose_us",
  },
  {
    id: 5,
    navitems: "Testimonials",
    pathLink: "#testimonials",
  },
  {
    id: 6,
    navitems: "Gallery",
    pathLink: "#gellery_section",
  },
  {
    id: 7,
    navitems: "Contact",
    pathLink: "#contact",
  },
];

const Header = () => {
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
    setIsHeadlessOpen(true);
  };

  const [fix, setFix] = useState(false);

  function setTopFixed() {
    if (window.scrollY > 85) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", setTopFixed);
  });

  useEffect(() => {
    const sections = [...document.querySelectorAll(".target_section")];
    const link = (id) => document.querySelector(`a[href="#${id}"]`);

    const inView = (element) => {
      var top = element.offsetTop;
      var height = element.offsetHeight;

      while (element.offsetParent) {
        element = element.offsetParent;
        top += element.offsetTop;
      }

      return (
        top < window.pageYOffset + window.innerHeight &&
        top + height > window.pageYOffset + 125
      );
    };

    const init = () => {
      function update() {
        let next = false;

        sections.forEach((sections) => {
          if (link(sections.id)) {
            const current = link(sections.id);

            if (current) {
              if (inView(sections) && !next) {
                current.classList.add("active_link");
                next = true;
              } else {
                current.classList.remove("active_link");
              }
            }
          }
        });
      }
      update();
      window.addEventListener("scroll", update);
    };

    init();
  }, []);
  /* =============== */

  return (
    <>
      <header
        className={`mx-auto w-full h-auto sticky top-0 z-50 bg-dark-secondary ${
          fix ? "bg-dark-secondary/95 " : ""
        } `}
      >
        <nav className="px-4 md:px-8 xl:px-0 py-2 flex justify-between  items-center container_section">
          <a href="/">
            <img
              className="hover:opacity-80 w-[120px] "
              src="/images/brand-logo.png"
              alt="logo"
            />
          </a>

          <ul className="hidden lg:block nav_section">
            {NavListData.map((items, index) => {
              const { navitems, pathLink } = items;
              return (
                <li key={index} className="nav_list group">
                  <a
                    className="nav_link group-hover:after:w-1/2"
                    href={pathLink}
                  >
                    {navitems}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={toggleNav}
            className="relative group lg:hidden"
          >
            <div className="relative flex items-center justify-center rounded-full w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] transform transition-all bg-dark-primary2  ring-gray-300 ring-[2px] md:ring-[3px] ring-opacity-50 duration-200 shadow-md  md:active:ring-[3px]">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center">
                <div className="h-[2px] w-1/2 rounded transform transition-all duration-300 origin-right delay-75 bg-white"></div>

                <div className="h-[2px] rounded bg-white"></div>

                <div className="h-[2px] w-1/2 rounded self-end transform transition-all duration-300 origin-left delay-75 bg-white"></div>
              </div>
            </div>
          </button>
        </nav>
      </header>
      <HeadlessSlideOver open={isHeadlessOpen} setOpen={setIsHeadlessOpen}>
        <div className="side_nav max-w-[max-content]">
          <nav>
            <ul className="container_section m-0 p-0">
              {NavListData.map((items, index) => {
                const { navitems, pathLink } = items;
                return (
                  <li key={index} className="nav_list group block m-0 my-6">
                    <Zoom down duration={500} delay={100}>
                      <a
                        className="nav_link group-hover:after:w-1/2"
                        href={pathLink}
                      >
                        {navitems}
                      </a>
                    </Zoom>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </HeadlessSlideOver>
    </>
  );
};

export default Header;
