import React, {useEffect, useState} from "react"
import Home from "./Home";

function App() {
  const [data, setData] = useState([{}])
  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('http://localhost:5000/api/data');
        const data = await response.json();
        setData(data);
    };

    fetchData();
}, []);

  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
