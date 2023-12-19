"use client";

import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
const CreateContent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);
  const handleChange = (e, name) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.value);
        break;
      case "important":
        setImportant(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = {
      title,
      description,
      date,
      completed,
      important,
    };
    try {
      // const response = await fetch("http://127.0.0.1:3000/api/tasks", {
      //   method: "POST",
      //   body: JSON.stringify(task),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      const response = await axios.post(
        "http://127.0.0.1:3000/api/tasks",
        task
      );

      console.log(response);
      if (response && response.data && response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("Task created successfully!");
      }
    } catch (error) {
      toast.error("something went wrong!");
      console.log("error", error);
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="[&_input]:text-black">
        <h1 className="text-2xl text-center">Create a Task</h1>
        <div className="input-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            name="title"
            onChange={handleChange("title")}
            placeholder="e.g, Watch a video from Fireship."
          />
        </div>
        <div className="input-control">
          <label htmlFor="description">Description</label>
          <textarea
            value={description}
            onChange={handleChange("description")}
            name="description"
            id="description"
            rows={4}
            placeholder="e.g, Watch a video about Next.js Auth"
          ></textarea>
        </div>
        <div className="input-control">
          <label htmlFor="date">Date</label>
          <input
            value={date}
            onChange={handleChange("date")}
            type="date"
            name="date"
            id="date"
          />
        </div>
        <div className="input-control toggler">
          <label htmlFor="completed">Toggle Completed</label>
          <input
            value={completed.toString()}
            onChange={handleChange("completed")}
            type="checkbox"
            name="completed"
            id="completed"
          />
        </div>
        <div className="input-control toggler">
          <label htmlFor="important">Toggle Important</label>
          <input
            value={important.toString()}
            onChange={handleChange("important")}
            type="checkbox"
            name="important"
            id="important"
          />
        </div>

        <div className="submit-btn flex justify-end">
          <button
            type="submit"
            className="bg-green-400 hover:bg-green-500 py-2 px-10 rounded-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

// const CreateContentStyled = styled.form`
//   > h1 {
//     font-size: clamp(1.2rem, 5vw, 1.6rem);
//     font-weight: 600;
//   }

//   color: ${(props) => props.theme.colorGrey1};

//   .input-control {
//     position: relative;
//     margin: 1.6rem 0;
//     font-weight: 500;

//     @media screen and (max-width: 450px) {
//       margin: 1rem 0;
//     }

//     label {
//       margin-bottom: 0.5rem;
//       display: inline-block;
//       font-size: clamp(0.9rem, 5vw, 1.2rem);

//       span {
//         color: ${(props) => props.theme.colorGrey3};
//       }
//     }

//     input,
//     textarea {
//       width: 100%;
//       padding: 1rem;

//       resize: none;
//       background-color: ${(props) => props.theme.colorGreyDark};
//       color: ${(props) => props.theme.colorGrey2};
//       border-radius: 0.5rem;
//     }
//   }

//   .submit-btn button {
//     transition: all 0.35s ease-in-out;

//     @media screen and (max-width: 500px) {
//       font-size: 0.9rem !important;
//       padding: 0.6rem 1rem !important;

//       i {
//         font-size: 1.2rem !important;
//         margin-right: 0.5rem !important;
//       }
//     }

//     i {
//       color: ${(props) => props.theme.colorGrey0};
//     }

//     &:hover {
//       background: ${(props) => props.theme.colorPrimaryGreen} !important;
//       color: ${(props) => props.theme.colorWhite} !important;
//     }
//   }

//   .toggler {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;

//     cursor: pointer;

//     label {
//       flex: 1;
//     }

//     input {
//       width: initial;
//     }
//   }
// `;
export default CreateContent;
