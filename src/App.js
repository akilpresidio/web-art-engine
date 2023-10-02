import { useEffect, useState } from "react";
import logo from "../src/assets/Frame 3.svg";

import ImageUploaderCard from "./components/imageUpload/index.js";
import GenerateCode from "./components/generateCode/index.js";
import Loader from "./components/loader/index.js";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(message);
  //   fetch("http://localhost:5000/", {
  //     method: "post",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify({ message }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setResponse(`<p>${data.message.trim()}</p>`));
  // };

  useEffect(() => {
    if (message) setLoading(false);
  }, [message]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} height={"60px"} />
      </header>
      <div className="App-content">
        {/* <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setMessage(e.target.value)} />
          <button type="submit">Submit</button>
        </form> */}
        <h3>Web-Art-Engine</h3>
        <div className="main-content">
          <ImageUploaderCard
            response={(e) => setMessage(e)}
            loaderStatus={(e) => setLoading(e == "true" ? true : false)}
          />
          <Loader loading={loading} />
          <GenerateCode message={message} />
        </div>
        {/* {console.log(response)} */}
      </div>
    </div>
  );
}

export default App;
