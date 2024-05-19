import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LazyComponent from './config/LazyComponent';
import {routes} from './routes';

function Router(props){
    const { errorView404}  = props;
    
    return(
       <Routes>
        {routes.map((route)=>{
        let element= (
            <LazyComponent
            component={route.view}
            {...(route.props || {})}
            />
        )
        return (
            <Route key={route.name}
            path={route.path}
            element={element}
            />
        )
        })}
        <Route
            path='*'
            element={errorView404}
        />
       </Routes> 
    )
}

export default Router;