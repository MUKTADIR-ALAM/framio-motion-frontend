import React from "react";

export default function Team() {
  return (
    <div>
      <h2 className="text-4xl mt-30 mx-auto w-11/12 leading-20">Meet our Team</h2>

      {/* team section */}
      <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto ">
      {/* walid card */}
          <div className="flex flex-col shadow-sm   rounded-lg my-6 w-96">
            <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="profile-picture"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-1 text-xl font-semibold">
                Natalie Paisley
              </h4>
              <p className="text-sm font-semibold uppercase">
                Product Manager
              </p>
              
            </div>
            
          </div>
          <div className="flex flex-col shadow-sm   rounded-lg my-6 w-96">
            <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="profile-picture"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-1 text-xl font-semibold">
                Natalie Paisley
              </h4>
              <p className="text-sm font-semibold uppercase">
                Product Manager
              </p>
              
            </div>
            
          </div>
          <div className="flex flex-col shadow-sm   rounded-lg my-6 w-96">
            <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="profile-picture"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-1 text-xl font-semibold">
                Natalie Paisley
              </h4>
              <p className="text-sm font-semibold uppercase">
                Product Manager
              </p>
              
            </div>
            
          </div>



      </div>
    </div>
  );
}
