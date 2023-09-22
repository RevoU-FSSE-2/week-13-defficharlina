import { AppContext } from "../../Provider/AppProvider"
import { useCallback, useContext } from "react"
import { useEffect } from 'react';

const User = () => {
    const { user, setUser} = useContext(AppContext);
    
    
    const fetchUser = useCallback(
        async () => {
            const fetching = await fetch('https://mock-api.arikmpt.com/api/user/1')
            const response = await fetching.json()
            setUser?.(response)
        },
        [setUser]
    )

    useEffect(
        () => {
            fetchUser()
        },
        [fetchUser]
    )

    return (
        <div>
            <p>Username: {user?.username} </p>
            <p>Email: {user?.email}</p>
        </div>
    )
}

export default User