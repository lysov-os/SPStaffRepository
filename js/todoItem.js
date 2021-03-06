"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var TodoItem = (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem() {
        var _this = _super.call(this) || this;
        _this.removeItem = _this.removeItem.bind(_this);
        return _this;
    }
    TodoItem.prototype.removeItem = function () {
        this.props.onRemove(this.props.item);
    };
    TodoItem.prototype.render = function () {
        return (React.createElement("li", null,
            React.createElement("span", null,
                " ",
                this.props.item.description,
                " "),
            React.createElement("button", { onClick: this.removeItem }, "delete")));
    };
    return TodoItem;
}(React.Component));
exports.TodoItem = TodoItem;
