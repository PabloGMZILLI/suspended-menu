import React from 'react'
import SuspendMenu from './Components/SuspendedMenu'

const Master = ( {
    component   
}) => {
    console.log('====>', component)
    return (
        <>
            <SuspendMenu>Menu</SuspendMenu>
            { component }
        </>
    )
}

export default Master