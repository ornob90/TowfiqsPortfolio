import React from "react";
import Container from "../../../components/shared/Container";

const ShoeSphere = () => {
  return (
    <section className="mt-28 mb-40">
      {/* First Grid */}
      <div className="flex flex-col flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Others Image */}
        <div className=" -order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="p-2 bg-gray-200 h-max rounded-md">
            <img
              className="rounded-md"
              src="/ecommerce/collection.PNG"
              alt=""
            />
          </div>
          <div className="p-2 bg-gray-200 h-max rounded-md">
            <img className="rounded-md" src="/ecommerce/cart.PNG" alt="" />
          </div>
          <div className="p-2 bg-gray-200 h-max md:h-[240px] lg:h-[190px] rounded-md">
            <img
              className="rounded-md max-h-"
              src="/ecommerce/details1.PNG"
              alt=""
            />
          </div>
          <div className="p-2 bg-gray-200 h-max md:h-[240px] lg:h-[190px] rounded-md">
            <img
              className="rounded-md h-full"
              src="/ecommerce/checkout.PNG"
              alt=""
            />
          </div>
        </div>

        {/* Home page */}
        <div className="order-5 lg:order-1 flex flex-col justify-between h-full">
          <h1 className=" font-generalBold text-2xl mb-4">
            Shoe<span className="text-red-600">Sphere</span>
          </h1>
          <div className=" p-2 bg-gray-200 rounded-md lg:w-[90%] mb-8 lg:mb-0 h-max">
            <img
              className="w-full object-cover"
              src="./ecommerce/home.PNG"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2">
        {/* About and Tech used */}
        <div className="">
          <p className="w-[90%] font-poppins">
            This is a Full stack E-Commerce website built using the MERN
            (MongoDB, Express.js, React.js, Node.js) stack. The platform
            provides a secure authentication system, efficient product
            exploration, shopping cart management, a seamless checkout process
            with stripe payment system and ADMIN DASHBOARD.
          </p>
        </div>

        {/* Features */}
        <div></div>
      </div>
    </section>
  );
};

export default ShoeSphere;
