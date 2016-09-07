/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="interfaces.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {
    constructor () {
        super();
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem () {
        this.props.onRemove(this.props.item);
    }

    render () {
        return (
            <li>
              <span> {this.props.item.description} </span>
              <button onClick={this.removeItem} >delete</button>
            </li>
        );
    }
}