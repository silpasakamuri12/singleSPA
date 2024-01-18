import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Content from './Content';

console.log('Microfrontend bootstrap content');
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Content,
  domElementGetter: () => document.getElementById('content-mf'),
});

export const { bootstrap, mount, unmount } = reactLifecycles;
