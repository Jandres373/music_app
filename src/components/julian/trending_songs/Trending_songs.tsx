import React from "react";
import content from "./content.json";
import { TrendingSongsProps } from ".";

const TrendingSongs: React.FC<TrendingSongsProps> = () => {
  return (
    <div className="p-5 mt-5">
      <h3>{content.sectionName}</h3>
      <div id="section_divider" className="p-5">
        <div id="song_info" className="flex flex-col gap-2">
          <h2 className="text-6xl">{content.currentSong}</h2>
          <ul id="artist_details" className="flex gap-2 items-center">
            <li className="font-bold">{content.artist}</li>
            <li>{content.reproductions}</li>
          </ul>
          boton
        </div>
        <div id="song_image"></div>
      </div>
    </div>
  );
};

export default TrendingSongs;
