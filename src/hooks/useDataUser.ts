import React from 'react'
import { useOktaAuth } from '@okta/okta-react';
import { isConstructorDeclaration } from 'typescript';

const useDataUser = () => {

    const [data, setData] = React.useState([])
    const { authState, oktaAuth } = useOktaAuth();


    React.useEffect(() => {
        authState !== null && consultar()

    }, [authState])
    const consultar = async () => {
        const { sub } = await oktaAuth.getUser();
        console.log("sub", sub)
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'SSWS 00rzbVc6uH7oC6l5OPESLYUAZO7xzZ-Bi4b7dXst3Y');

        fetch(`https://dev-54842592.okta.com/api/v1/users/${sub}`, { headers })
            .then(res => res.json())
            .then(data => {

                setData(data.profile.urlCompanies)
            });
    }
    const consultar2 = async () => {
        const token = authState?.idToken?.idToken;
        console.log("sub", token)
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'bearer ' + token);

        fetch(`https:///api/v1/users/`, { headers })
            .then(res => res.json())
            .then(data => {

                setData(data.profile.urlCompanies)
            });
    }


    return { data, consultar2 }
}

export default useDataUser