import React from 'react'
import SuspendedMenu from './Components/SuspendedMenu'

const Master = ( {
    ...props  
}) => {
    return (
        <>
        <SuspendedMenu
         name='Main'
         href='/'
         isEditMode={ true }
        />
        <SuspendedMenu
            name='Perfil'
            href='/perfil'
            isEditMode={ true }
        />
        <SuspendedMenu
            name='Settings'
            href='/settings'
            isEditMode={ false }
        />
        { props.children }
        </>
    )
}

export default Master