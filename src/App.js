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

function App(props) {
    return (
        <div>
            <Header />
            <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/about"} exact component={About} />
                <Route path={"/product"} exact component={Product} />
                <Route path={"/blog"} exact component={Blog} />
                <Route path={"/feature"} exact component={Feature} />
                <Route path={"/testimonial"} exact component={Testimonial} />
                <Route path={"/error"} exact component={Error} />
                <Route path={"/contact"} exact component={Contact} />
                <Route path={"/form"} exact component={FormLogin} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;