import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Blog = () => {
  const location = useLocation();
  const { title } = useParams(); // Get the title from the URL params

  console.log("location", location.state);
  const data = location.state;

  if (!data) {
    // Handle case where data is not available
    return <div>No blog post data available. Title: {title}</div>;
  }

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="w-[50%] m-auto p-10 flex flex-col gap-8">
        <img
          src={data.img}
          className="w-full h-[40vh] object-cover object-bottom rounded-lg shadow-lg"
        />
        <h3 className="text-6xl font-semibold text-indigo-900">{data.title}</h3>
        <div className="flex justify-start items-center gap-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHxJ64SHKQ1Kqcdv3MfqmKlhJwOnXBEuqlDHCXbjer5bmY51apb73sYIBKXoIoeTKIfU&usqp=CAU"
            className="rounded-full w-24 object-cover"
          />
          <div className="flex flex-col">
            <span className="text-indigo-500">
              Written by : <strong>Harshit Jain</strong>
            </span>
            <span className="text-indigo-400">Published on May 27th, 2024</span>
          </div>
        </div>
        {data.content.map((block, index) => {
          switch (block.type) {
            case "heading-2":
              return (
                <h2
                  className="text-indigo-900 text-2xl font-semibold"
                  key={index}
                >
                  {block.text}
                </h2>
              );
            case "paragraph":
              return (
                <p className="text-slate-600 text-md" key={index}>
                  {block.text}
                </p>
              );
            case "image":
              return (
                <img
                  src={block.img}
                  alt={block.title}
                  className="w-full h-96 object-cover rounded"
                />
              );
            case "bullet":
              return (
                <ul key={index} className="list-disc max-w-[90%] m-auto">
                  {block.items.map((item, idx) => (
                    <li key={idx} className="text-slate-600 text-md">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Blog;
