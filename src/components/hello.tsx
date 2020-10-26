import React, { useContext } from "react";
import { Button } from "@material-ui/core";

interface Props {}

export const Hello: React.FC<Props> = () => {
  return (
    <div className="hello">
      <div className="greeting">
        <h1>Hoi</h1>
        <div className="wrapper"></div>
      </div>
    </div>
  );
};
