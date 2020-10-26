import React, { useEffect, useState } from "react";
import { Hello } from "../hello";
import Layout from "../layout/Layout";
import {
  DataType,
  dirtyDataArrayType,
  dirtyDataType,
  formattedDataArayType,
} from "../../types/DataTypes";
import data from "../../data/Survey_Information_Design_clean-parsed.json";

const PageOne = () => {
  const [data, setData] = useState<any[]>([]);
  const arrayOfArrays = data.map((data: DataType) => {
    return Object.entries(data);
  });

  let foo: string | number = "stirng";
  foo = 4;

  const arrayWithNumbers = arrayOfArrays.map(
    (arrayInArray: dirtyDataArrayType) => {
      const filteredArray = arrayInArray.filter((data) => {
        const num = parseInt(data[1]);
        if (!isNaN(num)) {
          return data;
        }
      });

      const convertedArray: formattedDataArayType = filteredArray.map(
        (data: dirtyDataType) => [data[0], parseInt(data[1])]
      );

      return convertedArray;
    }
  );

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://opendata.rdw.nl/resource/9c54-cmfx.json"
      );

      const json = await res.json();

      setData(data.concat(json));
      console.log(json);
    })();
  }, []);

  return (
    <div>
      <Layout>
        <h1>Page one</h1>
        {data && data.map((item: any) => <p>{item.areadesc}</p>)}
        <Hello />
      </Layout>
    </div>
  );
};

export default PageOne;
