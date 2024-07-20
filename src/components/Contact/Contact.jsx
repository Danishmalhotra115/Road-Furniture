import React from "react";
import photo from "./contactPhoto.jpg";

export default function Contact() {
  return (
    <>
      <div className="mx-auto z-2 flex flex-col max-w-7xl items-center justify-center w-full px-4 py-10 sm:px-6 lg:px-8">
        <div className="products-heading">
          <h2 className="font-semibold text-black text-5xl">Contact Us</h2>
        </div>
        <div className="flex contact-main-div mt-10 gap-10 lg:gap-36 flex-col lg:flex-row w-full">
          <div className="contact-left-photo w-full lg:w-1/2 hidden lg:block">
            <img src={photo} alt="Contact" className="w-full h-auto" />
          </div>
          <div className="flex items-center w-full lg:w-1/2">
            <form className="bg-white rounded-lg shadow-2xl w-full p-8">
              <div className="mb-4 w-full">
                <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none text-2xl border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500 focus:border-2 focus:ring-0"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4 w-full">
                <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="company">
                  Company Name
                </label>
                <input
                  className="shadow appearance-none text-2xl border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500 focus:border-2 focus:ring-0"
                  id="company"
                  type="text"
                  placeholder="Company Name"
                />
              </div>

              <div className="mb-4 w-full">
                <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none text-2xl border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500 focus:border-2 focus:ring-0"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-6 w-full">
                <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="phoneNo">
                  Phone No
                </label>
                <input
                  className="shadow appearance-none text-2xl border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-500 focus:border-2 focus:ring-0"
                  id="phoneNo"
                  type="tel"
                  placeholder="Phone No"
                />
              </div>

              <div className="flex items-center justify-between w-full">
                <button
                  type="button"
                  className="rounded-md font-semibold text-black text-xl py-2 px-4 shadow transform transition duration-200 ease-in-out hover:scale-105 active:scale-95 w-full"
                  style={{
                    backgroundColor: 'rgb(233, 212, 5)'
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
