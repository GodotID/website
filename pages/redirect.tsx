import React from 'react';
import { useRouter } from 'next/router';


export default function Redirect() {
    const route = useRouter();
    const { to  } = route.query
    React.useEffect(()=>{
        return window.location.assign(to.toString())
    })
    return (
        <>
        </>
    );
}

