import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);

  const getTopAlbums = async () => {
    try {
      let topAlbumsResp = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
      setTopAlbums(topAlbumsResp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTopAlbums();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section type="album" title="Top Albums" data={topAlbums}/>
    </div>
  );
}

export default App;
