import { useEffect, useState } from "react";

const App = () => {
  let id = 1;
    const [data, setData] = useState<any>([]);

    useEffect(() => {
      const url = `https://api.punkapi.com/v2/beers/${id}`;
  
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json[0]);
          setData(json[0]);
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
  }, [id]);
  
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

export default App;
