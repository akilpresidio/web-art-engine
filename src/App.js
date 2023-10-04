import { useEffect, useState } from "react";
import logo from "../src/assets/Frame 3.svg";

import ImageUploaderCard from "./components/imageUpload/index.js";
import GenerateCode from "./components/generateCode/index.js";
import Loader from "./components/loader/index.js";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (message) setLoading(false);
  }, [message]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} height={"60px"} />
      </header>
      <div className="App-content">
        <h3>Web-Art-Engine</h3>
        <div className="main-content">
          <ImageUploaderCard
            response={(e) => setMessage(e)}
            loaderStatus={(e) => setLoading(e == "true" ? true : false)}
          />
          <Loader loading={loading} />
          <GenerateCode message={message} />
        </div>
      </div>
    </div>
  );
}

export default App;
