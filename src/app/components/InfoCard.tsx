import React from 'react';

export default function InfoCard() {
  return (
    <div className="p-4 sm:p-6 md:p-10 bg-blue-100 border-2 rounded-2xl w-full sm:w-[92%] mx-auto h-auto sm:h-[200px] my-8 sm:my-[70px]">
      <h2 className="text-lg sm:text-2xl font-semibold text-center mb-2 text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget sapien in metus interdum dignissim.
      </h2>
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget sapien in metus interdum dignissim. Sed non turpis nec justo bibendum fermentum. Etiam vel urna in magna sodales fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget sapien in metus interdum dignissim. Sed non turpis nec justo bibendum fermentum. Etiam vel urna in magna sodales fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
      </p>
    </div>
  );
}