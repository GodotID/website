import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, useRoutes } from 'react-router-dom';

import { routes } from '@generouted/react-router'

import 'misc/fonts/Lexend/stylesheet.css'
import 'misc/fonts/Philosopher/stylesheet.css'
import 'styles/general.css'

function Router() {
    return useRoutes(routes);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Router />
    </HashRouter>
);