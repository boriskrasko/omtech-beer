import { useEffect, useState } from "react";

const Data = ({id}:{id:number}) => {
  const [data, setData] = useState<any>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
        const json = await response.json();

        console.log(json);
        setData(json[0]);
      } catch (error) {
        console.log('error', error)
        return null
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return (
      <>
      <p>Please enter beer id</p>
      <h2>Bear: </h2>
      <p>Tagline: </p>
      <p>First brewed: </p>
      <p>Description: </p>
      <p>Brewers tips: </p>
    </>
    )
  }
  return (
    <>
      <h2>Bear: {data.name}</h2>
      <p>Tagline: {data.tagline}</p>
      <p>First brewed: {data.first_brewed}</p>
      <p>Description: {data.description}</p>
      <p>Brewers tips: {data.brewers_tips}</p>
    </>
  );
};

export default Data;
