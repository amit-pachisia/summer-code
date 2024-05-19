import React from 'react';
// import axios from "axios";
import Router from './Router';
import NotFound from './view/error/NotFound';
import { BrowserRouter} from 'react-router-dom';

export default function ReferralApp() {
    return(
        <BrowserRouter basename="/">
             <Router errorView404={<NotFound />} />
        </BrowserRouter>
    )
}