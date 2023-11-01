import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div>
      <h2 id="contact-us" className="text-4xl lg:text-5xl font-semibold mb-10">
        Contact Us
      </h2>
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-0">
        {/* left section */}
        <div className="order-2 lg:order-1 space-y-10 col-span-2">
          <Slide direction="left" duration={2000}>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#17b4c4"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
              <Link
                href=""
                className="tracking-wide ml-4 hover:text-brand-primary transition-all duration-300 ease-linear"
              >
                +880-1673-834504
              </Link>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#17b4c4"
                  d="m0 8l4.9 1.4H5v-.1L12.1 4L11 5.2l-6.2 6.6L5 15l2.9-3.2L10 16l6-16z"
                />
              </svg>

              <Link
                href=""
                className="tracking-wide ml-4 hover:text-brand-primary transition-all duration-300 ease-linear"
              >
                demo@gmail.com
              </Link>
            </div>
            <div className="flex items-center">
              <svg
                width="28"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 0C1.79467 0 0 1.86358 0 4.15479C0 7.41033 3.624 10.7718 3.77822 10.9129C3.84178 10.9711 3.92089 11 4 11C4.07911 11 4.15822 10.9711 4.22178 10.9134C4.376 10.7718 8 7.41033 8 4.15479C8 1.86358 6.20533 0 4 0ZM4 6.41667C2.77467 6.41667 1.77778 5.38863 1.77778 4.125C1.77778 2.86138 2.77467 1.83333 4 1.83333C5.22533 1.83333 6.22222 2.86138 6.22222 4.125C6.22222 5.38863 5.22533 6.41667 4 6.41667Z"
                  fill="#17b4c4"
                />
              </svg>

              <Link
                href=""
                className="tracking-wide ml-4 hover:text-brand-primary transition-all duration-300 ease-linear"
              >
                House 10/A (level 9), Road 04, <br />
                Gulshan-1, Dhaka-1212.
              </Link>
            </div>
          </Slide>
        </div>
        {/* right section */}
        <div className="order-1 lg:order-2 col-span-3">
          <form className="space-y-6">
            <Fade cascade damping={0.1}>
              <label htmlFor="username" className="relative block">
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="group text-base leading-none text-brand-primary p-4 ring-1 ring-dark-secondary focus:ring-1 focus:outline-none focus:ring-brand-secondary bg-dark-secondary  rounded border-gray-200 placeholder-dark-semiLight w-full pr-10 transition-all duration-150 ease-linear"
                  placeholder="Your Full Name"
                  autoComplete="off"
                  required
                />
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9984 11.1994C9.34156 11.1994 7.17969 9.03812 7.17969 6.38062C7.17969 3.72312 9.34156 1.5625 11.9984 1.5625C14.6553 1.5625 16.8172 3.72375 16.8172 6.38062C16.8172 9.0375 14.6553 11.1994 11.9984 11.1994ZM11.9984 2.8125C10.0309 2.8125 8.42969 4.41312 8.42969 6.38062C8.42969 8.34812 10.0309 9.94938 11.9984 9.94938C13.9659 9.94938 15.5672 8.34812 15.5672 6.38062C15.5672 4.41312 13.9659 2.8125 11.9984 2.8125Z"
                    fill="#17b4c4"
                  />
                  <path
                    d="M17.7687 19.0625H6.23125C5.31063 19.0625 4.5625 18.3113 4.5625 17.3875V16.025C4.5625 14.7556 4.93 13.5144 5.62437 12.4363C6.3175 11.3613 7.3025 10.5206 8.4725 10.0031C9 9.77188 9.52938 9.6125 10.0487 9.52688C10.3894 9.47375 10.7113 9.70188 10.7663 10.0425C10.8225 10.3831 10.5919 10.7044 10.2512 10.7606C9.835 10.8288 9.405 10.9594 8.97563 11.1475C8.03125 11.5644 7.23563 12.245 6.675 13.1138C6.11063 13.9894 5.81188 14.9963 5.81188 16.025V17.3875C5.81188 17.6219 6 17.8125 6.23063 17.8125H17.7687C17.9994 17.8125 18.1875 17.6219 18.1875 17.3875V16.025C18.1875 13.9169 16.9444 12.0019 15.0212 11.1456C14.5944 10.9588 14.165 10.8288 13.7487 10.76C13.4081 10.7038 13.1775 10.3825 13.2338 10.0419C13.2894 9.70125 13.6106 9.47125 13.9513 9.52625C14.4706 9.61188 15.0006 9.77188 15.5262 10.0019C17.9037 11.0594 19.4381 13.4231 19.4381 16.0244V17.3869C19.4381 18.3106 18.69 19.0619 17.7694 19.0619L17.7687 19.0625Z"
                    fill="#17b4c4"
                  />
                </svg>
              </label>

              <label htmlFor="phone" className="relative block">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="text-base leading-none text-brand-primary p-4 ring-1 ring-dark-secondary focus:ring-1 focus:outline-none focus:ring-brand-secondary bg-dark-secondary rounded border-gray-200 placeholder-dark-semiLight w-full pr-10 transition-all duration-150 ease-linear"
                  placeholder="Phone Number"
                  autoComplete="off"
                  required
                />

                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_752_5066)">
                    <path
                      d="M15.2772 20C15.0597 20.0001 14.8425 19.9847 14.6272 19.954C10.9415 19.4437 7.52483 17.7385 4.9012 15.1C2.26507 12.4771 0.560222 9.06319 0.0472022 5.38002C-0.0663556 4.53699 0.0444161 3.67892 0.368343 2.89236C0.692271 2.10581 1.2179 1.41859 1.8922 0.90002L2.3922 0.51002C2.66099 0.301251 2.9705 0.151047 3.30082 0.0690669C3.63114 -0.0129128 3.97496 -0.0248531 4.31017 0.0340138C4.64538 0.0928808 4.96457 0.221252 5.24719 0.410871C5.52982 0.600491 5.76963 0.847162 5.9512 1.13502L8.0392 4.44702C8.36833 4.96434 8.53473 5.56849 8.5169 6.18137C8.49907 6.79425 8.29784 7.3877 7.9392 7.88502L7.2392 8.85702C7.68765 9.67668 8.25065 10.4282 8.9112 11.089C9.57699 11.7464 10.3301 12.309 11.1492 12.761L12.1202 12.061C12.6172 11.7034 13.2099 11.5027 13.8219 11.4849C14.4339 11.4671 15.0373 11.6329 15.5542 11.961L18.8632 14.048C19.1514 14.2295 19.3983 14.4693 19.5881 14.752C19.7779 15.0348 19.9064 15.3541 19.9652 15.6896C20.024 16.025 20.0118 16.369 19.9295 16.6994C19.8471 17.0299 19.6965 17.3394 19.4872 17.608L19.0982 18.108C18.6467 18.6927 18.068 19.167 17.406 19.4948C16.7439 19.8226 16.0159 19.9954 15.2772 20ZM3.8862 1.40002C3.6568 1.4001 3.434 1.47683 3.2532 1.61802L2.7532 2.00802C2.27384 2.3748 1.89948 2.86131 1.66777 3.41865C1.43605 3.97598 1.35516 4.5845 1.4332 5.18302C1.90611 8.56471 3.47246 11.6988 5.8932 14.107C8.30154 16.5305 11.4381 18.0976 14.8222 18.568C15.4198 18.6458 16.0274 18.565 16.5839 18.3339C17.1405 18.1027 17.6265 17.7293 17.9932 17.251L18.3822 16.751C18.471 16.6365 18.535 16.5046 18.5699 16.3639C18.6048 16.2232 18.61 16.0767 18.5851 15.9339C18.5601 15.7911 18.5056 15.6551 18.425 15.5346C18.3445 15.414 18.2396 15.3117 18.1172 15.234L14.8082 13.148C14.5262 12.9692 14.1971 12.8789 13.8633 12.8887C13.5295 12.8985 13.2063 13.008 12.9352 13.203L11.6172 14.148C11.517 14.2203 11.3994 14.2647 11.2765 14.2768C11.1536 14.2889 11.0296 14.2683 10.9172 14.217C9.80623 13.6745 8.79257 12.9521 7.9172 12.079C6.4342 10.592 5.8012 9.12502 5.7772 9.06402C5.73026 8.95338 5.71259 8.83252 5.7259 8.71307C5.73921 8.59362 5.78305 8.47961 5.8532 8.38202L6.8012 7.06802C6.99711 6.79702 7.10726 6.47351 7.11742 6.13927C7.12758 5.80503 7.03729 5.47542 6.8582 5.19302L4.7682 1.88402C4.69141 1.76081 4.58928 1.65535 4.46859 1.57466C4.34789 1.49397 4.21141 1.43989 4.0682 1.41602C4.00812 1.4054 3.94722 1.40005 3.8862 1.40002Z"
                      fill="#17b4c4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_752_5066">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </label>

              <label htmlFor="email" className="relative block">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="text-base leading-none text-brand-primary p-4 ring-1 ring-dark-secondary focus:ring-1 focus:outline-none focus:ring-brand-secondary bg-dark-secondary rounded border-gray-200 placeholder-dark-semiLight w-full pr-10 transition-all duration-150 ease-linear"
                  placeholder="Email Address"
                  autoComplete="off"
                  required
                />

                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.8565 7.13297L18.75 2.23621V12.0299L12.8565 7.13297ZM8.12148 7.94547L2.0191 13.0161H17.9809L11.8785 7.94555L11.273 8.44859C10.9153 8.74569 10.4649 8.90832 9.99988 8.90832C9.53485 8.90832 9.08447 8.74569 8.72672 8.44859L8.12148 7.94547ZM7.14355 7.13297L1.25 12.0299V2.23621L7.14355 7.13297ZM10.4744 7.48711L17.981 1.25004H2.0191L9.52563 7.48711C9.65816 7.59944 9.82626 7.6611 10 7.6611C10.1737 7.6611 10.3418 7.59944 10.4744 7.48711ZM18.0078 0H1.99219C1.464 0.000579013 0.95762 0.210656 0.584138 0.584138C0.210656 0.95762 0.000579013 1.464 0 1.99219L0 12.2739C0.000620283 12.802 0.21071 13.3084 0.584183 13.6819C0.957657 14.0553 1.46402 14.2654 1.99219 14.2661H18.0078C18.536 14.2654 19.0423 14.0553 19.4158 13.6819C19.7893 13.3084 19.9994 12.802 20 12.2739V1.99207C19.9994 1.46391 19.7893 0.957553 19.4158 0.584096C19.0423 0.210639 18.536 0.000578956 18.0078 0Z"
                    fill="#17b4c4"
                  />
                </svg>
              </label>

              <textarea
                id="message"
                name="message"
                type="text"
                className="h-36 w-full text-base text-brand-primary p-4 focus:ring-1 focus:outline-none bg-dark-secondary rounded border-gray-200 placeholder-dark-semiLight focus:border-none  leading-none  ring-1 ring-dark-secondary  focus:ring-brand-secondary transition-all duration-150 ease-linear"
                placeholder="Your Message"
                required
              />

              <button
                type="submit"
                className="bg-brand-secondary hover:bg-brand-secondary/80 text-white py-3 px-12 rounded-sm transition-all duration-300 ease-linear"
              >
                Submit
              </button>
            </Fade>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
