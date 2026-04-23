'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Upload } from 'lucide-react';

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
              currentStep === step.id ? 'bg-primary text-white shadow-lg shadow-blue-200' : 'text-gray-400 hover:bg-gray-50'
            }`}
          >
            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${
              currentStep === step.id ? 'bg-white text-primary border-white' : 'bg-gray-100 text-gray-400 border-gray-100'
            }`}>
              {step.id}
            </span>
            <span className="font-semibold">{step.name}</span>
          </button>
        ))}
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-50 max-w-5xl min-h-[550px] flex flex-col justify-between">
        
        {/* STEP 1: BASIC INFO */}
        {currentStep === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {[
              { label: 'Property Type', placeholder: 'Select Property Type' },
              { label: 'Negotiable', placeholder: 'Select Negotiable' },
              { label: 'Price', placeholder: 'Example: 10000', isInput: true },
              { label: 'Ownership', placeholder: 'Select Ownership' },
              { label: 'Property Age', placeholder: 'Select Property Age' },
              { label: 'Property Approved', placeholder: 'Property Approved' },
              { label: 'Property Description', placeholder: '', isInput: true },
              { label: 'Bank Loan', placeholder: 'Bank Loan' },
            ].map((field, i) => (
              <div key={i} className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-500">{field.label}</label>
                {field.isInput ? (
                  <input type="text" placeholder={field.placeholder} className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-primary placeholder:text-gray-200" />
                ) : (
                  <div className="relative">
                    <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-400 outline-none focus:border-primary appearance-none cursor-pointer">
                      <option>{field.placeholder}</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={18} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* STEP 2: PROPERTY DETAIL */}
        {currentStep === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            {[
              { label: 'Total Area', placeholder: 'Example: 7500', isInput: true },
              { label: 'Plot Area', placeholder: 'Example: 8000', isInput: true },
              { label: 'No of Bedrooms', placeholder: 'Select No of Bedrooms' },
              { label: 'No of Bathrooms', placeholder: 'Select No of Bathrooms' },
              { label: 'No of Balconies', placeholder: 'Select No of Balconies' },
              { label: 'No of Floor', placeholder: 'Select No of Floor' },
              { label: 'Facing', placeholder: 'Select Facing' },
              { label: 'Kitchen Type', placeholder: 'Select Kitchen Type' },
            ].map((field, i) => (
              <div key={i} className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-500">{field.label}</label>
                {field.isInput ? (
                  <input type="text" placeholder={field.placeholder} className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-primary placeholder:text-gray-200" />
                ) : (
                  <div className="relative">
                    <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-400 outline-none focus:border-primary appearance-none cursor-pointer">
                      <option>{field.placeholder}</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={18} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* STEP 3: GENERAL INFO */}
        {currentStep === 3 && (
          <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-500">Property Image</label>
              <div className="border-2 border-dashed border-gray-200 rounded-2xl h-48 flex flex-col items-center justify-center gap-4 text-gray-300 hover:border-primary hover:text-primary transition-all cursor-pointer">
                <Upload size={40} />
                <span className="font-medium text-lg">Click to upload photos</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="flex flex-col gap-2">
                 <label className="text-sm font-bold text-gray-500">Property Video</label>
                 <input type="text" placeholder="YouTube Link" className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-primary placeholder:text-gray-200" />
               </div>
               <div className="flex flex-col gap-2">
                 <label className="text-sm font-bold text-gray-500">External Link</label>
                 <input type="text" placeholder="Example: www.property.com" className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-primary placeholder:text-gray-200" />
               </div>
            </div>
          </div>
        )}

        {/* STEP 4: LOCATION INFO */}
        {currentStep === 4 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            {[
              { label: 'State', placeholder: 'Select State' },
              { label: 'City', placeholder: 'Select City' },
              { label: 'Area', placeholder: 'Select Area' },
              { label: 'Pincode', placeholder: 'Example: 400001', isInput: true },
            ].map((field, i) => (
              <div key={i} className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-500">{field.label}</label>
                {field.isInput ? (
                  <input type="text" placeholder={field.placeholder} className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-primary placeholder:text-gray-200" />
                ) : (
                  <div className="relative">
                    <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-400 outline-none focus:border-primary appearance-none cursor-pointer">
                      <option>{field.placeholder}</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={18} />
                  </div>
                )}
              </div>
            ))}
            <div className="col-span-2 bg-gray-50 h-48 rounded-2xl flex items-center justify-center text-gray-300 font-bold border border-gray-100">
              [ MAP LOCATION WILL GO HERE ]
            </div>
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
