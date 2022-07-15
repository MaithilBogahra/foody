import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Container/Home/Home';
import About from './Container/About/About';
import Product from './Container/Product/Product';
import Blog from './Container/Pages/Blog';
import Feature from './Container/Pages/Feature';
import Testimonial from './Container/Pages/Testimonial';
import Error from './Container/Pages/Error';
import Contact from './Container/Contact/Contact';
import FormLogin from './Container/Form/FormLogin';
import PublicRouter from './Container/Route/PublicRouter/PublicRouter';
import PrivatRouter from './Container/Route/PrivatRouter/PrivatRouter';

function App(props) {
    return (
        <div>
            <Header />
            <Switch>
                <PublicRouter path={"/"} exact component={Home} />
                <PublicRouter path={"/about"} exact component={About} />
                <PrivatRouter path={"/product"} exact component={Product} />
                <PublicRouter path={"/blog"} exact component={Blog} />
                <PublicRouter path={"/feature"} exact component={Feature} />
                <PublicRouter path={"/testimonial"} exact component={Testimonial} />
                <PublicRouter path={"/error"} exact component={Error} />
                <PublicRouter path={"/contact"} exact component={Contact} />
                <PublicRouter path={"/form"} restricted={true} exact component={FormLogin} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;