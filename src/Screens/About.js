import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import firebase from '../config/firebase'
import { Button, } from '../Button/index'
import './about.css'


function About(props) {
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
            let todo = todos.val()
            todo.todoId = todos.key
            allArr.push(todo)
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

    const deleteTodo = (todoId, index) => {
        let arr = allTodos
        arr.splice(index, 1)
        setAllTodos([...arr])
        db.ref('todo/' + todoId).remove();
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
                        // console.log('todo=====>', todo)
                        return (
                            <div className='formView'>
                                <Link to={'/Chat'}>Chat</Link>
                                <span> {index}= {todo.todo}</span>
                                <button onClick={() => deleteTodo(todo.todoId, index)}>
                                    delete</button>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={logoutUser}>Logout</button>
        </div>
    );
}
const mapStateToProps = (state /*, ownProps*/) => {
    console.log('state of redux===>', state)
    return {
        counter: state,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(About)
