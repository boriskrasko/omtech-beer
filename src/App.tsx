import React, { useEffect, useState } from "react";

const App = () => {
  let id = 1;
    const [data, setData] = useState([]);

    useEffect(() => {
      const url = "https://api.punkapi.com/v2/beers/" + id;
  
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json[0].name);
          setData(json[0].name);
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
  }, [id]);
  

    return (
        <div>{data}</div>
    );
};

export default App;
