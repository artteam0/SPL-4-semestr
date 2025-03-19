var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("\n\nEXERCISE 1\n");
var BaseUser = /** @class */ (function () {
    function BaseUser(id, name) {
        this.id = id;
        this.name = name;
    }
    return BaseUser;
}());
var Guest = /** @class */ (function (_super) {
    __extends(Guest, _super);
    function Guest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guest.prototype.getRole = function () {
        return "Guest";
    };
    Guest.prototype.getPremissions = function () {
        return ["Просмотр контента"];
    };
    return Guest;
}(BaseUser));
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.getRole = function () {
        return "User";
    };
    User.prototype.getPremissions = function () {
        return ["Просмотр контента", "Написание комментариев"];
    };
    return User;
}(BaseUser));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.getRole = function () {
        return "Admin";
    };
    Admin.prototype.getPremissions = function () {
        return ["Просмотр контента", "Написание комментариев", "Удаление комментариев", "Управление пользователями"];
    };
    return Admin;
}(BaseUser));
var guest = new Guest(1, "Artsiom");
console.log("\nguest:\n", guest.getPremissions());
var admin = new Admin(2, "Arseniy");
console.log("\nadmin:\n", admin.getPremissions());
var user = new User(3, "Kirill");
console.log("\nuser:\n", user.getPremissions());
console.log("\n\nEXERCISE 2\n");
var report = /** @class */ (function () {
    function report(title, content) {
        this.title = title;
        this.content = content;
    }
    return report;
}());
var HTMLreport = /** @class */ (function (_super) {
    __extends(HTMLreport, _super);
    function HTMLreport(title, content, HTMLReport) {
        var _this = _super.call(this, title, content) || this;
        _this.HTMLReport = HTMLReport;
        return _this;
    }
    HTMLreport.prototype.generate = function () {
        return "<h1>".concat(this.title, "</h1><p>").concat(this.content, "</p><div>").concat(this.HTMLReport, "</div>");
    };
    return HTMLreport;
}(report));
var JSONreport = /** @class */ (function (_super) {
    __extends(JSONreport, _super);
    function JSONreport(title, content, JSONReport) {
        var _this = _super.call(this, title, content) || this;
        _this.JSONReport = JSONReport;
        return _this;
    }
    JSONreport.prototype.generate = function () {
        return JSON.stringify({
            title: this.title,
            content: this.content,
            report: this.JSONReport
        });
    };
    return JSONreport;
}(report));
var htmlReport = new HTMLreport("HTML Report Title", "content content", "<p>content</p>");
console.log(htmlReport.generate());
var jsonReport = new JSONreport("JSON Report Title", "content.", "content");
console.log(jsonReport.generate());
console.log("\n\nEXERCISE 3\n");
var CachE = /** @class */ (function () {
    function CachE() {
        this.storage = new Map();
    }
    CachE.prototype.add = function (key, value, ttl) {
        var expiry = Date.now() + ttl;
        this.storage.set(key, { value: value, expiry: expiry });
    };
    CachE.prototype.get = function (key) {
        var entry = this.storage.get(key);
        if (!entry)
            return null;
        if (Date.now() > entry.expiry) {
            this.storage.delete(key);
            return null;
        }
        return entry.value;
    };
    CachE.prototype.clearExpired = function () {
        var _this = this;
        var now = Date.now();
        this.storage.forEach(function (entry, key) {
            if (entry.expiry <= now) {
                _this.storage.delete(key);
            }
        });
    };
    return CachE;
}());
var cache1 = new CachE();
cache1.add("price", 100, 5000);
console.log(cache1.get("price"));
console.log("\n\nEXERCISE 4\n");
function createInstance(cls) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return new (cls.bind.apply(cls, __spreadArray([void 0], args, false)))();
}
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var p = createInstance(Product, "PC", 4000);
console.log(p);
console.log("\n\nEXERCISE 5\n");
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "Info";
    LogLevel["WARNING"] = "Warning";
    LogLevel["ERRORS"] = "Errors";
})(LogLevel || (LogLevel = {}));
;
function logEvent(event) {
    console.log(event);
}
logEvent([new Date(), LogLevel.WARNING, "Start system"]);
console.log("\n\nEXERCISE 6\n");
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["GOOD"] = 200] = "GOOD";
    HttpStatus[HttpStatus["BAD"] = 400] = "BAD";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["ERROR"] = 500] = "ERROR";
})(HttpStatus || (HttpStatus = {}));
;
function success(data) {
    return [HttpStatus.GOOD, data];
}
function error(message, status) {
    return [status, null, message];
}
var res1 = success({ user: "Sofya" });
console.log(res1);
var res2 = error("Doesn`t found", HttpStatus.ERROR);
console.log(res2);
