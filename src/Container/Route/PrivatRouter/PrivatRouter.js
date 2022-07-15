import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../../Utility';

function PrivatRouter({component:Component,...rest}) {
    return (
       <Route {...rest} render={props =>(
        isLogin() ? 
        <Component {...props} />
        :
        <Redirect to={'/form'} />
       )}
       />
    );
}

export default PrivatRouter;