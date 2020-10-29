import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";


const Layout = ({ children, user }) => {

    return (
        <React.Fragment>
            <Head>
                <meta charset="UTF-8" />
                <title>Cardápio</title>
                <link rel="icon" href="www/icons/hambruger.ico" />
                <meta name="viewport" content="user-scalable=no, initial-scale=1, 
		maximum-scale=1, minimum-scale=1, width=device-width"/>
                <link href="https://fonts.googleapis.com/css?family=Yatra+One" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Josefin+Slab" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Bungee" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
                <link rel="stylesheet" type="text/css" href="www/css/materialize.min.css" />
                <link rel="stylesheet" type="text/css" href="www/icons/material.css" />
                <link rel="stylesheet" type="text/css" href="www/css/index.css" />
            </Head>
            <Header/> 
            {children}

            <Footer />
            <script type="text/javascript" src="www/js/jquery.min.js"></script>
            <script type="text/javascript" src="www/js/materialize.min.js"></script>
            <script type="text/javascript" src="www/js/index.js"></script>
        </React.Fragment>
    );
}

export default Layout;