"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Classroom = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _idClassroom_decorators;
    let _idClassroom_initializers = [];
    let _idTeacher_decorators;
    let _idTeacher_initializers = [];
    let _IdClass_decorators;
    let _IdClass_initializers = [];
    let _startClass_decorators;
    let _startClass_initializers = [];
    let _finishClass_decorators;
    let _finishClass_initializers = [];
    var Classroom = _classThis = class {
        constructor() {
            this.idClassroom = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _idClassroom_initializers, void 0));
            this.idTeacher = __runInitializers(this, _idTeacher_initializers, void 0);
            this.IdClass = __runInitializers(this, _IdClass_initializers, void 0);
            this.startClass = __runInitializers(this, _startClass_initializers, void 0);
            this.finishClass = __runInitializers(this, _finishClass_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "Classroom");
    (() => {
        _idClassroom_decorators = [typeorm_1.PrimaryColumn];
        _idTeacher_decorators = [(0, typeorm_1.Column)()];
        _IdClass_decorators = [(0, typeorm_1.Column)()];
        _startClass_decorators = [(0, typeorm_1.Column)()];
        _finishClass_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _idClassroom_decorators, { kind: "field", name: "idClassroom", static: false, private: false, access: { has: obj => "idClassroom" in obj, get: obj => obj.idClassroom, set: (obj, value) => { obj.idClassroom = value; } } }, _idClassroom_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _idTeacher_decorators, { kind: "field", name: "idTeacher", static: false, private: false, access: { has: obj => "idTeacher" in obj, get: obj => obj.idTeacher, set: (obj, value) => { obj.idTeacher = value; } } }, _idTeacher_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _IdClass_decorators, { kind: "field", name: "IdClass", static: false, private: false, access: { has: obj => "IdClass" in obj, get: obj => obj.IdClass, set: (obj, value) => { obj.IdClass = value; } } }, _IdClass_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _startClass_decorators, { kind: "field", name: "startClass", static: false, private: false, access: { has: obj => "startClass" in obj, get: obj => obj.startClass, set: (obj, value) => { obj.startClass = value; } } }, _startClass_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _finishClass_decorators, { kind: "field", name: "finishClass", static: false, private: false, access: { has: obj => "finishClass" in obj, get: obj => obj.finishClass, set: (obj, value) => { obj.finishClass = value; } } }, _finishClass_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Classroom = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Classroom = _classThis;
})();
exports.default = Classroom;
