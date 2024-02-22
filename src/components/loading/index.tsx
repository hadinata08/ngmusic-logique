import { SpinnerIcon } from "../../assets";

const Loading = () => {
  return (
    <div className="absolute">
      <img
        src={SpinnerIcon}
        alt="spinner-loading"
        className="w-20 animate-spin"
      />
    </div>
  );
};

export default Loading;
