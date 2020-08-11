import { Children, cloneElement, Component } from 'react';
import $ from 'jquery';
import 'bootstrap-daterangepicker';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var DateRangePicker = /** @class */ (function (_super) {
    __extends(DateRangePicker, _super);
    function DateRangePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.ref = null;
        _this.$picker = null;
        return _this;
    }
    DateRangePicker.prototype.componentDidMount = function () {
        var _this = this;
        // initialize daterangepicker
        this.$picker = $(this.ref);
        this.$picker.daterangepicker(this.props.initialSettings, this.handleCallback.bind(this));
        // attach event listeners
        ['Show', 'Hide', 'ShowCalendar', 'HideCalendar', 'Apply', 'Cancel'].forEach(function (event) {
            var lcase = event.toLowerCase();
            _this.$picker.on(lcase + '.daterangepicker', _this.makeEventHandler('on' + event));
        });
    };
    DateRangePicker.prototype.componentWillUnmount = function () {
        if (this.$picker &&
            this.$picker.data &&
            this.$picker.data('daterangepicker')) {
            this.$picker.data('daterangepicker').remove();
        }
    };
    DateRangePicker.prototype.handleCallback = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (typeof this.props.onCallback === 'function') {
            (_a = this.props).onCallback.apply(_a, args);
        }
    };
    DateRangePicker.prototype.makeEventHandler = function (eventType) {
        var _this = this;
        var onEvent = this.props.onEvent;
        return function (event, picker) {
            if (typeof onEvent === 'function') {
                onEvent(event, picker);
            }
            if (typeof _this.props[eventType] === 'function') {
                _this.props[eventType](event, picker);
            }
        };
    };
    DateRangePicker.prototype.setStartDate = function (dateOrString) {
        this.$picker.data('daterangepicker').setStartDate(dateOrString);
    };
    DateRangePicker.prototype.setEndDate = function (dateOrString) {
        this.$picker.data('daterangepicker').setEndDate(dateOrString);
    };
    DateRangePicker.prototype.render = function () {
        var _this = this;
        var childElement = Children.only(this.props.children);
        return cloneElement(childElement, {
            ref: function (el) { return (_this.ref = el); },
        });
    };
    return DateRangePicker;
}(Component));

export default DateRangePicker;
export { DateRangePicker };
//# sourceMappingURL=index.es.js.map