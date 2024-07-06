'use client'
import { useState } from 'react';
// import { fetchChatResponse } from '@/utils/api';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('Krutrim-spectre-v2');
  

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

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter prompt"
        />
        <select value={model} onChange={(e) => setModel(e.target.value)}>
          <option value="Krutrim-spectre-v2" defaultChecked>Krutrim</option>
          <option value="Mistral-7B-Instruct">Mistral-7B-Instruct</option>
          <option value="Meta-Llama-3-8B-Instruct">Meta-Llama-3-8B-Instruct</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
