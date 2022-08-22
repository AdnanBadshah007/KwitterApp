import axios from "axios";
import React, { useState } from "react";

export const NewPost = () => {
  const [inputData, SetInputData] = useState({
    title: "",
    content: "",
  });

  const inputHandler = (e) => {
    const val = e.target.value;
    const name = e.target.name;

    SetInputData({ ...inputData, [name]: val });
  };

  const postData = async (e) => {
    e.preventDefault();
    const url = "https://hashtags-n-mentions.herokuapp.com/api/post";
    await axios.post(url, {
      title: inputData.title,
      content: inputData.content,
      createdAt: new Date().getTime().toLocaleString(),
    });

    SetInputData({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="row">
        <div className="col-4 mx-auto mt-5">
          <form onSubmit={postData}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter Your Title Here"
                name="title"
                onChange={inputHandler}
                value={inputData.title}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Enter Your Content Here"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={inputHandler}
                value={inputData.content}
                name="content"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
