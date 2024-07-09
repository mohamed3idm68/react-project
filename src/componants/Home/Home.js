
import "./Home2.js"
import {HomeSection , HomeInfo , H2 , H4 , P , Span , Button} from "./Home2.js"


function Home() {
  return (
    <HomeSection>
      <div className="container">
        <HomeInfo>
          <H2 className="home-title margin-bottom">Mo eid</H2>
          <H4 className="home-info">Creative Director</H4>
          <P className="home-desc">
            Iam a professional <Span>UX Designer</Span> and Front-End Developer
            creating modern and resposive designs to Web and Mobile. Let us work
            together. Thank you.
          </P>
          <Button className="home-btn">Let's Begin</Button>
        </HomeInfo>
      </div>
    </HomeSection>
  );
}

export default Home;
