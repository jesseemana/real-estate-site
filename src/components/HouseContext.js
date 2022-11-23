import React, { useState, useEffect } from "react";
import { housesData } from "../data";

export const HouseContext = React.createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property Type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price Range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    //creating a new array without any duplicates using the Set()
    const newCountries = ['Location (any)', ...new Set(allCountries)];
    setCountries(newCountries);
  }, [])

  useEffect(() => {
    const propertyType= houses.map((house) => house.type);
    const newProperty = ['Property Type (any)', ...new Set(propertyType)];
    setProperties(newProperty);
  }, [])

  const handleClick = () => {
    setLoading(true);
    // checking for default values(country, price, property), they'll include the word"(any)"
    const isDefault = (str) => {
      return str.split(' ').includes('(any)')
    }

    // setting minimum and maximum price
    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    // filtering the houses and creating a new houses array
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price); // filtering out price(s)
      // picking a houses/apartment based on specific inputs
      if (house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
        return house;
      } else if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      } else if (isDefault(country) && isDefault(property) && housePrice >= minPrice && housePrice <= maxPrice) {
        return house;
      } else if (house.country === country && isDefault(property) && isDefault(price)) {
        return house;
      } else if (isDefault(country) && house.type === property && isDefault(price)) {
        return house;
      } else if (house.country === country && house.type === property && isDefault(price)) {
        return house;
      } else if (house.country === country && isDefault(property) && housePrice >= minPrice && housePrice <= maxPrice) {
        return house;
      } else if (isDefault(country) && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
        return house;
      }
    }) //end of newHouses functionality
    
    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
      setLoading(false);
    }, 1000)
  }

  return <HouseContext.Provider
    value={{
      houses,
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      loading,
      handleClick,
    }}
  >
    {children}
  </HouseContext.Provider>;
};

export default HouseContextProvider;
