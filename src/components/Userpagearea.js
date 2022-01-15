import React, { useContext } from 'react'
import DataStore from './DataStore';

function Userpagearea() {

    const { currentUser, setCurrentUser } = useContext(DataStore);

    return (
        <div>
            <h1>{currentUser.name}</h1>
        </div>
    )
}

export default Userpagearea
