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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/inherited_reference_contributor.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var async = require("@dart2ts/dart/async");
exports._enclosingClass = function (target) {
    var node = target.containingNode;
    while (node != null) {
        if (_common_1.is(node, any)) {
            return node;
        }
        if (_common_1.is(node, any)) {
            if (node.isStatic) {
                return null;
            }
        }
        if (_common_1.is(node, any)) {
            if (node.isStatic) {
                return null;
            }
        }
        node = node.parent;
    }
    return null;
};
var InheritedReferenceContributor = /** @class */ (function (_super) {
    __extends(InheritedReferenceContributor, _super);
    function InheritedReferenceContributor() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    InheritedReferenceContributor.prototype.computeSuggestions = function (request) {
        var _this = this;
        return new async.Future.fromPromise((function () { return __awaiter(_this, void 0, void 0, function () {
            var classDecl;
            return __generator(this, function (_a) {
                if (!request.includeIdentifiers) {
                    return [2 /*return*/, EMPTY_LIST];
                }
                classDecl = exports._enclosingClass(request.target);
                if (utils_1.op(utils_1.Op.EQUALS, classDecl, null) || utils_1.op(utils_1.Op.EQUALS, classDecl.element, null)) {
                    return [2 /*return*/, EMPTY_LIST];
                }
                this.containingLibrary = request.libraryElement;
                return [2 /*return*/, this._computeSuggestionsForClass2(resolutionMap.elementDeclaredByClassDeclaration(classDecl), request)];
            });
        }); })());
    };
    InheritedReferenceContributor.prototype.computeSuggestionsForClass = function (classElement, request, _namedArguments) {
        var skipChildClass = Object.assign({
            "skipChildClass": true
        }, _namedArguments).skipChildClass;
        if (!request.includeIdentifiers) {
            return EMPTY_LIST;
        }
        this.containingLibrary = request.libraryElement;
        return this._computeSuggestionsForClass2(classElement, request, {
            skipChildClass: skipChildClass
        });
    };
    InheritedReferenceContributor.prototype._addSuggestionsForType = function (type, optype, ideOptions, _namedArguments) {
        var isFunctionalArgument = Object.assign({
            "isFunctionalArgument": false
        }, _namedArguments).isFunctionalArgument;
        if (!isFunctionalArgument) {
            for (var _i = 0, _a = type.accessors; _i < _a.length; _i++) {
                var elem = _a[_i];
                if (elem.isGetter) {
                    if (optype.includeReturnValueSuggestions) {
                        addSuggestion(elem, ideOptions);
                    }
                }
                else {
                    if (optype.includeVoidReturnSuggestions) {
                        addSuggestion(elem, ideOptions);
                    }
                }
            }
        }
        for (var _b = 0, _c = type.methods; _b < _c.length; _b++) {
            var elem = _c[_b];
            if (utils_1.op(utils_1.Op.EQUALS, elem.returnType, null)) {
                addSuggestion(elem, ideOptions);
            }
            else if (!elem.returnType.isVoid) {
                if (optype.includeReturnValueSuggestions) {
                    addSuggestion(elem, ideOptions);
                }
            }
            else {
                if (optype.includeVoidReturnSuggestions) {
                    addSuggestion(elem, ideOptions);
                }
            }
        }
    };
    InheritedReferenceContributor.prototype._computeSuggestionsForClass2 = function (classElement, request, _namedArguments) {
        var skipChildClass = Object.assign({
            "skipChildClass": true
        }, _namedArguments).skipChildClass;
        var isFunctionalArgument = request.target.isFunctionalArgument();
        this.kind = isFunctionalArgument ? CompletionSuggestionKind.IDENTIFIER : CompletionSuggestionKind.INVOCATION;
        var optype = request.opType;
        if (!skipChildClass) {
            this._addSuggestionsForType(classElement.type, optype, request.ideOptions, {
                isFunctionalArgument: isFunctionalArgument
            });
        }
        for (var _i = 0, _a = classElement.allSupertypes; _i < _a.length; _i++) {
            var type = _a[_i];
            this._addSuggestionsForType(type, optype, request.ideOptions, {
                isFunctionalArgument: isFunctionalArgument
            });
        }
        return suggestions;
    };
    InheritedReferenceContributor.prototype.InheritedReferenceContributor = function () {
    };
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InheritedReferenceContributor.prototype, "containingLibrary", void 0);
    __decorate([
        utils_1.DartPropertyAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InheritedReferenceContributor.prototype, "kind", void 0);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], InheritedReferenceContributor.prototype, "computeSuggestions", null);
    __decorate([
        utils_1.defaultConstructor
    ], InheritedReferenceContributor.prototype, "InheritedReferenceContributor", null);
    InheritedReferenceContributor = __decorate([
        utils_1.DartClass,
        utils_1.With(any)
    ], InheritedReferenceContributor);
    return InheritedReferenceContributor;
}(any));
exports.InheritedReferenceContributor = InheritedReferenceContributor;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=inherited_reference_contributor.js.map