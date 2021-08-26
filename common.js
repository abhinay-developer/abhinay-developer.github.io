(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class DataService {
    constructor(http) {
        this.http = http;
        this.baseURL = "http://localhost:3000/";
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.set('content-type', 'application/json');
        headers.set('Access-Control-Allow-Origin', '*');
        console.log(headers);
    }
    //Creating a User
    createUser(user) {
        return this.http.post(this.baseURL + 'users', user);
    }
    // loginUser(email:string="raja@gmail.com",password:string="Raja@12345"){
    //   return this.http.post(this.baseURL+`/users/login/${email}/${password}`,{ 'headers': Headers });
    // }
    //GET ALL USERS
    getAllUsers() {
        return this.http.get(this.baseURL + 'users');
    }
    // GET USER BY ID
    getUserById(id) {
        console.log(this.baseURL + `users/${id}`);
        return this.http.get(this.baseURL + `users/${id}`);
    }
    deleteUser(id) {
        return this.http.delete(this.baseURL + `users/${id}`);
    }
    updateUser(id, user) {
        return this.http.put(this.baseURL + `users/${id}`, user);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map