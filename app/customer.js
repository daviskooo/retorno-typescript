"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var enterprise;
(function (enterprise) {
    var Customer = /** @class */ (function (_super) {
        __extends(Customer, _super);
        function Customer(name, cpf, id) {
            var _this = _super.call(this, name, cpf) || this;
            _this.id = id;
            return _this;
        }
        Customer.prototype.getBalance = function () {
            return this.balance;
        };
        Customer.prototype.setBalance = function (balance) {
            this.balance = balance;
        };
        Customer.prototype.getLimit = function () {
            return this.limit;
        };
        Customer.prototype.setLimit = function (limit) {
            this.limit = limit;
        };
        Customer.prototype.getId = function () {
            return this.id;
        };
        Customer.prototype.setId = function (id) {
            this.id = id;
        };
        return Customer;
    }(enterprise.People));
    enterprise.Customer = Customer;
})(enterprise || (enterprise = {}));
