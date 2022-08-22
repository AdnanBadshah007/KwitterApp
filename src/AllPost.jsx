import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const AllPost = () => {
  const [apiData, setInputData] = useState([]);

  let getData = async () => {
    let url = "https://hashtags-n-mentions.herokuapp.com/api/posts";
    const response = await axios.get(url);
    // console.log(response.data.posts);
    setInputData(response.data.posts);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {apiData.map((items, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card" style={{ width: "400px" }}>
                  <div className="card-body">
                    <h4 className="card-title">{items.title}</h4>
                    <p className="card-text">{items.content}</p>
                    <p className="card-text">{items.createdAt}</p>
                    <Link to={`/view/${items._id}`} className="btn btn-primary">
                      View
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
