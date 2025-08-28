
import MileStone from "./MileStone";

const roadmap = [
    {
       id: 1,
       name: "Project Kickoff",
       description: "Kick-off meeting and requirement gathering"
    },
    {
        id: 2,
        name: "Design",
        description: "Design and Prototyping"
     },
     {
        id: 3,
        name: "Development",
        description: "Development and Testing"
     },
     {
        id: 4,
        name: "Deployment",
        description: "Deployment and final Testing"
     },
     {
        id: 5,
        name: "Maintenance",
        description: "Maitenance and Support"
     },
]
import React from 'react'

export default function RoadMapSection() {
  return (
    <section className="max-w-80 mx-auto">
<h1 className="font-semibold text-3xl text-center mb-16">
   Roadmap </h1>{
      roadmap.map((roadmapItem,index)=>{
         return(
         <MileStone
         key={index}
         description={roadmapItem.description}
         title={roadmapItem.name}
         lastItem={index===roadmap.length-1}
         />
      )
      })
  
   }

    </section>
  )
}
