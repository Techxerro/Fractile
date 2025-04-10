import React, { useEffect, useState } from "react";
import "./style.scss";
import "font-awesome/css/font-awesome.min.css";
import { image } from "../../../Assets";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import DropdownWhatwedo from "./DropdownWhatwedo";
import Dropdowncompany from "./Dropdowncompany";

const Header = () => {
  const [openMenu, setopenMenu] = useState(false);
  const [opensubMenu, setopensubMenu] = useState(false);
  const [opensubAboutMenu, setopensubAboutMenu] = useState(false);
  const [isDropdownOpen, setisDropdownOpen] = useState(false);

  const [Service, setService] = useState("BIM/VDC Services");
  const [Subservice, setSubservice] = useState("Visualization");
  const location = useLocation();

  useEffect(() => {
    ServicesList.map((obj) => {
      if (
        location.pathname.includes("modeling") ||
        location.pathname.includes("visualisation") ||
        location.pathname.includes("BIM")
      ) {
        {
          setService("BIM/VDC Services");
        }
        {
          obj.subService.map((obj2) => {
            if (location.pathname.includes("modeling")) {
              setSubservice("Modeling");
            } else if (location.pathname.includes("visualisation")) {
              setSubservice("Visualization");
            } else if (location.pathname.includes("BIM")) {
              setSubservice("BIM Management");
            }
          });
        }
      } else if (
        location.pathname.includes("shop-drawing-creation") ||
        location.pathname.includes("2D-overlay") ||
        location.pathname.includes("RFI-order-date-in-PM-software")
      ) {
        setService("Project Enginerring Services");
      } else {
      }
    });

    if (location.pathname !== "/") {
      const header = document.querySelector("header");
      if (header) {
        header.classList.add("greenheader");
      }
    }
  }, [location.pathname]);

  const MouseIn = (e) => {
    e.preventDefault();
  };
  const MouseOut = (e) => {
    e.preventDefault();
  };

  const ServicesList = [
    {
      id: 1,
      ServiceName: "BIM/VDC Services",
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
          link: "/shop-drawing-creation",
        },
        {
          id: 2,
          name: "2D Overlay",
          link: "/2D-overlay",
        },
        {
          id: 3,
          name: "RFI/Submittal/Change Order Date in PM Software",
          link: "/RFI-order-date-in-PM-software",
        },
      ],
    },
  ];

  const mobileseerviceslist = [
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
    {
      id: 4,
      name: "2D(CAD/PDF) To 3D Modeling",
      link: "/modeling/2D-to-3D-modeling",
    },
    {
      id: 5,
      name: "Supplemental Modeling",
      link: "/modeling/supplemental-modeling",
    },
    {
      id: 6,
      name: "Point Cloud to 3D Modeling",
      link: "/modeling/point-cloud-to-3D-modeling",
    },
    {
      id: 7,
      name: "Clash Detection and Coordination",
      link: "/modeling/clash-detection-and-coordination",
    },
    {
      id: 8,
      name: "BIM Execution Planning",
      link: "/modeling/BIM-execution-planning",
    },
    {
      id: 9,
      name: "Shop Drawing Creation",
      link: "/shop-drawing-creation",
    },
    {
      id: 10,
      name: "2D Overlay",
      link: "/2D-overlay",
    },
    {
      id: 11,
      name: "RFI/Submittal/Change Order Date in PM Software",
      link: "/RFI-order-date-in-PM-software",
    },
  ];

  const openSubServices = (e) => {
    e.preventDefault();
    setService(e.target.innerHTML);
  };
  const openSubSubServices = (e) => {
    e.preventDefault();
    setSubservice(e.target.innerHTML);
  };
  const toggleDropdown = (e) => {
    e.preventDefault();
    setisDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header>
        <div className="container mainbar">
          <div className="row">
            <div className="col-3">
              <a href="/">
                <img src={image.logo} alt="" id="logo" />
              </a>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center">
              <div className="menu">
                <ul>
                  <li
                    className="page-link"
                    style={{ width: "120px", textAlign: "center" }}
                  >
                    <a href="/">Home</a>
                  </li>
                  <li
                    className="page-link submenuhover"
                    id="service"
                    style={{ width: "120px", textAlign: "center" }}
                  >
                    <span
                      onClick={() => setopensubMenu(!opensubMenu)}
                      onMouseOver={(e) => MouseIn(e)}
                      onMouseOut={(e) => MouseOut(e)}
                    >
                      What we do
                    </span>
                    {/* <div className="submenuoverlay"></div> */}

                    {/* DropdownWhatwedo */}
                    <div
                      className={`${opensubMenu
                          ? "tw-translate-y-0"
                          : "-tw-translate-y-full"
                        } tw-z-50  tw-fixed tw-inset-0 tw-w-full transform tw-transition-transform tw-duration-300 tw-ease-in-out `}
                    >
                      <DropdownWhatwedo onClose={() => setopensubMenu(false)} />
                    </div>

                    {/* <div
                      className="submenu"
                      style={{ top: opensubMenu ? "0" : "-100%" }}
                    >
                      
                      <div className="row">
                        <div className="col-4">
                          <ul className="menu-items">
                            {ServicesList.map((SL) => {
                              return (
                                <li
                                  key={SL.id}
                                  onClick={(e) => openSubServices(e)}
                                  style={{
                                    opacity: `${
                                      Service === SL.ServiceName ? "1" : "0.75"
                                    }`,
                                  }}
                                >
                                  {SL.ServiceName}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="col-3">
                          <ul className="submenu-items">
                            {ServicesList.map((SL) => {
                              return Service === SL.ServiceName ? (
                                <ul key={SL.id}>
                                  {SL.subService.map((SSL) => {
                                    return (
                                      <>
                                        {SSL.hasservice ? (
                                          <li
                                            key={SSL.id}
                                            onClick={(e) =>
                                              openSubSubServices(e)
                                            }
                                            className={
                                              Subservice === SSL.name
                                                ? "active"
                                                : "inactive"
                                            }
                                          >
                                            {SSL.name}
                                          </li>
                                        ) : (
                                          <li
                                            key={SSL.id}
                                            className={
                                              location.pathname === SSL.link
                                                ? "active"
                                                : "inactive"
                                            }
                                          >
                                            <a href={SSL.link}>{SSL.name} </a>
                                          </li>
                                        )}
                                      </>
                                    );
                                  })}
                                </ul>
                              ) : (
                                <></>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="col-4 contactinfo">
                          <div
                            className="closebtn1"
                            onClick={() => setopensubMenu(!opensubMenu)}
                          >
                            <svg
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.5 1.5L25 25"
                                stroke="white"
                                stroke-width="2"
                              />
                              <path
                                d="M25 1.5L1.5 25"
                                stroke="white"
                                stroke-width="2"
                              />
                            </svg>
                          </div>
                          {ServicesList.map((SL) => {
                            return Service === SL.ServiceName ? (
                              <>
                                {SL.subService.map((obj) => {
                                  return (
                                    <div key={obj.id}>
                                      {obj.name == Subservice ? (
                                        <ul>
                                          {obj.subsubservices.map(
                                            (innerobj) => {
                                              return (
                                                <li
                                                  className={
                                                    location.pathname ===
                                                    innerobj.link
                                                      ? "currentpage"
                                                      : ""
                                                  }
                                                  style={{ padding: "0 20px" }}
                                                >
                                                  <a href={innerobj.link}>
                                                    {innerobj.name}
                                                  </a>
                                                </li>
                                              );
                                            }
                                          )}
                                        </ul>
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                  );
                                })}
                              </>
                            ) : (
                              <></>
                            );
                          })}
                        </div>
                        <div className="whitebg"></div>
                        <div className="greenoverlaybg"></div>
                      </div>
                    </div> */}
                  </li>
                  <li
                    className="page-link submenuhover"
                    style={{ width: "120px", textAlign: "center" }}
                  >
                    <span
                      onClick={() => setopensubAboutMenu(!opensubAboutMenu)}
                    >
                      Company
                    </span>

                    {/* <div className="teamsubmenuoverlay"></div> */}

                    {/* DropdownWhatwedo */}
                    <div
                      className={`${opensubAboutMenu
                          ? "tw-translate-y-0"
                          : "-tw-translate-y-full"
                        } tw-z-50  tw-fixed tw-inset-0 tw-w-full transform tw-transition-transform tw-duration-300 tw-ease-in-out `}
                    >
                      <Dropdowncompany onClose={() => setopensubAboutMenu(false)} />
                    </div>

                    {/* commented by ankit */}
                    {/* <div
                      className="submenu teamsubmenu"
                      style={{ top: opensubAboutMenu ? "0" : "-100%" }}
                    >
                      <div className="row">
                        <div className="col-3">
                          <ul className="submenu-items">
                            <li>
                              <a href="">Company</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <ul>
                            <li>
                              <a href="/about">About us</a>
                            </li>
                            <li>
                              <a href="/team">Our Team</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4 contactinfo">
                          <div
                            className="closebtn1"
                            onClick={() =>
                              setopensubAboutMenu(!opensubAboutMenu)
                            }
                          >
                            <svg
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.5 1.5L25 25"
                                stroke="white"
                                stroke-width="2"
                              />
                              <path
                                d="M25 1.5L1.5 25"
                                stroke="white"
                                stroke-width="2"
                              />
                            </svg>
                          </div>
                          <h5>Contact</h5>
                          <p>(571) 297-1409</p>
                          <p>
                            7900 Westpark
                            <br />
                            DriveMcLean, VA 2012
                          </p>

                          <div className="socialicon d-flex">
                            <span id="facebook">
                              <svg
                                width="11"
                                height="20"
                                viewBox="0 0 11 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 11.5001H9.5L10.5 7.50012H7V5.50012C7 4.47012 7 3.50012 9 3.50012H10.5V0.140122C10.174 0.0971222 8.943 0.00012207 7.643 0.00012207C4.928 0.00012207 3 1.65712 3 4.70012V7.50012H0V11.5001H3V20.0001H7V11.5001Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                            <span id="twitter">
                              <svg
                                width="27"
                                height="25"
                                viewBox="0 0 27 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="27"
                                  height="24.9648"
                                  rx="5"
                                  fill="none"
                                />
                                <path
                                  d="M10 6.01001H6L16.5 19.8794H20.5L10 6.01001Z"
                                  stroke="white"
                                />
                                <path
                                  d="M20.5 5.54773H19L5 20.3417H6.5L20.5 5.54773Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                            <span id="instagram">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM16.5 4.75C16.5 4.41848 16.3683 4.10054 16.1339 3.86612C15.8995 3.6317 15.5815 3.5 15.25 3.5C14.9185 3.5 14.6005 3.6317 14.3661 3.86612C14.1317 4.10054 14 4.41848 14 4.75C14 5.08152 14.1317 5.39946 14.3661 5.63388C14.6005 5.8683 14.9185 6 15.25 6C15.5815 6 15.8995 5.8683 16.1339 5.63388C16.3683 5.39946 16.5 5.08152 16.5 4.75ZM10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                            <span id="linkedin">
                              <svg
                                width="20"
                                height="18"
                                viewBox="0 0 20 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.65169 2.29165C4.65144 2.79998 4.44926 3.28739 4.08964 3.64666C3.73001 4.00592 3.2424 4.20761 2.73407 4.20736C2.22574 4.2071 1.73833 4.00493 1.37906 3.6453C1.0198 3.28568 0.818105 2.79806 0.81836 2.28973C0.818614 1.7814 1.02079 1.29399 1.38042 0.934725C1.74004 0.57546 2.22765 0.37377 2.73598 0.374024C3.24432 0.374278 3.73173 0.576455 4.09099 0.93608C4.45026 1.2957 4.65195 1.78332 4.65169 2.29165ZM4.70919 5.62665H0.87586V17.625H4.70919V5.62665ZM10.7659 5.62665H6.95169V17.625H10.7275V11.3287C10.7275 7.82123 15.2988 7.4954 15.2988 11.3287V17.625H19.0842V10.0254C19.0842 4.11248 12.3184 4.3329 10.7275 7.23665L10.7659 5.62665Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="whitebg"></div>
                        <div className="greenoverlaybg"></div>
                      </div>
                    </div> */}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-end">
              <div className="contact-btn">
                <a href="#contactform">Contact us</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mobilemainbar">
          <div className="row">
            <div className="col-6">
              <a href="/">
                <img src={image.logo} alt="" />
              </a>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end">
              <button
                className="menubtn"
                onClick={() => setopenMenu(!openMenu)}
              >
                {/* <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div> */}
                <svg
                  width="54"
                  height="29"
                  viewBox="0 0 54 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9505 28.5L0.838044 0.5H38.0495L53.162 28.5H15.9505Z"
                    fill="#157438"
                    stroke="white"
                  />
                  <path d="M8 7H38.8148L40 9H9.18519L8 7Z" fill="white" />
                  <path d="M25 13H40.814L42 15H26.186L25 13Z" fill="white" />
                  <path d="M23 19H43.8421L45 21H24.1579L23 19Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="mobilemenu" style={{ left: openMenu ? "0%" : "-100%" }}>
        <ul>
          <li className="page-link">
            <a href="/">Home</a>
          </li>
          <li className="page-link">
            <a href="/about">About</a>
          </li>
          <li className="page-link">
            <a href="/team">Team</a>
          </li>
          <li
            className="page-link d-flex align-items-center "
            onClick={() => setisDropdownOpen(!isDropdownOpen)}
          >
            Services{" "}
            {isDropdownOpen ? (
              <span className="arrow-down"></span>
            ) : (
              <span className="arrow-up"></span>
            )}
          </li>
          {isDropdownOpen ? (
            <ul className="dropdown">
              {mobileseerviceslist.map((services, index) => (
                <li key={index}>{services.name}</li>
              ))}
            </ul>
          ) : (
            ""
          )}
          <li className="page-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <svg
          onClick={() => setopenMenu(!openMenu)}
          id="closebtn"
          width="40"
          height="40"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.93823 15.3547L15.3546 1.93825"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M2.64539 1.93825L16.0618 15.3547"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
};

export default Header;
