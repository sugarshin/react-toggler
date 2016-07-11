import React from 'react';
import ReactDOM from 'react-dom';
import Toggler from '../lib/Toggler';

const root = document.body.appendChild(document.createElement('div'));

ReactDOM.render((
  <div>
    <Toggler>
      <div>Show</div>
      <div>Show</div>
    </Toggler>
    <Toggler hide>
      <div>Hide</div>
      <div>Hide</div>
    </Toggler>
    <Toggler pattern={[false, true]}>
      <div>Hide1</div>
      <div>Hide2</div>
    </Toggler>
  </div>
), root);
