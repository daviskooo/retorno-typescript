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
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Employee.prototype.getIdEmployee = function () {
            return this.idEmployee;
        };
        Employee.prototype.setIdEmployee = function (idEmployee) {
            this.idEmployee = idEmployee;
        };
        Employee.prototype.getDayValue = function () {
            return this.dayValue;
        };
        Employee.prototype.setDayValue = function (dayValue) {
            this.dayValue = dayValue;
        };
        Employee.prototype.SalaryCalc = function () {
            return this.dayValue * 30;
        };
        return Employee;
    }(enterprise.People));
    enterprise.Employee = Employee;
})(enterprise || (enterprise = {}));
