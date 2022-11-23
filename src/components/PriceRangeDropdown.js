import React, {useState, useContext} from "react";
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";
import { prices } from "../prices";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [open, setOpen] = useState(false);

  return <Menu as="div" className="dropdown relative">
    <Menu.Button
      onClick={() => setOpen(!open)}
      className="dropdown-btn w-full text-left"
    >
      <RiWallet3Line className='dropdown-icon-primary'/>
      <div>
        <div className='text-[15px] font-medium leading-tight'>{price}</div>
        <div className='text-[13px]'>choose your price range</div>
      </div>
      {open ? (
        <RiArrowUpSLine className="dropdown-icon-secondary" />
      ) : (
        <RiArrowDownSLine className="dropdown-icon-secondary" />
      )}
    </Menu.Button>

    <Menu.Items className="dropdown-menu">
      {
        prices.map((prices, index) => {
          return <Menu.Item
            key={index}
            as="li"
            onClick={() => {
              setPrice(prices.value)
              setOpen(!open)
            }}
            className="cursor-pointer hover:text-violet-700 transition"
          > 
            {prices.value}
          </Menu.Item>
        })
      }
    </Menu.Items>
  </Menu>
};

export default PriceRangeDropdown;
  