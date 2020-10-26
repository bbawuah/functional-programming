import React, { useEffect } from "react";
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
  const arrayOfArrays = data.map((data: DataType) => {
    return Object.entries(data);
  });

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
    console.log(arrayWithNumbers);
  });

  return (
    <div>
      <Layout>
        <h1>Page one</h1>
        <Hello />
      </Layout>
    </div>
  );
};

export default PageOne;
