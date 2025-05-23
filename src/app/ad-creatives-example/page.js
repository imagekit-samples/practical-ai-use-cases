'use client';

import { useState, useCallback, useEffect } from 'react';
import { Image } from '@imagekit/next';
import { adCreativesImagesData as imageData, adCreativesDefaultCategory as defaultCategory } from '../data/imageData';
import { Button } from "@/components/ui/button"
import { PiSpinnerGapThin } from "react-icons/pi";
import Link from "next/link";

export default function Home() {
  const [category, setCategory] = useState(defaultCategory);
  const images = imageData[category];

  return (
    <div>
      <Link href="/" className="absolute top-5 left-5">Home Page</Link>
      <main className="max-w-5xl mx-auto px-4 py-5 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center">Ad Creative Examples</h1>
        <div className="flex flex-row items-center gap-3 mt-8 items-start">
          <div className="flex flex-col">
            <label htmlFor="category-dropdown" className="font-bold text-md mb-1 w-40">Category</label>
            <select name="category-dropdown" className="text-lg border border-gray-300 rounded p-2" onChange={(e) => setCategory(e.target.value)} value={category}>
              {Object.keys(imageData).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='mt-5 grid grid-cols-2 gap-4 items-end  flex'>
          {images.map((imageObj, index) => (
          <div key={index} className="relative flex flex-col items-center ">
            <h2 className="text-lg font-bold mb-2">{imageObj.type}</h2>
            <code className="text-sm p-2 bg-gray-100 w-full">{imageObj.prompt}</code>
            <Image className="output-images w-full my-auto" src={imageObj.url} alt={`Output Image ${index+1}`} width={500} height={500} responsive={false} />
            
          </div>
          ))}
        </div>
      </main>
    </div>
  );
}
