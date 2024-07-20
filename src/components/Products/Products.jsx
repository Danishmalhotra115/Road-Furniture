import React from "react";
import "./products.css";
import roadsigns from "./roadsigns.jpg";
import firesafety from "./firesafety.jpg";
import roadsafety from "./roadsafety.jpg";
import industrialsafety from "./industrialsafety.jpg";

export default function Products() {
  const products = [
    {
      img: roadsafety,
      title: "Road Safety Products",
      description:
        "A comprehensive array of road safety and parking product solutions from a leading manufacturer.",
    },
    {
      img: firesafety,
      title: "Fire Safety",
      description:
        "A comprehensive range of fire extinguishers, hydrant accessories, and fire safety equipment for enhanced protection.",
    },
    {
      img: industrialsafety,
      title: "Industrial Safety",
      description:
        "A broad selection of PPE, LOTO, and various safety products for manufacturing industries.",
    },
    {
      img: roadsigns,
      title: "Road Signs",
      description:
        "A complete selection of retro reflective signages designed according to IRC and international standards. Fully customizable.",
    },
  ];

  return (
    <>
      <div className="products-main-div w-full">
        <div className="mx-auto z-2 flex flex-col max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="products-heading">
            <h2 className="font-semibold text-white text-5xl">Products</h2>
          </div>
          <div className="products-description my-10">
            <p className="text-2xl text-white">
              We deliver premium solutions for Traffic Safety gear, Workplace
              Safety, Reflective signage, and Fire Protection sectors.
            </p>
          </div>
          <div className="products-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-48 object-cover"
                    src={product.img}
                    alt={product.title}
                  />
                </a>
                <div className="flex flex-col flex-grow p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {product.title}
                    </h5>
                  </a>
                  <p className="mb-3 flex-grow font-normal text-gray-700 dark:text-gray-400">
                    {product.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-md font-medium text-black text-lg md:text-xl py-2 px-4 my-4 shadow transform transition duration-200 ease-in-out hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: "rgb(233, 212, 5)",
                    }}
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
