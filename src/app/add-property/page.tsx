'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const steps = [
  { id: 1, name: 'Basic Info' },
  { id: 2, name: 'Property Detail' },
  { id: 3, name: 'General Info' },
  { id: 4, name: 'Location Info' },
];

export default function AddPropertyPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-xl font-bold text-gray-500 uppercase tracking-wide">Add New Property</h1>

      {/* Step Indicator */}
      <div className="bg-white rounded-full p-2 flex items-center justify-between shadow-sm border border-gray-50 max-w-4xl">
        {steps.map((step) => (
          <button 
            key={step.id} 
            onClick={() => setCurrentStep(step.id)}
            className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all outline-none ${
              currentStep === step.id 
                ? 'bg-primary text-white shadow-lg shadow-blue-200' 
                : 'text-gray-400 hover:bg-gray-50'
            }`}
          >
            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${
              currentStep === step.id 
                ? 'bg-white text-primary border-white' 
                : 'bg-gray-100 text-gray-400 border-gray-100'
            }`}>
              {step.id}
            </span>
            <span className="font-semibold">{step.name}</span>
          </button>
        ))}
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-50 max-w-5xl min-h-[500px] flex flex-col justify-between">
        
        {/* Step 1 Content */}
        {currentStep === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-500">Property Type</label>
              <select className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-400 outline-none focus:border-primary appearance-none cursor-pointer">
                <option>Select Property Type</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-500">Negotiable</label>
              <select className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-400 outline-none focus:border-primary appearance-none cursor-pointer">
                <option>Select Negotiable</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-500">Price</label>
              <input type="text" placeholder="Example: 10000" className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-primary placeholder:text-gray-200" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-500">Ownership</label>
              <select className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-400 outline-none focus:border-primary appearance-none cursor-pointer">
                <option>Select Ownership</option>
              </select>
            </div>
          </div>
        )}

        {/* Placeholder for other steps */}
        {currentStep > 1 && (
          <div className="flex flex-col items-center justify-center gap-4 py-20 text-gray-300 animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold">{currentStep}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-400">Step {currentStep}: {steps[currentStep-1].name}</h2>
            <p>The fields for this section will be added here.</p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-16">
          <Link href="/" className="bg-primary text-white px-12 py-4 rounded-full font-bold shadow-lg shadow-blue-100 hover:scale-[1.02] transition-all text-center min-w-[200px]">
            Cancel
          </Link>
          <button 
            onClick={() => currentStep < 4 && setCurrentStep(currentStep + 1)}
            className="bg-secondary text-white px-12 py-4 rounded-full font-bold shadow-lg shadow-orange-100 hover:scale-[1.02] transition-all min-w-[200px]"
          >
            {currentStep === 4 ? 'Submit' : 'Save & Continue'}
          </button>
        </div>
      </div>
    </div>
  );
}
