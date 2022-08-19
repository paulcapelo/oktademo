import React, { useState, useEffect } from 'react';
import { withOktaAuth, useOktaAuth } from '@okta/okta-react';
import useDataUser from '../hooks/useDataUser';
import logo from '../logo.svg';

const Home = (props: any) => {
    const { oktaAuth, authState } = useOktaAuth();
    const { data } = useDataUser();
    const [state, setstate] = useState(2)
    const login = async () => {
        await oktaAuth.signInWithRedirect();
    }

    const logout = async () => {
        await oktaAuth.signOut();
    }
    useEffect(() => {
        (authState?.accessToken?.claims.sub === "") && setstate(1);
        (authState?.accessToken?.claims.sub === "") && setstate(2);
        (authState?.accessToken?.claims.sub === "") && setstate(3);
    }, [authState])

    let body = null;
    if (authState?.isAuthenticated) {

        body = (
            <div className="Buttons">
                <h2>Ingresar a:</h2>
                <p> </p>
                {data.map((item: string, i) => {
                    const it = item.split(",");
                    return (
                        <p key={i}>
                            <button style={{ padding: 5 }} onClick={() => window.open(it[1])}>{it[0]}</button>
                        </p>
                    )
                }
                )}
                <p></p>
                <p></p>
                <button style={{ backgroundColor: 'red', color: "#fff", padding: 10 }} onClick={() => logout()}>Cerrar Sesión</button>

                {/* Replace me with your root component. */}
            </div>
        );
    } else {
        body = (
            <div className="Buttons">
                <button style={{ padding: 10 }} onClick={login}>Login</button>
            </div>
        );
    }
    console.log("authState", authState?.accessToken?.claims.sub)

    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo"/> */}
                <p>
                    Demo de autenticación
                </p>

                {body}
            </header>
        </div>
    );
};

export default Home