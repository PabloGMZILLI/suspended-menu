import React from 'react'
import SuspendedMenu from '../SuspendedMenu'
import { BrowserRouter } from 'react-router-dom';

const PageStructure = ({children, isEditMode}) => {
    return (
    <div>
        <BrowserRouter>
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
                isEditMode={ true }
            />
            {children}
        </BrowserRouter>
    </div>
    )
}

export default PageStructure
