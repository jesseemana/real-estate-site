import React, { useContext, useState } from "react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import {Menu} from '@headlessui/react' //import headless ui
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [open, setOpen] = useState(false)
 
  return <>
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setOpen(!open)}
        className='dropdown-btn w-full text-left'
      >
        <RiMapPinLine className='dropdown-icon-primary'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text-[13px]'>select your place</div>
        </div>
          {open ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
      </Menu.Button>

     {/* creating our dropdown menu and populating it with the countries */}
      <Menu.Items className="dropdown-menu">
        {
         countries.map((country, index) => {
          return <Menu.Item
            as="li"
            key={index}
            onClick={() => {
              setCountry(country)
              setOpen(!open)
            }}
            className="cursor:pointer hover:text-violet-700 transition"
          >
            {country}
          </Menu.Item>
         })
        }
      </Menu.Items>
   </Menu>
  </>;
};

export default CountryDropdown;
