import React from 'react';
import { useRouter } from 'next/router';


export default function Redirect() {
    const route = useRouter();
    const { to  } = route.query
    React.useEffect(()=>{
        // check if to parameters not exist
        if(typeof to != 'undefined') return window.location.assign(to.toString())
        return window.location.assign("/")
    })
    return (
        <>
        </>
    );
}

