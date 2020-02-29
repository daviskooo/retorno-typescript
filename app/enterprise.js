"use strict";
var enterprise;
(function (enterprise) {
    var Entreprise = /** @class */ (function () {
        function Entreprise() {
            this.customers = [];
            this.employees = [];
        }
        Entreprise.prototype.getName = function () {
            return this.enterpriseName;
        };
        Entreprise.prototype.setName = function (enterpriseName) {
            this.enterpriseName = enterpriseName;
        };
        Entreprise.prototype.getActivity = function () {
            return this.activity;
        };
        Entreprise.prototype.setActivity = function (activity) {
            this.activity = activity;
        };
        Entreprise.prototype.getCity = function () {
            return this.city;
        };
        Entreprise.prototype.setCity = function (city) {
            this.city = city;
        };
        Entreprise.prototype.addCustomer = function (customers) {
            this.customers.push(customers);
        };
        Entreprise.prototype.addEmployee = function (employees) {
            this.employees.push(employees);
        };
        Entreprise.prototype.getCustomer = function () {
            return this.customers;
        };
        Entreprise.prototype.getEmployee = function () {
            return this.employees;
        };
        return Entreprise;
    }());
    enterprise.Entreprise = Entreprise;
})(enterprise || (enterprise = {}));
