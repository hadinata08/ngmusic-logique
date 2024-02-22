import { NgMusicIcon } from "../../assets";
import Loading from "../../components/loading";
import "./search-style.css";

type SearchProps = {
  visible: boolean;
  searchValue?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  loading?: boolean;
};

const Search = ({
  handleChange,
  visible,
  searchValue,
  onSearch,
  loading,
}: SearchProps) => {
  return (
    <>
      {visible && (
        <div className="search-container w-full h-full flex flex-col items-center justify-center">
          <img src={NgMusicIcon} alt="ngmusic-icon" />

          {loading ? (
            <Loading />
          ) : (
            <div className="flex flex-col absolute bottom-10">
              <input
                type="text"
                className="search-input relative"
                onChange={(e) => handleChange(e)}
                placeholder="Artist / Album / Title"
              />

              <button
                className="search-button"
                disabled={!searchValue}
                onClick={onSearch}
              >
                Search
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Search;
