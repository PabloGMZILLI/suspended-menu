import React from 'react'
import SuspendedMenu from './components/SuspendedMenu'

const Master = ( {
    ...props  
}) => {
    return (
        <>
        <SuspendedMenu
         name='Main'
         href='/'
         isEditMode={ false }
        />
        <SuspendedMenu
            name='Perfil'
            href='/perfil'
            isEditMode={ false }
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