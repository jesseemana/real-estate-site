import React, { useContext, useEffect, useState } from "react";
import House from "./House"
import { HouseContext } from "./HouseContext";
import { Link } from "react-router-dom";
import { ImSpinner3 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner3 className="mx-auto animate-spin text-violet-700 text-4xl mt-[150px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48 capitalize">we couldn't find anything!</div>
    )
  }

  return <>
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {
            houses.map((house) => {
              return (
                <div key={house.id} >
                  <Link to={`/property/${house.id}`}>
                    <House house={house} />
                  </Link>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  </>
};

export default HouseList;
