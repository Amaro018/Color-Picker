import React, {useState} from 'react'

function ColorPicker(){

  const [color, setColor] = useState("#FFFFFF");

  function colorChange(event){
    setColor(event.target.value);
  }

  return(
    <>

    <div className="color-display">
    <h1>COLOR PICKER</h1>
    <div className='color-box' style={{backgroundColor:color}}>SELECTED COLOR <br /> {color}</div>
    <label>SELECT A COLOR:</label>
    <input type="color" value={color} onChange={colorChange}/>
    </div>
    </>
  );
}

export default ColorPicker