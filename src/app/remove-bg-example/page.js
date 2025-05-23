'use client';

import { useState, useCallback, useEffect } from 'react';
import { Image } from '@imagekit/next';
import { removeBGData as imageData, defaultCategory } from '../data/imageData';
import { Button } from "@/components/ui/button"
import { PiSpinnerGapThin } from "react-icons/pi";
import Link  from "next/link"

export default function Home() {
  const [category, setCategory] = useState(defaultCategory);
  const [transformation, setTransformation] = useState('');
  const [transformationString, setTransformationString] = useState(transformation);
  const images = imageData[category];
  const [loading, setLoading] = useState(Array(images.length).fill(true));

  const handleTransformationChange = function (e) {
    const value = e.target.value;
    setTransformation(value);
  };

  const handleTransformationStringChange = function () {
    setTransformationString(transformation);
  }

  const reloadOutputImages = function () {
    const newLoadingState = Array(images.length).fill(true);
    setLoading(newLoadingState);
  };

  return (
    <div>
      <Link href="/" className="absolute top-5 left-5">Home Page</Link>
      <main className="max-w-5xl mx-auto px-4 py-5 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center">Standardized images for your website</h1>
        <p>Add the transformation `e-removedotbg:bg-F1F1F1:t-true,w-600,h-600,c-at_max:w-1000,h-1000,cm-pad_extract,bg-F1F1F1` to create grey background images with identical proportions.</p>
        <div className="flex flex-row items-center gap-3 mt-8 items-start">
          <div className="flex flex-col">
            <label htmlFor="category-dropdown" className="font-bold text-md mb-1">Category</label>
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
              onChange={handleTransformationChange}
            />
            <div className="flex items-center gap-4 mt-2">
              <Button variant="outline" className="py-2 px-4 border border-gray-300 text-lg" onClick={handleTransformationStringChange}>
                Apply
              </Button>
              <Button variant="outline" className="py-2 px-4 border border-gray-300 text-lg" onClick={reloadOutputImages}>
                Refresh
              </Button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-2 mt-5'>
          {images.map((url, index) => (
            <Image key={index} src={url} alt={`Input ${index + 1}`} width={300} height={300} responsive={false} />
          ))}
        </div>
        <div className='grid grid-cols-4 gap-4 mt-5'>
          {images.map((url, index) => (
            <div key={index} className="relative">
              {loading[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-[rgba(255,255,255,0.7)]">
                  <div className="w-10 h-10">
                    <PiSpinnerGapThin className='w-full h-full animate-spin' />
                  </div>
                </div>
              )}
              <Image className="output-images" src={url} transformation={[{ "raw": transformationString }]} alt={`Output ${index + 1}`} width={300} height={300} responsive={false} onLoad={() => {
                setLoading(prevLoading => {
                  const newLoadingState = [...prevLoading];
                  newLoadingState[index] = false;
                  return newLoadingState;
                });
              }} onError={() => {
                setLoading(prevLoading => {
                  const newLoadingState = [...prevLoading];
                  newLoadingState[index] = false;
                  return newLoadingState;
                });
              }} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
