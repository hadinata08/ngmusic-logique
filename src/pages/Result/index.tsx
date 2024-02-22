import Headers from "../../components/headers";
import "./result-style.css";
import SearchItems from "./_components/search-items";
import { MusicDataType } from "../../types/MusicDataTypes";

type ResultProps = {
  searchValue?: string;
  visible: boolean;
  handleClickSearch: () => void;
  handleClickLoadMore: () => void;
  data: MusicDataType[];
  loading: boolean;
};

const Result = ({
  searchValue,
  visible,
  handleClickSearch,
  handleClickLoadMore,
  data,
  loading,
}: ResultProps) => {
  return (
    <>
      {visible && searchValue && (
        <div className="result-container w-full h-full min-h-full max-h-full">
          <Headers onClick={handleClickSearch} />

          <div className="flex my-11 justify-center">
            <p className="search-for-text">
              Search result for :{" "}
              <span className="keyword-text">{searchValue}</span>
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center justify-center">
            {data.map((item: MusicDataType, index: number) => (
              <SearchItems
                key={index}
                previewImage={item.artworkUrl100}
                previewUrl={item.previewUrl}
                genreName={item.primaryGenreName}
                trackPrize={item.trackPrice}
                artistName={item.artistName}
                trackName={item.trackName}
              />
            ))}

            <button
              className="load-more-container flex justify-center items-center"
              onClick={handleClickLoadMore}
            >
              {loading ? "Tunggu Sebentar..." : "Load More"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Result;
