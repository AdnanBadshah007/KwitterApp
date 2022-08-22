import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Edit } from "./Edit";

export const View = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const [tdata, settData] = useState({
    title: "",
    content: "",
  });

  let getData = async () => {
    let url = "https://hashtags-n-mentions.herokuapp.com/api/posts";
    const response = await axios.get(url);

    const filterData = response.data.posts.find((items) => {
      return items._id === id;
    });

    setData(filterData);
  };

  useEffect(() => {
    getData();
  }, []);

  const viewData = (data) => {
    settData(data);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 mx-auto">
            <div className="card" style={{ width: "400px" }}>
              <div className="card-body">
                <h4 className="card-title">{data.title}</h4>
                <p className="card-text">{data.content}</p>
                <a
                  href="/"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                  onClick={() => {
                    viewData(data);
                  }}
                >
                  Edit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Edit id={id} tdata={tdata} />
    </>
  );
};
