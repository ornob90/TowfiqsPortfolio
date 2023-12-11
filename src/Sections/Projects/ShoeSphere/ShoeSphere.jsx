import React from "react";
import Container from "../../../components/shared/Container";
import SpanBold from "../../../components/shared/SpanBold";
import { shoeSphereSkills } from "../../Skills/skillsList";
import Button from "../../../components/shared/Button";
import ProjectTitle from "../../../components/shared/ProjectTitle";
import Tech from "../../../components/shared/Tech";

const ShoeSphere = () => {
  return (
    <section className="mt-5 mb-40 dark:text-white">
      <ProjectTitle title="E-Commerce" />

      {/* First Grid */}
      <div className="flex flex-col flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
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
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 ">
        {/* About and Tech used */}
        <div className="flex flex-col justify-between">
          <p className="w-[90%] font-poppins">
            This is a <SpanBold>Full stack E-Commerce</SpanBold> website built
            using the{" "}
            <SpanBold>MERN (MongoDB, Express.js, React.js, Node.js)</SpanBold>{" "}
            stack. The platform provides a secure{" "}
            <SpanBold>authentication</SpanBold> system, efficient product
            exploration, shopping cart management, a seamless checkout process
            with <SpanBold>stripe payment system</SpanBold> and{" "}
            <SpanBold>ADMIN DASHBOARD</SpanBold>.
          </p>

          {/* Tech Used  */}
          <Tech skills={shoeSphereSkills} />

          {/* Call To action button */}
          <div className="mt-14 flex gap-4">
            <Button className="text-sm md:text-base border border-black dark:border-white text-black dark:text-white py-2 px-7">
              Code
            </Button>
            <Button className="text-sm md:text-base bg-black text-white py-2 px-8">
              Live
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="font-poppins flex flex-col justify-between">
          <h1 className="font-semibold text-lg mb-5">It Provides,</h1>

          <div className="flex flex-col gap-4  font-generalSemibold text-[10px] md:text-[12px] lg:text-base">
            <div className="grid grid-cols-2 list-outside">
              <li className="list-inside">Admin Dashboard</li>
              <li className="">Payment System</li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>User Dashboard</li>
              <li>Cart System</li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>Fully Responsive</li>
              <li>Parallel Filtering and Search</li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>Order Management</li>
              <li>Bookmarked products</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoeSphere;
