import React from 'react';

export default function ProjectBanner({projectName, projectDesc}) {
  return (
    <div className="bg-gray-900 bg-opacity-60 w-full h-full flex flex-col items-center justify-center ">
    <h1 className="md:text-2xl text-lg font-bold text-white">{projectName}</h1>
    <p className="text-gray-200">{projectDesc}</p>
</div>
  );
}
