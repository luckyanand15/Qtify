import React from "react";
import Styles from "./AlbumCard.module.css";
import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import CardImage from "../../assets/sample-card-image.jpg";

function AlbumCard({ album }) {
  return (
    <div>
      <div className={Styles.card}>
        <Card>
          <CardMedia
            component="img"
            height="170"
            alt="album"
            image={album.image}
          />
          <CardContent>
            <div className={Styles.banner}>
              <Chip
                label={`${album.follows} Follows`}
                size="small"
                className={Styles.chip}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className={Styles.bannerTitle}>
        <p>{album.title}</p>
      </div>
    </div>
  );
}

export default AlbumCard;
