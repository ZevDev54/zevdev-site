import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Landing from './components/Landing';

test('renders the landing page welcome message', () => {
  expect(ReactDOMServer.renderToStaticMarkup(<Landing />)).toContain('Welcome!');
});
