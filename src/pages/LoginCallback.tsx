import React from 'react'
import { useHistory } from 'react-router-dom'
import { useOktaAuth } from '@okta/okta-react';

const LoginCallback = () => {
    const history = useHistory()
    const { authState, oktaAuth } = useOktaAuth();
    console.log({ authState, oktaAuth })
    return (
        <>
            <div>LoginCallback</div>
            <button onClick={() => history.push('/')} >Ir al inicio</button>
            <button onClick={() => history.push('/profile')} >profile</button>
        </>
    )
}

export default LoginCallback