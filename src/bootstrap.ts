/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Main} from './main';

ReactDOM.render(React.createElement(Main), document.getElementById('main'));