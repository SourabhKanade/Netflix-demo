import React from "react";
import Card from "./Card";
import Data from "./Data";

const App = () => (
  <>
    <h1 className="heading_style"> Top list of series </h1>
    {Data.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          cname={val.cname}
          title={val.title}
          link={val.link}
        />
      );
    })}
  </>
);
export default App;