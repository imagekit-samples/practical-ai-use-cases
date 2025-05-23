'use client';

import { useState, useCallback, useEffect } from 'react';
import { Image } from '@imagekit/next';
import { lifestyleImagesData as imageData, lifestyleImageDefaultCategory as defaultCategory, changeBGTransforms } from '../data/imageData';
import { Button } from "@/components/ui/button"
import { PiSpinnerGapThin } from "react-icons/pi";
import Link from "next/link"


export default function Home() {
  const numVariants = 3;
  const [category, setCategory] = useState(defaultCategory);
  const [transformations, setTransformations] = useState(changeBGTransforms[category]);
  const [transformationStrings, setTransformationStrings] = useState(Array(numVariants).fill(''));
  const [loading, setLoading] = useState(Array(numVariants).fill(true));

  const image = imageData[category];

  const handleTransformationChange = function (e) {
    const value = e.target.value;
    setTransformation(value);
  };

  const handleTransformationStringChange = function () {
    reloadOutputImages();
    setTransformationString(transformation);
  }

  const handleCategoryChange = function (e) {
    setCategory(e.target.value);
  }

  useEffect(() => {
    console.log(category);
    setTransformations(changeBGTransforms[category]);
    setTransformationStrings(Array(numVariants).fill(''));
  }, [category]);

  const reloadOutputImages = function () {
    const newLoadingState = Array(numVariants).fill(true);
    setLoading(newLoadingState);
  };

  return (
    <div>
      <Link href="/" className="absolute top-5 left-5">Home Page</Link>
      <main className="max-w-5xl mx-auto px-4 py-5 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center">Different Product Placements</h1>
        <div className="flex flex-row items-center gap-3 mt-8 items-start">
          <div className="flex flex-row items-center">
            <label htmlFor="category-dropdown" className="font-bold text-md mr-2">Category</label>
            <select name="category-dropdown" className="text-lg border border-gray-300 rounded p-2" onChange={(e) => setCategory(e.target.value)} value={category}>
              {Object.keys(imageData).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='mt-5 grid grid-cols-2 gap-8'>
          <div className="flex flex-col text-center">
            <h2 className="text-lg font-bold mb-2">Input Image</h2>
            <Image src={image} className="w-[400px] mx-auto" alt="Input Image" width={400} height={400} responsive={false} />
          </div>
          {[0, 1, 2].map((index) => (
            <div key={index} className="relative text-center">
              <h2 className="text-lg font-bold mb-2">Output Image {index + 1}</h2>
              {loading[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-[rgba(255,255,255,0.7)]">
                  <div className="w-10 h-10">
                    <PiSpinnerGapThin className='w-full h-full animate-spin' />
                  </div>
                </div>
              )}
              <Image className="output-images w-[400px] mx-auto" src={image} transformation={[{ "raw": transformationStrings[index] }]} alt={`Output ${index + 1}`} width={400} height={400} responsive={false} onLoad={() => {
                setLoading(prevLoading => {
                  const newLoadingState = [...prevLoading];
                  newLoadingState[index] = false;
                  return newLoadingState;
                });
              }} />
              <div className="flex flex-col mt-2 align-left">
                <textarea
                  id="transformation-input"
                  className="text-lg border border-gray-300 rounded p-2 w-full h-24 flex-1"
                  value={transformations[index]}
                  onChange={(e) => {
                    const newTransformations = [...transformations];
                    newTransformations[index] = e.target.value;
                    setTransformations(newTransformations);
                  }}
                />
                <Button variant="outline" className="mt-2 py-6 border-gray-200 text-lg shrink" onClick={(e) => {
                  const newTransformationStrings = [...transformationStrings];
                  newTransformationStrings[index] = transformations[index].trim();
                  setTransformationStrings(newTransformationStrings);
                }}>
                  Apply
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
