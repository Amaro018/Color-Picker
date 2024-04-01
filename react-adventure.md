// import Student from '../practice/Student.jsx'

// function App() {
// return(
// <>
// <Student name="SpongeBob" age={30} isStudent={true}/>
// <Student name="Patrick" age={35} isStudent={false}/>
// <Student />
// </>
// );
// }

// export default App
// //app.jsx

// import PropTypes from 'prop-types'

// function Student(props){
// return(
// <div className="studentDiv">
// <p>Name: {props.name}</p>
// <p>Age: {props.age}</p>
// <p>Student: {props.isStudent ? "Yes" : "No"}</p>
// </div>
// );
// }

// Student.propTypes = {
// name: PropTypes.string,
// age: PropTypes.number,
// isStudent: PropTypes.bool,
// }

// Student.defaultProps = {
// name: "Guest",
// age: 0,
// isStudent: false,
// }
// export default Student

// APP FILE RENDERING OBJECT
import List from './List.jsx'
function App() {

const fruits = [{id: 1, name: "apple", calories: "apple"},
{id: 2, name: "banana", calories: 159},
{id: 3, name: "orange", calories: 76},
{id: 4, name: "coconut", calories: 365}];

const vegies = [{id: 1, name: "mushroom", calories: 100},
{id: 2, name: "banana", calories: 159},
{id: 3, name: "orange", calories: 76},
{id: 4, name: "coconut", calories: 365}];
return(
<>
<List items = {fruits} category="Fruits"></List>
<List items = {vegies} category="Vegies"></List>
</>
);
}

export default App

//THE LIST.JSX FILE
import PropTypes from 'prop-types'

function List(props){

const category = props.category;
const itemList = props.items;
// fruits.sort((a,b) => a.name.localeCompare(b.name))
// fruits.sort((a,b) => a.calories - b.calories);

// const lowCalorieFruits = fruits.filter(fruit => fruit.calories > 100);

const listFruits = itemList.map(item => <li key={item.id}>
{item.name}: <b>{item.calories}</b>

</li>);
return(
<>
<h3>{category}</h3>
<ul>{listFruits}</ul>
</>
); }

List.propTypes = {
category : PropTypes.string,
items : PropTypes.arrayOf(PropTypes.shape( {id : PropTypes.number,
name: PropTypes.string,
calories: PropTypes.number})),
}

List.defaultProps = {
category:"Category",
}

export default List

//BUTTON

function Button(){

const handleClick = (event) => event.target.textContent = "ouch 🤕";
return (
<button onDoubleClick={(event) => handleClick(event)}>Click Me 😊</button>
);
}

export default Button

//USESTATE
import React, {useState} from "react";

function MyComponent(){

const [name, setName] = useState("guest");

function HandleChange(event){
setName(event.target.value);
}

const [shipping, setDelivery] = useState("Delivery");

function HandleRadio(event){
setDelivery(event.target.value);
}

return(

<div>
<input value={name} onChange={HandleChange}/>
<p>Name : {name}</p>

      <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={HandleRadio}/>Delivery
      <input type="radio" value="Pick-up" checked={shipping === "Pick-up"} onChange={HandleRadio}/>Delivery
      <p>Shipping : {shipping}</p>


    </div>

);
}

export default MyComponent

//input picture onclick event

function ProfilePicture(){
const imageSrc = './src/assets/junBw.png';

const handleClick = (event) => event.target.style.display ="none";
return(
<img onClick={(event => handleClick(event))} src={imageSrc} className="imgPic"></img>
);
}

export default ProfilePicture
