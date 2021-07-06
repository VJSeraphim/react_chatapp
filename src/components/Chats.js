import React from 'react'
import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'

const Chats = () => {
    const history = useHistory()

    const handleLogout = async() =>{
        await auth.signOut()

        history.push('/')
    }

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
