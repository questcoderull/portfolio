import React, { useState } from "react";

const App = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const handleCountOne = () => {
    const incresedCountOne = countOne + 10;
    setCountOne(incresedCountOne);
  };
  const handleCountTwo = () => {
    const incresedCountTwo = countTwo + 2;
    setCountTwo(incresedCountTwo);
  };

  const handleReset = (num) => {
    if (num === 1) {
      setCountOne(0);
    } else if (num === 2) {
      setCountTwo(0);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <p>
          Add one
          <button
            onClick={handleCountOne}
            className="py-2 px-10 rounded-sm bg-secondary cursor-pointer border text-center"
          >
            {countOne}
          </button>
          <button onClick={() => handleReset(1)}>Reset</button>
        </p>
        <p>
          Add two
          <button
            onClick={handleCountTwo}
            className="py-2 px-10 rounded-sm bg-secondary cursor-pointer border text-center"
          >
            {countTwo}
          </button>
          <button onClick={() => handleReset(2)}>Reset</button>
        </p>
      </div>
    </div>
  );
};

export default App;
