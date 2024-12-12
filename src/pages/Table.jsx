import React, { useState } from "react";
import { useEffect } from "react";

const Table = () => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await fetch("https://fakestoreapi.com/products");
      const data = await result.json();
      setProductData(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("productData", productData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col gap-10 p-10 items-center">
      <h3 className="text-3xl text-blue-800 font-bold">Product Data</h3>
      <table>
        <tr>
          <th className="px-5 py-3 border-b-2 border-blue-300 bg-gray-200 text-left capitalize">
            Title
          </th>
          <th className="px-5 py-3 border-b-2 border-blue-300 bg-gray-200 text-left capitalize">
            category
          </th>
          <th className="px-5 py-3 border-b-2 border-blue-300 bg-gray-200 text-left capitalize">
            price
          </th>
          <th className="px-5 py-3 border-b-2 border-blue-300 bg-gray-200 text-left capitalize">
            description
          </th>
          <th className="px-5 py-3 border-b-2 border-blue-300 bg-gray-200 text-left capitalize">
            Rating
          </th>
        </tr>
        {productData.map((item) => {
          return (
            <tr>
              <td className="tableRow">{item.title}</td>
              <td className="tableRow">{item.category}</td>
              <td className="tableRow">{item.price}</td>
              <td className="tableRow">{item.description}</td>
              <td className="tableRow">{item?.rating?.rate}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
