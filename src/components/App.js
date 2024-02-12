import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  // State to manage the selected shape
  const [selectedShape, setSelectedShape] = useState('Square');

  // State to manage the shapes added
  const [shapes, setShapes] = useState([]);

  // Function to handle adding shapes
  const addShape = () => {
    // Generate a unique identifier for the shape
    const id = Date.now();

    // Add the selected shape to the shapes array
    setShapes(prevShapes => [
      ...prevShapes,
      { id, shape: selectedShape }
    ]);
  };

  // Function to handle changing the selected shape
  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  return (
    <div id="main">
      <div id="shape-creator">
        {/* Select element for choosing shape */}
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
        </select>

        {/* Button to add shape */}
        <button onClick={addShape}>Add Shape</button>
      </div>
      
      <div id="shapes-holder">
        {/* Display added shapes */}
        {shapes.map(shape => (
          <div key={shape.id} className={shape.shape.toLowerCase()}>
            {shape.shape} {shape.id}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
