// == Import : npm
import React from 'react';
import { render } from 'react-dom';

// Composants
import Todo from 'src/components/Todo';

// What to render ?
const rootReactElement = <Todo />;

// Where to render ?
const target = document.getElementById('root');

render(rootReactElement, target);
