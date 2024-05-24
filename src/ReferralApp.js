import React, { useState, useEffect } from 'react';
import { BrowserRouter} from 'react-router-dom';

import Router from './Router';
import NotFound from './view/error/NotFound';
import SplashScreen from './view/pages/SplashScreen';

export default function ReferralApp() {
    const [showSplashscreen, setShowSplashscreen] = useState(localStorage.getItem('hasShownSplashscreen') ? false : true)

    useEffect(() => {
        setTimeout(() => {
            setShowSplashscreen(false)
            localStorage.setItem('hasShownSplashscreen', JSON.stringify(true))
        }, 400)
    }, [])
    
    return showSplashscreen ? (
        <SplashScreen />
    ) : (
        <BrowserRouter basename="/">
             <Router errorView404={<NotFound />} />
        </BrowserRouter>
    )
}