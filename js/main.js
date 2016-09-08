"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var todoItem_1 = require('./todoItem');
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.state = { newItem: { description: '' }, todoList: [] };
        this.changeName = this.changeName.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    Main.prototype.changeName = function (e) {
        this.setState({
            newItem: {
                description: e.target.value
            }
        });
    };
    Main.prototype.addItem = function () {
        var list = this.state.todoList;
        list.push({
            description: this.state.newItem.description,
            key: new Date().getTime()
        });
        this.setState({
            todoList: list,
            newItem: { description: '' }
        });
    };
    Main.prototype.removeItem = function (item) {
        var list = this.state.todoList.filter(function (i) { return i.key !== item.key; });
        this.setState({ todoList: list });
    };
    Main.prototype.render = function () {
        var _this = this;
        var todoItems = this.state.todoList.map(function (item) {
            return React.createElement(todoItem_1.TodoItem, {key: item.key, item: item, onRemove: _this.removeItem});
        });
        return (React.createElement("div", null, React.createElement("div", null, React.createElement("input", {type: "text", placeholder: "input new item", value: this.state.newItem.description, onChange: this.changeName}), React.createElement("button", {onClick: this.addItem}, "add")), React.createElement("ul", null, todoItems)));
    };
    return Main;
}(React.Component));
exports.Main = Main;
