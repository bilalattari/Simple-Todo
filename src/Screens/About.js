import React, { useEffect, useState } from 'react'
import firebase from '../config/firebase'
import { Button, } from '../Button/index'

function About() {
    var db = firebase.database()
    const [todo, setTodo] = useState('')
    const [allTodos, setAllTodos] = useState([])
    const [edit, setEdit] = useState(-1)
    const [user, setUser] = useState({})

    const logoutUser = () => {
        firebase.auth().signOut()
    }

    useEffect(() => {
        var userId = localStorage.getItem('userId')
        getUserDataFromFirebase(userId)
        getTodosList(userId)

    }, [])

    const getUserDataFromFirebase = (userId) => {
        console.log('is function working', userId)
        db.ref('users/' + userId).once('value').then((data) => {
            setUser(data.val())
            getUserTodosFromFirebase(userId)

        }).catch((err) => console.log(err))
    }
    const getTodosList = (userId) => {
        let allArr = []
        db.ref('todo').orderByChild('userId').equalTo(userId).once('value').then((todos) => {
            if (todos.val()) {
                console.log(Object.values(todos.val()))
                setAllTodos(Object.values(todos.val()))
            }
        })
    }
    const getUserTodosFromFirebase = (userId) => {
        let allArr = []
        db.ref('todo').orderByChild('userId').equalTo(userId).on('child_added', (todos) => {
            console.log('child added==>', todos.val())
            allArr.push(todos.val())
        })
        setAllTodos([...allArr])
    }


    const submitTodo = () => {
        if (todo === '') {
            alert('Please enter some thing')
        } else {
            let obj = {
                todo: todo,
                userId: user.id,
            }
            db.ref('todo').push(obj).then(() => {
                setTodo('')
            })
            getUserTodosFromFirebase(user.id)
        }
    }
    return (
        <div>
            About
            <h1>{user.name}</h1>
            <div>
                <input type={'text'} value={todo}
                    placeholder={'Enter Todo'}
                    onChange={(e) => setTodo(e.target.value)} value={todo} />
                <Button onClick={submitTodo} title={"Add"} />
            </div>
            <div>
                {
                    allTodos.map((todo, index) => {
                        return (
                            <div>
                                <h3> {index}= {todo.todo}</h3>
                            </div>
                            //    <div>
                            //      {(edit === index)?
                            //        <>
                            //        <button onClick={()=>setEdit(-1)}>x</button>
                            //        <input type="text" value={todo}/>
                            //        </>
                            //        :
                            //        <span> {todo} </span>
                            //      } 

                            //      {(edit === index)?
                            //        <Button onClick={()=>update(todo,index)}title={"Save"} />
                            //        :
                            //        <Button onClick={() => editTodo(todo, index)} title={"Edit"} />
                            //      }
                            //      <Button onClick={() => deleteTodo(index)} title={"Delete"} />
                            //    </div>
                        )
                    })
                }
            </div>
            <button onClick={logoutUser}>Logout</button>
        </div>
    );
}

export default About;
