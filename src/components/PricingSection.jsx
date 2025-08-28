import { pricingPlans } from "../data/pricing";
import PlanCard from "./PlanCard";
import TagLine from "./TagLine";
import React from 'react'

export default function PricingSection() {
  return (
    <div id="pricing" className="flex text-center p-10 items-center justify-center flex-col">
        <TagLine>Pricing</TagLine>
        <h2 className="font-extrabold text-3xl mb-8 pt-3">Flexible Pricing to fit your growth</h2>
        <div className="grid  mt-10 items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-sreen-xl">
        {pricingPlans.map((plan,index)=>{
        return(
            <PlanCard
            key={index}
            {...plan}
            />
        )
    })}
      </div>   
    </div>
  )
}
