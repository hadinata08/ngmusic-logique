import { useCallback, useState } from "react";
import Result from "./pages/Result";
import Search from "./pages/Search";
import { MusicDataType } from "./types/MusicDataTypes";

const App = () => {
  const [isShowSearch, setIsShowSearch] = useState(true);
  const [isShowResult, setIsShowResult] = useState(false);
  const [limit, setLimit] = useState(4);
  const [data, setData] = useState<MusicDataType[]>([]);
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchItunesData = async (searchValue: string) => {
    setLoading(true);
    const response = await fetch(
      `https://itunes.apple.com/search?term=${searchValue}&entity=song&limit=${limit}`
    );
    const data = await response.json();
    setData(data.results);
    setLoading(false);
  };

  const handleChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    []
  );

  const onSearch = useCallback(async () => {
    await fetchItunesData(value);
    setIsShowSearch(false);
    setIsShowResult(true);
  }, [fetchItunesData, value]);

  const handleClickSearch = useCallback(() => {
    setValue("");
    setLimit(4);
    setIsShowSearch(true);
    setIsShowResult(false);
  }, []);

  const handleClickLoadMore = useCallback(async () => {
    setLimit((prev) => prev + 4);
    await fetchItunesData(value);
  }, [fetchItunesData, value]);

  return (
    <>
      <Search
        visible={isShowSearch}
        handleChange={handleChangeSearch}
        searchValue={value}
        onSearch={onSearch}
        loading={loading}
      />
      <Result
        visible={isShowResult}
        searchValue={value}
        handleClickSearch={handleClickSearch}
        data={data}
        handleClickLoadMore={handleClickLoadMore}
        loading={loading}
      />
    </>
  );
};

export default App;
