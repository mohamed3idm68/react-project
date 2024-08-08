import { useEffect, useState } from "react";
import "./social.css";
import axios from "axios";

function SocialMedia() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("../js/data.json").then((res) => {
      setData(res.data.social);
    });
  }, []);

  const myData = data.map((i) => {
    return (
      <>
        <div className="social face twitter pin" >
          <i className={i.icon}></i>
          <p>
            <span className="info1">{i.title}</span>
            <span className="info2">{i.body}</span>
          </p>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="social-media">
         {myData}
      </div>
    </>
  );
}

export default SocialMedia;
