import axios from "axios";
import React, { useEffect, useState } from "react";

export const Edit = (props) => {
  console.log(props);
  const [inputData, setInputData] = useState({
    title: "",
    content: "",
  });
  useEffect(() => {
    setInputData({
      title: props.tdata.title,
      content: props.tdata.content,
    });
  }, [props]);

  const inputHandler = (e) => {
    const val = e.target.value;
    const name = e.target.name;

    setInputData({ ...inputData, [name]: val });
  };

  const updatePost = async (e) => {
    e.preventDefault();
    console.log(inputData);
    const url = `https://hashtags-n-mentions.herokuapp.com/api/post/${props.id}`;
    await axios.put(url, inputData, {
      createdAt: new Date().getTime(),
    });
    window.location.reload();
  };

  return (
    <>
      {/* <!-- The Modal --> */}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}

            <div className="modal-header">
              <h4 className="modal-title">Edit Data</h4>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <form onSubmit={updatePost}>
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
                  <label htmlFor="title" className="form-label">
                    Content
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Enter Your Content Here"
                    id="comment"
                    rows="3"
                    name="content"
                    onChange={inputHandler}
                    value={inputData.content}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
