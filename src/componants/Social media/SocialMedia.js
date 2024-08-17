import { useEffect, useState } from "react";
import axios from "axios";
import {
  socialMedia,
  Social,
  Icon,
  P,
  SpanInfo1,
  SpanInfo2,
} from "./social.js";

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
        <Social item={i.id} key={i.id}>
          <Icon className={i.icon}></Icon>
          <P>
            <SpanInfo1 className="info1">{i.title}</SpanInfo1>
            <SpanInfo2 className="info2">{i.body}</SpanInfo2>
          </P>
        </Social>
      </>
    );
  });

  return (
    <>
      <socialMedia>
        <container>{myData}</container>
      </socialMedia>
    </>
  );
}

export default SocialMedia;
