import React from "react";

export default function Statics() {
  return (
    <div
    
      className=" border-gray-200 dark:border-gray-600"
    >
      <div
        className=" p-4 bg-white  md:p-8 dark:bg-gray-800"
        id="stats"
        role="tabpanel"
        aria-labelledby="stats-tab"

      >
        <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-4 dark:text-white sm:p-8">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">6+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Editors</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">100+</dt>
            <dd className="text-gray-500 dark:text-gray-400">
              Projects
            </dd>
          </div>

          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">10+</dt>
            <dd className="text-gray-500 dark:text-gray-400">
              Total companies
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">5+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Contries</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
