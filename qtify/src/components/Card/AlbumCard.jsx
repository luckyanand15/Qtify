import React from "react";
import Styles from "./AlbumCard.module.css";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Tooltip,
  Typography,
} from "@mui/material";
import CardImage from "../../assets/sample-card-image.jpg";

function AlbumCard({ album }) {
  const {image, follows, title, songs} = album;
  return (
    <div>
      <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
        <div className={Styles.card}>
          <Card>
            <CardMedia
              component="img"
              height="170"
              alt="album"
              image={image}
            />
            <CardContent>
              <div className={Styles.banner}>
                <Chip
                  label={`${follows} Follows`}
                  size="small"
                  className={Styles.chip}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className={Styles.bannerTitle}>
          <p>{title}</p>
        </div>
      </Tooltip>
    </div>
  );
}

export default AlbumCard;
