import TagLine from "./TagLine";

import React from 'react'

export default function TestimonialsSection() {
  return (
    <section id="about" className="flex justify-center items-center flex-col max-sm:p-10">
      <TagLine>Testimonials</TagLine>
      <h2 className="text-3xl font-bold text-center mt-3 mb-8">what developers say about us</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-xl tet-left">
        <div className="grid gap-4">
          <div className="border rounded-lg bg-[#e0e0e0] backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img src="/testimonials/1.png" className="w-12 h-12 rounded-full" />
              <p>user</p>
            </div>
            <p className="text-sm space-y-4 text-gray-600">
              <span>
                The SaaS boilerplate transformed the way we build and launch projects.
                What used to take weeks now takes days! The built-in authentication,
                payment integration, and responsive UI components saved us countless
                hours of development. It's clean, scalable, and incredibly developer-friendly.
                Highly recommended for anyone looking to jumpstart their SaaS business!
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-[#e0e0e0] backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img src="/testimonials/2.png" className="w-12 h-12 rounded-full" />
              <p>user</p>
            </div>
            <p className="text-sm space-y-4 text-gray-600">
              <span>
                I was blown away by how seamless everything was. The boilerplate
                handled everything from user management to subscription billing
                right out of the box. We were able to focus entirely on our product’s
                unique features instead of reinventing the wheel. It’s a game-changer
                for startups!
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-[#e0e0e0] backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img src="/testimonials/3.png" className="w-12 h-12 rounded-full" />
              <p>user</p>
            </div>
            <p className="text-sm space-y-4 text-gray-600">
              <span>
                This boilerplate is a developer's dream! The codebase is
                clean and well-documented, making it easy to customize.
                We launched our MVP in record time and felt confident knowing
                the foundational pieces were rock-solid. Absolutely worth it!
              </span>
            </p>
          </div>
        </div>
       
        <div className="grid gap-4">
          <div className="border rounded-lg bg-[#e0e0e0] backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img src="/testimonials/4.png" className="w-12 h-12 rounded-full" />
              <p>user</p>
            </div>
            <p className="text-sm space-y-4 text-gray-600">
              <span>
              The SaaS boilerplate is a lifesaver! It has all the essentials
               baked in—authentication, payments, and even email templates.
                Our team saved months of work, and the end result feels professional
                 and robust. We couldn’t have scaled this quickly without it!
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-[#e0e0e0] backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img src="/testimonials/5.png" className="w-12 h-12 rounded-full" />
              <p>user</p>
            </div>
            <p className="text-sm space-y-4 text-gray-600">
              <span>
              I’ve used a lot of starter templates in the past, but this one is on another
               level. The attention to detail, from the intuitive UI to the backend scalability,
                is outstanding. It’s the perfect foundation for building modern SaaS apps.
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-[#e0e0e0] backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img src="/testimonials/6.png" className="w-12 h-12 rounded-full" />
              <p>user</p>
            </div>
            <p className="text-sm space-y-4 text-gray-600">
              <span>
              If you're serious about launching a SaaS product, this is a must-have.
               The boilerplate takes care of all the repetitive tasks, letting you
                focus on what truly matters: your core features. I only wish I’d discovered
                 it sooner!
              </span>
            </p>
          </div>
        </div>
        
        
        <div className="grid gap-4">
          <div className="border rounded-lg bg-[#e0e0e0] backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img src="/testimonials/7.png" className="w-12 h-12 rounded-full" />
              <p>user</p>
            </div>
            <p className="text-sm space-y-4 text-gray-600">
              <span>
              The SaaS boilerplate is a lifesaver! It has all the essentials
               baked in—authentication, payments, and even email templates.
                Our team saved months of work, and the end result feels professional
                 and robust. We couldn’t have scaled this quickly without it!
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-[#e0e0e0] backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img src="/testimonials/8.png" className="w-12 h-12 rounded-full" />
              <p>user</p>
            </div>
            <p className="text-sm space-y-4 text-gray-600">
              <span>
              I’ve used a lot of starter templates in the past, but this 
              one is on another level. The attention to detail, from the
               intuitive UI to the backend scalability, is outstanding.
                It’s the perfect foundation for building modern SaaS apps
              </span>
            </p>
          </div>
          <div className="border rounded-lg bg-[#e0e0e0] backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img src="/testimonials/9.png" className="w-12 h-12 rounded-full" />
              <p>user</p>
            </div>
            <p className="text-sm space-y-4 text-gray-600">
              <span>
                if you're serious about launching a SaaS product, this is a
                 must-have. The boilerplate takes care of all the repetitive 
                 tasks, letting you focus on what truly matters: your core features.
                  I only wish I’d discovered it sooner!
              </span>
            </p>
          </div>
        </div>
        </div>
      
    </section>
  )
}
