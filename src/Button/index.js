import React from 'react'
import './index.css'
function Button({ title, onClick }) {
    return (
        <button onClick={onClick} className='common-button' >{title}</button>
    )
}

function CheakButton(onClick, title) {
    return (
        <Button onClick={onClick}>{title}</Button>
    )
}

// export default Button
export { Button, CheakButton }