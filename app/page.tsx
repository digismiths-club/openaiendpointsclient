'use client'
import { useState } from 'react';
import { fetchChatResponse } from '@/utils/api';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('Krutrim-spectre-v2');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetchChatResponse(prompt, model);
      console.log('Response from API:', response);
    } catch (error) {
      console.error('ERROR:', error);
    }
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
          <option value="text-davinci-003">Davinci</option>
          <option value="gpt-3.5-turbo">GPT 3.5</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
