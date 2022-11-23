import React from "react";
import Search from '../components/Search'
import Hero from '../assets/img/house-banner.png'

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] capitalize font-semibold leading-none mb-6">
            <span className="text-violet-700 ">rent</span> your dream house with us.
          </h1>
          <p className="max-w-[480px] mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Maiores harum placeat tempore molestiae aut
            odit incidunt consequatur eius sed non?
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
           <img src={Hero} alt="hero section house" />
        </div>
      </div>
      <Search />
    </section>
  )
};

export default Banner;
