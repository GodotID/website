import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes } from '@generouted/react-router'

import 'misc/fonts/Lexend/stylesheet.css'
import 'misc/fonts/Philosopher/stylesheet.css'
import 'styles/general.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Routes />
	</React.StrictMode>
);
