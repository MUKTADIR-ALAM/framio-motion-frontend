import React from "react";

export default function Team() {
  return (
    <div>
      <h2 className="text-4xl mt-30 mx-auto w-11/12 leading-20">Meet our Team</h2>

      {/* team section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto ">
     


          <div className="flex flex-col shadow-sm   rounded-lg my-6 ">
            <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src="https://i.ibb.co.com/0b1VSNf/880-1966-151386-20250423-000233.jpg"
                alt="profile-picture"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-1 text-xl font-semibold">
                Abid Hasan Ovi
              </h4>
              <p className="text-sm font-light uppercase">
              Founder & CEO
              </p>
              
            </div>
            
          </div>


 {/* walid card */}
          <div className="flex flex-col shadow-sm   rounded-lg my-6">
            <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
              <img
                className="w-full h-full object-cover "
                src="https://i.ibb.co.com/Z68tgnWt/Untitled-design-1.jpg"
                alt="profile-picture"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-1 text-xl font-semibold">
                Waliullah walid
              </h4>
              <p className="text-sm font-light uppercase">
               Founder & CEO
              </p>
              
            </div>
            
          </div>


          <div className="flex flex-col shadow-sm   rounded-lg my-6">
            <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src="https://i.ibb.co.com/ZRbMVCK2/Whats-App-Image-2025-04-23-at-12-25-12-AM.jpg"
                alt="profile-picture"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-1 text-xl font-semibold">
              Nihad Al Nayeem
              </h4>
              <p className="text-sm font-light uppercase">
              Chief Creative Officer (CCO)
              </p>
              
            </div>
            
          </div>



      </div>
    </div>
  );
}
