import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';


const Profile = () => {
    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo] = useState({ nombre: "nombre", apellido: "ape", email: "email" });

    useEffect(() => {
        init()
    }, []); // Update if authState changes

    const init = async () => {
        try {
            const response = await fetch('http://middleware:/api/login', {
                headers: {
                    Authorization: 'Bearer ' + authState?.accessToken
                }
            });
            const data = await response.json();
            setUserInfo(data);
        } catch (err: any) {
            console.log('Error: ' + err.message);
            // handle error as needed
        }
    }

    return (
        <div>
            <div>
                <header >
                    <h1>
                        Usuario Middleware
                    </h1>
                </header>
                <p>
                    Para redireccionar a las diferentes aplicaciones
                </p>
                <p>

                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userInfo && Object.entries(userInfo).map((item: any) => {
                            console.log(item)
                            return (
                                <tr key={`${item[0]}`}>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Profile;