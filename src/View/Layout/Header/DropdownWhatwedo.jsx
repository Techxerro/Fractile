import React, { useState } from "react";
import logo from "../../../Assets/logo.svg";
import bg from "../../../Assets/dropdownbg.svg";
import insta from "../../../Assets/insta.svg";
import fb from "../../../Assets/fb.svg";
import linkedin from "../../../Assets/ln.svg";
import twitter from "../../../Assets/x.svg";
import mockup from "../../../Assets/Homemockup.png";
import btn from "../../../Assets/Hoverbtn.svg";
import closebtn from "../../../Assets/closebtn.svg";

function DropdownWhatwedo({ onClose }) {
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
  const ServicesList = [
    {
      id: 1,
      ServiceName: "BIM/VDC Services",
      hasservice: true,
      subService: [
        {
          id: 1,
          name: "Visualization",
          hasservice: true,
          subsubservices: [
            {
              id: 1,
              name: "2D/3D Rendering",
              link: "/visualisation/2D&3D-rendering",
            },
            {
              id: 2,
              name: "3D Walkthroughs/ Flythrough",
              link: "/visualisation/3D-Walkthrough-Flythrough",
            },
            {
              id: 3,
              name: "4D Simulations",
              link: "/visualisation/4D-Simulations",
            },
          ],
        },
        {
          id: 2,
          name: "Modeling",
          hasservice: true,
          subsubservices: [
            {
              id: 1,
              name: "2D(CAD/PDF) To 3D Modeling",
              link: "/modeling/2D-to-3D-modeling",
            },
            {
              id: 2,
              name: "Supplemental Modeling",
              link: "/modeling/supplemental-modeling",
            },
            {
              id: 3,
              name: "Point Cloud to 3D Modeling",
              link: "/modeling/point-cloud-to-3D-modeling",
            },
          ],
        },
        {
          id: 3,
          name: "BIM Management",
          hasservice: true,
          subsubservices: [
            {
              id: 1,
              name: "Clash Detection and Coordination",
              link: "/BIM-Management/clash-detection-and-coordination",
            },
            {
              id: 2,
              name: "BIM Execution Planning",
              link: "/BIM-Management/BIM-execution-planning",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      ServiceName: "Project Enginerring Services",
      hasservice: true,
      subService: [
        {
          id: 1,
          name: "Shop Drawing Creation",
          hasservice: false,
          link: "/shop-drawing-creation",
        },
        {
          id: 2,
          name: "2D Overlay",
          hasservice: false,
          link: "/2D-overlay",
        },
        {
          id: 3,
          name: "RFI/Submittal/Change Order Date in PM Software",
          hasservice: false,
          link: "/RFI-order-date-in-PM-software",
        },
      ],
    },
  ];

  // State to track the selected service, sub-service, and sub-sub-service
  const [selectedServiceId, setSelectedServiceId] = useState(
    ServicesList[0].id
  );
  const [selectedSubService, setSelectedSubService] = useState(
    ServicesList[0].subService[0] || null
  );
  const [selectedSubSubService, setSelectedSubSubService] = useState(
    ServicesList[0].subService[0]?.subsubservices[0] || null
  );

  // Function to handle service selection
  const handleServiceClick = (id) => {
    setSelectedServiceId(id);
    const service = ServicesList.find((service) => service.id === id);
    if (service) {
      const subService = service.subService || [];
      setSelectedSubService(subService[0] || null);
      const subSubServices = subService[0]?.subsubservices || [];
      setSelectedSubSubService(subSubServices[0] || null);
    } else {
      setSelectedSubService(null);
      setSelectedSubSubService(null);
    }
  };

  // Function to handle sub-service selection
  const handleSubServiceClick = (subService) => {
    setSelectedSubService(subService);
    // Check if subsubservices exist and set the first one as default
    setSelectedSubSubService(subService.subsubservices?.[0] || null);
  };

  // Find the selected service based on selectedServiceId
  const selectedService = ServicesList.find(
    (service) => service.id === selectedServiceId
  );
  return (
    <div className="!tw-bg-[#157438] !tw-min-h-screen">
      <div className="!tw-max-w-screen-2xl  !tw-overflow-hidden !tw-mx-auto !tw-py-10 !tw-px-12 !tw-h-[100vh] !tw-relative">
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
        <div className=" !tw-max-w-4xl    !tw-flex !tw-flex-col !tw-justify-between !tw-h-full !tw-relative  ">
          <div className="!tw-space-y-20">
            <div>
              <img src={logo} alt="" />
            </div>

            <div className="!tw-flex !tw-gap-16">
              <div className="!tw-space-y-5">
                {ServicesList.map((service, index) => (
                  <h2
                    key={service.id}
                    className={`!tw-text-start !tw-text-white !tw-font-md !tw-max-w-64 !tw-text-[24px]  !tw-pb-4 !tw-cursor-pointer  ${
                      selectedServiceId === service.id
                        ? "!tw-border-b-[2px] !tw-border-white"
                        : "!tw-text-opacity-40"
                    }`}
                    onClick={() => handleServiceClick(service.id)}
                  >
                    {service.ServiceName}
                  </h2>
                ))}
              </div>
              <div>
                {/* Sub-Service List */}
                {selectedService && (
                  <div className="!tw-space-y-5">
                    {selectedService.subService.map((subService) => (
                      <a
                        href={subService.link}
                        key={subService.id}
                        onClick={() => handleSubServiceClick(subService)}
                        className="anchornone !tw-flex  tw-group !tw-cursor-pointer !tw-no-underline !tw-text-white !tw-font-reg !tw-text-[20px] !tw-font-normal"
                      >
                        {subService.name}

                        <div className="tw-opacity-0 group-hover:tw-translate-x-3  group-hover:tw-opacity-100 !tw-duration-500 !tw-transition-all">
                          <img src={btn} alt="" />
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {/* Sub-Sub-Service List */}
              {selectedSubService &&
                selectedSubService.hasservice &&
                selectedSubService.subsubservices && (
                  <div className="!tw-flex !tw-flex-col !tw-gap-3">
                    {selectedSubService.subsubservices.map((subsub) => (
                      <a
                        key={subsub.id}
                        href={subsub.link}
                        className="!tw-text-start anchornone !tw-text-base !tw-font-reg !tw-no-underline !tw-text-white"
                      >
                        {subsub.name}
                      </a>
                    ))}
                  </div>
                )}
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

export default DropdownWhatwedo;
