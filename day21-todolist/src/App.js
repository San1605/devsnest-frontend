import './App.css';
import React, { useState, useEffect } from "react"
const Item = ({ item, setItems, index, items, setIsEditing, setCurrentTodo }) => {
//      function handleEditClick(item) {
//           setIsEditing(true);
//           setCurrentTodo({ ...item });
//      }

//      return (
//           <div>
//                <h1>{item.name}</h1>
//                <h2>{item.calorie}</h2>
//                <button onClick={() => {
//                     const newItems = items.filter((el, i) => i !== index)
//                     setItems(newItems)
//                }
//                }>Delete</button>
//                <button onClick={() => handleEditClick(item)}>Edit</button>
//           </div>
//      )
// }
function App(props) {
     const [state, setState] = useState(
          {
               name: "",
               calorie: ""
          }
     );
     const [items, setItems] = useState([])
     useEffect(() => {
          setItems([])

     }, [])
     function handleChange(evt) {
          const value = evt.target.value;
          setState({
               ...state,
               [evt.target.name]: value
          });
          evt.preventDefault();
     }
     const handleClick = (e) => {
          if (!state) {
               e.preventDefault();
          }
          else {
               setItems([...items, state])
               setState('');
               e.preventDefault();
          }

     }

     // const [isEditing, setIsEditing] = useState(false);
     // const [currentTodo, setCurrentTodo] = useState({});



     // function handleEditInputChange(e) {

     //      setCurrentTodo({ ...currentTodo, text: e.target.value });
     //      console.log(currentTodo);
     // }



     // function handleEditFormSubmit(e) {
     //      e.preventDefault();

     //      handleUpdateTodo(currentTodo.id, currentTodo);
     // }



     // function handleUpdateTodo(id, updatedItem) {

     //      const updatedItem1 = items.map((state) => {
     //           return state.id === id ? updatedItem : state;
     //      });

     //      setIsEditing(false);

     //      setState(updatedItem1);
     // }





     return (
          <div className="container">

               {isEditing ? (

                    {/* <form onSubmit={handleEditFormSubmit}>

                         <h2>Edit Todo</h2>

                         <label htmlFor="editTodo">Edit todo: </label>

                         <input
                              name="editTodo"
                              type="text"
                              placeholder="Edit todo"
                              value={currentTodo.text}
                              onChange={handleEditInputChange}
                         />

                         <button type="submit">Update</button>

                         <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </form> */}
               ) : (
                    <form>
                         <label>
                              item:
                              <input type="text" value={state.name || ""} name="name" onChange={handleChange} />
                         </label>
                         <label>
                              calorie:
                              <input type="number" value={state.calorie || ""} name="calorie" onChange={handleChange} />
                         </label>
                         <button onClick={handleClick}>Add</button>
                    </form>)}
               {items.map((item, index) => (
                    <Item
                         key={index}
                         item={item}
                         items={items}
                         setItems={setItems}
                         index={index}
                         setIsEditing={setIsEditing}
                         setCurrentTodo={setCurrentTodo}
                    />
               ))}
          </div>
     )
}
export default App;














