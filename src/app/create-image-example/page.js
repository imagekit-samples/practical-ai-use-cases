'use client';

import { useState, useEffect } from 'react';
import { Image } from '@imagekit/next';
import { generateImageData as imageData, generateImageDataDefaultCategory as defaultCategory } from '../data/imageData';
import Link from "next/link";

export default function Home() {
  const numVariants = 1;
  const [category, setCategory] = useState(defaultCategory);
  const [loading, setLoading] = useState(Array(numVariants).fill(true));

  const image = imageData[category].url;
  const prompt = imageData[category].prompt;

  const handleCategoryChange = function(e) {
    setCategory(e.target.value);
  }

  return (
    <div>

      <Link href="/" className="absolute top-5 left-5">Home Page</Link>
      <main className="max-w-5xl mx-auto px-4 py-5 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center">Create images for ads, blogs, OG images</h1>
        <div className="flex flex-row items-center gap-3 mt-1 justify-center">
            <label htmlFor="category-dropdown">Example</label>
            <select name="category-dropdown" className="ml-2 mt-10 mb-5 text-xl border-gray-400 border-solid border-1 rounded p-3" onChange={handleCategoryChange} value={category}>
              {Object.keys(imageData).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
        </div> 
        <div className='mt-5 grid grid-cols-1 gap-4'>
          <div className="relative text-center">
            <h2 className="text-lg font-bold mb-2">Generated Image</h2>
            <div className="flex flex-row gap-2 items-start ">
            <Image className="output-images mx-auto" src={image} alt="Output" width={600} height={600} responsive={false} />
            <div className="flex flex-col gap-2 justify-center">
            <code width={750} className="flex flex-1" style={{overflowWrap: "anywhere", background: "#F1F1F1", padding: "10px"}}>
              {image}
            </code>
            <textarea
              name="transformation-input"
              className="mt-2 text-xl bg-white border-gray-400 border-solid border-1 rounded p-3 w-full h-[300px]"
              value={prompt}
              disabled
            />
            </div>
            </div>
            
          </div>
        
        </div>
      </main>
    </div>
  );
}
