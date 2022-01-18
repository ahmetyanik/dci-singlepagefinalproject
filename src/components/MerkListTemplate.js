import React, {useContext} from 'react'
import DataStore from "../DataStore";

function MerkListTemplate() {

    const {merkListState}=DataStore(useContext)
    return (
        <div>
            
        </div>
    )
}

export default MerkListTemplate
