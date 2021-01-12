import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'


import { Button } from '../Button'
import firebase from '../config/firebase'
function Chat(props) {

    return (
        <div>
            Chat
            <h1>{props.userInfo.name}</h1>
        </div>
    );
}
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        userInfo: state.auth.userInfo,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)