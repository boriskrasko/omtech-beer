import { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers/1`);
        const json = await response.json();
        console.log(json);
        setData(json[0]);
      } catch (error) {
        console.log("error", error);
        return null;
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Bear: {data.name}</h2>
      <p>Tagline: {data.tagline}</p>
      <p>First_brewed: {data.first_brewed}</p>
      <p>Description: {data.description}</p>
      <p>Brewers tips: {data.brewers_tips}</p>
    </>
  );
};

export default Data;
