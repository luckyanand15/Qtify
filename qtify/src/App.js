import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const getTopAlbums = async () => {
    try {
      let topAlbumsResp = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
      setTopAlbums(topAlbumsResp.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getNewAlbums = async () => {
    try {
      let newAlbumsResp = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
      setNewAlbums(newAlbumsResp.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTopAlbums();
    getNewAlbums();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section type="album" title="Top Albums" data={topAlbums}/>
      <Section type="album" title="New Albums" data={newAlbums}/>
    </div>
  );
}

export default App;
