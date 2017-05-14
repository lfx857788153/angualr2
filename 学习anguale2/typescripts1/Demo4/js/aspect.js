var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var descriptor = {
    type: 'accessor',
    enumerable: true,
    configurable: true
};
var Person = (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "kidCount", {
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
__decorate([
    nonenumerable
], Person.prototype, "kidCount", null);
function nonenumerable(target, name, descriptor) {
    descriptor.enumerable = false;
    return descriptor;
}
var person = new Person();
for (var prop in person) {
    console.log(prop);
}
