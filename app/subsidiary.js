"use strict";
var enterprise;
(function (enterprise_1) {
    var Subsidiary = /** @class */ (function () {
        function Subsidiary(enterprise) {
            this.enterprise = enterprise;
        }
        Subsidiary.prototype.getCity = function () {
            return this.city;
        };
        Subsidiary.prototype.setCity = function (city) {
            this.city = city;
        };
        Subsidiary.prototype.getIdSubsidiary = function () {
            return this.idSubsidiary;
        };
        Subsidiary.prototype.setIdSubsidiary = function (idSubsidiary) {
            this.idSubsidiary = idSubsidiary;
        };
        Subsidiary.prototype.getEnterprise = function () {
            return this.enterprise;
        };
        return Subsidiary;
    }());
})(enterprise || (enterprise = {}));
