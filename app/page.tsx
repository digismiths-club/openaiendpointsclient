"use client";
import { useState } from "react";
// import { fetchChatResponse } from '@/utils/api';

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("Krutrim-spectre-v2");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const apiUrl =
      "https://openai-endpoints-60026948054.development.catalystserverless.in/server/openai_endpoints_function/chat";

    fetch(apiUrl, { method: "POST" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar?.classList.toggle("-translate-x-full");
  };

  return (
    <>
      {/* <span
        className="toggleButton absolute left-1 top-1 cursor-pointer "
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      </span>
      <div className="sidebar fixed left-0 top-0 w-1/5 bg-neutral-700 h-full transform -translate-x-full transition-transform duration-300 ease-in-out ">
        <div className="heading flex items-center justify-between mx-3">
          <h5 className="text-2xl font-bold text-white p-4">Krutrim</h5>
          <span
            className="filter invert cursor-pointer"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
        <div className="searchbox w-full h-2">
        <input
          type="text"
          placeholder="Search"
          className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
        />
        </div>
        <hr />
        <div className="historyList w-full mt-4">
          <div className=" text-center cursor-pointer text-white h-10 p-2 mx-2 rounded-xl hover:bg-neutral-400">
            <p className="text-xl">#1 component</p>
          </div>
          <div className=" text-center cursor-pointer text-white h-10 p-2 mx-2 rounded-xl hover:bg-neutral-400">
            <p className="text-xl">#1 component</p>
          </div>
          <div className=" text-center cursor-pointer text-white h-10 p-2 mx-2 rounded-xl hover:bg-neutral-400">
            <p className="text-xl">#1 component</p>
          </div>
          <div className=" text-center cursor-pointer text-white h-10 p-2 mx-2 rounded-xl hover:bg-neutral-400">
            <p className="text-xl">#1 component</p>
          </div>
          <div className=" text-center cursor-pointer text-white h-10 p-2 mx-2 rounded-xl hover:bg-neutral-400">
            <p className="text-xl">#1 component</p>
          </div>
        </div>
      </div> */}
    </>
    // <div className="home">
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={prompt}
    //       onChange={(e) => setPrompt(e.target.value)}
    //       placeholder="Enter prompt"
    //     />
    //     <select value={model} onChange={(e) => setModel(e.target.value)}>
    //       <option value="Krutrim-spectre-v2" defaultChecked>Krutrim</option>
    //       <option value="Mistral-7B-Instruct">Mistral-7B-Instruct</option>
    //       <option value="Meta-Llama-3-8B-Instruct">Meta-Llama-3-8B-Instruct</option>
    //     </select>
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
  );
}
