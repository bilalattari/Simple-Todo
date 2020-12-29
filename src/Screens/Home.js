// import React, { useState } from 'react'
// import '../App.css';
// import { Button, } from '../Button/index'    
// function App(props) {
//   const [todo, setTodo] = useState('')
//   const [allTodos, setAllTodos] = useState([])
//   const [edit, setEdit] = useState(-1)

//   const [updateTodo, setUpdatetodo] = useState('')


//   const submitTodo = () => {
//     if (todo === '') {
//       alert('Please enter some thing')
//     } else {
//       setAllTodos([todo,...allTodos])
//       setTodo('')
//     }
//   }

//   const deleteTodo = (index) => {
//     let arr = allTodos
//     arr.splice(index, 1)
//     setAllTodos([...arr])
//   }

//   const editTodo = (todo, index) => {    
//   console.log(props.history.push('/about') )
//     // setEdit(index)
//     // var updatedTodo = prompt('Todo', todo)
//     // let arr = allTodos
//     // arr[index] = updatedTodo
//     // setAllTodos([...arr])
//   }

//   const update = (t,i) => {

//   }


//   return (
//     <div className="App">
//       <div>
//         <input type={'text'} value={todo}
//           placeholder={'Enter Todo'}
//           onChange={(e) => setTodo(e.target.value)} value={todo}/>
//         <Button onClick={submitTodo} title={"Add"} />
//       </div>
//       <div>
//         {
//           allTodos.map((todo, index) => {
//             return (
//               <span>index = {index}</span>,
//               <div>
//                 {(edit === index)?
//                   <>
//                   <button onClick={()=>setEdit(-1)}>x</button>
//                   <input type="text" value={todo}/>
//                   </>
//                   :
//                   <span> {todo} </span>
//                 } 

//                 {(edit === index)?
//                   <Button onClick={()=>update(todo,index)}title={"Save"} />
//                   :
//                   <Button onClick={() => editTodo(todo, index)} title={"Edit"} />
//                 }
//                 <Button onClick={() => deleteTodo(index)} title={"Delete"} />
//               </div>
//             )
//           })
//         }
//       </div>

//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import firebase from '../config/firebase'
function Home(props) {

    useEffect(() => {
            firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                props.history.push('/about')
            } else {
                console.log('User is not signed in')
                props.history.push('/login')

            }
        });
    });
    const goToAboutPage = () => {
        props.history.push('/about')
    }

    return (
        <div>
            Home

            <Button title={"Go to about page"} onClick={goToAboutPage} />
        </div>
    );
}

export default Home;
