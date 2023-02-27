import React, { useEffect, useState } from "react";
import { housesData } from "../data";
import { ImSpinner3 } from "react-icons/im";
import { useParams, Link } from "react-router-dom";
import { BiBath, BiBed, BiArea } from "react-icons/bi";

const PropertyDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('page details')
  const [house, setHouse] = useState({})


  useEffect( () => {
    const home = housesData.find( ( house ) => house.id === parseInt( id ) );
    setHouse( home );
    setTitle( house.name );
    document.title = title;
  }, [ house, title, id ] );

  setTimeout(() => {
    setLoading(false)
  }, 1200);

  if (loading) {
    return (
      <ImSpinner3 className="mx-auto my-[300px] lg:my-[350px] animate-spin text-violet-700 text-4xl" />
    );
  }

  return (
    <section>
      <div className="container mx-auto mb-14 min-h-[400px] lg:min-h-[1090px]">
        <div className="flex justify-between flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold">{house.name}</h2>
            <h2 className="text-lg mb-4">{house.address}</h2>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <h2 className="bg-green-500 text-white px-3 rounded-full">{house.type}</h2>
            <h2 className="bg-violet-500 text-white px-3 rounded-full">{house.country}</h2>
          </div>
          <div className="text-violet-600 text-3xl font-semibold">${house.price}</div>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} alt="" className="rounded-lg" />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-4">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div>
                <img src={house.agent.image} alt="" />
              </div>
              <div>
                <div className="font-bold text-lg">{house.agent.name}</div>
                <Link to="" className="text-violet-700 capitalize text-sm" >view listings</Link>
              </div>
            </div>
            <form className="flex flex-col gap-4">
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Name*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Email*" />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Phone*" />
              <textarea
                className="border border-gray-300 rounded focus:border-violet-700 outline-none w-full resize-none p-4 h-36 text-sm text-gray-300"
                defaultValue="Hello I am interested in [property]"
              ></textarea>
              <div className="flex gap-x-2">
                <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 w-full transition">send message</button>
                <button className="border border-violet-700 hover:border-violet-500 text-violet-700 rounded p-4 w-full transition">call</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;

