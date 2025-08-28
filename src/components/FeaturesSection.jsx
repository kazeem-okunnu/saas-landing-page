import { features } from "../data/features";
import TagLine from "./TagLine";
import React from 'react'

export default function FeaturesSection() {
  return (
    <div id="features" className="flex items-center p-10 justify-center flex-col">
        <TagLine>Features</TagLine>
        <h2 className="font-extrabold text-3xl mb-8 pt-3">Intelligent Form Building </h2>
        <div className="mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
            {features.map((feature,index)=>{
                return(
                    <div key={index} className=" bg-white border-indigo-400/30 rounded-lg shadow-lg p-6 h-full
                     flex  space-x-4">
                      <div className="">
                        <h3 className="font-bold text-xl">{feature.title}</h3>
                        <p className="text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
