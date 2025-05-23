'use client';

import { useState, useCallback, useEffect } from 'react';
import { Image } from '@imagekit/next';
import { singleAdImagesData as imageData, singleAdDefaultCategory as defaultCategory } from '../data/imageData';
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
    setTransformationString(transformation.replace(/\n/g,":"));
  }

  useEffect(function() {
    setTransformation("");
    setTransformationString("");
  }, [category])

  return (
    <div>
      <Link href="/" className="absolute top-5 left-5">Home Page</Link>
      <main className="max-w-5xl mx-auto px-4 py-5 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center">Creating an ad creative with overlays</h1>
        <p>Add the transformation `l-image,i-ik_canvas,e-gradient-from-00000000_to-00000090,w-bw,h-400,lfo-bottom,l-end:l-text,i-Mega Sale,co-FFFFFF,fs-108,tg-b,lx-40,ly-N150,l-end:l-text,i-40% off on backpacks,co-FFFFFF,fs-53,lx-40,ly-N70,l-end:l-image,i-imagekit_logo.png,w-300,ly-40,lx-N40,l-end` to the image to change it into an ad banner</p>
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
              className="text-lg border border-gray-300 rounded p-2 w-full h-30"
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
        <div className='mt-2 grid grid-cols-1 gap-4 items-start flex'>
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold mb-2">Output Image</h2>
            <div className="w-[600px] h-[600px] flex">
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
