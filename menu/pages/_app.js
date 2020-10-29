import '../public/css/index.css';
import '../public/css/materialize.min.css';
import App from "next/app";
import Router from 'next/router';
import Layout from "../components/Layout";



class MyApp extends App {
    static async getInitialProps({ Component, ctx }){      
        let pageProps = {};

        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Layout {...pageProps}>
                <Component {...pageProps}/>
            </Layout>
        );
    }
}

export default MyApp;