import React, {useContext, useEffect} from 'react'
import { useHistory } from "react-router"
import { CurrentUser } from "../contexts/CurrentUser"

const Logout = () => {
    const history = useHistory()
    const { currentUser, setCurrentUser } = useContext(CurrentUser)

    useEffect(() => {
        setCurrentUser(null)
        history.push("/")
    }, [setCurrentUser, history]);

    return null
}

export default Logout