import React from 'react';
import { Header, Footer } from '@components';

export default function DefaultLayout (props:any){
    return (
        <>
            <Header />
                {props.children}
            <Footer />
        </>
    )
}