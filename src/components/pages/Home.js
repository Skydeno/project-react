import React from 'react';
import '../../App.css'
import Photos from '../Photos';
import Footer from '../Footer';
import Head from '../Head';
import Form from '../Form';

function Home () {
    return (
        <>
            <Head />
            <Photos />
            <Form />
            <Footer />
        </>
    );
}

export default Home;