import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'

import { useAuth } from '../contexts/AuthContext'
import axios from 'axios'

const Chats = () => {
    const history = useHistory()
    const { user } = useAuth()
    const [loading, setLoading] = useState(true)

    const handleLogout = async() =>{
        await auth.signOut()

        history.push('/')
    }

    const getFile = async (url) => {
        const response = await fetch(url)
        const data = await response.blob()

        return new File([data], "userPhoto.jpg", { type: 'image/jpeg' })
    }

    useEffect(() =>{
        if(!user) {
            history.push('/')
            return
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "a34c0ea8-cc20-48a9-afa6-e79dbf008c97",
                "user-name" : user.email,
                "user-secret": user.uid,
            }
        })
        .then(() =>{
            setLoading(false)
        })
        .catch(() =>{
            let formdata = new Formdata()
            formdata.append('email', user.email)
            formdata.append('username', user.email)
            formdata.append('secret', user.uid)
        })
    }, [user, history])

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Chat
                </div>
                <div onClick = {handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine 
                height = "calc(100vh - 66px"
                projectId = "a34c0ea8-cc20-48a9-afa6-e79dbf008c97"
                userName="."
                userSecret="."
            />
        </div>
    )
}

export default Chats
