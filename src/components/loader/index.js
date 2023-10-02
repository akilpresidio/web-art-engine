import "./index.css";
import loader from "../../assets/1493.gif";
import loader1 from "../../assets/1493 5.svg";

const Loader = ({ loading }) => {
  return (
    <div className="content-loader">
      {loading ? (
        <img src={loader} height={"100px"} />
      ) : (
        <img src={loader1} height={"100px"} />
      )}
    </div>
  );
};

export default Loader;
