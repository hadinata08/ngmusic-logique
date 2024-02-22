import React from "react";
import "./search-items-style.css";
import { DollarIcon } from "../../../assets";

type SearchItemsProps = {
  previewImage: string;
  previewUrl?: string;
  genreName?: string;
  trackPrize?: number;
  artistName?: string;
  trackName?: string;
};

const SearchItems = ({
  previewImage,
  previewUrl,
  genreName,
  trackPrize,
  artistName,
  trackName,
}: SearchItemsProps) => {
  return (
    <div className="search-items-container flex justify-start gap-4">
      <div className="thumbnail-container relative">
        <audio controls className="absolute -ml-2">
          <source src={previewUrl} type="audio/mpeg" />
        </audio>
        <img
          src={previewImage}
          alt="image-icon"
          className="w-full h-full rounded-md"
        />
      </div>
      <div className="flex flex-col gap-6 w-full">
        <div className=" order-1">
          <p className="font-roboto text-xs text-[#334155]">{artistName}</p>
          <p className=" font-roboto-bold text-sm">{trackName}</p>
        </div>
        <div className="order-2 flex justify-between">
          <div className="genre-text-container w-auto">
            <p className="genre-text">{genreName}</p>
          </div>
          <div className="flex items-center mr-3">
            <img src={DollarIcon} alt="dollar-icon" />
            <p className="prize">{trackPrize === -1 ? "Free" : trackPrize}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItems;
