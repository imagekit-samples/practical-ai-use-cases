'use client';

import { useState, useCallback, useEffect } from 'react';
import { Image } from '@imagekit/next';
import { genFillImagesData as imageData, genFillDefaultCategory as defaultCategory } from '../data/imageData';
import { Button } from "@/components/ui/button"
import { PiSpinnerGapThin } from "react-icons/pi";
import Link from "next/link";

export default function Home() {
  const [category, setCategory] = useState(defaultCategory);
  const [transformation, setTransformation] = useState('');
  const [transformationString, setTransformationString] = useState(transformation);
  const [loading, setLoading] = useState(true);

  const image = imageData[category];

  const handleTransformationStringChange = (e) => {
    setLoading(true);
    setTransformationString(transformation);
  }

  useEffect(function() {
    setTransformation("");
    setTransformationString("");
  }, [category])

  return (
    <div>
      <Link href="/" className="absolute top-5 left-5">Home Page</Link>
      <main className="max-w-5xl mx-auto px-4 py-5 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center">Expanding images for different platforms</h1>
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
          <div className="flex-1 flex flex-col">
            <label htmlFor="transformation-input" className="text-md font-bold mb-1">Transformation</label>
            <textarea
              id="transformation-input"
              className="text-lg border border-gray-300 rounded p-2 w-full h-24"
              value={transformation}
              onChange={(e) => {
                setTransformation(e.target.value);
              }}
            />
            <div className="flex items-center gap-4 mt-2">
              <Button variant="outline" className="py-2 px-4 border border-gray-300 text-lg" onClick={handleTransformationStringChange}>
                Apply
              </Button>
            </div>
          </div>
        </div>
        <div className='mt-5 grid grid-cols-2 gap-4 items-start flex'>
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold mb-2">Input Image</h2>
            <div className="w-[400px] h-[600px] border-gray-400 border flex">
              <Image src={image} className="w-full my-auto" alt="Input Image" width={400} height={400} responsive={false} />
            </div>
            
          </div>
          <div className="relative flex flex-col items-center">
            <h2 className="text-lg font-bold mb-2">Output Image</h2>
            <div className="w-[400px] h-[600px] border-gray-400 border flex">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-[rgba(255,255,255,0.7)]">
                  <div className="w-10 h-10">
                    <PiSpinnerGapThin className='w-full h-full animate-spin' />
                  </div>
                </div>
              )}
              <Image className="output-images w-full my-auto" src={image} transformation={[{ "raw": transformationString }]} alt="Output Image" width={400} height={400} responsive={false} onLoad={() => {
                setLoading(false);
              }} onError={() => {
                setLoading(false);
              }} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
