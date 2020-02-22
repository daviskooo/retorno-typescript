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
    var Manager = /** @class */ (function (_super) {
        __extends(Manager, _super);
        function Manager() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Manager.prototype.setSector = function (sector) {
            this.sector = sector;
        };
        Manager.prototype.getSector = function () {
            return this.sector;
        };
        Manager.prototype.SalaryCalc = function () {
            return (this.getDayValue() * 30) + (this.getDayValue() * 0.3);
        };
        return Manager;
    }(enterprise.Employee));
    enterprise.Manager = Manager;
})(enterprise || (enterprise = {}));
