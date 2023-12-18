import React from 'react';

const InputSearch = () => {
    const primaryColor = 'rgba(142, 85, 235, 0.8)';
    const boxColor = 'rgba(245, 245, 245, 0.8)';
  return (
    <div className="p-1 m-1 flex justify-center items-center h-20 bg-primary" style={{ backgroundColor: primaryColor }}>
      <div className="max-w-2xl w-full p-2 flex items-center bg-white rounded-md" style={{ background: `linear-gradient(to right, 'rgba(108, 64, 180, 0.8)', ${boxColor})` }}>
      <img className="h-5 w-5 text-gray-400 mr-2" src='images/search-bold.svg' alt="Search Icon" />
        <input
          className="w-full h-10 px-4 rounded-md bg-white text-gray-800 border border-primary focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Search"
          spellCheck="false"
          style={{ borderColor: primaryColor }}
        />
      </div>
    </div>
  );
};

// .bg-search-bold {
//     background-image: url(../public/search-bold.svg);
//   }
  

export default InputSearch;