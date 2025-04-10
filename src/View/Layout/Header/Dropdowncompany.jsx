import React from "react";
import logo from "../../../Assets/logo.svg";
import bg from "../../../Assets/dropdownbg.svg";
import insta from "../../../Assets/insta.svg";
import fb from "../../../Assets/fb.svg";
import linkedin from "../../../Assets/ln.svg";
import twitter from "../../../Assets/x.svg";
import mockup from "../../../Assets/Homemockup.png";
import btn from "../../../Assets/Hoverbtn.svg";
import closebtn from "../../../Assets/closebtn.svg";

function Dropdowncompany({ onClose }) {
  const socialMediaPlatforms = [
    {
      name: "Facebook",
      icon: fb,
      link: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: insta,
      link: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      icon: linkedin,
      link: "https://linkedin.com",
    },
    {
      name: "Twitter",
      icon: twitter,
      link: "https://twitter.com",
    },
  ];

  const links = [
    { name: "About Us", linkpath: "/about" },
    { name: "Our Team", linkpath: "/team" },
  ];
  return (
    <div className="!tw-bg-[#157438] !tw-min-h-screen">
      <div className="!tw-max-w-screen-2xl  !tw-overflow-hidden !tw-mx-auto !tw-py-10 !tw-px-12 !tw-h-[100vh] !tw-relative ">
        <img
          src={bg}
          className="!tw-absolute !tw-top-1/2 !-tw-translate-y-1/2 !tw-pointer-events-none !tw-h-full !tw-w-full "
          alt=""
        />
        <img
          src={mockup}
          className="!tw-w-[750px] !tw-absolute !tw-pointer-events-none  !tw-bottom-32 !-tw-right-0"
          alt=""
        />
        <button
          onClick={onClose} // Call the onClose prop function when clicked
          className="!tw-cursor-pointer !tw-absolute !tw-right-12"
        >
          <img src={closebtn} alt="" />
        </button>

        <div className=" !tw-max-w-4xl    !tw-flex !tw-flex-col !tw-justify-between !tw-h-full !tw-relative">
          <div className=" !tw-space-y-20">
            <div className="!tw-flex !tw-justify-between">
              <img src={logo} alt="" />
            </div>

            <div className="!tw-flex !tw-gap-24">
              <div>
                <h2
                  className={`!tw-text-white !tw-font-md !tw-max-w-64 !tw-text-[28px]  !tw-pb-4 !tw-cursor-pointer !tw-border-b-[2px] !tw-border-white  `}
                >
                  Company
                </h2>
              </div>
              <div className="!tw-space-y-5">
                {links.map((item, i) => (
                  <a
                    href={item.linkpath}
                    className="!tw-flex group tw-group !tw-cursor-pointer !tw-no-underline !tw-text-white !tw-font-reg !tw-text-[24px] !tw-font-normal anchornone "
                  >
                    {item.name}

                    <div className="tw-opacity-0 group-hover:tw-translate-x-3  group-hover:tw-opacity-100 !tw-duration-500 !tw-transition-all">
                      <img src={btn} alt="" />
                    </div>
                  </a>
                ))}
              </div>
              <div>
                <a className="!tw-text-white !tw-font-reg !tw-text-[18px] !tw-font-normal  anchornone !tw-text-start">
                  (571) 297-1409 <br />
                  7900 Westpark <br />
                  DriveMcLean, VA 2012
                </a>
              </div>
            </div>
          </div>
          <div className="!tw-flex !tw-justify-between !tw-items-end">
            <a
              href="https://techxerro.com/"
              className="!tw-no-underline !tw-text-white anchornone !tw-text-lg !tw-font-reg"
            >
              Powered by Techxerro
            </a>

            <div className="!tw-flex !tw-space-x-2">
              {socialMediaPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!tw-flex !tw-justify-center !tw-items-center !tw-size-[70px] !tw-skew-x-[20deg] !tw-bg-[#1E974B] hover:!tw-bg-white  !tw-transition-colors  !tw-duration-300 !tw-cursor-pointer !tw-p-0"
                >
                  <img
                    src={platform.icon}
                    className="!-tw-skew-x-[20deg]  "
                    alt={platform.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdowncompany;
