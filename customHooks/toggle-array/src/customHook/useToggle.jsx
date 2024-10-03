// import React from 'react';
// import { useState } from 'react';

// const useToggle = (array, initialState) => {
//      const [state, setState] = useState('')

//      function togglestate(){
//      setState(array[initialState])  
//      }


//   return (
//     [state, togglestate]
//   );
// }

// export default useToggle;
import { useState } from "react";

// Custom Hook: useToggleItems
function useToggleItems(initialValue, initialPosition = 0) {
  // Handle the initial position and ensure it's within bounds
  const [currentIndex, setCurrentIndex] = useState(initialPosition);

  // Function to toggle the state
  const toggleState = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % initialValue.length);
  };

  // Return the current item and the toggle function
  return [initialValue[currentIndex], toggleState];
}

export default useToggleItems;
