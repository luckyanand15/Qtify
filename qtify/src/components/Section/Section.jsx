import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import Styles from "./Section.module.css";
import AlbumCard from "../Card/AlbumCard";
import { Box } from "@mui/material";
import axios from "axios";
import Carousel from "../Carousel/Carousel";

function Section({ type, title, data }) {
  const [toggler, setToggler] = useState(false);

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.sectionTop}>
        {title}
        <h4 onClick={() => setToggler(!toggler)} className={Styles.toggler}>
          {toggler ? "Collapse" : "Show all"}
        </h4>
      </div>

      <div>
        {toggler ? (
          <div className={Styles.flexWrappers}>
            {data.map((album) => {
              return <AlbumCard album={album} key={album.id} />;
            })}
          </div>
        ) : (
          <div>
            <Carousel data={data}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Section;
