import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BackGroundImage } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BackGroundImage imgUrl='' />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
