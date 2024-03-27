import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./assets/banner.png";
import Hills from "./assets/hill.png";
import Corporate from "./assets/corporate.png";
import Traveler from "./assets/traveler.png";
import Coach from "./assets/coach.png";
import swift from "./assets/swift1.png";
import Ooty from "./assets/ooty.png";
import Meditation from "./assets/meditation.png";
import Temple from "./assets/temple.png";
import Boat from "./assets/boat.png";
import David from "./assets/test.png";
import Prince from "./assets/test1.png";
import Streve from "./assets/test2.png";
import indialand from "./assets/indialand.png";
import mmodal from "./assets/mmodal.png";
import kgisl from "./assets/kgisl.png";
import thoughtworks from "./assets/thoughtworks.png";
import TUV from "./assets/TUV.png";
import cripumps from "./assets/CRIPUMPS.png";
import FooterImg from "./assets/footer.jpg";
import Socialmedia from "./assets/socialmedia.png";

const Home = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleCollapse1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleCollapse2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleCollapse3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleCollapse4 = () => {
    setIsOpen4(!isOpen4);
  };
  return (
    <div>
      {/* header */}
      <div className="bg-slate-950 text-white md:flex md:justify-between px-5 py-2 ">
        <ul className="flex justify-between md:space-x-10 text-sm md:text-base">
          <li className="cursor-pointer">+91 9865089000</li>
          <li className="cursor-pointer">info@manojtravels.in</li>
        </ul>
        <ul className="text-sm md:text-base">
          <li className="cursor-pointer">Coimbatore</li>
        </ul>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* trip details */}
      <div className="md:relative">
        <img
          className="h-auto max-w-full"
          src={Banner}
          alt="image description"
        />
        <form className="md:absolute md:bottom-0 md:left-60 md:ml-16 md:mr-16 mb-12 p-7 rounded-xl shadow-xl bg-white shadow-slate-400">
          <h5 className="text-center fw-bold mb-3 font-bold text-xl text-slate-800">
            TRIP DETAILS
          </h5>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div className="rounded-lg bg-slate-100 border border-gray-300 text-slate-800 text-sm  focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 flex items-center space-x-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.4 20q-1 0-1.7-.7T4 17.6v-1.175q0-.95.688-1.763q.687-.812 1.812-1.4q1.125-.587 2.538-.925Q10.45 12 11.9 12q1.45 0 2.9.337q1.45.338 2.6.938q1.15.6 1.875 1.413Q20 15.5 20 16.45v1.15q0 1-.7 1.7t-1.7.7Zm5.5-9q-1.45 0-2.475-1.025Q8.4 8.95 8.4 7.5q0-1.45 1.025-2.475Q10.45 4 11.9 4q1.475 0 2.487 1.025Q15.4 6.05 15.4 7.5q0 1.45-1.025 2.475Q13.35 11 11.9 11Z"
                ></path>
              </svg>
              <input
                className="bg-slate-100 outline-none"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="rounded-lg bg-slate-100 border border-gray-300 text-slate-800 text-sm  focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 flex items-center space-x-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                ></path>
              </svg>
              <input
                className="bg-slate-100 outline-none"
                type="text"
                id="mobile"
                placeholder="Mobile"
                required
              />
            </div>
            <div className="rounded-lg bg-slate-100 border border-gray-300 text-slate-800 text-sm  focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 flex items-center space-x-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.4 20q-1 0-1.7-.7T4 17.6v-1.175q0-.95.688-1.763q.687-.812 1.812-1.4q1.125-.587 2.538-.925Q10.45 12 11.9 12q1.45 0 2.9.337q1.45.338 2.6.938q1.15.6 1.875 1.413Q20 15.5 20 16.45v1.15q0 1-.7 1.7t-1.7.7Zm5.5-9q-1.45 0-2.475-1.025Q8.4 8.95 8.4 7.5q0-1.45 1.025-2.475Q10.45 4 11.9 4q1.475 0 2.487 1.025Q15.4 6.05 15.4 7.5q0 1.45-1.025 2.475Q13.35 11 11.9 11Z"
                ></path>
              </svg>
              <input
                className="bg-slate-100 outline-none"
                type="text"
                id="members"
                placeholder="No of Passengers"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>

      {/* AboutUs */}

      <div className="md:relative">
        <div className="md:absolute md:top-0 md:left-0 w-full">
          <div className="p-7">
            <h1 className="md:text-8xl text-4xl text-center p-4 font-thin text-slate-800">
              About Us
            </h1>
            <p className="text-center md:text-xl text-slate-500 pt-7">
              Welcome to Manoj Tours and Travels. If you are looking for a call
              taxi in Coimbatore, look no further than Manoj Travels. As a
              trusted car rental in Coimbatore, we understand that planning a
              trip can be a daunting task. That’s why we offer a range of travel
              packages that are designed to take the stress out of travel
              planning.
            </p>
          </div>
        </div>
        <img className="h-auto max-w-full" src={Corporate} alt="about-pic" />
      </div>

      {/* booking card */}
      <div className="mt-12 mb-12 text-slate-800">
        <div className="m-12">
          <h1 className="md:text-4xl text-xl font-thin text-center">
            BOOK TEMPO TRAVELLER IN{" "}
            <span className="font-normal">COIMBATORE</span> with
            <span className="font-normal"> manoj tours and travels</span>
          </h1>
        </div>
        <div className="md:grid md:grid-cols-4 mt-7">
          <div className="block bg-cyan-200 text-black transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2 ">
            <div className=" p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-4 bg-white rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.4 20q-1 0-1.7-.7T4 17.6v-1.175q0-.95.688-1.763q.687-.812 1.812-1.4q1.125-.587 2.538-.925Q10.45 12 11.9 12q1.45 0 2.9.337q1.45.338 2.6.938q1.15.6 1.875 1.413Q20 15.5 20 16.45v1.15q0 1-.7 1.7t-1.7.7Zm5.5-9q-1.45 0-2.475-1.025Q8.4 8.95 8.4 7.5q0-1.45 1.025-2.475Q10.45 4 11.9 4q1.475 0 2.487 1.025Q15.4 6.05 15.4 7.5q0 1.45-1.025 2.475Q13.35 11 11.9 11Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className=" text-xl font-semibold">
                  High-Quality Travellers & Drivers
                </h4>
                <p>
                  We only onboard tempo travellers that pass conclusive quality
                  checks. We also ensure that all our drivers arebackground
                  verified, have extensive driving experience & are adequately
                  groomed.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="block text-black transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2 text-center">
              <img
                className="h-[413px] w-[375px] max-w-full opacity-50 "
                src={Hills}
                alt=""
              />
              <div className="absolute top-0 p-6">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-4 bg-white rounded-full ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6.4 20q-1 0-1.7-.7T4 17.6v-1.175q0-.95.688-1.763q.687-.812 1.812-1.4q1.125-.587 2.538-.925Q10.45 12 11.9 12q1.45 0 2.9.337q1.45.338 2.6.938q1.15.6 1.875 1.413Q20 15.5 20 16.45v1.15q0 1-.7 1.7t-1.7.7Zm5.5-9q-1.45 0-2.475-1.025Q8.4 8.95 8.4 7.5q0-1.45 1.025-2.475Q10.45 4 11.9 4q1.475 0 2.487 1.025Q15.4 6.05 15.4 7.5q0 1.45-1.025 2.475Q13.35 11 11.9 11Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className=" text-xl font-semibold">
                    100% Transparent Pricing
                  </h4>
                  <p>
                    We have a completely transparent pricing policy, where we
                    disclose all possible costs that you’ll have to take into
                    account for your transportation budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="block text-black transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2 text-center">
              <img
                className="h-[413px] w-[375px] max-w-full opacity-50 "
                src={Traveler}
                alt="travel-pic"
              />
              <div className="absolute top-0 p-6">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-4 bg-white rounded-full ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6.4 20q-1 0-1.7-.7T4 17.6v-1.175q0-.95.688-1.763q.687-.812 1.812-1.4q1.125-.587 2.538-.925Q10.45 12 11.9 12q1.45 0 2.9.337q1.45.338 2.6.938q1.15.6 1.875 1.413Q20 15.5 20 16.45v1.15q0 1-.7 1.7t-1.7.7Zm5.5-9q-1.45 0-2.475-1.025Q8.4 8.95 8.4 7.5q0-1.45 1.025-2.475Q10.45 4 11.9 4q1.475 0 2.487 1.025Q15.4 6.05 15.4 7.5q0 1.45-1.025 2.475Q13.35 11 11.9 11Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className=" text-xl font-semibold">
                    Safe and sanitized Travelling Experience
                  </h4>
                  <p>
                    We ensure that your tempo traveller is completely cleaned &
                    sanitized before & after your trip. You can relax & enjoy
                    while renting your tempo traveller.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="block bg-teal-500 text-black transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2 text-center">
            <div className="p-6">
              <div className="flex items-center justify-center mb-3">
                <div className="p-4 bg-white rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.4 20q-1 0-1.7-.7T4 17.6v-1.175q0-.95.688-1.763q.687-.812 1.812-1.4q1.125-.587 2.538-.925Q10.45 12 11.9 12q1.45 0 2.9.337q1.45.338 2.6.938q1.15.6 1.875 1.413Q20 15.5 20 16.45v1.15q0 1-.7 1.7t-1.7.7Zm5.5-9q-1.45 0-2.475-1.025Q8.4 8.95 8.4 7.5q0-1.45 1.025-2.475Q10.45 4 11.9 4q1.475 0 2.487 1.025Q15.4 6.05 15.4 7.5q0 1.45-1.025 2.475Q13.35 11 11.9 11Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className=" text-xl font-semibold">
                  24/7 Customer Support
                </h4>
                <p>
                  24/7 customer support & your own dedicated travel manager to
                  help you with every step in availing a tempo traveller for
                  rent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:relative">
        <img className="h-auto max-w-full" src={Coach} alt="van-pic" />
        <div className="md:absolute md:bottom-20 md:left-0 w-full flex items-end justify-end md:pr-10">
          <div className="flex flex-col max-w-xl">
            <div className="m-4 p-4 bg-gradient-to-br from-yellow-400 to-yellow-800 rounded-r-xl rounded-b-xl ">
              <h5>Rental Cars</h5>
              <p>
                Rent luxury cars for a premium experience, tailored to
                youdesires.
              </p>
            </div>
            <div className="m-4 p-4 bg-gradient-to-br from-green-400 to-green-800 rounded-r-xl rounded-b-xl">
              <h5>Friendly Price</h5>
              <p>
                High-quality rentals at an affordable rate for your ultimate
                convenience.
              </p>
            </div>
            <div className="m-4 p-4 bg-gradient-to-br from-cyan-400 to-blue-900 rounded-r-xl rounded-b-xl">
              <h5>Luxury Tempo Traveller</h5>
              <p>
                Experience luxury travel with our premium Tempo Traveller rental
                service.
              </p>
            </div>
            <div className=" m-4 p-4 bg-gradient-to-br from-purple-600 to-indigo-900 rounded-r-xl rounded-b-xl">
              <h5>Customer Safty</h5>
              <p>
                Ensuring your safety is our top priority in every car rental.
              </p>
            </div>
            <div className=" m-4 p-4 bg-gradient-to-br from-red-600 to-pink-300 rounded-r-xl rounded-b-xl">
              <h5>Tour Guide</h5>
              <p>
                Explore with ease: our expert tour guide accompanies your car
                service.
              </p>
            </div>
            <div className="m-4 p-4 bg-gradient-to-br from-gray-600 to-gray-900 rounded-r-xl rounded-b-xl">
              <h5>Instant Booking</h5>
              <p>
                Book instantly and enjoy the convenience of our efficient car
                rentals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* vehicles */}

      <div className="mt-12">
        <h1 className="md:text-4xl text-xl font-thin text-center">
          Available Vehicles At{" "}
          <span className="font-normal">Manoj Travels</span>
        </h1>
        <div className="m-7 grid grid-cols-4 gap-7">
          <button className="md:px-4 md:py-6 bg-blue-500 rounded-xl font-semibold md:text-xl ">
            5 seaters
          </button>
          <button className="md:px-4 md:py-6 hover:bg-blue-500 rounded-xl font-semibold md:text-xl">
            7 seaters
          </button>
          <button className="md:px-4 md:py-6 hover:bg-blue-500 rounded-xl font-semibold md:text-xl">
            30 seaters
          </button>
          <button className="md:px-4 md:py-6 hover:bg-blue-500 rounded-xl font-semibold md:text-xl">
            Luxury 15 Seaters
          </button>
        </div>
      </div>
      {/* swift */}
      <div className="flex items-center justify-center space-x-5 md:p-0 p-4">
        <div className="">
          <div className="max-w-md">
            <img className="" src={swift} alt="" />
          </div>
        </div>
        <div className="max-w-lg">
          <h1 className="text-4xl font-semibold text-center mb-4">SWIFT</h1>
          <p className="text-center">
            Compact, efficient, and ready for every road ahead. With its modern
            design and reliable performance, the Swift is the ultimate travel
            companion. Experience comfort, style, and agility like never before.
            Rent yours today with Manoj Tours & Travels.
          </p>
        </div>
      </div>

      <div className="md:mt-12 md:mb-12">
        <div className="md:text-4xl text-xl p-4">
          <h1 className=" font-thin text-center">
            BOOK TEMPO TRAVELLER IN{" "}
            <span className="font-normal">COIMBATORE</span> with
            <span className="font-normal"> manoj tours and travels</span>
          </h1>
        </div>
        <div className="md:grid md:grid-cols-4 mt-7">
          <div className="relative m-4 rounded-lg">
            <div className="block text-white transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2 ">
              <img
                className="h-[413px] w-[375px] rounded-lg"
                src={Ooty}
                alt=""
              />
              <div className="absolute bottom-0 p-6">
                <div className="space-y-4">
                  <h4 className=" text-xl font-semibold">Ooty</h4>
                  <p>
                    Discover the tranquil beauty of Ooty's lush tea gardens and
                    mist-covered Nilgiri hills. Immerse yourself in its charming
                    colonial architecture and serene lakeside vistas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative m-4 rounded-lg">
            <div className="block text-white transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2 ">
              <img
                className="h-[413px] w-[375px] rounded-lg"
                src={Temple}
                alt=""
              />
              <div className="absolute bottom-0 p-6">
                <div className="space-y-4">
                  <h4 className=" text-xl font-semibold">Kanchepuram</h4>
                  <p>
                    Known as the 'City of Thousand Temples', it's a treasure
                    trove of ancient Dravidian architecture and renowned for its
                    exquisite silk sarees.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative m-4 rounded-lg">
            <div className="block text-white transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2 ">
              <img
                className="h-[413px] w-[375px] rounded-lg"
                src={Boat}
                alt=""
              />
              <div className="absolute bottom-0 p-6">
                <div className="space-y-4">
                  <h4 className=" text-xl font-semibold">Allapey</h4>
                  <p>
                    Often called the "Venice of the East," is renowned for its
                    intricate network of backwaters and serene houseboat
                    cruises. Its lush greenery and tranquil waters make it a
                    captivating destination for nature lover
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative m-4 rounded-lg">
            <div className="block text-white transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2 ">
              <img
                className="h-[413px] w-[375px] rounded-lg"
                src={Meditation}
                alt=""
              />
              <div className="absolute bottom-0 p-6">
                <div className="space-y-4">
                  <h4 className=" text-xl font-semibold">Coimbatore</h4>
                  <p>
                    Discover Coimbatore's vibrant markets, serene temples, and
                    lush greenery, making it a perfect blend of urban charm and
                    natural beauty. Explore its culinary delights and vibrant
                    culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* feedback */}
      <div className="text-slate-800">
        <h1 className="md:text-4xl  text-xl font-thin text-center">
          What People <span className="font-normal">Say?</span>
        </h1>
        <div className="md:grid md:grid-cols-3 md:gap-4 m-10 space-y-3">
          <div className="flex flex-col items-center p-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg ">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg "
              src={David}
              alt="person-1"
            />
            <h5 className="mb-1 text-xl font-medium text-slate-800 ">
              David hall
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Eu est nibh nibh augue
              molestie gravida mi porttitor. Vulputate in adipiscing nibh
              molestie turpis erat.
            </p>
            <div className="flex items-center space-x-1 rtl:space-x-reverse mt-5">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg ">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg "
              src={Prince}
              alt="person-1"
            />
            <h5 className="mb-1 text-xl font-medium text-slate-800 ">
              David hall
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Eu est nibh nibh augue
              molestie gravida mi porttitor. Vulputate in adipiscing nibh
              molestie turpis erat.
            </p>
            <div className="flex items-center space-x-1 rtl:space-x-reverse mt-5">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg ">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg "
              src={Streve}
              alt="person-1"
            />
            <h5 className="mb-1 text-xl font-medium text-slate-800 ">
              David hall
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Eu est nibh nibh augue
              molestie gravida mi porttitor. Vulputate in adipiscing nibh
              molestie turpis erat.
            </p>
            <div className="flex items-center space-x-1 rtl:space-x-reverse mt-5">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* clients */}
      <div className="md:grid md:grid-cols-2 md:gap-4 mt-12 mb-12">
        <div className="p-7">
          <h1 className="md:text-4xl text-2xl font-thin text-center pb-7">
            Our <span className="font-normal">Clients</span>
          </h1>
          <p className="text-center text-xl text-slate-600">
            Streamline your corporate travel with Manoj Tours & Travels. From
            executive transportation to group outings, we've got you covered.
            Experience seamless service and unmatched convenience for your
            business travel needs.
          </p>
        </div>
        <div className="p-7">
          <table className="table table-bordered">
            <tbody className="text-center">
              <tr>
                <td className="md:py-6 md:px-10 p-2 border border-gray-400">
                  <img src={indialand} alt="indialand-image" />
                </td>
                <td className="md:py-6 md:px-10 p-2 border border-gray-400">
                  <img src={mmodal} alt="mmodal-image" />
                </td>
                <td className="md:py-6 md:px-10 p-2 border border-gray-400">
                  <img src={kgisl} alt="kgisl-image" />
                </td>
              </tr>
              <tr>
                <td className="md:py-6 md:px-10 p-2 border border-gray-400">
                  <img src={thoughtworks} alt="thoughtworks" />
                </td>
                <td className="md:py-6 md:px-10 p-2 border border-gray-400">
                  <img src={TUV} alt="TUV" />
                </td>
                <td className="md:py-6 md:px-10 p-2 border border-gray-400">
                  <img src={cripumps} alt="cripumps-image" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* faq */}
      <div className="p-7 text-slate-800">
        <h1 className="md:text-4xl text-xl font-normal text-center pb-7">
          Frequently <span className="font-thin">Asked Questions</span>
        </h1>
        <div className="flex flex-col space-y-6 justify-center md:ml-16 md:mr-16">
          <div>
            <h2>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200"
                onClick={toggleCollapse1}
                aria-expanded={isOpen1 ? "true" : "false"}
              >
                <span>Why are we the best cab service in Coimbatore?</span>
                <svg
                  className={`w-3 h-3 rotate-${isOpen1 ? "0" : "180"} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              className={`${
                isOpen1 ? "" : "hidden"
              } p-5 border border-b-0 border-gray-200 `}
            >
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div>
            <h2>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200"
                onClick={toggleCollapse2}
                aria-expanded={isOpen2 ? "true" : "false"}
              >
                <span>On call hire service</span>
                <svg
                  className={`w-3 h-3 rotate-${isOpen2 ? "0" : "180"} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              className={`${
                isOpen2 ? "" : "hidden"
              } p-5 border border-b-0 border-gray-200 `}
            >
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div>
            <h2>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200"
                onClick={toggleCollapse3}
                aria-expanded={isOpen3 ? "true" : "false"}
              >
                <span>On call hire service</span>
                <svg
                  className={`w-3 h-3 rotate-${isOpen3 ? "0" : "180"} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              className={`${
                isOpen3 ? "" : "hidden"
              } p-5 border border-b-0 border-gray-200 `}
            >
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div>
            <h2>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200"
                onClick={toggleCollapse4}
                aria-expanded={isOpen4 ? "true" : "false"}
              >
                <span>On call hire service</span>
                <svg
                  className={`w-3 h-3 rotate-${isOpen4 ? "0" : "180"} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              className={`${
                isOpen4 ? "" : "hidden"
              } p-5 border border-b-0 border-gray-200 `}
            >
              <p className="mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- footer section --> */}
      <div className="md:relative">
        <img className="h-auto max-w-full" src={FooterImg} alt="van-pic" />
        <div className="md:absolute md:top-0 md:left-0 w-full">
          <div className="row">
            <div className="mt-12 mb-12">
              <h3 className="font-bold text-center md:text-white text-slate-800 mt-5 md:text-4xl text-xl p-4">
                Customer care team will call you in few minutes
              </h3>
              <form className="footer-form">
                <div className=" text-center">
                  <input
                    type="number"
                    className="px-6 py-4 rounded-lg bg-white shadow-2xl border border-slate-400"
                    placeholder="Enter mobile number"
                  />
                </div>
                <div className=" mt-3 text-center">
                  <button
                    type="button"
                    className="px-6 py-4 rounded-lg bg-blue-500 hover:bg-blue-600 md:text-white text-slate-800"
                  >
                    Request call back
                  </button>
                </div>
              </form>
            </div>
            <hr className="md:text-white text-slate-800 mt-5" />
            <div className="max-w-6xl mx-auto md:grid md:grid-cols-5 md:gap-7 md:mt-12 md:mb-12 p-5 md:space-y-0 space-y-5">
              <div className=" md:text-white text-slate-800 space-y-2">
                <h5 className="font-bold text-xl">Manoj Tours & Travels</h5>
                <p>
                  Kamaraja Road (Opp To) ALOFT HotelNear IOB Bank,Uppliplayam
                  PostCoimbatore - 641015 TamilNadu
                </p>
                <p>+91 98650 89000</p>
                <p>info@manojtravels.in</p>
              </div>

              <div className=" md:text-white text-slate-800 space-y-2">
                <h6 className="font-bold text-xl">TOUR PACKAGE</h6>
                <p>One day Package</p>
                <p>Two day Package</p>
                <p>Three day Package</p>
                <p>Four day Package</p>
                <p>Five day Package</p>
                <p>Six day Package</p>
                <p>Seven day Package</p>
                <p>Eight day Package</p>
                <p>Nine day Package</p>
                <p>Ten day Package</p>
              </div>

              <div className="md:text-white text-slate-800 space-y-2">
                <h6 className="font-bold text-xl">OTHER SERVICES</h6>
                <p>Hire for Tour Package</p>
                <p>Hire for Outstation</p>
                <p>Hire for One Way Drop</p>
                <p>Hire for Round Trip</p>
                <p>Hire for Corporate Companies</p>
                <p>Hire for Airport Pickup & Drop</p>
                <p>Hire for Local</p>
                <p>Hire for Pilgrimage</p>
              </div>

              <div className="md:text-white text-slate-800 space-y-2">
                <h6 className="font-bold text-xl">SOCIAL MEDIA</h6>
                <img src={Socialmedia} />
              </div>
            </div>
            <hr className="md:text-white text-slate-800" />
            <p className="text-center md:text-white text-slate-800 md:mt-12">
              All right reserved manoj tours and travels
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
