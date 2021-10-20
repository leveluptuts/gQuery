var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// ../../../../../.npm/_npx/7d72304e626f8399/node_modules/tsup/assets/cjs_shims.js
var importMetaUrlShim;
var init_cjs_shims = __esm({
  "../../../../../.npm/_npx/7d72304e626f8399/node_modules/tsup/assets/cjs_shims.js"() {
    importMetaUrlShim = typeof document === "undefined" ? new (require("url")).URL("file:" + __filename).href : document.currentScript && document.currentScript.src || new URL("main.js", document.baseURI).href;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/version.js
var require_version = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/version.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.versionInfo = exports.version = void 0;
    var version = "15.6.1";
    exports.version = version;
    var versionInfo2 = Object.freeze({
      major: 15,
      minor: 6,
      patch: 1,
      preReleaseTag: null
    });
    exports.versionInfo = versionInfo2;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/isPromise.js
var require_isPromise = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/isPromise.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isPromise;
    function isPromise(value) {
      return typeof (value === null || value === void 0 ? void 0 : value.then) === "function";
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/isObjectLike.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isObjectLike;
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function isObjectLike(value) {
      return _typeof(value) == "object" && value !== null;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/polyfills/symbols.js
var require_symbols = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/polyfills/symbols.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SYMBOL_TO_STRING_TAG = exports.SYMBOL_ASYNC_ITERATOR = exports.SYMBOL_ITERATOR = void 0;
    var SYMBOL_ITERATOR = typeof Symbol === "function" && Symbol.iterator != null ? Symbol.iterator : "@@iterator";
    exports.SYMBOL_ITERATOR = SYMBOL_ITERATOR;
    var SYMBOL_ASYNC_ITERATOR = typeof Symbol === "function" && Symbol.asyncIterator != null ? Symbol.asyncIterator : "@@asyncIterator";
    exports.SYMBOL_ASYNC_ITERATOR = SYMBOL_ASYNC_ITERATOR;
    var SYMBOL_TO_STRING_TAG = typeof Symbol === "function" && Symbol.toStringTag != null ? Symbol.toStringTag : "@@toStringTag";
    exports.SYMBOL_TO_STRING_TAG = SYMBOL_TO_STRING_TAG;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/location.js
var require_location = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/location.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getLocation = getLocation;
    function getLocation(source, position) {
      var lineRegexp = /\r\n|[\n\r]/g;
      var line = 1;
      var column = position + 1;
      var match;
      while ((match = lineRegexp.exec(source.body)) && match.index < position) {
        line += 1;
        column = position + 1 - (match.index + match[0].length);
      }
      return {
        line,
        column
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/printLocation.js
var require_printLocation = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/printLocation.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printLocation = printLocation;
    exports.printSourceLocation = printSourceLocation;
    var _location = require_location();
    function printLocation(location) {
      return printSourceLocation(location.source, (0, _location.getLocation)(location.source, location.start));
    }
    function printSourceLocation(source, sourceLocation) {
      var firstLineColumnOffset = source.locationOffset.column - 1;
      var body = whitespace(firstLineColumnOffset) + source.body;
      var lineIndex = sourceLocation.line - 1;
      var lineOffset = source.locationOffset.line - 1;
      var lineNum = sourceLocation.line + lineOffset;
      var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
      var columnNum = sourceLocation.column + columnOffset;
      var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
      var lines = body.split(/\r\n|[\n\r]/g);
      var locationLine = lines[lineIndex];
      if (locationLine.length > 120) {
        var subLineIndex = Math.floor(columnNum / 80);
        var subLineColumnNum = columnNum % 80;
        var subLines = [];
        for (var i = 0; i < locationLine.length; i += 80) {
          subLines.push(locationLine.slice(i, i + 80));
        }
        return locationStr + printPrefixedLines([["".concat(lineNum), subLines[0]]].concat(subLines.slice(1, subLineIndex + 1).map(function(subLine) {
          return ["", subLine];
        }), [[" ", whitespace(subLineColumnNum - 1) + "^"], ["", subLines[subLineIndex + 1]]]));
      }
      return locationStr + printPrefixedLines([
        ["".concat(lineNum - 1), lines[lineIndex - 1]],
        ["".concat(lineNum), locationLine],
        ["", whitespace(columnNum - 1) + "^"],
        ["".concat(lineNum + 1), lines[lineIndex + 1]]
      ]);
    }
    function printPrefixedLines(lines) {
      var existingLines = lines.filter(function(_ref) {
        var _ = _ref[0], line = _ref[1];
        return line !== void 0;
      });
      var padLen = Math.max.apply(Math, existingLines.map(function(_ref2) {
        var prefix = _ref2[0];
        return prefix.length;
      }));
      return existingLines.map(function(_ref3) {
        var prefix = _ref3[0], line = _ref3[1];
        return leftPad(padLen, prefix) + (line ? " | " + line : " |");
      }).join("\n");
    }
    function whitespace(len) {
      return Array(len + 1).join(" ");
    }
    function leftPad(len, str) {
      return whitespace(len - str.length) + str;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/error/GraphQLError.js
var require_GraphQLError = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/error/GraphQLError.js"(exports) {
    init_cjs_shims();
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printError = printError;
    exports.GraphQLError = void 0;
    var _isObjectLike = _interopRequireDefault(require_isObjectLike());
    var _symbols = require_symbols();
    var _location = require_location();
    var _printLocation = require_printLocation();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [null];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    var GraphQLError2 = /* @__PURE__ */ function(_Error) {
      _inherits(GraphQLError3, _Error);
      var _super = _createSuper(GraphQLError3);
      function GraphQLError3(message, nodes, source, positions, path, originalError, extensions) {
        var _locations2, _source2, _positions2, _extensions2;
        var _this;
        _classCallCheck(this, GraphQLError3);
        _this = _super.call(this, message);
        var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : void 0 : nodes ? [nodes] : void 0;
        var _source = source;
        if (!_source && _nodes) {
          var _nodes$0$loc;
          _source = (_nodes$0$loc = _nodes[0].loc) === null || _nodes$0$loc === void 0 ? void 0 : _nodes$0$loc.source;
        }
        var _positions = positions;
        if (!_positions && _nodes) {
          _positions = _nodes.reduce(function(list, node) {
            if (node.loc) {
              list.push(node.loc.start);
            }
            return list;
          }, []);
        }
        if (_positions && _positions.length === 0) {
          _positions = void 0;
        }
        var _locations;
        if (positions && source) {
          _locations = positions.map(function(pos) {
            return (0, _location.getLocation)(source, pos);
          });
        } else if (_nodes) {
          _locations = _nodes.reduce(function(list, node) {
            if (node.loc) {
              list.push((0, _location.getLocation)(node.loc.source, node.loc.start));
            }
            return list;
          }, []);
        }
        var _extensions = extensions;
        if (_extensions == null && originalError != null) {
          var originalExtensions = originalError.extensions;
          if ((0, _isObjectLike.default)(originalExtensions)) {
            _extensions = originalExtensions;
          }
        }
        Object.defineProperties(_assertThisInitialized(_this), {
          name: {
            value: "GraphQLError"
          },
          message: {
            value: message,
            enumerable: true,
            writable: true
          },
          locations: {
            value: (_locations2 = _locations) !== null && _locations2 !== void 0 ? _locations2 : void 0,
            enumerable: _locations != null
          },
          path: {
            value: path !== null && path !== void 0 ? path : void 0,
            enumerable: path != null
          },
          nodes: {
            value: _nodes !== null && _nodes !== void 0 ? _nodes : void 0
          },
          source: {
            value: (_source2 = _source) !== null && _source2 !== void 0 ? _source2 : void 0
          },
          positions: {
            value: (_positions2 = _positions) !== null && _positions2 !== void 0 ? _positions2 : void 0
          },
          originalError: {
            value: originalError
          },
          extensions: {
            value: (_extensions2 = _extensions) !== null && _extensions2 !== void 0 ? _extensions2 : void 0,
            enumerable: _extensions != null
          }
        });
        if (originalError !== null && originalError !== void 0 && originalError.stack) {
          Object.defineProperty(_assertThisInitialized(_this), "stack", {
            value: originalError.stack,
            writable: true,
            configurable: true
          });
          return _possibleConstructorReturn(_this);
        }
        if (Error.captureStackTrace) {
          Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError3);
        } else {
          Object.defineProperty(_assertThisInitialized(_this), "stack", {
            value: Error().stack,
            writable: true,
            configurable: true
          });
        }
        return _this;
      }
      _createClass(GraphQLError3, [{
        key: "toString",
        value: function toString() {
          return printError(this);
        }
      }, {
        key: _symbols.SYMBOL_TO_STRING_TAG,
        get: function get() {
          return "Object";
        }
      }]);
      return GraphQLError3;
    }(/* @__PURE__ */ _wrapNativeSuper(Error));
    exports.GraphQLError = GraphQLError2;
    function printError(error) {
      var output = error.message;
      if (error.nodes) {
        for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
          var node = _error$nodes2[_i2];
          if (node.loc) {
            output += "\n\n" + (0, _printLocation.printLocation)(node.loc);
          }
        }
      } else if (error.source && error.locations) {
        for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
          var location = _error$locations2[_i4];
          output += "\n\n" + (0, _printLocation.printSourceLocation)(error.source, location);
        }
      }
      return output;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/error/syntaxError.js
var require_syntaxError = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/error/syntaxError.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.syntaxError = syntaxError;
    var _GraphQLError = require_GraphQLError();
    function syntaxError(source, position, description) {
      return new _GraphQLError.GraphQLError("Syntax Error: ".concat(description), void 0, source, [position]);
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/kinds.js
var require_kinds = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/kinds.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Kind = void 0;
    var Kind5 = Object.freeze({
      NAME: "Name",
      DOCUMENT: "Document",
      OPERATION_DEFINITION: "OperationDefinition",
      VARIABLE_DEFINITION: "VariableDefinition",
      SELECTION_SET: "SelectionSet",
      FIELD: "Field",
      ARGUMENT: "Argument",
      FRAGMENT_SPREAD: "FragmentSpread",
      INLINE_FRAGMENT: "InlineFragment",
      FRAGMENT_DEFINITION: "FragmentDefinition",
      VARIABLE: "Variable",
      INT: "IntValue",
      FLOAT: "FloatValue",
      STRING: "StringValue",
      BOOLEAN: "BooleanValue",
      NULL: "NullValue",
      ENUM: "EnumValue",
      LIST: "ListValue",
      OBJECT: "ObjectValue",
      OBJECT_FIELD: "ObjectField",
      DIRECTIVE: "Directive",
      NAMED_TYPE: "NamedType",
      LIST_TYPE: "ListType",
      NON_NULL_TYPE: "NonNullType",
      SCHEMA_DEFINITION: "SchemaDefinition",
      OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
      SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
      OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
      FIELD_DEFINITION: "FieldDefinition",
      INPUT_VALUE_DEFINITION: "InputValueDefinition",
      INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
      UNION_TYPE_DEFINITION: "UnionTypeDefinition",
      ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
      ENUM_VALUE_DEFINITION: "EnumValueDefinition",
      INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
      DIRECTIVE_DEFINITION: "DirectiveDefinition",
      SCHEMA_EXTENSION: "SchemaExtension",
      SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
      OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
      INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
      UNION_TYPE_EXTENSION: "UnionTypeExtension",
      ENUM_TYPE_EXTENSION: "EnumTypeExtension",
      INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
    });
    exports.Kind = Kind5;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/invariant.js
var require_invariant = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/invariant.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = invariant;
    function invariant(condition, message) {
      var booleanCondition = Boolean(condition);
      if (!booleanCondition) {
        throw new Error(message != null ? message : "Unexpected invariant triggered.");
      }
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/nodejsCustomInspectSymbol.js
var require_nodejsCustomInspectSymbol = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/nodejsCustomInspectSymbol.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var nodejsCustomInspectSymbol = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : void 0;
    var _default = nodejsCustomInspectSymbol;
    exports.default = _default;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/defineInspect.js
var require_defineInspect = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/defineInspect.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = defineInspect;
    var _invariant = _interopRequireDefault(require_invariant());
    var _nodejsCustomInspectSymbol = _interopRequireDefault(require_nodejsCustomInspectSymbol());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function defineInspect(classObject) {
      var fn = classObject.prototype.toJSON;
      typeof fn === "function" || (0, _invariant.default)(0);
      classObject.prototype.inspect = fn;
      if (_nodejsCustomInspectSymbol.default) {
        classObject.prototype[_nodejsCustomInspectSymbol.default] = fn;
      }
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/ast.js
var require_ast = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/ast.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isNode = isNode;
    exports.Token = exports.Location = void 0;
    var _defineInspect = _interopRequireDefault(require_defineInspect());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var Location = /* @__PURE__ */ function() {
      function Location2(startToken, endToken, source) {
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
      }
      var _proto = Location2.prototype;
      _proto.toJSON = function toJSON() {
        return {
          start: this.start,
          end: this.end
        };
      };
      return Location2;
    }();
    exports.Location = Location;
    (0, _defineInspect.default)(Location);
    var Token = /* @__PURE__ */ function() {
      function Token2(kind, start, end, line, column, prev, value) {
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column;
        this.value = value;
        this.prev = prev;
        this.next = null;
      }
      var _proto2 = Token2.prototype;
      _proto2.toJSON = function toJSON() {
        return {
          kind: this.kind,
          value: this.value,
          line: this.line,
          column: this.column
        };
      };
      return Token2;
    }();
    exports.Token = Token;
    (0, _defineInspect.default)(Token);
    function isNode(maybeNode) {
      return maybeNode != null && typeof maybeNode.kind === "string";
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/tokenKind.js
var require_tokenKind = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/tokenKind.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TokenKind = void 0;
    var TokenKind2 = Object.freeze({
      SOF: "<SOF>",
      EOF: "<EOF>",
      BANG: "!",
      DOLLAR: "$",
      AMP: "&",
      PAREN_L: "(",
      PAREN_R: ")",
      SPREAD: "...",
      COLON: ":",
      EQUALS: "=",
      AT: "@",
      BRACKET_L: "[",
      BRACKET_R: "]",
      BRACE_L: "{",
      PIPE: "|",
      BRACE_R: "}",
      NAME: "Name",
      INT: "Int",
      FLOAT: "Float",
      STRING: "String",
      BLOCK_STRING: "BlockString",
      COMMENT: "Comment"
    });
    exports.TokenKind = TokenKind2;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/inspect.js
var require_inspect = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/inspect.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = inspect2;
    var _nodejsCustomInspectSymbol = _interopRequireDefault(require_nodejsCustomInspectSymbol());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    var MAX_ARRAY_LENGTH2 = 10;
    var MAX_RECURSIVE_DEPTH2 = 2;
    function inspect2(value) {
      return formatValue2(value, []);
    }
    function formatValue2(value, seenValues) {
      switch (_typeof(value)) {
        case "string":
          return JSON.stringify(value);
        case "function":
          return value.name ? "[function ".concat(value.name, "]") : "[function]";
        case "object":
          if (value === null) {
            return "null";
          }
          return formatObjectValue2(value, seenValues);
        default:
          return String(value);
      }
    }
    function formatObjectValue2(value, previouslySeenValues) {
      if (previouslySeenValues.indexOf(value) !== -1) {
        return "[Circular]";
      }
      var seenValues = [].concat(previouslySeenValues, [value]);
      var customInspectFn = getCustomFn(value);
      if (customInspectFn !== void 0) {
        var customValue = customInspectFn.call(value);
        if (customValue !== value) {
          return typeof customValue === "string" ? customValue : formatValue2(customValue, seenValues);
        }
      } else if (Array.isArray(value)) {
        return formatArray2(value, seenValues);
      }
      return formatObject2(value, seenValues);
    }
    function formatObject2(object, seenValues) {
      var keys = Object.keys(object);
      if (keys.length === 0) {
        return "{}";
      }
      if (seenValues.length > MAX_RECURSIVE_DEPTH2) {
        return "[" + getObjectTag2(object) + "]";
      }
      var properties = keys.map(function(key) {
        var value = formatValue2(object[key], seenValues);
        return key + ": " + value;
      });
      return "{ " + properties.join(", ") + " }";
    }
    function formatArray2(array, seenValues) {
      if (array.length === 0) {
        return "[]";
      }
      if (seenValues.length > MAX_RECURSIVE_DEPTH2) {
        return "[Array]";
      }
      var len = Math.min(MAX_ARRAY_LENGTH2, array.length);
      var remaining = array.length - len;
      var items = [];
      for (var i = 0; i < len; ++i) {
        items.push(formatValue2(array[i], seenValues));
      }
      if (remaining === 1) {
        items.push("... 1 more item");
      } else if (remaining > 1) {
        items.push("... ".concat(remaining, " more items"));
      }
      return "[" + items.join(", ") + "]";
    }
    function getCustomFn(object) {
      var customInspectFn = object[String(_nodejsCustomInspectSymbol.default)];
      if (typeof customInspectFn === "function") {
        return customInspectFn;
      }
      if (typeof object.inspect === "function") {
        return object.inspect;
      }
    }
    function getObjectTag2(object) {
      var tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
      if (tag === "Object" && typeof object.constructor === "function") {
        var name = object.constructor.name;
        if (typeof name === "string" && name !== "") {
          return name;
        }
      }
      return tag;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/devAssert.js
var require_devAssert = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/devAssert.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = devAssert;
    function devAssert(condition, message) {
      var booleanCondition = Boolean(condition);
      if (!booleanCondition) {
        throw new Error(message);
      }
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/instanceOf.js
var require_instanceOf = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/instanceOf.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _inspect = _interopRequireDefault(require_inspect());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    var _default = process.env.NODE_ENV === "production" ? function instanceOf(value, constructor) {
      return value instanceof constructor;
    } : function instanceOf(value, constructor) {
      if (value instanceof constructor) {
        return true;
      }
      if (_typeof(value) === "object" && value !== null) {
        var _value$constructor;
        var className = constructor.prototype[Symbol.toStringTag];
        var valueClassName = Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;
        if (className === valueClassName) {
          var stringifiedValue = (0, _inspect.default)(value);
          throw new Error("Cannot use ".concat(className, ' "').concat(stringifiedValue, '" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.'));
        }
      }
      return false;
    };
    exports.default = _default;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/source.js
var require_source = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/source.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isSource = isSource;
    exports.Source = void 0;
    var _symbols = require_symbols();
    var _inspect = _interopRequireDefault(require_inspect());
    var _devAssert = _interopRequireDefault(require_devAssert());
    var _instanceOf = _interopRequireDefault(require_instanceOf());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Source2 = /* @__PURE__ */ function() {
      function Source3(body) {
        var name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "GraphQL request";
        var locationOffset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
          line: 1,
          column: 1
        };
        typeof body === "string" || (0, _devAssert.default)(0, "Body must be a string. Received: ".concat((0, _inspect.default)(body), "."));
        this.body = body;
        this.name = name;
        this.locationOffset = locationOffset;
        this.locationOffset.line > 0 || (0, _devAssert.default)(0, "line in locationOffset is 1-indexed and must be positive.");
        this.locationOffset.column > 0 || (0, _devAssert.default)(0, "column in locationOffset is 1-indexed and must be positive.");
      }
      _createClass(Source3, [{
        key: _symbols.SYMBOL_TO_STRING_TAG,
        get: function get() {
          return "Source";
        }
      }]);
      return Source3;
    }();
    exports.Source = Source2;
    function isSource(source) {
      return (0, _instanceOf.default)(source, Source2);
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/directiveLocation.js
var require_directiveLocation = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/directiveLocation.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DirectiveLocation = void 0;
    var DirectiveLocation = Object.freeze({
      QUERY: "QUERY",
      MUTATION: "MUTATION",
      SUBSCRIPTION: "SUBSCRIPTION",
      FIELD: "FIELD",
      FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
      FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
      INLINE_FRAGMENT: "INLINE_FRAGMENT",
      VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
      SCHEMA: "SCHEMA",
      SCALAR: "SCALAR",
      OBJECT: "OBJECT",
      FIELD_DEFINITION: "FIELD_DEFINITION",
      ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
      INTERFACE: "INTERFACE",
      UNION: "UNION",
      ENUM: "ENUM",
      ENUM_VALUE: "ENUM_VALUE",
      INPUT_OBJECT: "INPUT_OBJECT",
      INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION"
    });
    exports.DirectiveLocation = DirectiveLocation;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/blockString.js
var require_blockString = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/blockString.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.dedentBlockStringValue = dedentBlockStringValue;
    exports.getBlockStringIndentation = getBlockStringIndentation;
    exports.printBlockString = printBlockString2;
    function dedentBlockStringValue(rawString) {
      var lines = rawString.split(/\r\n|[\n\r]/g);
      var commonIndent = getBlockStringIndentation(rawString);
      if (commonIndent !== 0) {
        for (var i = 1; i < lines.length; i++) {
          lines[i] = lines[i].slice(commonIndent);
        }
      }
      var startLine = 0;
      while (startLine < lines.length && isBlank(lines[startLine])) {
        ++startLine;
      }
      var endLine = lines.length;
      while (endLine > startLine && isBlank(lines[endLine - 1])) {
        --endLine;
      }
      return lines.slice(startLine, endLine).join("\n");
    }
    function isBlank(str) {
      for (var i = 0; i < str.length; ++i) {
        if (str[i] !== " " && str[i] !== "	") {
          return false;
        }
      }
      return true;
    }
    function getBlockStringIndentation(value) {
      var _commonIndent;
      var isFirstLine = true;
      var isEmptyLine = true;
      var indent2 = 0;
      var commonIndent = null;
      for (var i = 0; i < value.length; ++i) {
        switch (value.charCodeAt(i)) {
          case 13:
            if (value.charCodeAt(i + 1) === 10) {
              ++i;
            }
          case 10:
            isFirstLine = false;
            isEmptyLine = true;
            indent2 = 0;
            break;
          case 9:
          case 32:
            ++indent2;
            break;
          default:
            if (isEmptyLine && !isFirstLine && (commonIndent === null || indent2 < commonIndent)) {
              commonIndent = indent2;
            }
            isEmptyLine = false;
        }
      }
      return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
    }
    function printBlockString2(value) {
      var indentation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var preferMultipleLines = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var isSingleLine = value.indexOf("\n") === -1;
      var hasLeadingSpace = value[0] === " " || value[0] === "	";
      var hasTrailingQuote = value[value.length - 1] === '"';
      var hasTrailingSlash = value[value.length - 1] === "\\";
      var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
      var result = "";
      if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
        result += "\n" + indentation;
      }
      result += indentation ? value.replace(/\n/g, "\n" + indentation) : value;
      if (printAsMultipleLines) {
        result += "\n";
      }
      return '"""' + result.replace(/"""/g, '\\"""') + '"""';
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/lexer.js
var require_lexer = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/lexer.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isPunctuatorTokenKind = isPunctuatorTokenKind;
    exports.Lexer = void 0;
    var _syntaxError = require_syntaxError();
    var _ast = require_ast();
    var _tokenKind = require_tokenKind();
    var _blockString = require_blockString();
    var Lexer = /* @__PURE__ */ function() {
      function Lexer2(source) {
        var startOfFileToken = new _ast.Token(_tokenKind.TokenKind.SOF, 0, 0, 0, 0, null);
        this.source = source;
        this.lastToken = startOfFileToken;
        this.token = startOfFileToken;
        this.line = 1;
        this.lineStart = 0;
      }
      var _proto = Lexer2.prototype;
      _proto.advance = function advance() {
        this.lastToken = this.token;
        var token = this.token = this.lookahead();
        return token;
      };
      _proto.lookahead = function lookahead() {
        var token = this.token;
        if (token.kind !== _tokenKind.TokenKind.EOF) {
          do {
            var _token$next;
            token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
          } while (token.kind === _tokenKind.TokenKind.COMMENT);
        }
        return token;
      };
      return Lexer2;
    }();
    exports.Lexer = Lexer;
    function isPunctuatorTokenKind(kind) {
      return kind === _tokenKind.TokenKind.BANG || kind === _tokenKind.TokenKind.DOLLAR || kind === _tokenKind.TokenKind.AMP || kind === _tokenKind.TokenKind.PAREN_L || kind === _tokenKind.TokenKind.PAREN_R || kind === _tokenKind.TokenKind.SPREAD || kind === _tokenKind.TokenKind.COLON || kind === _tokenKind.TokenKind.EQUALS || kind === _tokenKind.TokenKind.AT || kind === _tokenKind.TokenKind.BRACKET_L || kind === _tokenKind.TokenKind.BRACKET_R || kind === _tokenKind.TokenKind.BRACE_L || kind === _tokenKind.TokenKind.PIPE || kind === _tokenKind.TokenKind.BRACE_R;
    }
    function printCharCode(code) {
      return isNaN(code) ? _tokenKind.TokenKind.EOF : code < 127 ? JSON.stringify(String.fromCharCode(code)) : '"\\u'.concat(("00" + code.toString(16).toUpperCase()).slice(-4), '"');
    }
    function readToken(lexer, prev) {
      var source = lexer.source;
      var body = source.body;
      var bodyLength = body.length;
      var pos = prev.end;
      while (pos < bodyLength) {
        var code = body.charCodeAt(pos);
        var _line = lexer.line;
        var _col = 1 + pos - lexer.lineStart;
        switch (code) {
          case 65279:
          case 9:
          case 32:
          case 44:
            ++pos;
            continue;
          case 10:
            ++pos;
            ++lexer.line;
            lexer.lineStart = pos;
            continue;
          case 13:
            if (body.charCodeAt(pos + 1) === 10) {
              pos += 2;
            } else {
              ++pos;
            }
            ++lexer.line;
            lexer.lineStart = pos;
            continue;
          case 33:
            return new _ast.Token(_tokenKind.TokenKind.BANG, pos, pos + 1, _line, _col, prev);
          case 35:
            return readComment(source, pos, _line, _col, prev);
          case 36:
            return new _ast.Token(_tokenKind.TokenKind.DOLLAR, pos, pos + 1, _line, _col, prev);
          case 38:
            return new _ast.Token(_tokenKind.TokenKind.AMP, pos, pos + 1, _line, _col, prev);
          case 40:
            return new _ast.Token(_tokenKind.TokenKind.PAREN_L, pos, pos + 1, _line, _col, prev);
          case 41:
            return new _ast.Token(_tokenKind.TokenKind.PAREN_R, pos, pos + 1, _line, _col, prev);
          case 46:
            if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
              return new _ast.Token(_tokenKind.TokenKind.SPREAD, pos, pos + 3, _line, _col, prev);
            }
            break;
          case 58:
            return new _ast.Token(_tokenKind.TokenKind.COLON, pos, pos + 1, _line, _col, prev);
          case 61:
            return new _ast.Token(_tokenKind.TokenKind.EQUALS, pos, pos + 1, _line, _col, prev);
          case 64:
            return new _ast.Token(_tokenKind.TokenKind.AT, pos, pos + 1, _line, _col, prev);
          case 91:
            return new _ast.Token(_tokenKind.TokenKind.BRACKET_L, pos, pos + 1, _line, _col, prev);
          case 93:
            return new _ast.Token(_tokenKind.TokenKind.BRACKET_R, pos, pos + 1, _line, _col, prev);
          case 123:
            return new _ast.Token(_tokenKind.TokenKind.BRACE_L, pos, pos + 1, _line, _col, prev);
          case 124:
            return new _ast.Token(_tokenKind.TokenKind.PIPE, pos, pos + 1, _line, _col, prev);
          case 125:
            return new _ast.Token(_tokenKind.TokenKind.BRACE_R, pos, pos + 1, _line, _col, prev);
          case 34:
            if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
              return readBlockString(source, pos, _line, _col, prev, lexer);
            }
            return readString(source, pos, _line, _col, prev);
          case 45:
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return readNumber(source, pos, code, _line, _col, prev);
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
          case 95:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            return readName(source, pos, _line, _col, prev);
        }
        throw (0, _syntaxError.syntaxError)(source, pos, unexpectedCharacterMessage(code));
      }
      var line = lexer.line;
      var col = 1 + pos - lexer.lineStart;
      return new _ast.Token(_tokenKind.TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
    }
    function unexpectedCharacterMessage(code) {
      if (code < 32 && code !== 9 && code !== 10 && code !== 13) {
        return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
      }
      if (code === 39) {
        return `Unexpected single quote character ('), did you mean to use a double quote (")?`;
      }
      return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
    }
    function readComment(source, start, line, col, prev) {
      var body = source.body;
      var code;
      var position = start;
      do {
        code = body.charCodeAt(++position);
      } while (!isNaN(code) && (code > 31 || code === 9));
      return new _ast.Token(_tokenKind.TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
    }
    function readNumber(source, start, firstCode, line, col, prev) {
      var body = source.body;
      var code = firstCode;
      var position = start;
      var isFloat = false;
      if (code === 45) {
        code = body.charCodeAt(++position);
      }
      if (code === 48) {
        code = body.charCodeAt(++position);
        if (code >= 48 && code <= 57) {
          throw (0, _syntaxError.syntaxError)(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
        }
      } else {
        position = readDigits(source, position, code);
        code = body.charCodeAt(position);
      }
      if (code === 46) {
        isFloat = true;
        code = body.charCodeAt(++position);
        position = readDigits(source, position, code);
        code = body.charCodeAt(position);
      }
      if (code === 69 || code === 101) {
        isFloat = true;
        code = body.charCodeAt(++position);
        if (code === 43 || code === 45) {
          code = body.charCodeAt(++position);
        }
        position = readDigits(source, position, code);
        code = body.charCodeAt(position);
      }
      if (code === 46 || isNameStart(code)) {
        throw (0, _syntaxError.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
      }
      return new _ast.Token(isFloat ? _tokenKind.TokenKind.FLOAT : _tokenKind.TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
    }
    function readDigits(source, start, firstCode) {
      var body = source.body;
      var position = start;
      var code = firstCode;
      if (code >= 48 && code <= 57) {
        do {
          code = body.charCodeAt(++position);
        } while (code >= 48 && code <= 57);
        return position;
      }
      throw (0, _syntaxError.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
    }
    function readString(source, start, line, col, prev) {
      var body = source.body;
      var position = start + 1;
      var chunkStart = position;
      var code = 0;
      var value = "";
      while (position < body.length && !isNaN(code = body.charCodeAt(position)) && code !== 10 && code !== 13) {
        if (code === 34) {
          value += body.slice(chunkStart, position);
          return new _ast.Token(_tokenKind.TokenKind.STRING, start, position + 1, line, col, prev, value);
        }
        if (code < 32 && code !== 9) {
          throw (0, _syntaxError.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
        }
        ++position;
        if (code === 92) {
          value += body.slice(chunkStart, position - 1);
          code = body.charCodeAt(position);
          switch (code) {
            case 34:
              value += '"';
              break;
            case 47:
              value += "/";
              break;
            case 92:
              value += "\\";
              break;
            case 98:
              value += "\b";
              break;
            case 102:
              value += "\f";
              break;
            case 110:
              value += "\n";
              break;
            case 114:
              value += "\r";
              break;
            case 116:
              value += "	";
              break;
            case 117: {
              var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));
              if (charCode < 0) {
                var invalidSequence = body.slice(position + 1, position + 5);
                throw (0, _syntaxError.syntaxError)(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
              }
              value += String.fromCharCode(charCode);
              position += 4;
              break;
            }
            default:
              throw (0, _syntaxError.syntaxError)(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
          }
          ++position;
          chunkStart = position;
        }
      }
      throw (0, _syntaxError.syntaxError)(source, position, "Unterminated string.");
    }
    function readBlockString(source, start, line, col, prev, lexer) {
      var body = source.body;
      var position = start + 3;
      var chunkStart = position;
      var code = 0;
      var rawValue = "";
      while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
        if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
          rawValue += body.slice(chunkStart, position);
          return new _ast.Token(_tokenKind.TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, (0, _blockString.dedentBlockStringValue)(rawValue));
        }
        if (code < 32 && code !== 9 && code !== 10 && code !== 13) {
          throw (0, _syntaxError.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
        }
        if (code === 10) {
          ++position;
          ++lexer.line;
          lexer.lineStart = position;
        } else if (code === 13) {
          if (body.charCodeAt(position + 1) === 10) {
            position += 2;
          } else {
            ++position;
          }
          ++lexer.line;
          lexer.lineStart = position;
        } else if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
          rawValue += body.slice(chunkStart, position) + '"""';
          position += 4;
          chunkStart = position;
        } else {
          ++position;
        }
      }
      throw (0, _syntaxError.syntaxError)(source, position, "Unterminated string.");
    }
    function uniCharCode(a, b, c, d) {
      return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
    }
    function char2hex(a) {
      return a >= 48 && a <= 57 ? a - 48 : a >= 65 && a <= 70 ? a - 55 : a >= 97 && a <= 102 ? a - 87 : -1;
    }
    function readName(source, start, line, col, prev) {
      var body = source.body;
      var bodyLength = body.length;
      var position = start + 1;
      var code = 0;
      while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122)) {
        ++position;
      }
      return new _ast.Token(_tokenKind.TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
    }
    function isNameStart(code) {
      return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/parser.js
var require_parser = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/parser.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parse = parse4;
    exports.parseValue = parseValue;
    exports.parseType = parseType;
    exports.Parser = void 0;
    var _syntaxError = require_syntaxError();
    var _kinds = require_kinds();
    var _ast = require_ast();
    var _tokenKind = require_tokenKind();
    var _source = require_source();
    var _directiveLocation = require_directiveLocation();
    var _lexer = require_lexer();
    function parse4(source, options) {
      var parser = new Parser(source, options);
      return parser.parseDocument();
    }
    function parseValue(source, options) {
      var parser = new Parser(source, options);
      parser.expectToken(_tokenKind.TokenKind.SOF);
      var value = parser.parseValueLiteral(false);
      parser.expectToken(_tokenKind.TokenKind.EOF);
      return value;
    }
    function parseType(source, options) {
      var parser = new Parser(source, options);
      parser.expectToken(_tokenKind.TokenKind.SOF);
      var type = parser.parseTypeReference();
      parser.expectToken(_tokenKind.TokenKind.EOF);
      return type;
    }
    var Parser = /* @__PURE__ */ function() {
      function Parser2(source, options) {
        var sourceObj = (0, _source.isSource)(source) ? source : new _source.Source(source);
        this._lexer = new _lexer.Lexer(sourceObj);
        this._options = options;
      }
      var _proto = Parser2.prototype;
      _proto.parseName = function parseName() {
        var token = this.expectToken(_tokenKind.TokenKind.NAME);
        return {
          kind: _kinds.Kind.NAME,
          value: token.value,
          loc: this.loc(token)
        };
      };
      _proto.parseDocument = function parseDocument() {
        var start = this._lexer.token;
        return {
          kind: _kinds.Kind.DOCUMENT,
          definitions: this.many(_tokenKind.TokenKind.SOF, this.parseDefinition, _tokenKind.TokenKind.EOF),
          loc: this.loc(start)
        };
      };
      _proto.parseDefinition = function parseDefinition() {
        if (this.peek(_tokenKind.TokenKind.NAME)) {
          switch (this._lexer.token.value) {
            case "query":
            case "mutation":
            case "subscription":
              return this.parseOperationDefinition();
            case "fragment":
              return this.parseFragmentDefinition();
            case "schema":
            case "scalar":
            case "type":
            case "interface":
            case "union":
            case "enum":
            case "input":
            case "directive":
              return this.parseTypeSystemDefinition();
            case "extend":
              return this.parseTypeSystemExtension();
          }
        } else if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
          return this.parseOperationDefinition();
        } else if (this.peekDescription()) {
          return this.parseTypeSystemDefinition();
        }
        throw this.unexpected();
      };
      _proto.parseOperationDefinition = function parseOperationDefinition() {
        var start = this._lexer.token;
        if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
          return {
            kind: _kinds.Kind.OPERATION_DEFINITION,
            operation: "query",
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
          };
        }
        var operation = this.parseOperationType();
        var name;
        if (this.peek(_tokenKind.TokenKind.NAME)) {
          name = this.parseName();
        }
        return {
          kind: _kinds.Kind.OPERATION_DEFINITION,
          operation,
          name,
          variableDefinitions: this.parseVariableDefinitions(),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(start)
        };
      };
      _proto.parseOperationType = function parseOperationType() {
        var operationToken = this.expectToken(_tokenKind.TokenKind.NAME);
        switch (operationToken.value) {
          case "query":
            return "query";
          case "mutation":
            return "mutation";
          case "subscription":
            return "subscription";
        }
        throw this.unexpected(operationToken);
      };
      _proto.parseVariableDefinitions = function parseVariableDefinitions() {
        return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseVariableDefinition, _tokenKind.TokenKind.PAREN_R);
      };
      _proto.parseVariableDefinition = function parseVariableDefinition() {
        var start = this._lexer.token;
        return {
          kind: _kinds.Kind.VARIABLE_DEFINITION,
          variable: this.parseVariable(),
          type: (this.expectToken(_tokenKind.TokenKind.COLON), this.parseTypeReference()),
          defaultValue: this.expectOptionalToken(_tokenKind.TokenKind.EQUALS) ? this.parseValueLiteral(true) : void 0,
          directives: this.parseDirectives(true),
          loc: this.loc(start)
        };
      };
      _proto.parseVariable = function parseVariable() {
        var start = this._lexer.token;
        this.expectToken(_tokenKind.TokenKind.DOLLAR);
        return {
          kind: _kinds.Kind.VARIABLE,
          name: this.parseName(),
          loc: this.loc(start)
        };
      };
      _proto.parseSelectionSet = function parseSelectionSet() {
        var start = this._lexer.token;
        return {
          kind: _kinds.Kind.SELECTION_SET,
          selections: this.many(_tokenKind.TokenKind.BRACE_L, this.parseSelection, _tokenKind.TokenKind.BRACE_R),
          loc: this.loc(start)
        };
      };
      _proto.parseSelection = function parseSelection() {
        return this.peek(_tokenKind.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
      };
      _proto.parseField = function parseField() {
        var start = this._lexer.token;
        var nameOrAlias = this.parseName();
        var alias;
        var name;
        if (this.expectOptionalToken(_tokenKind.TokenKind.COLON)) {
          alias = nameOrAlias;
          name = this.parseName();
        } else {
          name = nameOrAlias;
        }
        return {
          kind: _kinds.Kind.FIELD,
          alias,
          name,
          arguments: this.parseArguments(false),
          directives: this.parseDirectives(false),
          selectionSet: this.peek(_tokenKind.TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0,
          loc: this.loc(start)
        };
      };
      _proto.parseArguments = function parseArguments(isConst) {
        var item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(_tokenKind.TokenKind.PAREN_L, item, _tokenKind.TokenKind.PAREN_R);
      };
      _proto.parseArgument = function parseArgument() {
        var start = this._lexer.token;
        var name = this.parseName();
        this.expectToken(_tokenKind.TokenKind.COLON);
        return {
          kind: _kinds.Kind.ARGUMENT,
          name,
          value: this.parseValueLiteral(false),
          loc: this.loc(start)
        };
      };
      _proto.parseConstArgument = function parseConstArgument() {
        var start = this._lexer.token;
        return {
          kind: _kinds.Kind.ARGUMENT,
          name: this.parseName(),
          value: (this.expectToken(_tokenKind.TokenKind.COLON), this.parseValueLiteral(true)),
          loc: this.loc(start)
        };
      };
      _proto.parseFragment = function parseFragment() {
        var start = this._lexer.token;
        this.expectToken(_tokenKind.TokenKind.SPREAD);
        var hasTypeCondition = this.expectOptionalKeyword("on");
        if (!hasTypeCondition && this.peek(_tokenKind.TokenKind.NAME)) {
          return {
            kind: _kinds.Kind.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(false),
            loc: this.loc(start)
          };
        }
        return {
          kind: _kinds.Kind.INLINE_FRAGMENT,
          typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(start)
        };
      };
      _proto.parseFragmentDefinition = function parseFragmentDefinition() {
        var _this$_options;
        var start = this._lexer.token;
        this.expectKeyword("fragment");
        if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) {
          return {
            kind: _kinds.Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
          };
        }
        return {
          kind: _kinds.Kind.FRAGMENT_DEFINITION,
          name: this.parseFragmentName(),
          typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(start)
        };
      };
      _proto.parseFragmentName = function parseFragmentName() {
        if (this._lexer.token.value === "on") {
          throw this.unexpected();
        }
        return this.parseName();
      };
      _proto.parseValueLiteral = function parseValueLiteral(isConst) {
        var token = this._lexer.token;
        switch (token.kind) {
          case _tokenKind.TokenKind.BRACKET_L:
            return this.parseList(isConst);
          case _tokenKind.TokenKind.BRACE_L:
            return this.parseObject(isConst);
          case _tokenKind.TokenKind.INT:
            this._lexer.advance();
            return {
              kind: _kinds.Kind.INT,
              value: token.value,
              loc: this.loc(token)
            };
          case _tokenKind.TokenKind.FLOAT:
            this._lexer.advance();
            return {
              kind: _kinds.Kind.FLOAT,
              value: token.value,
              loc: this.loc(token)
            };
          case _tokenKind.TokenKind.STRING:
          case _tokenKind.TokenKind.BLOCK_STRING:
            return this.parseStringLiteral();
          case _tokenKind.TokenKind.NAME:
            this._lexer.advance();
            switch (token.value) {
              case "true":
                return {
                  kind: _kinds.Kind.BOOLEAN,
                  value: true,
                  loc: this.loc(token)
                };
              case "false":
                return {
                  kind: _kinds.Kind.BOOLEAN,
                  value: false,
                  loc: this.loc(token)
                };
              case "null":
                return {
                  kind: _kinds.Kind.NULL,
                  loc: this.loc(token)
                };
              default:
                return {
                  kind: _kinds.Kind.ENUM,
                  value: token.value,
                  loc: this.loc(token)
                };
            }
          case _tokenKind.TokenKind.DOLLAR:
            if (!isConst) {
              return this.parseVariable();
            }
            break;
        }
        throw this.unexpected();
      };
      _proto.parseStringLiteral = function parseStringLiteral() {
        var token = this._lexer.token;
        this._lexer.advance();
        return {
          kind: _kinds.Kind.STRING,
          value: token.value,
          block: token.kind === _tokenKind.TokenKind.BLOCK_STRING,
          loc: this.loc(token)
        };
      };
      _proto.parseList = function parseList(isConst) {
        var _this = this;
        var start = this._lexer.token;
        var item = function item2() {
          return _this.parseValueLiteral(isConst);
        };
        return {
          kind: _kinds.Kind.LIST,
          values: this.any(_tokenKind.TokenKind.BRACKET_L, item, _tokenKind.TokenKind.BRACKET_R),
          loc: this.loc(start)
        };
      };
      _proto.parseObject = function parseObject(isConst) {
        var _this2 = this;
        var start = this._lexer.token;
        var item = function item2() {
          return _this2.parseObjectField(isConst);
        };
        return {
          kind: _kinds.Kind.OBJECT,
          fields: this.any(_tokenKind.TokenKind.BRACE_L, item, _tokenKind.TokenKind.BRACE_R),
          loc: this.loc(start)
        };
      };
      _proto.parseObjectField = function parseObjectField(isConst) {
        var start = this._lexer.token;
        var name = this.parseName();
        this.expectToken(_tokenKind.TokenKind.COLON);
        return {
          kind: _kinds.Kind.OBJECT_FIELD,
          name,
          value: this.parseValueLiteral(isConst),
          loc: this.loc(start)
        };
      };
      _proto.parseDirectives = function parseDirectives(isConst) {
        var directives = [];
        while (this.peek(_tokenKind.TokenKind.AT)) {
          directives.push(this.parseDirective(isConst));
        }
        return directives;
      };
      _proto.parseDirective = function parseDirective(isConst) {
        var start = this._lexer.token;
        this.expectToken(_tokenKind.TokenKind.AT);
        return {
          kind: _kinds.Kind.DIRECTIVE,
          name: this.parseName(),
          arguments: this.parseArguments(isConst),
          loc: this.loc(start)
        };
      };
      _proto.parseTypeReference = function parseTypeReference() {
        var start = this._lexer.token;
        var type;
        if (this.expectOptionalToken(_tokenKind.TokenKind.BRACKET_L)) {
          type = this.parseTypeReference();
          this.expectToken(_tokenKind.TokenKind.BRACKET_R);
          type = {
            kind: _kinds.Kind.LIST_TYPE,
            type,
            loc: this.loc(start)
          };
        } else {
          type = this.parseNamedType();
        }
        if (this.expectOptionalToken(_tokenKind.TokenKind.BANG)) {
          return {
            kind: _kinds.Kind.NON_NULL_TYPE,
            type,
            loc: this.loc(start)
          };
        }
        return type;
      };
      _proto.parseNamedType = function parseNamedType() {
        var start = this._lexer.token;
        return {
          kind: _kinds.Kind.NAMED_TYPE,
          name: this.parseName(),
          loc: this.loc(start)
        };
      };
      _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
        var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
        if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
          switch (keywordToken.value) {
            case "schema":
              return this.parseSchemaDefinition();
            case "scalar":
              return this.parseScalarTypeDefinition();
            case "type":
              return this.parseObjectTypeDefinition();
            case "interface":
              return this.parseInterfaceTypeDefinition();
            case "union":
              return this.parseUnionTypeDefinition();
            case "enum":
              return this.parseEnumTypeDefinition();
            case "input":
              return this.parseInputObjectTypeDefinition();
            case "directive":
              return this.parseDirectiveDefinition();
          }
        }
        throw this.unexpected(keywordToken);
      };
      _proto.peekDescription = function peekDescription() {
        return this.peek(_tokenKind.TokenKind.STRING) || this.peek(_tokenKind.TokenKind.BLOCK_STRING);
      };
      _proto.parseDescription = function parseDescription() {
        if (this.peekDescription()) {
          return this.parseStringLiteral();
        }
      };
      _proto.parseSchemaDefinition = function parseSchemaDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("schema");
        var directives = this.parseDirectives(true);
        var operationTypes = this.many(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);
        return {
          kind: _kinds.Kind.SCHEMA_DEFINITION,
          description,
          directives,
          operationTypes,
          loc: this.loc(start)
        };
      };
      _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
        var start = this._lexer.token;
        var operation = this.parseOperationType();
        this.expectToken(_tokenKind.TokenKind.COLON);
        var type = this.parseNamedType();
        return {
          kind: _kinds.Kind.OPERATION_TYPE_DEFINITION,
          operation,
          type,
          loc: this.loc(start)
        };
      };
      _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("scalar");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        return {
          kind: _kinds.Kind.SCALAR_TYPE_DEFINITION,
          description,
          name,
          directives,
          loc: this.loc(start)
        };
      };
      _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("type");
        var name = this.parseName();
        var interfaces = this.parseImplementsInterfaces();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();
        return {
          kind: _kinds.Kind.OBJECT_TYPE_DEFINITION,
          description,
          name,
          interfaces,
          directives,
          fields,
          loc: this.loc(start)
        };
      };
      _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
        var _this$_options2;
        if (!this.expectOptionalKeyword("implements")) {
          return [];
        }
        if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true) {
          var types = [];
          this.expectOptionalToken(_tokenKind.TokenKind.AMP);
          do {
            types.push(this.parseNamedType());
          } while (this.expectOptionalToken(_tokenKind.TokenKind.AMP) || this.peek(_tokenKind.TokenKind.NAME));
          return types;
        }
        return this.delimitedMany(_tokenKind.TokenKind.AMP, this.parseNamedType);
      };
      _proto.parseFieldsDefinition = function parseFieldsDefinition() {
        var _this$_options3;
        if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(_tokenKind.TokenKind.BRACE_L) && this._lexer.lookahead().kind === _tokenKind.TokenKind.BRACE_R) {
          this._lexer.advance();
          this._lexer.advance();
          return [];
        }
        return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseFieldDefinition, _tokenKind.TokenKind.BRACE_R);
      };
      _proto.parseFieldDefinition = function parseFieldDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        var name = this.parseName();
        var args = this.parseArgumentDefs();
        this.expectToken(_tokenKind.TokenKind.COLON);
        var type = this.parseTypeReference();
        var directives = this.parseDirectives(true);
        return {
          kind: _kinds.Kind.FIELD_DEFINITION,
          description,
          name,
          arguments: args,
          type,
          directives,
          loc: this.loc(start)
        };
      };
      _proto.parseArgumentDefs = function parseArgumentDefs() {
        return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseInputValueDef, _tokenKind.TokenKind.PAREN_R);
      };
      _proto.parseInputValueDef = function parseInputValueDef() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        var name = this.parseName();
        this.expectToken(_tokenKind.TokenKind.COLON);
        var type = this.parseTypeReference();
        var defaultValue;
        if (this.expectOptionalToken(_tokenKind.TokenKind.EQUALS)) {
          defaultValue = this.parseValueLiteral(true);
        }
        var directives = this.parseDirectives(true);
        return {
          kind: _kinds.Kind.INPUT_VALUE_DEFINITION,
          description,
          name,
          type,
          defaultValue,
          directives,
          loc: this.loc(start)
        };
      };
      _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("interface");
        var name = this.parseName();
        var interfaces = this.parseImplementsInterfaces();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();
        return {
          kind: _kinds.Kind.INTERFACE_TYPE_DEFINITION,
          description,
          name,
          interfaces,
          directives,
          fields,
          loc: this.loc(start)
        };
      };
      _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("union");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var types = this.parseUnionMemberTypes();
        return {
          kind: _kinds.Kind.UNION_TYPE_DEFINITION,
          description,
          name,
          directives,
          types,
          loc: this.loc(start)
        };
      };
      _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
        return this.expectOptionalToken(_tokenKind.TokenKind.EQUALS) ? this.delimitedMany(_tokenKind.TokenKind.PIPE, this.parseNamedType) : [];
      };
      _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("enum");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var values = this.parseEnumValuesDefinition();
        return {
          kind: _kinds.Kind.ENUM_TYPE_DEFINITION,
          description,
          name,
          directives,
          values,
          loc: this.loc(start)
        };
      };
      _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
        return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseEnumValueDefinition, _tokenKind.TokenKind.BRACE_R);
      };
      _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        return {
          kind: _kinds.Kind.ENUM_VALUE_DEFINITION,
          description,
          name,
          directives,
          loc: this.loc(start)
        };
      };
      _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("input");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var fields = this.parseInputFieldsDefinition();
        return {
          kind: _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION,
          description,
          name,
          directives,
          fields,
          loc: this.loc(start)
        };
      };
      _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
        return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseInputValueDef, _tokenKind.TokenKind.BRACE_R);
      };
      _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
        var keywordToken = this._lexer.lookahead();
        if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
          switch (keywordToken.value) {
            case "schema":
              return this.parseSchemaExtension();
            case "scalar":
              return this.parseScalarTypeExtension();
            case "type":
              return this.parseObjectTypeExtension();
            case "interface":
              return this.parseInterfaceTypeExtension();
            case "union":
              return this.parseUnionTypeExtension();
            case "enum":
              return this.parseEnumTypeExtension();
            case "input":
              return this.parseInputObjectTypeExtension();
          }
        }
        throw this.unexpected(keywordToken);
      };
      _proto.parseSchemaExtension = function parseSchemaExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("schema");
        var directives = this.parseDirectives(true);
        var operationTypes = this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);
        if (directives.length === 0 && operationTypes.length === 0) {
          throw this.unexpected();
        }
        return {
          kind: _kinds.Kind.SCHEMA_EXTENSION,
          directives,
          operationTypes,
          loc: this.loc(start)
        };
      };
      _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("scalar");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        if (directives.length === 0) {
          throw this.unexpected();
        }
        return {
          kind: _kinds.Kind.SCALAR_TYPE_EXTENSION,
          name,
          directives,
          loc: this.loc(start)
        };
      };
      _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("type");
        var name = this.parseName();
        var interfaces = this.parseImplementsInterfaces();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return {
          kind: _kinds.Kind.OBJECT_TYPE_EXTENSION,
          name,
          interfaces,
          directives,
          fields,
          loc: this.loc(start)
        };
      };
      _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("interface");
        var name = this.parseName();
        var interfaces = this.parseImplementsInterfaces();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return {
          kind: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
          name,
          interfaces,
          directives,
          fields,
          loc: this.loc(start)
        };
      };
      _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("union");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var types = this.parseUnionMemberTypes();
        if (directives.length === 0 && types.length === 0) {
          throw this.unexpected();
        }
        return {
          kind: _kinds.Kind.UNION_TYPE_EXTENSION,
          name,
          directives,
          types,
          loc: this.loc(start)
        };
      };
      _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("enum");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var values = this.parseEnumValuesDefinition();
        if (directives.length === 0 && values.length === 0) {
          throw this.unexpected();
        }
        return {
          kind: _kinds.Kind.ENUM_TYPE_EXTENSION,
          name,
          directives,
          values,
          loc: this.loc(start)
        };
      };
      _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("input");
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var fields = this.parseInputFieldsDefinition();
        if (directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return {
          kind: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION,
          name,
          directives,
          fields,
          loc: this.loc(start)
        };
      };
      _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword("directive");
        this.expectToken(_tokenKind.TokenKind.AT);
        var name = this.parseName();
        var args = this.parseArgumentDefs();
        var repeatable = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        var locations = this.parseDirectiveLocations();
        return {
          kind: _kinds.Kind.DIRECTIVE_DEFINITION,
          description,
          name,
          arguments: args,
          repeatable,
          locations,
          loc: this.loc(start)
        };
      };
      _proto.parseDirectiveLocations = function parseDirectiveLocations() {
        return this.delimitedMany(_tokenKind.TokenKind.PIPE, this.parseDirectiveLocation);
      };
      _proto.parseDirectiveLocation = function parseDirectiveLocation() {
        var start = this._lexer.token;
        var name = this.parseName();
        if (_directiveLocation.DirectiveLocation[name.value] !== void 0) {
          return name;
        }
        throw this.unexpected(start);
      };
      _proto.loc = function loc(startToken) {
        var _this$_options4;
        if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) {
          return new _ast.Location(startToken, this._lexer.lastToken, this._lexer.source);
        }
      };
      _proto.peek = function peek(kind) {
        return this._lexer.token.kind === kind;
      };
      _proto.expectToken = function expectToken(kind) {
        var token = this._lexer.token;
        if (token.kind === kind) {
          this._lexer.advance();
          return token;
        }
        throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
      };
      _proto.expectOptionalToken = function expectOptionalToken(kind) {
        var token = this._lexer.token;
        if (token.kind === kind) {
          this._lexer.advance();
          return token;
        }
        return void 0;
      };
      _proto.expectKeyword = function expectKeyword(value) {
        var token = this._lexer.token;
        if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
          this._lexer.advance();
        } else {
          throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, 'Expected "'.concat(value, '", found ').concat(getTokenDesc(token), "."));
        }
      };
      _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
        var token = this._lexer.token;
        if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
          this._lexer.advance();
          return true;
        }
        return false;
      };
      _proto.unexpected = function unexpected(atToken) {
        var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
        return (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
      };
      _proto.any = function any(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        var nodes = [];
        while (!this.expectOptionalToken(closeKind)) {
          nodes.push(parseFn.call(this));
        }
        return nodes;
      };
      _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
        if (this.expectOptionalToken(openKind)) {
          var nodes = [];
          do {
            nodes.push(parseFn.call(this));
          } while (!this.expectOptionalToken(closeKind));
          return nodes;
        }
        return [];
      };
      _proto.many = function many(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        var nodes = [];
        do {
          nodes.push(parseFn.call(this));
        } while (!this.expectOptionalToken(closeKind));
        return nodes;
      };
      _proto.delimitedMany = function delimitedMany(delimiterKind, parseFn) {
        this.expectOptionalToken(delimiterKind);
        var nodes = [];
        do {
          nodes.push(parseFn.call(this));
        } while (this.expectOptionalToken(delimiterKind));
        return nodes;
      };
      return Parser2;
    }();
    exports.Parser = Parser;
    function getTokenDesc(token) {
      var value = token.value;
      return getTokenKindDesc(token.kind) + (value != null ? ' "'.concat(value, '"') : "");
    }
    function getTokenKindDesc(kind) {
      return (0, _lexer.isPunctuatorTokenKind)(kind) ? '"'.concat(kind, '"') : kind;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/visitor.js
var require_visitor = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/visitor.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.visit = visit6;
    exports.visitInParallel = visitInParallel;
    exports.getVisitFn = getVisitFn;
    exports.BREAK = exports.QueryDocumentKeys = void 0;
    var _inspect = _interopRequireDefault(require_inspect());
    var _ast = require_ast();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var QueryDocumentKeys = {
      Name: [],
      Document: ["definitions"],
      OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
      VariableDefinition: ["variable", "type", "defaultValue", "directives"],
      Variable: ["name"],
      SelectionSet: ["selections"],
      Field: ["alias", "name", "arguments", "directives", "selectionSet"],
      Argument: ["name", "value"],
      FragmentSpread: ["name", "directives"],
      InlineFragment: ["typeCondition", "directives", "selectionSet"],
      FragmentDefinition: [
        "name",
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet"
      ],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ["values"],
      ObjectValue: ["fields"],
      ObjectField: ["name", "value"],
      Directive: ["name", "arguments"],
      NamedType: ["name"],
      ListType: ["type"],
      NonNullType: ["type"],
      SchemaDefinition: ["description", "directives", "operationTypes"],
      OperationTypeDefinition: ["type"],
      ScalarTypeDefinition: ["description", "name", "directives"],
      ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
      FieldDefinition: ["description", "name", "arguments", "type", "directives"],
      InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
      InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
      UnionTypeDefinition: ["description", "name", "directives", "types"],
      EnumTypeDefinition: ["description", "name", "directives", "values"],
      EnumValueDefinition: ["description", "name", "directives"],
      InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
      DirectiveDefinition: ["description", "name", "arguments", "locations"],
      SchemaExtension: ["directives", "operationTypes"],
      ScalarTypeExtension: ["name", "directives"],
      ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
      InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
      UnionTypeExtension: ["name", "directives", "types"],
      EnumTypeExtension: ["name", "directives", "values"],
      InputObjectTypeExtension: ["name", "directives", "fields"]
    };
    exports.QueryDocumentKeys = QueryDocumentKeys;
    var BREAK = Object.freeze({});
    exports.BREAK = BREAK;
    function visit6(root, visitor) {
      var visitorKeys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : QueryDocumentKeys;
      var stack = void 0;
      var inArray = Array.isArray(root);
      var keys = [root];
      var index = -1;
      var edits = [];
      var node = void 0;
      var key = void 0;
      var parent = void 0;
      var path = [];
      var ancestors = [];
      var newRoot = root;
      do {
        index++;
        var isLeaving = index === keys.length;
        var isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
          key = ancestors.length === 0 ? void 0 : path[path.length - 1];
          node = parent;
          parent = ancestors.pop();
          if (isEdited) {
            if (inArray) {
              node = node.slice();
            } else {
              var clone = {};
              for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
                var k = _Object$keys2[_i2];
                clone[k] = node[k];
              }
              node = clone;
            }
            var editOffset = 0;
            for (var ii = 0; ii < edits.length; ii++) {
              var editKey = edits[ii][0];
              var editValue = edits[ii][1];
              if (inArray) {
                editKey -= editOffset;
              }
              if (inArray && editValue === null) {
                node.splice(editKey, 1);
                editOffset++;
              } else {
                node[editKey] = editValue;
              }
            }
          }
          index = stack.index;
          keys = stack.keys;
          edits = stack.edits;
          inArray = stack.inArray;
          stack = stack.prev;
        } else {
          key = parent ? inArray ? index : keys[index] : void 0;
          node = parent ? parent[key] : newRoot;
          if (node === null || node === void 0) {
            continue;
          }
          if (parent) {
            path.push(key);
          }
        }
        var result = void 0;
        if (!Array.isArray(node)) {
          if (!(0, _ast.isNode)(node)) {
            throw new Error("Invalid AST Node: ".concat((0, _inspect.default)(node), "."));
          }
          var visitFn = getVisitFn(visitor, node.kind, isLeaving);
          if (visitFn) {
            result = visitFn.call(visitor, node, key, parent, path, ancestors);
            if (result === BREAK) {
              break;
            }
            if (result === false) {
              if (!isLeaving) {
                path.pop();
                continue;
              }
            } else if (result !== void 0) {
              edits.push([key, result]);
              if (!isLeaving) {
                if ((0, _ast.isNode)(result)) {
                  node = result;
                } else {
                  path.pop();
                  continue;
                }
              }
            }
          }
        }
        if (result === void 0 && isEdited) {
          edits.push([key, node]);
        }
        if (isLeaving) {
          path.pop();
        } else {
          var _visitorKeys$node$kin;
          stack = {
            inArray,
            index,
            keys,
            edits,
            prev: stack
          };
          inArray = Array.isArray(node);
          keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
          index = -1;
          edits = [];
          if (parent) {
            ancestors.push(parent);
          }
          parent = node;
        }
      } while (stack !== void 0);
      if (edits.length !== 0) {
        newRoot = edits[edits.length - 1][1];
      }
      return newRoot;
    }
    function visitInParallel(visitors) {
      var skipping = new Array(visitors.length);
      return {
        enter: function enter(node) {
          for (var i = 0; i < visitors.length; i++) {
            if (skipping[i] == null) {
              var fn = getVisitFn(visitors[i], node.kind, false);
              if (fn) {
                var result = fn.apply(visitors[i], arguments);
                if (result === false) {
                  skipping[i] = node;
                } else if (result === BREAK) {
                  skipping[i] = BREAK;
                } else if (result !== void 0) {
                  return result;
                }
              }
            }
          }
        },
        leave: function leave(node) {
          for (var i = 0; i < visitors.length; i++) {
            if (skipping[i] == null) {
              var fn = getVisitFn(visitors[i], node.kind, true);
              if (fn) {
                var result = fn.apply(visitors[i], arguments);
                if (result === BREAK) {
                  skipping[i] = BREAK;
                } else if (result !== void 0 && result !== false) {
                  return result;
                }
              }
            } else if (skipping[i] === node) {
              skipping[i] = null;
            }
          }
        }
      };
    }
    function getVisitFn(visitor, kind, isLeaving) {
      var kindVisitor = visitor[kind];
      if (kindVisitor) {
        if (!isLeaving && typeof kindVisitor === "function") {
          return kindVisitor;
        }
        var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
        if (typeof kindSpecificVisitor === "function") {
          return kindSpecificVisitor;
        }
      } else {
        var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
        if (specificVisitor) {
          if (typeof specificVisitor === "function") {
            return specificVisitor;
          }
          var specificKindVisitor = specificVisitor[kind];
          if (typeof specificKindVisitor === "function") {
            return specificKindVisitor;
          }
        }
      }
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/polyfills/find.js
var require_find = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/polyfills/find.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var find = Array.prototype.find ? function(list, predicate) {
      return Array.prototype.find.call(list, predicate);
    } : function(list, predicate) {
      for (var _i2 = 0; _i2 < list.length; _i2++) {
        var value = list[_i2];
        if (predicate(value)) {
          return value;
        }
      }
    };
    var _default = find;
    exports.default = _default;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/polyfills/objectValues.js
var require_objectValues = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/polyfills/objectValues.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var objectValues = Object.values || function(obj) {
      return Object.keys(obj).map(function(key) {
        return obj[key];
      });
    };
    var _default = objectValues;
    exports.default = _default;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/error/locatedError.js
var require_locatedError = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/error/locatedError.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.locatedError = locatedError;
    var _inspect = _interopRequireDefault(require_inspect());
    var _GraphQLError = require_GraphQLError();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function locatedError(rawOriginalError, nodes, path) {
      var _nodes;
      var originalError = rawOriginalError instanceof Error ? rawOriginalError : new Error("Unexpected error value: " + (0, _inspect.default)(rawOriginalError));
      if (Array.isArray(originalError.path)) {
        return originalError;
      }
      return new _GraphQLError.GraphQLError(originalError.message, (_nodes = originalError.nodes) !== null && _nodes !== void 0 ? _nodes : nodes, originalError.source, originalError.positions, path, originalError);
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/assertValidName.js
var require_assertValidName = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/assertValidName.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.assertValidName = assertValidName;
    exports.isValidNameError = isValidNameError;
    var _devAssert = _interopRequireDefault(require_devAssert());
    var _GraphQLError = require_GraphQLError();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
    function assertValidName(name) {
      var error = isValidNameError(name);
      if (error) {
        throw error;
      }
      return name;
    }
    function isValidNameError(name) {
      typeof name === "string" || (0, _devAssert.default)(0, "Expected name to be a string.");
      if (name.length > 1 && name[0] === "_" && name[1] === "_") {
        return new _GraphQLError.GraphQLError('Name "'.concat(name, '" must not begin with "__", which is reserved by GraphQL introspection.'));
      }
      if (!NAME_RX.test(name)) {
        return new _GraphQLError.GraphQLError('Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "'.concat(name, '" does not.'));
      }
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/polyfills/objectEntries.js
var require_objectEntries = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/polyfills/objectEntries.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var objectEntries = Object.entries || function(obj) {
      return Object.keys(obj).map(function(key) {
        return [key, obj[key]];
      });
    };
    var _default = objectEntries;
    exports.default = _default;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/keyMap.js
var require_keyMap = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/keyMap.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = keyMap;
    function keyMap(list, keyFn) {
      return list.reduce(function(map, item) {
        map[keyFn(item)] = item;
        return map;
      }, Object.create(null));
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/mapValue.js
var require_mapValue = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/mapValue.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = mapValue;
    var _objectEntries3 = _interopRequireDefault(require_objectEntries());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function mapValue(map, fn) {
      var result = Object.create(null);
      for (var _i2 = 0, _objectEntries2 = (0, _objectEntries3.default)(map); _i2 < _objectEntries2.length; _i2++) {
        var _ref2 = _objectEntries2[_i2];
        var _key = _ref2[0];
        var _value = _ref2[1];
        result[_key] = fn(_value, _key);
      }
      return result;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/toObjMap.js
var require_toObjMap = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/toObjMap.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toObjMap;
    var _objectEntries3 = _interopRequireDefault(require_objectEntries());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function toObjMap(obj) {
      if (Object.getPrototypeOf(obj) === null) {
        return obj;
      }
      var map = Object.create(null);
      for (var _i2 = 0, _objectEntries2 = (0, _objectEntries3.default)(obj); _i2 < _objectEntries2.length; _i2++) {
        var _ref2 = _objectEntries2[_i2];
        var key = _ref2[0];
        var value = _ref2[1];
        map[key] = value;
      }
      return map;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/keyValMap.js
var require_keyValMap = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/keyValMap.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = keyValMap;
    function keyValMap(list, keyFn, valFn) {
      return list.reduce(function(map, item) {
        map[keyFn(item)] = valFn(item);
        return map;
      }, Object.create(null));
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/didYouMean.js
var require_didYouMean = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/didYouMean.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = didYouMean;
    var MAX_SUGGESTIONS = 5;
    function didYouMean(firstArg, secondArg) {
      var _ref = typeof firstArg === "string" ? [firstArg, secondArg] : [void 0, firstArg], subMessage = _ref[0], suggestionsArg = _ref[1];
      var message = " Did you mean ";
      if (subMessage) {
        message += subMessage + " ";
      }
      var suggestions = suggestionsArg.map(function(x) {
        return '"'.concat(x, '"');
      });
      switch (suggestions.length) {
        case 0:
          return "";
        case 1:
          return message + suggestions[0] + "?";
        case 2:
          return message + suggestions[0] + " or " + suggestions[1] + "?";
      }
      var selected = suggestions.slice(0, MAX_SUGGESTIONS);
      var lastItem = selected.pop();
      return message + selected.join(", ") + ", or " + lastItem + "?";
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/identityFunc.js
var require_identityFunc = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/identityFunc.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = identityFunc;
    function identityFunc(x) {
      return x;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/naturalCompare.js
var require_naturalCompare = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/naturalCompare.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = naturalCompare;
    function naturalCompare(aStr, bStr) {
      var aIdx = 0;
      var bIdx = 0;
      while (aIdx < aStr.length && bIdx < bStr.length) {
        var aChar = aStr.charCodeAt(aIdx);
        var bChar = bStr.charCodeAt(bIdx);
        if (isDigit(aChar) && isDigit(bChar)) {
          var aNum = 0;
          do {
            ++aIdx;
            aNum = aNum * 10 + aChar - DIGIT_0;
            aChar = aStr.charCodeAt(aIdx);
          } while (isDigit(aChar) && aNum > 0);
          var bNum = 0;
          do {
            ++bIdx;
            bNum = bNum * 10 + bChar - DIGIT_0;
            bChar = bStr.charCodeAt(bIdx);
          } while (isDigit(bChar) && bNum > 0);
          if (aNum < bNum) {
            return -1;
          }
          if (aNum > bNum) {
            return 1;
          }
        } else {
          if (aChar < bChar) {
            return -1;
          }
          if (aChar > bChar) {
            return 1;
          }
          ++aIdx;
          ++bIdx;
        }
      }
      return aStr.length - bStr.length;
    }
    var DIGIT_0 = 48;
    var DIGIT_9 = 57;
    function isDigit(code) {
      return !isNaN(code) && DIGIT_0 <= code && code <= DIGIT_9;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/suggestionList.js
var require_suggestionList = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/suggestionList.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = suggestionList;
    var _naturalCompare = _interopRequireDefault(require_naturalCompare());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function suggestionList(input, options) {
      var optionsByDistance = Object.create(null);
      var lexicalDistance = new LexicalDistance(input);
      var threshold = Math.floor(input.length * 0.4) + 1;
      for (var _i2 = 0; _i2 < options.length; _i2++) {
        var option = options[_i2];
        var distance = lexicalDistance.measure(option, threshold);
        if (distance !== void 0) {
          optionsByDistance[option] = distance;
        }
      }
      return Object.keys(optionsByDistance).sort(function(a, b) {
        var distanceDiff = optionsByDistance[a] - optionsByDistance[b];
        return distanceDiff !== 0 ? distanceDiff : (0, _naturalCompare.default)(a, b);
      });
    }
    var LexicalDistance = /* @__PURE__ */ function() {
      function LexicalDistance2(input) {
        this._input = input;
        this._inputLowerCase = input.toLowerCase();
        this._inputArray = stringToArray(this._inputLowerCase);
        this._rows = [new Array(input.length + 1).fill(0), new Array(input.length + 1).fill(0), new Array(input.length + 1).fill(0)];
      }
      var _proto = LexicalDistance2.prototype;
      _proto.measure = function measure(option, threshold) {
        if (this._input === option) {
          return 0;
        }
        var optionLowerCase = option.toLowerCase();
        if (this._inputLowerCase === optionLowerCase) {
          return 1;
        }
        var a = stringToArray(optionLowerCase);
        var b = this._inputArray;
        if (a.length < b.length) {
          var tmp = a;
          a = b;
          b = tmp;
        }
        var aLength = a.length;
        var bLength = b.length;
        if (aLength - bLength > threshold) {
          return void 0;
        }
        var rows = this._rows;
        for (var j = 0; j <= bLength; j++) {
          rows[0][j] = j;
        }
        for (var i = 1; i <= aLength; i++) {
          var upRow = rows[(i - 1) % 3];
          var currentRow = rows[i % 3];
          var smallestCell = currentRow[0] = i;
          for (var _j = 1; _j <= bLength; _j++) {
            var cost = a[i - 1] === b[_j - 1] ? 0 : 1;
            var currentCell = Math.min(upRow[_j] + 1, currentRow[_j - 1] + 1, upRow[_j - 1] + cost);
            if (i > 1 && _j > 1 && a[i - 1] === b[_j - 2] && a[i - 2] === b[_j - 1]) {
              var doubleDiagonalCell = rows[(i - 2) % 3][_j - 2];
              currentCell = Math.min(currentCell, doubleDiagonalCell + 1);
            }
            if (currentCell < smallestCell) {
              smallestCell = currentCell;
            }
            currentRow[_j] = currentCell;
          }
          if (smallestCell > threshold) {
            return void 0;
          }
        }
        var distance = rows[aLength % 3][bLength];
        return distance <= threshold ? distance : void 0;
      };
      return LexicalDistance2;
    }();
    function stringToArray(str) {
      var strLength = str.length;
      var array = new Array(strLength);
      for (var i = 0; i < strLength; ++i) {
        array[i] = str.charCodeAt(i);
      }
      return array;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/printer.js
var require_printer = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/printer.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.print = print3;
    var _visitor = require_visitor();
    var _blockString = require_blockString();
    function print3(ast) {
      return (0, _visitor.visit)(ast, {
        leave: printDocASTReducer2
      });
    }
    var MAX_LINE_LENGTH2 = 80;
    var printDocASTReducer2 = {
      Name: function Name(node) {
        return node.value;
      },
      Variable: function Variable(node) {
        return "$" + node.name;
      },
      Document: function Document(node) {
        return join3(node.definitions, "\n\n") + "\n";
      },
      OperationDefinition: function OperationDefinition(node) {
        var op = node.operation;
        var name = node.name;
        var varDefs = wrap2("(", join3(node.variableDefinitions, ", "), ")");
        var directives = join3(node.directives, " ");
        var selectionSet = node.selectionSet;
        return !name && !directives && !varDefs && op === "query" ? selectionSet : join3([op, join3([name, varDefs]), directives, selectionSet], " ");
      },
      VariableDefinition: function VariableDefinition(_ref) {
        var variable = _ref.variable, type = _ref.type, defaultValue = _ref.defaultValue, directives = _ref.directives;
        return variable + ": " + type + wrap2(" = ", defaultValue) + wrap2(" ", join3(directives, " "));
      },
      SelectionSet: function SelectionSet(_ref2) {
        var selections = _ref2.selections;
        return block2(selections);
      },
      Field: function Field(_ref3) {
        var alias = _ref3.alias, name = _ref3.name, args = _ref3.arguments, directives = _ref3.directives, selectionSet = _ref3.selectionSet;
        var prefix = wrap2("", alias, ": ") + name;
        var argsLine = prefix + wrap2("(", join3(args, ", "), ")");
        if (argsLine.length > MAX_LINE_LENGTH2) {
          argsLine = prefix + wrap2("(\n", indent2(join3(args, "\n")), "\n)");
        }
        return join3([argsLine, join3(directives, " "), selectionSet], " ");
      },
      Argument: function Argument(_ref4) {
        var name = _ref4.name, value = _ref4.value;
        return name + ": " + value;
      },
      FragmentSpread: function FragmentSpread(_ref5) {
        var name = _ref5.name, directives = _ref5.directives;
        return "..." + name + wrap2(" ", join3(directives, " "));
      },
      InlineFragment: function InlineFragment(_ref6) {
        var typeCondition = _ref6.typeCondition, directives = _ref6.directives, selectionSet = _ref6.selectionSet;
        return join3(["...", wrap2("on ", typeCondition), join3(directives, " "), selectionSet], " ");
      },
      FragmentDefinition: function FragmentDefinition(_ref7) {
        var name = _ref7.name, typeCondition = _ref7.typeCondition, variableDefinitions = _ref7.variableDefinitions, directives = _ref7.directives, selectionSet = _ref7.selectionSet;
        return "fragment ".concat(name).concat(wrap2("(", join3(variableDefinitions, ", "), ")"), " ") + "on ".concat(typeCondition, " ").concat(wrap2("", join3(directives, " "), " ")) + selectionSet;
      },
      IntValue: function IntValue(_ref8) {
        var value = _ref8.value;
        return value;
      },
      FloatValue: function FloatValue(_ref9) {
        var value = _ref9.value;
        return value;
      },
      StringValue: function StringValue(_ref10, key) {
        var value = _ref10.value, isBlockString = _ref10.block;
        return isBlockString ? (0, _blockString.printBlockString)(value, key === "description" ? "" : "  ") : JSON.stringify(value);
      },
      BooleanValue: function BooleanValue(_ref11) {
        var value = _ref11.value;
        return value ? "true" : "false";
      },
      NullValue: function NullValue() {
        return "null";
      },
      EnumValue: function EnumValue(_ref12) {
        var value = _ref12.value;
        return value;
      },
      ListValue: function ListValue(_ref13) {
        var values = _ref13.values;
        return "[" + join3(values, ", ") + "]";
      },
      ObjectValue: function ObjectValue(_ref14) {
        var fields = _ref14.fields;
        return "{" + join3(fields, ", ") + "}";
      },
      ObjectField: function ObjectField(_ref15) {
        var name = _ref15.name, value = _ref15.value;
        return name + ": " + value;
      },
      Directive: function Directive(_ref16) {
        var name = _ref16.name, args = _ref16.arguments;
        return "@" + name + wrap2("(", join3(args, ", "), ")");
      },
      NamedType: function NamedType(_ref17) {
        var name = _ref17.name;
        return name;
      },
      ListType: function ListType(_ref18) {
        var type = _ref18.type;
        return "[" + type + "]";
      },
      NonNullType: function NonNullType(_ref19) {
        var type = _ref19.type;
        return type + "!";
      },
      SchemaDefinition: addDescription2(function(_ref20) {
        var directives = _ref20.directives, operationTypes = _ref20.operationTypes;
        return join3(["schema", join3(directives, " "), block2(operationTypes)], " ");
      }),
      OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
        var operation = _ref21.operation, type = _ref21.type;
        return operation + ": " + type;
      },
      ScalarTypeDefinition: addDescription2(function(_ref22) {
        var name = _ref22.name, directives = _ref22.directives;
        return join3(["scalar", name, join3(directives, " ")], " ");
      }),
      ObjectTypeDefinition: addDescription2(function(_ref23) {
        var name = _ref23.name, interfaces = _ref23.interfaces, directives = _ref23.directives, fields = _ref23.fields;
        return join3(["type", name, wrap2("implements ", join3(interfaces, " & ")), join3(directives, " "), block2(fields)], " ");
      }),
      FieldDefinition: addDescription2(function(_ref24) {
        var name = _ref24.name, args = _ref24.arguments, type = _ref24.type, directives = _ref24.directives;
        return name + (hasMultilineItems2(args) ? wrap2("(\n", indent2(join3(args, "\n")), "\n)") : wrap2("(", join3(args, ", "), ")")) + ": " + type + wrap2(" ", join3(directives, " "));
      }),
      InputValueDefinition: addDescription2(function(_ref25) {
        var name = _ref25.name, type = _ref25.type, defaultValue = _ref25.defaultValue, directives = _ref25.directives;
        return join3([name + ": " + type, wrap2("= ", defaultValue), join3(directives, " ")], " ");
      }),
      InterfaceTypeDefinition: addDescription2(function(_ref26) {
        var name = _ref26.name, interfaces = _ref26.interfaces, directives = _ref26.directives, fields = _ref26.fields;
        return join3(["interface", name, wrap2("implements ", join3(interfaces, " & ")), join3(directives, " "), block2(fields)], " ");
      }),
      UnionTypeDefinition: addDescription2(function(_ref27) {
        var name = _ref27.name, directives = _ref27.directives, types = _ref27.types;
        return join3(["union", name, join3(directives, " "), types && types.length !== 0 ? "= " + join3(types, " | ") : ""], " ");
      }),
      EnumTypeDefinition: addDescription2(function(_ref28) {
        var name = _ref28.name, directives = _ref28.directives, values = _ref28.values;
        return join3(["enum", name, join3(directives, " "), block2(values)], " ");
      }),
      EnumValueDefinition: addDescription2(function(_ref29) {
        var name = _ref29.name, directives = _ref29.directives;
        return join3([name, join3(directives, " ")], " ");
      }),
      InputObjectTypeDefinition: addDescription2(function(_ref30) {
        var name = _ref30.name, directives = _ref30.directives, fields = _ref30.fields;
        return join3(["input", name, join3(directives, " "), block2(fields)], " ");
      }),
      DirectiveDefinition: addDescription2(function(_ref31) {
        var name = _ref31.name, args = _ref31.arguments, repeatable = _ref31.repeatable, locations = _ref31.locations;
        return "directive @" + name + (hasMultilineItems2(args) ? wrap2("(\n", indent2(join3(args, "\n")), "\n)") : wrap2("(", join3(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join3(locations, " | ");
      }),
      SchemaExtension: function SchemaExtension(_ref32) {
        var directives = _ref32.directives, operationTypes = _ref32.operationTypes;
        return join3(["extend schema", join3(directives, " "), block2(operationTypes)], " ");
      },
      ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
        var name = _ref33.name, directives = _ref33.directives;
        return join3(["extend scalar", name, join3(directives, " ")], " ");
      },
      ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
        var name = _ref34.name, interfaces = _ref34.interfaces, directives = _ref34.directives, fields = _ref34.fields;
        return join3(["extend type", name, wrap2("implements ", join3(interfaces, " & ")), join3(directives, " "), block2(fields)], " ");
      },
      InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
        var name = _ref35.name, interfaces = _ref35.interfaces, directives = _ref35.directives, fields = _ref35.fields;
        return join3(["extend interface", name, wrap2("implements ", join3(interfaces, " & ")), join3(directives, " "), block2(fields)], " ");
      },
      UnionTypeExtension: function UnionTypeExtension(_ref36) {
        var name = _ref36.name, directives = _ref36.directives, types = _ref36.types;
        return join3(["extend union", name, join3(directives, " "), types && types.length !== 0 ? "= " + join3(types, " | ") : ""], " ");
      },
      EnumTypeExtension: function EnumTypeExtension(_ref37) {
        var name = _ref37.name, directives = _ref37.directives, values = _ref37.values;
        return join3(["extend enum", name, join3(directives, " "), block2(values)], " ");
      },
      InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
        var name = _ref38.name, directives = _ref38.directives, fields = _ref38.fields;
        return join3(["extend input", name, join3(directives, " "), block2(fields)], " ");
      }
    };
    function addDescription2(cb) {
      return function(node) {
        return join3([node.description, cb(node)], "\n");
      };
    }
    function join3(maybeArray) {
      var _maybeArray$filter$jo;
      var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function(x) {
        return x;
      }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
    }
    function block2(array) {
      return wrap2("{\n", indent2(join3(array, "\n")), "\n}");
    }
    function wrap2(start, maybeString) {
      var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
      return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
    }
    function indent2(str) {
      return wrap2("  ", str.replace(/\n/g, "\n  "));
    }
    function isMultiline(str) {
      return str.indexOf("\n") !== -1;
    }
    function hasMultilineItems2(maybeArray) {
      return maybeArray != null && maybeArray.some(isMultiline);
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/valueFromASTUntyped.js
var require_valueFromASTUntyped = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/valueFromASTUntyped.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.valueFromASTUntyped = valueFromASTUntyped;
    var _inspect = _interopRequireDefault(require_inspect());
    var _invariant = _interopRequireDefault(require_invariant());
    var _keyValMap = _interopRequireDefault(require_keyValMap());
    var _kinds = require_kinds();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function valueFromASTUntyped(valueNode, variables) {
      switch (valueNode.kind) {
        case _kinds.Kind.NULL:
          return null;
        case _kinds.Kind.INT:
          return parseInt(valueNode.value, 10);
        case _kinds.Kind.FLOAT:
          return parseFloat(valueNode.value);
        case _kinds.Kind.STRING:
        case _kinds.Kind.ENUM:
        case _kinds.Kind.BOOLEAN:
          return valueNode.value;
        case _kinds.Kind.LIST:
          return valueNode.values.map(function(node) {
            return valueFromASTUntyped(node, variables);
          });
        case _kinds.Kind.OBJECT:
          return (0, _keyValMap.default)(valueNode.fields, function(field) {
            return field.name.value;
          }, function(field) {
            return valueFromASTUntyped(field.value, variables);
          });
        case _kinds.Kind.VARIABLE:
          return variables === null || variables === void 0 ? void 0 : variables[valueNode.name.value];
      }
      (0, _invariant.default)(0, "Unexpected value node: " + (0, _inspect.default)(valueNode));
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/type/definition.js
var require_definition = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/type/definition.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isType = isType;
    exports.assertType = assertType;
    exports.isScalarType = isScalarType3;
    exports.assertScalarType = assertScalarType;
    exports.isObjectType = isObjectType4;
    exports.assertObjectType = assertObjectType;
    exports.isInterfaceType = isInterfaceType3;
    exports.assertInterfaceType = assertInterfaceType;
    exports.isUnionType = isUnionType3;
    exports.assertUnionType = assertUnionType;
    exports.isEnumType = isEnumType3;
    exports.assertEnumType = assertEnumType;
    exports.isInputObjectType = isInputObjectType2;
    exports.assertInputObjectType = assertInputObjectType;
    exports.isListType = isListType4;
    exports.assertListType = assertListType;
    exports.isNonNullType = isNonNullType4;
    exports.assertNonNullType = assertNonNullType;
    exports.isInputType = isInputType;
    exports.assertInputType = assertInputType;
    exports.isOutputType = isOutputType;
    exports.assertOutputType = assertOutputType;
    exports.isLeafType = isLeafType2;
    exports.assertLeafType = assertLeafType;
    exports.isCompositeType = isCompositeType2;
    exports.assertCompositeType = assertCompositeType;
    exports.isAbstractType = isAbstractType3;
    exports.assertAbstractType = assertAbstractType;
    exports.GraphQLList = GraphQLList2;
    exports.GraphQLNonNull = GraphQLNonNull2;
    exports.isWrappingType = isWrappingType;
    exports.assertWrappingType = assertWrappingType;
    exports.isNullableType = isNullableType;
    exports.assertNullableType = assertNullableType;
    exports.getNullableType = getNullableType2;
    exports.isNamedType = isNamedType2;
    exports.assertNamedType = assertNamedType;
    exports.getNamedType = getNamedType2;
    exports.argsToArgsConfig = argsToArgsConfig;
    exports.isRequiredArgument = isRequiredArgument;
    exports.isRequiredInputField = isRequiredInputField;
    exports.GraphQLInputObjectType = exports.GraphQLEnumType = exports.GraphQLUnionType = exports.GraphQLInterfaceType = exports.GraphQLObjectType = exports.GraphQLScalarType = void 0;
    var _objectEntries = _interopRequireDefault(require_objectEntries());
    var _symbols = require_symbols();
    var _inspect = _interopRequireDefault(require_inspect());
    var _keyMap = _interopRequireDefault(require_keyMap());
    var _mapValue = _interopRequireDefault(require_mapValue());
    var _toObjMap = _interopRequireDefault(require_toObjMap());
    var _devAssert = _interopRequireDefault(require_devAssert());
    var _keyValMap = _interopRequireDefault(require_keyValMap());
    var _instanceOf = _interopRequireDefault(require_instanceOf());
    var _didYouMean = _interopRequireDefault(require_didYouMean());
    var _isObjectLike = _interopRequireDefault(require_isObjectLike());
    var _identityFunc = _interopRequireDefault(require_identityFunc());
    var _defineInspect = _interopRequireDefault(require_defineInspect());
    var _suggestionList = _interopRequireDefault(require_suggestionList());
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _printer = require_printer();
    var _valueFromASTUntyped = require_valueFromASTUntyped();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function isType(type) {
      return isScalarType3(type) || isObjectType4(type) || isInterfaceType3(type) || isUnionType3(type) || isEnumType3(type) || isInputObjectType2(type) || isListType4(type) || isNonNullType4(type);
    }
    function assertType(type) {
      if (!isType(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL type."));
      }
      return type;
    }
    function isScalarType3(type) {
      return (0, _instanceOf.default)(type, GraphQLScalarType2);
    }
    function assertScalarType(type) {
      if (!isScalarType3(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL Scalar type."));
      }
      return type;
    }
    function isObjectType4(type) {
      return (0, _instanceOf.default)(type, GraphQLObjectType4);
    }
    function assertObjectType(type) {
      if (!isObjectType4(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL Object type."));
      }
      return type;
    }
    function isInterfaceType3(type) {
      return (0, _instanceOf.default)(type, GraphQLInterfaceType2);
    }
    function assertInterfaceType(type) {
      if (!isInterfaceType3(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL Interface type."));
      }
      return type;
    }
    function isUnionType3(type) {
      return (0, _instanceOf.default)(type, GraphQLUnionType2);
    }
    function assertUnionType(type) {
      if (!isUnionType3(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL Union type."));
      }
      return type;
    }
    function isEnumType3(type) {
      return (0, _instanceOf.default)(type, GraphQLEnumType2);
    }
    function assertEnumType(type) {
      if (!isEnumType3(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL Enum type."));
      }
      return type;
    }
    function isInputObjectType2(type) {
      return (0, _instanceOf.default)(type, GraphQLInputObjectType2);
    }
    function assertInputObjectType(type) {
      if (!isInputObjectType2(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL Input Object type."));
      }
      return type;
    }
    function isListType4(type) {
      return (0, _instanceOf.default)(type, GraphQLList2);
    }
    function assertListType(type) {
      if (!isListType4(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL List type."));
      }
      return type;
    }
    function isNonNullType4(type) {
      return (0, _instanceOf.default)(type, GraphQLNonNull2);
    }
    function assertNonNullType(type) {
      if (!isNonNullType4(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL Non-Null type."));
      }
      return type;
    }
    function isInputType(type) {
      return isScalarType3(type) || isEnumType3(type) || isInputObjectType2(type) || isWrappingType(type) && isInputType(type.ofType);
    }
    function assertInputType(type) {
      if (!isInputType(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL input type."));
      }
      return type;
    }
    function isOutputType(type) {
      return isScalarType3(type) || isObjectType4(type) || isInterfaceType3(type) || isUnionType3(type) || isEnumType3(type) || isWrappingType(type) && isOutputType(type.ofType);
    }
    function assertOutputType(type) {
      if (!isOutputType(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL output type."));
      }
      return type;
    }
    function isLeafType2(type) {
      return isScalarType3(type) || isEnumType3(type);
    }
    function assertLeafType(type) {
      if (!isLeafType2(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL leaf type."));
      }
      return type;
    }
    function isCompositeType2(type) {
      return isObjectType4(type) || isInterfaceType3(type) || isUnionType3(type);
    }
    function assertCompositeType(type) {
      if (!isCompositeType2(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL composite type."));
      }
      return type;
    }
    function isAbstractType3(type) {
      return isInterfaceType3(type) || isUnionType3(type);
    }
    function assertAbstractType(type) {
      if (!isAbstractType3(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL abstract type."));
      }
      return type;
    }
    function GraphQLList2(ofType) {
      if (this instanceof GraphQLList2) {
        this.ofType = assertType(ofType);
      } else {
        return new GraphQLList2(ofType);
      }
    }
    GraphQLList2.prototype.toString = function toString() {
      return "[" + String(this.ofType) + "]";
    };
    GraphQLList2.prototype.toJSON = function toJSON() {
      return this.toString();
    };
    Object.defineProperty(GraphQLList2.prototype, _symbols.SYMBOL_TO_STRING_TAG, {
      get: function get() {
        return "GraphQLList";
      }
    });
    (0, _defineInspect.default)(GraphQLList2);
    function GraphQLNonNull2(ofType) {
      if (this instanceof GraphQLNonNull2) {
        this.ofType = assertNullableType(ofType);
      } else {
        return new GraphQLNonNull2(ofType);
      }
    }
    GraphQLNonNull2.prototype.toString = function toString() {
      return String(this.ofType) + "!";
    };
    GraphQLNonNull2.prototype.toJSON = function toJSON() {
      return this.toString();
    };
    Object.defineProperty(GraphQLNonNull2.prototype, _symbols.SYMBOL_TO_STRING_TAG, {
      get: function get() {
        return "GraphQLNonNull";
      }
    });
    (0, _defineInspect.default)(GraphQLNonNull2);
    function isWrappingType(type) {
      return isListType4(type) || isNonNullType4(type);
    }
    function assertWrappingType(type) {
      if (!isWrappingType(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL wrapping type."));
      }
      return type;
    }
    function isNullableType(type) {
      return isType(type) && !isNonNullType4(type);
    }
    function assertNullableType(type) {
      if (!isNullableType(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL nullable type."));
      }
      return type;
    }
    function getNullableType2(type) {
      if (type) {
        return isNonNullType4(type) ? type.ofType : type;
      }
    }
    function isNamedType2(type) {
      return isScalarType3(type) || isObjectType4(type) || isInterfaceType3(type) || isUnionType3(type) || isEnumType3(type) || isInputObjectType2(type);
    }
    function assertNamedType(type) {
      if (!isNamedType2(type)) {
        throw new Error("Expected ".concat((0, _inspect.default)(type), " to be a GraphQL named type."));
      }
      return type;
    }
    function getNamedType2(type) {
      if (type) {
        var unwrappedType = type;
        while (isWrappingType(unwrappedType)) {
          unwrappedType = unwrappedType.ofType;
        }
        return unwrappedType;
      }
    }
    function resolveThunk(thunk) {
      return typeof thunk === "function" ? thunk() : thunk;
    }
    function undefineIfEmpty(arr) {
      return arr && arr.length > 0 ? arr : void 0;
    }
    var GraphQLScalarType2 = /* @__PURE__ */ function() {
      function GraphQLScalarType3(config) {
        var _config$parseValue, _config$serialize, _config$parseLiteral;
        var parseValue = (_config$parseValue = config.parseValue) !== null && _config$parseValue !== void 0 ? _config$parseValue : _identityFunc.default;
        this.name = config.name;
        this.description = config.description;
        this.specifiedByUrl = config.specifiedByUrl;
        this.serialize = (_config$serialize = config.serialize) !== null && _config$serialize !== void 0 ? _config$serialize : _identityFunc.default;
        this.parseValue = parseValue;
        this.parseLiteral = (_config$parseLiteral = config.parseLiteral) !== null && _config$parseLiteral !== void 0 ? _config$parseLiteral : function(node, variables) {
          return parseValue((0, _valueFromASTUntyped.valueFromASTUntyped)(node, variables));
        };
        this.extensions = config.extensions && (0, _toObjMap.default)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
        typeof config.name === "string" || (0, _devAssert.default)(0, "Must provide name.");
        config.specifiedByUrl == null || typeof config.specifiedByUrl === "string" || (0, _devAssert.default)(0, "".concat(this.name, ' must provide "specifiedByUrl" as a string, ') + "but got: ".concat((0, _inspect.default)(config.specifiedByUrl), "."));
        config.serialize == null || typeof config.serialize === "function" || (0, _devAssert.default)(0, "".concat(this.name, ' must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.'));
        if (config.parseLiteral) {
          typeof config.parseValue === "function" && typeof config.parseLiteral === "function" || (0, _devAssert.default)(0, "".concat(this.name, ' must provide both "parseValue" and "parseLiteral" functions.'));
        }
      }
      var _proto = GraphQLScalarType3.prototype;
      _proto.toConfig = function toConfig() {
        var _this$extensionASTNod;
        return {
          name: this.name,
          description: this.description,
          specifiedByUrl: this.specifiedByUrl,
          serialize: this.serialize,
          parseValue: this.parseValue,
          parseLiteral: this.parseLiteral,
          extensions: this.extensions,
          astNode: this.astNode,
          extensionASTNodes: (_this$extensionASTNod = this.extensionASTNodes) !== null && _this$extensionASTNod !== void 0 ? _this$extensionASTNod : []
        };
      };
      _proto.toString = function toString() {
        return this.name;
      };
      _proto.toJSON = function toJSON() {
        return this.toString();
      };
      _createClass(GraphQLScalarType3, [{
        key: _symbols.SYMBOL_TO_STRING_TAG,
        get: function get() {
          return "GraphQLScalarType";
        }
      }]);
      return GraphQLScalarType3;
    }();
    exports.GraphQLScalarType = GraphQLScalarType2;
    (0, _defineInspect.default)(GraphQLScalarType2);
    var GraphQLObjectType4 = /* @__PURE__ */ function() {
      function GraphQLObjectType5(config) {
        this.name = config.name;
        this.description = config.description;
        this.isTypeOf = config.isTypeOf;
        this.extensions = config.extensions && (0, _toObjMap.default)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
        this._fields = defineFieldMap.bind(void 0, config);
        this._interfaces = defineInterfaces.bind(void 0, config);
        typeof config.name === "string" || (0, _devAssert.default)(0, "Must provide name.");
        config.isTypeOf == null || typeof config.isTypeOf === "function" || (0, _devAssert.default)(0, "".concat(this.name, ' must provide "isTypeOf" as a function, ') + "but got: ".concat((0, _inspect.default)(config.isTypeOf), "."));
      }
      var _proto2 = GraphQLObjectType5.prototype;
      _proto2.getFields = function getFields() {
        if (typeof this._fields === "function") {
          this._fields = this._fields();
        }
        return this._fields;
      };
      _proto2.getInterfaces = function getInterfaces() {
        if (typeof this._interfaces === "function") {
          this._interfaces = this._interfaces();
        }
        return this._interfaces;
      };
      _proto2.toConfig = function toConfig() {
        return {
          name: this.name,
          description: this.description,
          interfaces: this.getInterfaces(),
          fields: fieldsToFieldsConfig(this.getFields()),
          isTypeOf: this.isTypeOf,
          extensions: this.extensions,
          astNode: this.astNode,
          extensionASTNodes: this.extensionASTNodes || []
        };
      };
      _proto2.toString = function toString() {
        return this.name;
      };
      _proto2.toJSON = function toJSON() {
        return this.toString();
      };
      _createClass(GraphQLObjectType5, [{
        key: _symbols.SYMBOL_TO_STRING_TAG,
        get: function get() {
          return "GraphQLObjectType";
        }
      }]);
      return GraphQLObjectType5;
    }();
    exports.GraphQLObjectType = GraphQLObjectType4;
    (0, _defineInspect.default)(GraphQLObjectType4);
    function defineInterfaces(config) {
      var _resolveThunk;
      var interfaces = (_resolveThunk = resolveThunk(config.interfaces)) !== null && _resolveThunk !== void 0 ? _resolveThunk : [];
      Array.isArray(interfaces) || (0, _devAssert.default)(0, "".concat(config.name, " interfaces must be an Array or a function which returns an Array."));
      return interfaces;
    }
    function defineFieldMap(config) {
      var fieldMap = resolveThunk(config.fields);
      isPlainObj(fieldMap) || (0, _devAssert.default)(0, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
      return (0, _mapValue.default)(fieldMap, function(fieldConfig, fieldName) {
        var _fieldConfig$args;
        isPlainObj(fieldConfig) || (0, _devAssert.default)(0, "".concat(config.name, ".").concat(fieldName, " field config must be an object."));
        !("isDeprecated" in fieldConfig) || (0, _devAssert.default)(0, "".concat(config.name, ".").concat(fieldName, ' should provide "deprecationReason" instead of "isDeprecated".'));
        fieldConfig.resolve == null || typeof fieldConfig.resolve === "function" || (0, _devAssert.default)(0, "".concat(config.name, ".").concat(fieldName, " field resolver must be a function if ") + "provided, but got: ".concat((0, _inspect.default)(fieldConfig.resolve), "."));
        var argsConfig = (_fieldConfig$args = fieldConfig.args) !== null && _fieldConfig$args !== void 0 ? _fieldConfig$args : {};
        isPlainObj(argsConfig) || (0, _devAssert.default)(0, "".concat(config.name, ".").concat(fieldName, " args must be an object with argument names as keys."));
        var args = (0, _objectEntries.default)(argsConfig).map(function(_ref) {
          var argName = _ref[0], argConfig = _ref[1];
          return {
            name: argName,
            description: argConfig.description,
            type: argConfig.type,
            defaultValue: argConfig.defaultValue,
            deprecationReason: argConfig.deprecationReason,
            extensions: argConfig.extensions && (0, _toObjMap.default)(argConfig.extensions),
            astNode: argConfig.astNode
          };
        });
        return {
          name: fieldName,
          description: fieldConfig.description,
          type: fieldConfig.type,
          args,
          resolve: fieldConfig.resolve,
          subscribe: fieldConfig.subscribe,
          isDeprecated: fieldConfig.deprecationReason != null,
          deprecationReason: fieldConfig.deprecationReason,
          extensions: fieldConfig.extensions && (0, _toObjMap.default)(fieldConfig.extensions),
          astNode: fieldConfig.astNode
        };
      });
    }
    function isPlainObj(obj) {
      return (0, _isObjectLike.default)(obj) && !Array.isArray(obj);
    }
    function fieldsToFieldsConfig(fields) {
      return (0, _mapValue.default)(fields, function(field) {
        return {
          description: field.description,
          type: field.type,
          args: argsToArgsConfig(field.args),
          resolve: field.resolve,
          subscribe: field.subscribe,
          deprecationReason: field.deprecationReason,
          extensions: field.extensions,
          astNode: field.astNode
        };
      });
    }
    function argsToArgsConfig(args) {
      return (0, _keyValMap.default)(args, function(arg) {
        return arg.name;
      }, function(arg) {
        return {
          description: arg.description,
          type: arg.type,
          defaultValue: arg.defaultValue,
          deprecationReason: arg.deprecationReason,
          extensions: arg.extensions,
          astNode: arg.astNode
        };
      });
    }
    function isRequiredArgument(arg) {
      return isNonNullType4(arg.type) && arg.defaultValue === void 0;
    }
    var GraphQLInterfaceType2 = /* @__PURE__ */ function() {
      function GraphQLInterfaceType3(config) {
        this.name = config.name;
        this.description = config.description;
        this.resolveType = config.resolveType;
        this.extensions = config.extensions && (0, _toObjMap.default)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
        this._fields = defineFieldMap.bind(void 0, config);
        this._interfaces = defineInterfaces.bind(void 0, config);
        typeof config.name === "string" || (0, _devAssert.default)(0, "Must provide name.");
        config.resolveType == null || typeof config.resolveType === "function" || (0, _devAssert.default)(0, "".concat(this.name, ' must provide "resolveType" as a function, ') + "but got: ".concat((0, _inspect.default)(config.resolveType), "."));
      }
      var _proto3 = GraphQLInterfaceType3.prototype;
      _proto3.getFields = function getFields() {
        if (typeof this._fields === "function") {
          this._fields = this._fields();
        }
        return this._fields;
      };
      _proto3.getInterfaces = function getInterfaces() {
        if (typeof this._interfaces === "function") {
          this._interfaces = this._interfaces();
        }
        return this._interfaces;
      };
      _proto3.toConfig = function toConfig() {
        var _this$extensionASTNod2;
        return {
          name: this.name,
          description: this.description,
          interfaces: this.getInterfaces(),
          fields: fieldsToFieldsConfig(this.getFields()),
          resolveType: this.resolveType,
          extensions: this.extensions,
          astNode: this.astNode,
          extensionASTNodes: (_this$extensionASTNod2 = this.extensionASTNodes) !== null && _this$extensionASTNod2 !== void 0 ? _this$extensionASTNod2 : []
        };
      };
      _proto3.toString = function toString() {
        return this.name;
      };
      _proto3.toJSON = function toJSON() {
        return this.toString();
      };
      _createClass(GraphQLInterfaceType3, [{
        key: _symbols.SYMBOL_TO_STRING_TAG,
        get: function get() {
          return "GraphQLInterfaceType";
        }
      }]);
      return GraphQLInterfaceType3;
    }();
    exports.GraphQLInterfaceType = GraphQLInterfaceType2;
    (0, _defineInspect.default)(GraphQLInterfaceType2);
    var GraphQLUnionType2 = /* @__PURE__ */ function() {
      function GraphQLUnionType3(config) {
        this.name = config.name;
        this.description = config.description;
        this.resolveType = config.resolveType;
        this.extensions = config.extensions && (0, _toObjMap.default)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
        this._types = defineTypes.bind(void 0, config);
        typeof config.name === "string" || (0, _devAssert.default)(0, "Must provide name.");
        config.resolveType == null || typeof config.resolveType === "function" || (0, _devAssert.default)(0, "".concat(this.name, ' must provide "resolveType" as a function, ') + "but got: ".concat((0, _inspect.default)(config.resolveType), "."));
      }
      var _proto4 = GraphQLUnionType3.prototype;
      _proto4.getTypes = function getTypes() {
        if (typeof this._types === "function") {
          this._types = this._types();
        }
        return this._types;
      };
      _proto4.toConfig = function toConfig() {
        var _this$extensionASTNod3;
        return {
          name: this.name,
          description: this.description,
          types: this.getTypes(),
          resolveType: this.resolveType,
          extensions: this.extensions,
          astNode: this.astNode,
          extensionASTNodes: (_this$extensionASTNod3 = this.extensionASTNodes) !== null && _this$extensionASTNod3 !== void 0 ? _this$extensionASTNod3 : []
        };
      };
      _proto4.toString = function toString() {
        return this.name;
      };
      _proto4.toJSON = function toJSON() {
        return this.toString();
      };
      _createClass(GraphQLUnionType3, [{
        key: _symbols.SYMBOL_TO_STRING_TAG,
        get: function get() {
          return "GraphQLUnionType";
        }
      }]);
      return GraphQLUnionType3;
    }();
    exports.GraphQLUnionType = GraphQLUnionType2;
    (0, _defineInspect.default)(GraphQLUnionType2);
    function defineTypes(config) {
      var types = resolveThunk(config.types);
      Array.isArray(types) || (0, _devAssert.default)(0, "Must provide Array of types or a function which returns such an array for Union ".concat(config.name, "."));
      return types;
    }
    var GraphQLEnumType2 = /* @__PURE__ */ function() {
      function GraphQLEnumType3(config) {
        this.name = config.name;
        this.description = config.description;
        this.extensions = config.extensions && (0, _toObjMap.default)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
        this._values = defineEnumValues(this.name, config.values);
        this._valueLookup = new Map(this._values.map(function(enumValue) {
          return [enumValue.value, enumValue];
        }));
        this._nameLookup = (0, _keyMap.default)(this._values, function(value) {
          return value.name;
        });
        typeof config.name === "string" || (0, _devAssert.default)(0, "Must provide name.");
      }
      var _proto5 = GraphQLEnumType3.prototype;
      _proto5.getValues = function getValues() {
        return this._values;
      };
      _proto5.getValue = function getValue(name) {
        return this._nameLookup[name];
      };
      _proto5.serialize = function serialize(outputValue) {
        var enumValue = this._valueLookup.get(outputValue);
        if (enumValue === void 0) {
          throw new _GraphQLError.GraphQLError('Enum "'.concat(this.name, '" cannot represent value: ').concat((0, _inspect.default)(outputValue)));
        }
        return enumValue.name;
      };
      _proto5.parseValue = function parseValue(inputValue) {
        if (typeof inputValue !== "string") {
          var valueStr = (0, _inspect.default)(inputValue);
          throw new _GraphQLError.GraphQLError('Enum "'.concat(this.name, '" cannot represent non-string value: ').concat(valueStr, ".") + didYouMeanEnumValue(this, valueStr));
        }
        var enumValue = this.getValue(inputValue);
        if (enumValue == null) {
          throw new _GraphQLError.GraphQLError('Value "'.concat(inputValue, '" does not exist in "').concat(this.name, '" enum.') + didYouMeanEnumValue(this, inputValue));
        }
        return enumValue.value;
      };
      _proto5.parseLiteral = function parseLiteral(valueNode, _variables) {
        if (valueNode.kind !== _kinds.Kind.ENUM) {
          var valueStr = (0, _printer.print)(valueNode);
          throw new _GraphQLError.GraphQLError('Enum "'.concat(this.name, '" cannot represent non-enum value: ').concat(valueStr, ".") + didYouMeanEnumValue(this, valueStr), valueNode);
        }
        var enumValue = this.getValue(valueNode.value);
        if (enumValue == null) {
          var _valueStr = (0, _printer.print)(valueNode);
          throw new _GraphQLError.GraphQLError('Value "'.concat(_valueStr, '" does not exist in "').concat(this.name, '" enum.') + didYouMeanEnumValue(this, _valueStr), valueNode);
        }
        return enumValue.value;
      };
      _proto5.toConfig = function toConfig() {
        var _this$extensionASTNod4;
        var values = (0, _keyValMap.default)(this.getValues(), function(value) {
          return value.name;
        }, function(value) {
          return {
            description: value.description,
            value: value.value,
            deprecationReason: value.deprecationReason,
            extensions: value.extensions,
            astNode: value.astNode
          };
        });
        return {
          name: this.name,
          description: this.description,
          values,
          extensions: this.extensions,
          astNode: this.astNode,
          extensionASTNodes: (_this$extensionASTNod4 = this.extensionASTNodes) !== null && _this$extensionASTNod4 !== void 0 ? _this$extensionASTNod4 : []
        };
      };
      _proto5.toString = function toString() {
        return this.name;
      };
      _proto5.toJSON = function toJSON() {
        return this.toString();
      };
      _createClass(GraphQLEnumType3, [{
        key: _symbols.SYMBOL_TO_STRING_TAG,
        get: function get() {
          return "GraphQLEnumType";
        }
      }]);
      return GraphQLEnumType3;
    }();
    exports.GraphQLEnumType = GraphQLEnumType2;
    (0, _defineInspect.default)(GraphQLEnumType2);
    function didYouMeanEnumValue(enumType, unknownValueStr) {
      var allNames = enumType.getValues().map(function(value) {
        return value.name;
      });
      var suggestedValues = (0, _suggestionList.default)(unknownValueStr, allNames);
      return (0, _didYouMean.default)("the enum value", suggestedValues);
    }
    function defineEnumValues(typeName, valueMap) {
      isPlainObj(valueMap) || (0, _devAssert.default)(0, "".concat(typeName, " values must be an object with value names as keys."));
      return (0, _objectEntries.default)(valueMap).map(function(_ref2) {
        var valueName = _ref2[0], valueConfig = _ref2[1];
        isPlainObj(valueConfig) || (0, _devAssert.default)(0, "".concat(typeName, ".").concat(valueName, ' must refer to an object with a "value" key ') + "representing an internal value but got: ".concat((0, _inspect.default)(valueConfig), "."));
        !("isDeprecated" in valueConfig) || (0, _devAssert.default)(0, "".concat(typeName, ".").concat(valueName, ' should provide "deprecationReason" instead of "isDeprecated".'));
        return {
          name: valueName,
          description: valueConfig.description,
          value: valueConfig.value !== void 0 ? valueConfig.value : valueName,
          isDeprecated: valueConfig.deprecationReason != null,
          deprecationReason: valueConfig.deprecationReason,
          extensions: valueConfig.extensions && (0, _toObjMap.default)(valueConfig.extensions),
          astNode: valueConfig.astNode
        };
      });
    }
    var GraphQLInputObjectType2 = /* @__PURE__ */ function() {
      function GraphQLInputObjectType3(config) {
        this.name = config.name;
        this.description = config.description;
        this.extensions = config.extensions && (0, _toObjMap.default)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
        this._fields = defineInputFieldMap.bind(void 0, config);
        typeof config.name === "string" || (0, _devAssert.default)(0, "Must provide name.");
      }
      var _proto6 = GraphQLInputObjectType3.prototype;
      _proto6.getFields = function getFields() {
        if (typeof this._fields === "function") {
          this._fields = this._fields();
        }
        return this._fields;
      };
      _proto6.toConfig = function toConfig() {
        var _this$extensionASTNod5;
        var fields = (0, _mapValue.default)(this.getFields(), function(field) {
          return {
            description: field.description,
            type: field.type,
            defaultValue: field.defaultValue,
            deprecationReason: field.deprecationReason,
            extensions: field.extensions,
            astNode: field.astNode
          };
        });
        return {
          name: this.name,
          description: this.description,
          fields,
          extensions: this.extensions,
          astNode: this.astNode,
          extensionASTNodes: (_this$extensionASTNod5 = this.extensionASTNodes) !== null && _this$extensionASTNod5 !== void 0 ? _this$extensionASTNod5 : []
        };
      };
      _proto6.toString = function toString() {
        return this.name;
      };
      _proto6.toJSON = function toJSON() {
        return this.toString();
      };
      _createClass(GraphQLInputObjectType3, [{
        key: _symbols.SYMBOL_TO_STRING_TAG,
        get: function get() {
          return "GraphQLInputObjectType";
        }
      }]);
      return GraphQLInputObjectType3;
    }();
    exports.GraphQLInputObjectType = GraphQLInputObjectType2;
    (0, _defineInspect.default)(GraphQLInputObjectType2);
    function defineInputFieldMap(config) {
      var fieldMap = resolveThunk(config.fields);
      isPlainObj(fieldMap) || (0, _devAssert.default)(0, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
      return (0, _mapValue.default)(fieldMap, function(fieldConfig, fieldName) {
        !("resolve" in fieldConfig) || (0, _devAssert.default)(0, "".concat(config.name, ".").concat(fieldName, " field has a resolve property, but Input Types cannot define resolvers."));
        return {
          name: fieldName,
          description: fieldConfig.description,
          type: fieldConfig.type,
          defaultValue: fieldConfig.defaultValue,
          deprecationReason: fieldConfig.deprecationReason,
          extensions: fieldConfig.extensions && (0, _toObjMap.default)(fieldConfig.extensions),
          astNode: fieldConfig.astNode
        };
      });
    }
    function isRequiredInputField(field) {
      return isNonNullType4(field.type) && field.defaultValue === void 0;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/typeComparators.js
var require_typeComparators = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/typeComparators.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isEqualType = isEqualType;
    exports.isTypeSubTypeOf = isTypeSubTypeOf2;
    exports.doTypesOverlap = doTypesOverlap2;
    var _definition = require_definition();
    function isEqualType(typeA, typeB) {
      if (typeA === typeB) {
        return true;
      }
      if ((0, _definition.isNonNullType)(typeA) && (0, _definition.isNonNullType)(typeB)) {
        return isEqualType(typeA.ofType, typeB.ofType);
      }
      if ((0, _definition.isListType)(typeA) && (0, _definition.isListType)(typeB)) {
        return isEqualType(typeA.ofType, typeB.ofType);
      }
      return false;
    }
    function isTypeSubTypeOf2(schema, maybeSubType, superType) {
      if (maybeSubType === superType) {
        return true;
      }
      if ((0, _definition.isNonNullType)(superType)) {
        if ((0, _definition.isNonNullType)(maybeSubType)) {
          return isTypeSubTypeOf2(schema, maybeSubType.ofType, superType.ofType);
        }
        return false;
      }
      if ((0, _definition.isNonNullType)(maybeSubType)) {
        return isTypeSubTypeOf2(schema, maybeSubType.ofType, superType);
      }
      if ((0, _definition.isListType)(superType)) {
        if ((0, _definition.isListType)(maybeSubType)) {
          return isTypeSubTypeOf2(schema, maybeSubType.ofType, superType.ofType);
        }
        return false;
      }
      if ((0, _definition.isListType)(maybeSubType)) {
        return false;
      }
      return (0, _definition.isAbstractType)(superType) && ((0, _definition.isInterfaceType)(maybeSubType) || (0, _definition.isObjectType)(maybeSubType)) && schema.isSubType(superType, maybeSubType);
    }
    function doTypesOverlap2(schema, typeA, typeB) {
      if (typeA === typeB) {
        return true;
      }
      if ((0, _definition.isAbstractType)(typeA)) {
        if ((0, _definition.isAbstractType)(typeB)) {
          return schema.getPossibleTypes(typeA).some(function(type) {
            return schema.isSubType(typeB, type);
          });
        }
        return schema.isSubType(typeA, typeB);
      }
      if ((0, _definition.isAbstractType)(typeB)) {
        return schema.isSubType(typeB, typeA);
      }
      return false;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/polyfills/arrayFrom.js
var require_arrayFrom = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/polyfills/arrayFrom.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _symbols = require_symbols();
    var arrayFrom = Array.from || function(obj, mapFn, thisArg) {
      if (obj == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }
      var iteratorMethod = obj[_symbols.SYMBOL_ITERATOR];
      if (typeof iteratorMethod === "function") {
        var iterator = iteratorMethod.call(obj);
        var result = [];
        var step;
        for (var i = 0; !(step = iterator.next()).done; ++i) {
          result.push(mapFn.call(thisArg, step.value, i));
          if (i > 9999999) {
            throw new TypeError("Near-infinite iteration.");
          }
        }
        return result;
      }
      var length = obj.length;
      if (typeof length === "number" && length >= 0 && length % 1 === 0) {
        var _result = [];
        for (var _i = 0; _i < length; ++_i) {
          if (Object.prototype.hasOwnProperty.call(obj, _i)) {
            _result.push(mapFn.call(thisArg, obj[_i], _i));
          }
        }
        return _result;
      }
      return [];
    };
    var _default = arrayFrom;
    exports.default = _default;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/polyfills/isFinite.js
var require_isFinite = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/polyfills/isFinite.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var isFinitePolyfill = Number.isFinite || function(value) {
      return typeof value === "number" && isFinite(value);
    };
    var _default = isFinitePolyfill;
    exports.default = _default;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/safeArrayFrom.js
var require_safeArrayFrom = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/safeArrayFrom.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = safeArrayFrom;
    var _symbols = require_symbols();
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function safeArrayFrom(collection) {
      var mapFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function(item) {
        return item;
      };
      if (collection == null || _typeof(collection) !== "object") {
        return null;
      }
      if (Array.isArray(collection)) {
        return collection.map(mapFn);
      }
      var iteratorMethod = collection[_symbols.SYMBOL_ITERATOR];
      if (typeof iteratorMethod === "function") {
        var iterator = iteratorMethod.call(collection);
        var result = [];
        var step;
        for (var i = 0; !(step = iterator.next()).done; ++i) {
          result.push(mapFn(step.value, i));
        }
        return result;
      }
      var length = collection.length;
      if (typeof length === "number" && length >= 0 && length % 1 === 0) {
        var _result = [];
        for (var _i = 0; _i < length; ++_i) {
          if (!Object.prototype.hasOwnProperty.call(collection, _i)) {
            return null;
          }
          _result.push(mapFn(collection[String(_i)], _i));
        }
        return _result;
      }
      return null;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/polyfills/isInteger.js
var require_isInteger = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/polyfills/isInteger.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var isInteger = Number.isInteger || function(value) {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    };
    var _default = isInteger;
    exports.default = _default;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/type/scalars.js
var require_scalars = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/type/scalars.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isSpecifiedScalarType = isSpecifiedScalarType2;
    exports.specifiedScalarTypes = exports.GraphQLID = exports.GraphQLBoolean = exports.GraphQLString = exports.GraphQLFloat = exports.GraphQLInt = void 0;
    var _isFinite = _interopRequireDefault(require_isFinite());
    var _isInteger = _interopRequireDefault(require_isInteger());
    var _inspect = _interopRequireDefault(require_inspect());
    var _isObjectLike = _interopRequireDefault(require_isObjectLike());
    var _kinds = require_kinds();
    var _printer = require_printer();
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var MAX_INT = 2147483647;
    var MIN_INT = -2147483648;
    function serializeInt(outputValue) {
      var coercedValue = serializeObject(outputValue);
      if (typeof coercedValue === "boolean") {
        return coercedValue ? 1 : 0;
      }
      var num = coercedValue;
      if (typeof coercedValue === "string" && coercedValue !== "") {
        num = Number(coercedValue);
      }
      if (!(0, _isInteger.default)(num)) {
        throw new _GraphQLError.GraphQLError("Int cannot represent non-integer value: ".concat((0, _inspect.default)(coercedValue)));
      }
      if (num > MAX_INT || num < MIN_INT) {
        throw new _GraphQLError.GraphQLError("Int cannot represent non 32-bit signed integer value: " + (0, _inspect.default)(coercedValue));
      }
      return num;
    }
    function coerceInt(inputValue) {
      if (!(0, _isInteger.default)(inputValue)) {
        throw new _GraphQLError.GraphQLError("Int cannot represent non-integer value: ".concat((0, _inspect.default)(inputValue)));
      }
      if (inputValue > MAX_INT || inputValue < MIN_INT) {
        throw new _GraphQLError.GraphQLError("Int cannot represent non 32-bit signed integer value: ".concat(inputValue));
      }
      return inputValue;
    }
    var GraphQLInt2 = new _definition.GraphQLScalarType({
      name: "Int",
      description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
      serialize: serializeInt,
      parseValue: coerceInt,
      parseLiteral: function parseLiteral(valueNode) {
        if (valueNode.kind !== _kinds.Kind.INT) {
          throw new _GraphQLError.GraphQLError("Int cannot represent non-integer value: ".concat((0, _printer.print)(valueNode)), valueNode);
        }
        var num = parseInt(valueNode.value, 10);
        if (num > MAX_INT || num < MIN_INT) {
          throw new _GraphQLError.GraphQLError("Int cannot represent non 32-bit signed integer value: ".concat(valueNode.value), valueNode);
        }
        return num;
      }
    });
    exports.GraphQLInt = GraphQLInt2;
    function serializeFloat(outputValue) {
      var coercedValue = serializeObject(outputValue);
      if (typeof coercedValue === "boolean") {
        return coercedValue ? 1 : 0;
      }
      var num = coercedValue;
      if (typeof coercedValue === "string" && coercedValue !== "") {
        num = Number(coercedValue);
      }
      if (!(0, _isFinite.default)(num)) {
        throw new _GraphQLError.GraphQLError("Float cannot represent non numeric value: ".concat((0, _inspect.default)(coercedValue)));
      }
      return num;
    }
    function coerceFloat(inputValue) {
      if (!(0, _isFinite.default)(inputValue)) {
        throw new _GraphQLError.GraphQLError("Float cannot represent non numeric value: ".concat((0, _inspect.default)(inputValue)));
      }
      return inputValue;
    }
    var GraphQLFloat2 = new _definition.GraphQLScalarType({
      name: "Float",
      description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
      serialize: serializeFloat,
      parseValue: coerceFloat,
      parseLiteral: function parseLiteral(valueNode) {
        if (valueNode.kind !== _kinds.Kind.FLOAT && valueNode.kind !== _kinds.Kind.INT) {
          throw new _GraphQLError.GraphQLError("Float cannot represent non numeric value: ".concat((0, _printer.print)(valueNode)), valueNode);
        }
        return parseFloat(valueNode.value);
      }
    });
    exports.GraphQLFloat = GraphQLFloat2;
    function serializeObject(outputValue) {
      if ((0, _isObjectLike.default)(outputValue)) {
        if (typeof outputValue.valueOf === "function") {
          var valueOfResult = outputValue.valueOf();
          if (!(0, _isObjectLike.default)(valueOfResult)) {
            return valueOfResult;
          }
        }
        if (typeof outputValue.toJSON === "function") {
          return outputValue.toJSON();
        }
      }
      return outputValue;
    }
    function serializeString(outputValue) {
      var coercedValue = serializeObject(outputValue);
      if (typeof coercedValue === "string") {
        return coercedValue;
      }
      if (typeof coercedValue === "boolean") {
        return coercedValue ? "true" : "false";
      }
      if ((0, _isFinite.default)(coercedValue)) {
        return coercedValue.toString();
      }
      throw new _GraphQLError.GraphQLError("String cannot represent value: ".concat((0, _inspect.default)(outputValue)));
    }
    function coerceString(inputValue) {
      if (typeof inputValue !== "string") {
        throw new _GraphQLError.GraphQLError("String cannot represent a non string value: ".concat((0, _inspect.default)(inputValue)));
      }
      return inputValue;
    }
    var GraphQLString2 = new _definition.GraphQLScalarType({
      name: "String",
      description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
      serialize: serializeString,
      parseValue: coerceString,
      parseLiteral: function parseLiteral(valueNode) {
        if (valueNode.kind !== _kinds.Kind.STRING) {
          throw new _GraphQLError.GraphQLError("String cannot represent a non string value: ".concat((0, _printer.print)(valueNode)), valueNode);
        }
        return valueNode.value;
      }
    });
    exports.GraphQLString = GraphQLString2;
    function serializeBoolean(outputValue) {
      var coercedValue = serializeObject(outputValue);
      if (typeof coercedValue === "boolean") {
        return coercedValue;
      }
      if ((0, _isFinite.default)(coercedValue)) {
        return coercedValue !== 0;
      }
      throw new _GraphQLError.GraphQLError("Boolean cannot represent a non boolean value: ".concat((0, _inspect.default)(coercedValue)));
    }
    function coerceBoolean(inputValue) {
      if (typeof inputValue !== "boolean") {
        throw new _GraphQLError.GraphQLError("Boolean cannot represent a non boolean value: ".concat((0, _inspect.default)(inputValue)));
      }
      return inputValue;
    }
    var GraphQLBoolean2 = new _definition.GraphQLScalarType({
      name: "Boolean",
      description: "The `Boolean` scalar type represents `true` or `false`.",
      serialize: serializeBoolean,
      parseValue: coerceBoolean,
      parseLiteral: function parseLiteral(valueNode) {
        if (valueNode.kind !== _kinds.Kind.BOOLEAN) {
          throw new _GraphQLError.GraphQLError("Boolean cannot represent a non boolean value: ".concat((0, _printer.print)(valueNode)), valueNode);
        }
        return valueNode.value;
      }
    });
    exports.GraphQLBoolean = GraphQLBoolean2;
    function serializeID(outputValue) {
      var coercedValue = serializeObject(outputValue);
      if (typeof coercedValue === "string") {
        return coercedValue;
      }
      if ((0, _isInteger.default)(coercedValue)) {
        return String(coercedValue);
      }
      throw new _GraphQLError.GraphQLError("ID cannot represent value: ".concat((0, _inspect.default)(outputValue)));
    }
    function coerceID(inputValue) {
      if (typeof inputValue === "string") {
        return inputValue;
      }
      if ((0, _isInteger.default)(inputValue)) {
        return inputValue.toString();
      }
      throw new _GraphQLError.GraphQLError("ID cannot represent value: ".concat((0, _inspect.default)(inputValue)));
    }
    var GraphQLID2 = new _definition.GraphQLScalarType({
      name: "ID",
      description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
      serialize: serializeID,
      parseValue: coerceID,
      parseLiteral: function parseLiteral(valueNode) {
        if (valueNode.kind !== _kinds.Kind.STRING && valueNode.kind !== _kinds.Kind.INT) {
          throw new _GraphQLError.GraphQLError("ID cannot represent a non-string and non-integer value: " + (0, _printer.print)(valueNode), valueNode);
        }
        return valueNode.value;
      }
    });
    exports.GraphQLID = GraphQLID2;
    var specifiedScalarTypes = Object.freeze([GraphQLString2, GraphQLInt2, GraphQLFloat2, GraphQLBoolean2, GraphQLID2]);
    exports.specifiedScalarTypes = specifiedScalarTypes;
    function isSpecifiedScalarType2(type) {
      return specifiedScalarTypes.some(function(_ref) {
        var name = _ref.name;
        return type.name === name;
      });
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/astFromValue.js
var require_astFromValue = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/astFromValue.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.astFromValue = astFromValue2;
    var _isFinite = _interopRequireDefault(require_isFinite());
    var _objectValues3 = _interopRequireDefault(require_objectValues());
    var _inspect = _interopRequireDefault(require_inspect());
    var _invariant = _interopRequireDefault(require_invariant());
    var _isObjectLike = _interopRequireDefault(require_isObjectLike());
    var _safeArrayFrom = _interopRequireDefault(require_safeArrayFrom());
    var _kinds = require_kinds();
    var _scalars = require_scalars();
    var _definition = require_definition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function astFromValue2(value, type) {
      if ((0, _definition.isNonNullType)(type)) {
        var astValue = astFromValue2(value, type.ofType);
        if ((astValue === null || astValue === void 0 ? void 0 : astValue.kind) === _kinds.Kind.NULL) {
          return null;
        }
        return astValue;
      }
      if (value === null) {
        return {
          kind: _kinds.Kind.NULL
        };
      }
      if (value === void 0) {
        return null;
      }
      if ((0, _definition.isListType)(type)) {
        var itemType = type.ofType;
        var items = (0, _safeArrayFrom.default)(value);
        if (items != null) {
          var valuesNodes = [];
          for (var _i2 = 0; _i2 < items.length; _i2++) {
            var item = items[_i2];
            var itemNode = astFromValue2(item, itemType);
            if (itemNode != null) {
              valuesNodes.push(itemNode);
            }
          }
          return {
            kind: _kinds.Kind.LIST,
            values: valuesNodes
          };
        }
        return astFromValue2(value, itemType);
      }
      if ((0, _definition.isInputObjectType)(type)) {
        if (!(0, _isObjectLike.default)(value)) {
          return null;
        }
        var fieldNodes = [];
        for (var _i4 = 0, _objectValues2 = (0, _objectValues3.default)(type.getFields()); _i4 < _objectValues2.length; _i4++) {
          var field = _objectValues2[_i4];
          var fieldValue = astFromValue2(value[field.name], field.type);
          if (fieldValue) {
            fieldNodes.push({
              kind: _kinds.Kind.OBJECT_FIELD,
              name: {
                kind: _kinds.Kind.NAME,
                value: field.name
              },
              value: fieldValue
            });
          }
        }
        return {
          kind: _kinds.Kind.OBJECT,
          fields: fieldNodes
        };
      }
      if ((0, _definition.isLeafType)(type)) {
        var serialized = type.serialize(value);
        if (serialized == null) {
          return null;
        }
        if (typeof serialized === "boolean") {
          return {
            kind: _kinds.Kind.BOOLEAN,
            value: serialized
          };
        }
        if (typeof serialized === "number" && (0, _isFinite.default)(serialized)) {
          var stringNum = String(serialized);
          return integerStringRegExp2.test(stringNum) ? {
            kind: _kinds.Kind.INT,
            value: stringNum
          } : {
            kind: _kinds.Kind.FLOAT,
            value: stringNum
          };
        }
        if (typeof serialized === "string") {
          if ((0, _definition.isEnumType)(type)) {
            return {
              kind: _kinds.Kind.ENUM,
              value: serialized
            };
          }
          if (type === _scalars.GraphQLID && integerStringRegExp2.test(serialized)) {
            return {
              kind: _kinds.Kind.INT,
              value: serialized
            };
          }
          return {
            kind: _kinds.Kind.STRING,
            value: serialized
          };
        }
        throw new TypeError("Cannot convert value to AST: ".concat((0, _inspect.default)(serialized), "."));
      }
      (0, _invariant.default)(0, "Unexpected input type: " + (0, _inspect.default)(type));
    }
    var integerStringRegExp2 = /^-?(?:0|[1-9][0-9]*)$/;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/type/introspection.js
var require_introspection = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/type/introspection.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isIntrospectionType = isIntrospectionType2;
    exports.introspectionTypes = exports.TypeNameMetaFieldDef = exports.TypeMetaFieldDef = exports.SchemaMetaFieldDef = exports.__TypeKind = exports.TypeKind = exports.__EnumValue = exports.__InputValue = exports.__Field = exports.__Type = exports.__DirectiveLocation = exports.__Directive = exports.__Schema = void 0;
    var _objectValues = _interopRequireDefault(require_objectValues());
    var _inspect = _interopRequireDefault(require_inspect());
    var _invariant = _interopRequireDefault(require_invariant());
    var _printer = require_printer();
    var _directiveLocation = require_directiveLocation();
    var _astFromValue = require_astFromValue();
    var _scalars = require_scalars();
    var _definition = require_definition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var __Schema = new _definition.GraphQLObjectType({
      name: "__Schema",
      description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
      fields: function fields() {
        return {
          description: {
            type: _scalars.GraphQLString,
            resolve: function resolve2(schema) {
              return schema.description;
            }
          },
          types: {
            description: "A list of all types supported by this server.",
            type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type))),
            resolve: function resolve2(schema) {
              return (0, _objectValues.default)(schema.getTypeMap());
            }
          },
          queryType: {
            description: "The type that query operations will be rooted at.",
            type: new _definition.GraphQLNonNull(__Type),
            resolve: function resolve2(schema) {
              return schema.getQueryType();
            }
          },
          mutationType: {
            description: "If this server supports mutation, the type that mutation operations will be rooted at.",
            type: __Type,
            resolve: function resolve2(schema) {
              return schema.getMutationType();
            }
          },
          subscriptionType: {
            description: "If this server support subscription, the type that subscription operations will be rooted at.",
            type: __Type,
            resolve: function resolve2(schema) {
              return schema.getSubscriptionType();
            }
          },
          directives: {
            description: "A list of all directives supported by this server.",
            type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Directive))),
            resolve: function resolve2(schema) {
              return schema.getDirectives();
            }
          }
        };
      }
    });
    exports.__Schema = __Schema;
    var __Directive = new _definition.GraphQLObjectType({
      name: "__Directive",
      description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
      fields: function fields() {
        return {
          name: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
            resolve: function resolve2(directive) {
              return directive.name;
            }
          },
          description: {
            type: _scalars.GraphQLString,
            resolve: function resolve2(directive) {
              return directive.description;
            }
          },
          isRepeatable: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
            resolve: function resolve2(directive) {
              return directive.isRepeatable;
            }
          },
          locations: {
            type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__DirectiveLocation))),
            resolve: function resolve2(directive) {
              return directive.locations;
            }
          },
          args: {
            type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
            args: {
              includeDeprecated: {
                type: _scalars.GraphQLBoolean,
                defaultValue: false
              }
            },
            resolve: function resolve2(field, _ref) {
              var includeDeprecated = _ref.includeDeprecated;
              return includeDeprecated ? field.args : field.args.filter(function(arg) {
                return arg.deprecationReason == null;
              });
            }
          }
        };
      }
    });
    exports.__Directive = __Directive;
    var __DirectiveLocation = new _definition.GraphQLEnumType({
      name: "__DirectiveLocation",
      description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
      values: {
        QUERY: {
          value: _directiveLocation.DirectiveLocation.QUERY,
          description: "Location adjacent to a query operation."
        },
        MUTATION: {
          value: _directiveLocation.DirectiveLocation.MUTATION,
          description: "Location adjacent to a mutation operation."
        },
        SUBSCRIPTION: {
          value: _directiveLocation.DirectiveLocation.SUBSCRIPTION,
          description: "Location adjacent to a subscription operation."
        },
        FIELD: {
          value: _directiveLocation.DirectiveLocation.FIELD,
          description: "Location adjacent to a field."
        },
        FRAGMENT_DEFINITION: {
          value: _directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION,
          description: "Location adjacent to a fragment definition."
        },
        FRAGMENT_SPREAD: {
          value: _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD,
          description: "Location adjacent to a fragment spread."
        },
        INLINE_FRAGMENT: {
          value: _directiveLocation.DirectiveLocation.INLINE_FRAGMENT,
          description: "Location adjacent to an inline fragment."
        },
        VARIABLE_DEFINITION: {
          value: _directiveLocation.DirectiveLocation.VARIABLE_DEFINITION,
          description: "Location adjacent to a variable definition."
        },
        SCHEMA: {
          value: _directiveLocation.DirectiveLocation.SCHEMA,
          description: "Location adjacent to a schema definition."
        },
        SCALAR: {
          value: _directiveLocation.DirectiveLocation.SCALAR,
          description: "Location adjacent to a scalar definition."
        },
        OBJECT: {
          value: _directiveLocation.DirectiveLocation.OBJECT,
          description: "Location adjacent to an object type definition."
        },
        FIELD_DEFINITION: {
          value: _directiveLocation.DirectiveLocation.FIELD_DEFINITION,
          description: "Location adjacent to a field definition."
        },
        ARGUMENT_DEFINITION: {
          value: _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION,
          description: "Location adjacent to an argument definition."
        },
        INTERFACE: {
          value: _directiveLocation.DirectiveLocation.INTERFACE,
          description: "Location adjacent to an interface definition."
        },
        UNION: {
          value: _directiveLocation.DirectiveLocation.UNION,
          description: "Location adjacent to a union definition."
        },
        ENUM: {
          value: _directiveLocation.DirectiveLocation.ENUM,
          description: "Location adjacent to an enum definition."
        },
        ENUM_VALUE: {
          value: _directiveLocation.DirectiveLocation.ENUM_VALUE,
          description: "Location adjacent to an enum value definition."
        },
        INPUT_OBJECT: {
          value: _directiveLocation.DirectiveLocation.INPUT_OBJECT,
          description: "Location adjacent to an input object type definition."
        },
        INPUT_FIELD_DEFINITION: {
          value: _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION,
          description: "Location adjacent to an input object field definition."
        }
      }
    });
    exports.__DirectiveLocation = __DirectiveLocation;
    var __Type = new _definition.GraphQLObjectType({
      name: "__Type",
      description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
      fields: function fields() {
        return {
          kind: {
            type: new _definition.GraphQLNonNull(__TypeKind),
            resolve: function resolve2(type) {
              if ((0, _definition.isScalarType)(type)) {
                return TypeKind.SCALAR;
              }
              if ((0, _definition.isObjectType)(type)) {
                return TypeKind.OBJECT;
              }
              if ((0, _definition.isInterfaceType)(type)) {
                return TypeKind.INTERFACE;
              }
              if ((0, _definition.isUnionType)(type)) {
                return TypeKind.UNION;
              }
              if ((0, _definition.isEnumType)(type)) {
                return TypeKind.ENUM;
              }
              if ((0, _definition.isInputObjectType)(type)) {
                return TypeKind.INPUT_OBJECT;
              }
              if ((0, _definition.isListType)(type)) {
                return TypeKind.LIST;
              }
              if ((0, _definition.isNonNullType)(type)) {
                return TypeKind.NON_NULL;
              }
              (0, _invariant.default)(0, 'Unexpected type: "'.concat((0, _inspect.default)(type), '".'));
            }
          },
          name: {
            type: _scalars.GraphQLString,
            resolve: function resolve2(type) {
              return type.name !== void 0 ? type.name : void 0;
            }
          },
          description: {
            type: _scalars.GraphQLString,
            resolve: function resolve2(type) {
              return type.description !== void 0 ? type.description : void 0;
            }
          },
          specifiedByUrl: {
            type: _scalars.GraphQLString,
            resolve: function resolve2(obj) {
              return obj.specifiedByUrl !== void 0 ? obj.specifiedByUrl : void 0;
            }
          },
          fields: {
            type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Field)),
            args: {
              includeDeprecated: {
                type: _scalars.GraphQLBoolean,
                defaultValue: false
              }
            },
            resolve: function resolve2(type, _ref2) {
              var includeDeprecated = _ref2.includeDeprecated;
              if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
                var fields2 = (0, _objectValues.default)(type.getFields());
                return includeDeprecated ? fields2 : fields2.filter(function(field) {
                  return field.deprecationReason == null;
                });
              }
            }
          },
          interfaces: {
            type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
            resolve: function resolve2(type) {
              if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
                return type.getInterfaces();
              }
            }
          },
          possibleTypes: {
            type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
            resolve: function resolve2(type, _args, _context, _ref3) {
              var schema = _ref3.schema;
              if ((0, _definition.isAbstractType)(type)) {
                return schema.getPossibleTypes(type);
              }
            }
          },
          enumValues: {
            type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__EnumValue)),
            args: {
              includeDeprecated: {
                type: _scalars.GraphQLBoolean,
                defaultValue: false
              }
            },
            resolve: function resolve2(type, _ref4) {
              var includeDeprecated = _ref4.includeDeprecated;
              if ((0, _definition.isEnumType)(type)) {
                var values = type.getValues();
                return includeDeprecated ? values : values.filter(function(field) {
                  return field.deprecationReason == null;
                });
              }
            }
          },
          inputFields: {
            type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue)),
            args: {
              includeDeprecated: {
                type: _scalars.GraphQLBoolean,
                defaultValue: false
              }
            },
            resolve: function resolve2(type, _ref5) {
              var includeDeprecated = _ref5.includeDeprecated;
              if ((0, _definition.isInputObjectType)(type)) {
                var values = (0, _objectValues.default)(type.getFields());
                return includeDeprecated ? values : values.filter(function(field) {
                  return field.deprecationReason == null;
                });
              }
            }
          },
          ofType: {
            type: __Type,
            resolve: function resolve2(type) {
              return type.ofType !== void 0 ? type.ofType : void 0;
            }
          }
        };
      }
    });
    exports.__Type = __Type;
    var __Field = new _definition.GraphQLObjectType({
      name: "__Field",
      description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
      fields: function fields() {
        return {
          name: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
            resolve: function resolve2(field) {
              return field.name;
            }
          },
          description: {
            type: _scalars.GraphQLString,
            resolve: function resolve2(field) {
              return field.description;
            }
          },
          args: {
            type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
            args: {
              includeDeprecated: {
                type: _scalars.GraphQLBoolean,
                defaultValue: false
              }
            },
            resolve: function resolve2(field, _ref6) {
              var includeDeprecated = _ref6.includeDeprecated;
              return includeDeprecated ? field.args : field.args.filter(function(arg) {
                return arg.deprecationReason == null;
              });
            }
          },
          type: {
            type: new _definition.GraphQLNonNull(__Type),
            resolve: function resolve2(field) {
              return field.type;
            }
          },
          isDeprecated: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
            resolve: function resolve2(field) {
              return field.deprecationReason != null;
            }
          },
          deprecationReason: {
            type: _scalars.GraphQLString,
            resolve: function resolve2(field) {
              return field.deprecationReason;
            }
          }
        };
      }
    });
    exports.__Field = __Field;
    var __InputValue = new _definition.GraphQLObjectType({
      name: "__InputValue",
      description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
      fields: function fields() {
        return {
          name: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
            resolve: function resolve2(inputValue) {
              return inputValue.name;
            }
          },
          description: {
            type: _scalars.GraphQLString,
            resolve: function resolve2(inputValue) {
              return inputValue.description;
            }
          },
          type: {
            type: new _definition.GraphQLNonNull(__Type),
            resolve: function resolve2(inputValue) {
              return inputValue.type;
            }
          },
          defaultValue: {
            type: _scalars.GraphQLString,
            description: "A GraphQL-formatted string representing the default value for this input value.",
            resolve: function resolve2(inputValue) {
              var type = inputValue.type, defaultValue = inputValue.defaultValue;
              var valueAST = (0, _astFromValue.astFromValue)(defaultValue, type);
              return valueAST ? (0, _printer.print)(valueAST) : null;
            }
          },
          isDeprecated: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
            resolve: function resolve2(field) {
              return field.deprecationReason != null;
            }
          },
          deprecationReason: {
            type: _scalars.GraphQLString,
            resolve: function resolve2(obj) {
              return obj.deprecationReason;
            }
          }
        };
      }
    });
    exports.__InputValue = __InputValue;
    var __EnumValue = new _definition.GraphQLObjectType({
      name: "__EnumValue",
      description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
      fields: function fields() {
        return {
          name: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
            resolve: function resolve2(enumValue) {
              return enumValue.name;
            }
          },
          description: {
            type: _scalars.GraphQLString,
            resolve: function resolve2(enumValue) {
              return enumValue.description;
            }
          },
          isDeprecated: {
            type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
            resolve: function resolve2(enumValue) {
              return enumValue.deprecationReason != null;
            }
          },
          deprecationReason: {
            type: _scalars.GraphQLString,
            resolve: function resolve2(enumValue) {
              return enumValue.deprecationReason;
            }
          }
        };
      }
    });
    exports.__EnumValue = __EnumValue;
    var TypeKind = Object.freeze({
      SCALAR: "SCALAR",
      OBJECT: "OBJECT",
      INTERFACE: "INTERFACE",
      UNION: "UNION",
      ENUM: "ENUM",
      INPUT_OBJECT: "INPUT_OBJECT",
      LIST: "LIST",
      NON_NULL: "NON_NULL"
    });
    exports.TypeKind = TypeKind;
    var __TypeKind = new _definition.GraphQLEnumType({
      name: "__TypeKind",
      description: "An enum describing what kind of type a given `__Type` is.",
      values: {
        SCALAR: {
          value: TypeKind.SCALAR,
          description: "Indicates this type is a scalar."
        },
        OBJECT: {
          value: TypeKind.OBJECT,
          description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
        },
        INTERFACE: {
          value: TypeKind.INTERFACE,
          description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
        },
        UNION: {
          value: TypeKind.UNION,
          description: "Indicates this type is a union. `possibleTypes` is a valid field."
        },
        ENUM: {
          value: TypeKind.ENUM,
          description: "Indicates this type is an enum. `enumValues` is a valid field."
        },
        INPUT_OBJECT: {
          value: TypeKind.INPUT_OBJECT,
          description: "Indicates this type is an input object. `inputFields` is a valid field."
        },
        LIST: {
          value: TypeKind.LIST,
          description: "Indicates this type is a list. `ofType` is a valid field."
        },
        NON_NULL: {
          value: TypeKind.NON_NULL,
          description: "Indicates this type is a non-null. `ofType` is a valid field."
        }
      }
    });
    exports.__TypeKind = __TypeKind;
    var SchemaMetaFieldDef2 = {
      name: "__schema",
      type: new _definition.GraphQLNonNull(__Schema),
      description: "Access the current type schema of this server.",
      args: [],
      resolve: function resolve2(_source, _args, _context, _ref7) {
        var schema = _ref7.schema;
        return schema;
      },
      isDeprecated: false,
      deprecationReason: void 0,
      extensions: void 0,
      astNode: void 0
    };
    exports.SchemaMetaFieldDef = SchemaMetaFieldDef2;
    var TypeMetaFieldDef2 = {
      name: "__type",
      type: __Type,
      description: "Request the type information of a single type.",
      args: [{
        name: "name",
        description: void 0,
        type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
        defaultValue: void 0,
        deprecationReason: void 0,
        extensions: void 0,
        astNode: void 0
      }],
      resolve: function resolve2(_source, _ref8, _context, _ref9) {
        var name = _ref8.name;
        var schema = _ref9.schema;
        return schema.getType(name);
      },
      isDeprecated: false,
      deprecationReason: void 0,
      extensions: void 0,
      astNode: void 0
    };
    exports.TypeMetaFieldDef = TypeMetaFieldDef2;
    var TypeNameMetaFieldDef2 = {
      name: "__typename",
      type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
      description: "The name of the current Object type at runtime.",
      args: [],
      resolve: function resolve2(_source, _args, _context, _ref10) {
        var parentType = _ref10.parentType;
        return parentType.name;
      },
      isDeprecated: false,
      deprecationReason: void 0,
      extensions: void 0,
      astNode: void 0
    };
    exports.TypeNameMetaFieldDef = TypeNameMetaFieldDef2;
    var introspectionTypes = Object.freeze([__Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind]);
    exports.introspectionTypes = introspectionTypes;
    function isIntrospectionType2(type) {
      return introspectionTypes.some(function(_ref11) {
        var name = _ref11.name;
        return type.name === name;
      });
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/type/directives.js
var require_directives = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/type/directives.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isDirective = isDirective2;
    exports.assertDirective = assertDirective;
    exports.isSpecifiedDirective = isSpecifiedDirective2;
    exports.specifiedDirectives = exports.GraphQLSpecifiedByDirective = exports.GraphQLDeprecatedDirective = exports.DEFAULT_DEPRECATION_REASON = exports.GraphQLSkipDirective = exports.GraphQLIncludeDirective = exports.GraphQLDirective = void 0;
    var _objectEntries = _interopRequireDefault(require_objectEntries());
    var _symbols = require_symbols();
    var _inspect = _interopRequireDefault(require_inspect());
    var _toObjMap = _interopRequireDefault(require_toObjMap());
    var _devAssert = _interopRequireDefault(require_devAssert());
    var _instanceOf = _interopRequireDefault(require_instanceOf());
    var _isObjectLike = _interopRequireDefault(require_isObjectLike());
    var _defineInspect = _interopRequireDefault(require_defineInspect());
    var _directiveLocation = require_directiveLocation();
    var _scalars = require_scalars();
    var _definition = require_definition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function isDirective2(directive) {
      return (0, _instanceOf.default)(directive, GraphQLDirective2);
    }
    function assertDirective(directive) {
      if (!isDirective2(directive)) {
        throw new Error("Expected ".concat((0, _inspect.default)(directive), " to be a GraphQL directive."));
      }
      return directive;
    }
    var GraphQLDirective2 = /* @__PURE__ */ function() {
      function GraphQLDirective3(config) {
        var _config$isRepeatable, _config$args;
        this.name = config.name;
        this.description = config.description;
        this.locations = config.locations;
        this.isRepeatable = (_config$isRepeatable = config.isRepeatable) !== null && _config$isRepeatable !== void 0 ? _config$isRepeatable : false;
        this.extensions = config.extensions && (0, _toObjMap.default)(config.extensions);
        this.astNode = config.astNode;
        config.name || (0, _devAssert.default)(0, "Directive must be named.");
        Array.isArray(config.locations) || (0, _devAssert.default)(0, "@".concat(config.name, " locations must be an Array."));
        var args = (_config$args = config.args) !== null && _config$args !== void 0 ? _config$args : {};
        (0, _isObjectLike.default)(args) && !Array.isArray(args) || (0, _devAssert.default)(0, "@".concat(config.name, " args must be an object with argument names as keys."));
        this.args = (0, _objectEntries.default)(args).map(function(_ref) {
          var argName = _ref[0], argConfig = _ref[1];
          return {
            name: argName,
            description: argConfig.description,
            type: argConfig.type,
            defaultValue: argConfig.defaultValue,
            deprecationReason: argConfig.deprecationReason,
            extensions: argConfig.extensions && (0, _toObjMap.default)(argConfig.extensions),
            astNode: argConfig.astNode
          };
        });
      }
      var _proto = GraphQLDirective3.prototype;
      _proto.toConfig = function toConfig() {
        return {
          name: this.name,
          description: this.description,
          locations: this.locations,
          args: (0, _definition.argsToArgsConfig)(this.args),
          isRepeatable: this.isRepeatable,
          extensions: this.extensions,
          astNode: this.astNode
        };
      };
      _proto.toString = function toString() {
        return "@" + this.name;
      };
      _proto.toJSON = function toJSON() {
        return this.toString();
      };
      _createClass(GraphQLDirective3, [{
        key: _symbols.SYMBOL_TO_STRING_TAG,
        get: function get() {
          return "GraphQLDirective";
        }
      }]);
      return GraphQLDirective3;
    }();
    exports.GraphQLDirective = GraphQLDirective2;
    (0, _defineInspect.default)(GraphQLDirective2);
    var GraphQLIncludeDirective2 = new GraphQLDirective2({
      name: "include",
      description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
      locations: [_directiveLocation.DirectiveLocation.FIELD, _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD, _directiveLocation.DirectiveLocation.INLINE_FRAGMENT],
      args: {
        if: {
          type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
          description: "Included when true."
        }
      }
    });
    exports.GraphQLIncludeDirective = GraphQLIncludeDirective2;
    var GraphQLSkipDirective2 = new GraphQLDirective2({
      name: "skip",
      description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
      locations: [_directiveLocation.DirectiveLocation.FIELD, _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD, _directiveLocation.DirectiveLocation.INLINE_FRAGMENT],
      args: {
        if: {
          type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
          description: "Skipped when true."
        }
      }
    });
    exports.GraphQLSkipDirective = GraphQLSkipDirective2;
    var DEFAULT_DEPRECATION_REASON = "No longer supported";
    exports.DEFAULT_DEPRECATION_REASON = DEFAULT_DEPRECATION_REASON;
    var GraphQLDeprecatedDirective2 = new GraphQLDirective2({
      name: "deprecated",
      description: "Marks an element of a GraphQL schema as no longer supported.",
      locations: [_directiveLocation.DirectiveLocation.FIELD_DEFINITION, _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION, _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION, _directiveLocation.DirectiveLocation.ENUM_VALUE],
      args: {
        reason: {
          type: _scalars.GraphQLString,
          description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
          defaultValue: DEFAULT_DEPRECATION_REASON
        }
      }
    });
    exports.GraphQLDeprecatedDirective = GraphQLDeprecatedDirective2;
    var GraphQLSpecifiedByDirective = new GraphQLDirective2({
      name: "specifiedBy",
      description: "Exposes a URL that specifies the behaviour of this scalar.",
      locations: [_directiveLocation.DirectiveLocation.SCALAR],
      args: {
        url: {
          type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
          description: "The URL that specifies the behaviour of this scalar."
        }
      }
    });
    exports.GraphQLSpecifiedByDirective = GraphQLSpecifiedByDirective;
    var specifiedDirectives = Object.freeze([GraphQLIncludeDirective2, GraphQLSkipDirective2, GraphQLDeprecatedDirective2, GraphQLSpecifiedByDirective]);
    exports.specifiedDirectives = specifiedDirectives;
    function isSpecifiedDirective2(directive) {
      return specifiedDirectives.some(function(_ref2) {
        var name = _ref2.name;
        return name === directive.name;
      });
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/type/schema.js
var require_schema = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/type/schema.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isSchema = isSchema;
    exports.assertSchema = assertSchema;
    exports.GraphQLSchema = void 0;
    var _find = _interopRequireDefault(require_find());
    var _arrayFrom3 = _interopRequireDefault(require_arrayFrom());
    var _objectValues5 = _interopRequireDefault(require_objectValues());
    var _symbols = require_symbols();
    var _inspect = _interopRequireDefault(require_inspect());
    var _toObjMap = _interopRequireDefault(require_toObjMap());
    var _devAssert = _interopRequireDefault(require_devAssert());
    var _instanceOf = _interopRequireDefault(require_instanceOf());
    var _isObjectLike = _interopRequireDefault(require_isObjectLike());
    var _introspection = require_introspection();
    var _directives = require_directives();
    var _definition = require_definition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function isSchema(schema) {
      return (0, _instanceOf.default)(schema, GraphQLSchema3);
    }
    function assertSchema(schema) {
      if (!isSchema(schema)) {
        throw new Error("Expected ".concat((0, _inspect.default)(schema), " to be a GraphQL schema."));
      }
      return schema;
    }
    var GraphQLSchema3 = /* @__PURE__ */ function() {
      function GraphQLSchema4(config) {
        var _config$directives;
        this.__validationErrors = config.assumeValid === true ? [] : void 0;
        (0, _isObjectLike.default)(config) || (0, _devAssert.default)(0, "Must provide configuration object.");
        !config.types || Array.isArray(config.types) || (0, _devAssert.default)(0, '"types" must be Array if provided but got: '.concat((0, _inspect.default)(config.types), "."));
        !config.directives || Array.isArray(config.directives) || (0, _devAssert.default)(0, '"directives" must be Array if provided but got: ' + "".concat((0, _inspect.default)(config.directives), "."));
        this.description = config.description;
        this.extensions = config.extensions && (0, _toObjMap.default)(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = config.extensionASTNodes;
        this._queryType = config.query;
        this._mutationType = config.mutation;
        this._subscriptionType = config.subscription;
        this._directives = (_config$directives = config.directives) !== null && _config$directives !== void 0 ? _config$directives : _directives.specifiedDirectives;
        var allReferencedTypes = new Set(config.types);
        if (config.types != null) {
          for (var _i2 = 0, _config$types2 = config.types; _i2 < _config$types2.length; _i2++) {
            var type = _config$types2[_i2];
            allReferencedTypes.delete(type);
            collectReferencedTypes(type, allReferencedTypes);
          }
        }
        if (this._queryType != null) {
          collectReferencedTypes(this._queryType, allReferencedTypes);
        }
        if (this._mutationType != null) {
          collectReferencedTypes(this._mutationType, allReferencedTypes);
        }
        if (this._subscriptionType != null) {
          collectReferencedTypes(this._subscriptionType, allReferencedTypes);
        }
        for (var _i4 = 0, _this$_directives2 = this._directives; _i4 < _this$_directives2.length; _i4++) {
          var directive = _this$_directives2[_i4];
          if ((0, _directives.isDirective)(directive)) {
            for (var _i6 = 0, _directive$args2 = directive.args; _i6 < _directive$args2.length; _i6++) {
              var arg = _directive$args2[_i6];
              collectReferencedTypes(arg.type, allReferencedTypes);
            }
          }
        }
        collectReferencedTypes(_introspection.__Schema, allReferencedTypes);
        this._typeMap = Object.create(null);
        this._subTypeMap = Object.create(null);
        this._implementationsMap = Object.create(null);
        for (var _i8 = 0, _arrayFrom2 = (0, _arrayFrom3.default)(allReferencedTypes); _i8 < _arrayFrom2.length; _i8++) {
          var namedType = _arrayFrom2[_i8];
          if (namedType == null) {
            continue;
          }
          var typeName = namedType.name;
          typeName || (0, _devAssert.default)(0, "One of the provided types for building the Schema is missing a name.");
          if (this._typeMap[typeName] !== void 0) {
            throw new Error('Schema must contain uniquely named types but contains multiple types named "'.concat(typeName, '".'));
          }
          this._typeMap[typeName] = namedType;
          if ((0, _definition.isInterfaceType)(namedType)) {
            for (var _i10 = 0, _namedType$getInterfa2 = namedType.getInterfaces(); _i10 < _namedType$getInterfa2.length; _i10++) {
              var iface = _namedType$getInterfa2[_i10];
              if ((0, _definition.isInterfaceType)(iface)) {
                var implementations = this._implementationsMap[iface.name];
                if (implementations === void 0) {
                  implementations = this._implementationsMap[iface.name] = {
                    objects: [],
                    interfaces: []
                  };
                }
                implementations.interfaces.push(namedType);
              }
            }
          } else if ((0, _definition.isObjectType)(namedType)) {
            for (var _i12 = 0, _namedType$getInterfa4 = namedType.getInterfaces(); _i12 < _namedType$getInterfa4.length; _i12++) {
              var _iface = _namedType$getInterfa4[_i12];
              if ((0, _definition.isInterfaceType)(_iface)) {
                var _implementations = this._implementationsMap[_iface.name];
                if (_implementations === void 0) {
                  _implementations = this._implementationsMap[_iface.name] = {
                    objects: [],
                    interfaces: []
                  };
                }
                _implementations.objects.push(namedType);
              }
            }
          }
        }
      }
      var _proto = GraphQLSchema4.prototype;
      _proto.getQueryType = function getQueryType() {
        return this._queryType;
      };
      _proto.getMutationType = function getMutationType() {
        return this._mutationType;
      };
      _proto.getSubscriptionType = function getSubscriptionType() {
        return this._subscriptionType;
      };
      _proto.getTypeMap = function getTypeMap() {
        return this._typeMap;
      };
      _proto.getType = function getType(name) {
        return this.getTypeMap()[name];
      };
      _proto.getPossibleTypes = function getPossibleTypes(abstractType) {
        return (0, _definition.isUnionType)(abstractType) ? abstractType.getTypes() : this.getImplementations(abstractType).objects;
      };
      _proto.getImplementations = function getImplementations(interfaceType) {
        var implementations = this._implementationsMap[interfaceType.name];
        return implementations !== null && implementations !== void 0 ? implementations : {
          objects: [],
          interfaces: []
        };
      };
      _proto.isPossibleType = function isPossibleType(abstractType, possibleType) {
        return this.isSubType(abstractType, possibleType);
      };
      _proto.isSubType = function isSubType(abstractType, maybeSubType) {
        var map = this._subTypeMap[abstractType.name];
        if (map === void 0) {
          map = Object.create(null);
          if ((0, _definition.isUnionType)(abstractType)) {
            for (var _i14 = 0, _abstractType$getType2 = abstractType.getTypes(); _i14 < _abstractType$getType2.length; _i14++) {
              var type = _abstractType$getType2[_i14];
              map[type.name] = true;
            }
          } else {
            var implementations = this.getImplementations(abstractType);
            for (var _i16 = 0, _implementations$obje2 = implementations.objects; _i16 < _implementations$obje2.length; _i16++) {
              var _type = _implementations$obje2[_i16];
              map[_type.name] = true;
            }
            for (var _i18 = 0, _implementations$inte2 = implementations.interfaces; _i18 < _implementations$inte2.length; _i18++) {
              var _type2 = _implementations$inte2[_i18];
              map[_type2.name] = true;
            }
          }
          this._subTypeMap[abstractType.name] = map;
        }
        return map[maybeSubType.name] !== void 0;
      };
      _proto.getDirectives = function getDirectives() {
        return this._directives;
      };
      _proto.getDirective = function getDirective(name) {
        return (0, _find.default)(this.getDirectives(), function(directive) {
          return directive.name === name;
        });
      };
      _proto.toConfig = function toConfig() {
        var _this$extensionASTNod;
        return {
          description: this.description,
          query: this.getQueryType(),
          mutation: this.getMutationType(),
          subscription: this.getSubscriptionType(),
          types: (0, _objectValues5.default)(this.getTypeMap()),
          directives: this.getDirectives().slice(),
          extensions: this.extensions,
          astNode: this.astNode,
          extensionASTNodes: (_this$extensionASTNod = this.extensionASTNodes) !== null && _this$extensionASTNod !== void 0 ? _this$extensionASTNod : [],
          assumeValid: this.__validationErrors !== void 0
        };
      };
      _createClass(GraphQLSchema4, [{
        key: _symbols.SYMBOL_TO_STRING_TAG,
        get: function get() {
          return "GraphQLSchema";
        }
      }]);
      return GraphQLSchema4;
    }();
    exports.GraphQLSchema = GraphQLSchema3;
    function collectReferencedTypes(type, typeSet) {
      var namedType = (0, _definition.getNamedType)(type);
      if (!typeSet.has(namedType)) {
        typeSet.add(namedType);
        if ((0, _definition.isUnionType)(namedType)) {
          for (var _i20 = 0, _namedType$getTypes2 = namedType.getTypes(); _i20 < _namedType$getTypes2.length; _i20++) {
            var memberType = _namedType$getTypes2[_i20];
            collectReferencedTypes(memberType, typeSet);
          }
        } else if ((0, _definition.isObjectType)(namedType) || (0, _definition.isInterfaceType)(namedType)) {
          for (var _i22 = 0, _namedType$getInterfa6 = namedType.getInterfaces(); _i22 < _namedType$getInterfa6.length; _i22++) {
            var interfaceType = _namedType$getInterfa6[_i22];
            collectReferencedTypes(interfaceType, typeSet);
          }
          for (var _i24 = 0, _objectValues2 = (0, _objectValues5.default)(namedType.getFields()); _i24 < _objectValues2.length; _i24++) {
            var field = _objectValues2[_i24];
            collectReferencedTypes(field.type, typeSet);
            for (var _i26 = 0, _field$args2 = field.args; _i26 < _field$args2.length; _i26++) {
              var arg = _field$args2[_i26];
              collectReferencedTypes(arg.type, typeSet);
            }
          }
        } else if ((0, _definition.isInputObjectType)(namedType)) {
          for (var _i28 = 0, _objectValues4 = (0, _objectValues5.default)(namedType.getFields()); _i28 < _objectValues4.length; _i28++) {
            var _field = _objectValues4[_i28];
            collectReferencedTypes(_field.type, typeSet);
          }
        }
      }
      return typeSet;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/type/validate.js
var require_validate = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/type/validate.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.validateSchema = validateSchema;
    exports.assertValidSchema = assertValidSchema;
    var _find = _interopRequireDefault(require_find());
    var _objectValues5 = _interopRequireDefault(require_objectValues());
    var _inspect = _interopRequireDefault(require_inspect());
    var _GraphQLError = require_GraphQLError();
    var _locatedError = require_locatedError();
    var _assertValidName = require_assertValidName();
    var _typeComparators = require_typeComparators();
    var _schema = require_schema();
    var _introspection = require_introspection();
    var _directives = require_directives();
    var _definition = require_definition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function validateSchema(schema) {
      (0, _schema.assertSchema)(schema);
      if (schema.__validationErrors) {
        return schema.__validationErrors;
      }
      var context = new SchemaValidationContext(schema);
      validateRootTypes(context);
      validateDirectives(context);
      validateTypes(context);
      var errors = context.getErrors();
      schema.__validationErrors = errors;
      return errors;
    }
    function assertValidSchema(schema) {
      var errors = validateSchema(schema);
      if (errors.length !== 0) {
        throw new Error(errors.map(function(error) {
          return error.message;
        }).join("\n\n"));
      }
    }
    var SchemaValidationContext = /* @__PURE__ */ function() {
      function SchemaValidationContext2(schema) {
        this._errors = [];
        this.schema = schema;
      }
      var _proto = SchemaValidationContext2.prototype;
      _proto.reportError = function reportError(message, nodes) {
        var _nodes = Array.isArray(nodes) ? nodes.filter(Boolean) : nodes;
        this.addError(new _GraphQLError.GraphQLError(message, _nodes));
      };
      _proto.addError = function addError(error) {
        this._errors.push(error);
      };
      _proto.getErrors = function getErrors() {
        return this._errors;
      };
      return SchemaValidationContext2;
    }();
    function validateRootTypes(context) {
      var schema = context.schema;
      var queryType = schema.getQueryType();
      if (!queryType) {
        context.reportError("Query root type must be provided.", schema.astNode);
      } else if (!(0, _definition.isObjectType)(queryType)) {
        var _getOperationTypeNode;
        context.reportError("Query root type must be Object type, it cannot be ".concat((0, _inspect.default)(queryType), "."), (_getOperationTypeNode = getOperationTypeNode(schema, "query")) !== null && _getOperationTypeNode !== void 0 ? _getOperationTypeNode : queryType.astNode);
      }
      var mutationType = schema.getMutationType();
      if (mutationType && !(0, _definition.isObjectType)(mutationType)) {
        var _getOperationTypeNode2;
        context.reportError("Mutation root type must be Object type if provided, it cannot be " + "".concat((0, _inspect.default)(mutationType), "."), (_getOperationTypeNode2 = getOperationTypeNode(schema, "mutation")) !== null && _getOperationTypeNode2 !== void 0 ? _getOperationTypeNode2 : mutationType.astNode);
      }
      var subscriptionType = schema.getSubscriptionType();
      if (subscriptionType && !(0, _definition.isObjectType)(subscriptionType)) {
        var _getOperationTypeNode3;
        context.reportError("Subscription root type must be Object type if provided, it cannot be " + "".concat((0, _inspect.default)(subscriptionType), "."), (_getOperationTypeNode3 = getOperationTypeNode(schema, "subscription")) !== null && _getOperationTypeNode3 !== void 0 ? _getOperationTypeNode3 : subscriptionType.astNode);
      }
    }
    function getOperationTypeNode(schema, operation) {
      var operationNodes = getAllSubNodes(schema, function(node2) {
        return node2.operationTypes;
      });
      for (var _i2 = 0; _i2 < operationNodes.length; _i2++) {
        var node = operationNodes[_i2];
        if (node.operation === operation) {
          return node.type;
        }
      }
      return void 0;
    }
    function validateDirectives(context) {
      for (var _i4 = 0, _context$schema$getDi2 = context.schema.getDirectives(); _i4 < _context$schema$getDi2.length; _i4++) {
        var directive = _context$schema$getDi2[_i4];
        if (!(0, _directives.isDirective)(directive)) {
          context.reportError("Expected directive but got: ".concat((0, _inspect.default)(directive), "."), directive === null || directive === void 0 ? void 0 : directive.astNode);
          continue;
        }
        validateName(context, directive);
        for (var _i6 = 0, _directive$args2 = directive.args; _i6 < _directive$args2.length; _i6++) {
          var arg = _directive$args2[_i6];
          validateName(context, arg);
          if (!(0, _definition.isInputType)(arg.type)) {
            context.reportError("The type of @".concat(directive.name, "(").concat(arg.name, ":) must be Input Type ") + "but got: ".concat((0, _inspect.default)(arg.type), "."), arg.astNode);
          }
          if ((0, _definition.isRequiredArgument)(arg) && arg.deprecationReason != null) {
            var _arg$astNode;
            context.reportError("Required argument @".concat(directive.name, "(").concat(arg.name, ":) cannot be deprecated."), [
              getDeprecatedDirectiveNode(arg.astNode),
              (_arg$astNode = arg.astNode) === null || _arg$astNode === void 0 ? void 0 : _arg$astNode.type
            ]);
          }
        }
      }
    }
    function validateName(context, node) {
      var error = (0, _assertValidName.isValidNameError)(node.name);
      if (error) {
        context.addError((0, _locatedError.locatedError)(error, node.astNode));
      }
    }
    function validateTypes(context) {
      var validateInputObjectCircularRefs = createInputObjectCircularRefsValidator(context);
      var typeMap = context.schema.getTypeMap();
      for (var _i8 = 0, _objectValues2 = (0, _objectValues5.default)(typeMap); _i8 < _objectValues2.length; _i8++) {
        var type = _objectValues2[_i8];
        if (!(0, _definition.isNamedType)(type)) {
          context.reportError("Expected GraphQL named type but got: ".concat((0, _inspect.default)(type), "."), type.astNode);
          continue;
        }
        if (!(0, _introspection.isIntrospectionType)(type)) {
          validateName(context, type);
        }
        if ((0, _definition.isObjectType)(type)) {
          validateFields(context, type);
          validateInterfaces(context, type);
        } else if ((0, _definition.isInterfaceType)(type)) {
          validateFields(context, type);
          validateInterfaces(context, type);
        } else if ((0, _definition.isUnionType)(type)) {
          validateUnionMembers(context, type);
        } else if ((0, _definition.isEnumType)(type)) {
          validateEnumValues(context, type);
        } else if ((0, _definition.isInputObjectType)(type)) {
          validateInputFields(context, type);
          validateInputObjectCircularRefs(type);
        }
      }
    }
    function validateFields(context, type) {
      var fields = (0, _objectValues5.default)(type.getFields());
      if (fields.length === 0) {
        context.reportError("Type ".concat(type.name, " must define one or more fields."), getAllNodes(type));
      }
      for (var _i10 = 0; _i10 < fields.length; _i10++) {
        var field = fields[_i10];
        validateName(context, field);
        if (!(0, _definition.isOutputType)(field.type)) {
          var _field$astNode;
          context.reportError("The type of ".concat(type.name, ".").concat(field.name, " must be Output Type ") + "but got: ".concat((0, _inspect.default)(field.type), "."), (_field$astNode = field.astNode) === null || _field$astNode === void 0 ? void 0 : _field$astNode.type);
        }
        for (var _i12 = 0, _field$args2 = field.args; _i12 < _field$args2.length; _i12++) {
          var arg = _field$args2[_i12];
          var argName = arg.name;
          validateName(context, arg);
          if (!(0, _definition.isInputType)(arg.type)) {
            var _arg$astNode2;
            context.reportError("The type of ".concat(type.name, ".").concat(field.name, "(").concat(argName, ":) must be Input ") + "Type but got: ".concat((0, _inspect.default)(arg.type), "."), (_arg$astNode2 = arg.astNode) === null || _arg$astNode2 === void 0 ? void 0 : _arg$astNode2.type);
          }
          if ((0, _definition.isRequiredArgument)(arg) && arg.deprecationReason != null) {
            var _arg$astNode3;
            context.reportError("Required argument ".concat(type.name, ".").concat(field.name, "(").concat(argName, ":) cannot be deprecated."), [
              getDeprecatedDirectiveNode(arg.astNode),
              (_arg$astNode3 = arg.astNode) === null || _arg$astNode3 === void 0 ? void 0 : _arg$astNode3.type
            ]);
          }
        }
      }
    }
    function validateInterfaces(context, type) {
      var ifaceTypeNames = Object.create(null);
      for (var _i14 = 0, _type$getInterfaces2 = type.getInterfaces(); _i14 < _type$getInterfaces2.length; _i14++) {
        var iface = _type$getInterfaces2[_i14];
        if (!(0, _definition.isInterfaceType)(iface)) {
          context.reportError("Type ".concat((0, _inspect.default)(type), " must only implement Interface types, ") + "it cannot implement ".concat((0, _inspect.default)(iface), "."), getAllImplementsInterfaceNodes(type, iface));
          continue;
        }
        if (type === iface) {
          context.reportError("Type ".concat(type.name, " cannot implement itself because it would create a circular reference."), getAllImplementsInterfaceNodes(type, iface));
          continue;
        }
        if (ifaceTypeNames[iface.name]) {
          context.reportError("Type ".concat(type.name, " can only implement ").concat(iface.name, " once."), getAllImplementsInterfaceNodes(type, iface));
          continue;
        }
        ifaceTypeNames[iface.name] = true;
        validateTypeImplementsAncestors(context, type, iface);
        validateTypeImplementsInterface(context, type, iface);
      }
    }
    function validateTypeImplementsInterface(context, type, iface) {
      var typeFieldMap = type.getFields();
      for (var _i16 = 0, _objectValues4 = (0, _objectValues5.default)(iface.getFields()); _i16 < _objectValues4.length; _i16++) {
        var ifaceField = _objectValues4[_i16];
        var fieldName = ifaceField.name;
        var typeField = typeFieldMap[fieldName];
        if (!typeField) {
          context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expected but ").concat(type.name, " does not provide it."), [ifaceField.astNode].concat(getAllNodes(type)));
          continue;
        }
        if (!(0, _typeComparators.isTypeSubTypeOf)(context.schema, typeField.type, ifaceField.type)) {
          var _ifaceField$astNode, _typeField$astNode;
          context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expects type ") + "".concat((0, _inspect.default)(ifaceField.type), " but ").concat(type.name, ".").concat(fieldName, " ") + "is type ".concat((0, _inspect.default)(typeField.type), "."), [
            (_ifaceField$astNode = ifaceField.astNode) === null || _ifaceField$astNode === void 0 ? void 0 : _ifaceField$astNode.type,
            (_typeField$astNode = typeField.astNode) === null || _typeField$astNode === void 0 ? void 0 : _typeField$astNode.type
          ]);
        }
        var _loop = function _loop3(_i182, _ifaceField$args22) {
          var ifaceArg = _ifaceField$args22[_i182];
          var argName = ifaceArg.name;
          var typeArg = (0, _find.default)(typeField.args, function(arg) {
            return arg.name === argName;
          });
          if (!typeArg) {
            context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) expected but ").concat(type.name, ".").concat(fieldName, " does not provide it."), [ifaceArg.astNode, typeField.astNode]);
            return "continue";
          }
          if (!(0, _typeComparators.isEqualType)(ifaceArg.type, typeArg.type)) {
            var _ifaceArg$astNode, _typeArg$astNode;
            context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) ") + "expects type ".concat((0, _inspect.default)(ifaceArg.type), " but ") + "".concat(type.name, ".").concat(fieldName, "(").concat(argName, ":) is type ") + "".concat((0, _inspect.default)(typeArg.type), "."), [
              (_ifaceArg$astNode = ifaceArg.astNode) === null || _ifaceArg$astNode === void 0 ? void 0 : _ifaceArg$astNode.type,
              (_typeArg$astNode = typeArg.astNode) === null || _typeArg$astNode === void 0 ? void 0 : _typeArg$astNode.type
            ]);
          }
        };
        for (var _i18 = 0, _ifaceField$args2 = ifaceField.args; _i18 < _ifaceField$args2.length; _i18++) {
          var _ret = _loop(_i18, _ifaceField$args2);
          if (_ret === "continue")
            continue;
        }
        var _loop2 = function _loop22(_i202, _typeField$args22) {
          var typeArg = _typeField$args22[_i202];
          var argName = typeArg.name;
          var ifaceArg = (0, _find.default)(ifaceField.args, function(arg) {
            return arg.name === argName;
          });
          if (!ifaceArg && (0, _definition.isRequiredArgument)(typeArg)) {
            context.reportError("Object field ".concat(type.name, ".").concat(fieldName, " includes required argument ").concat(argName, " that is missing from the Interface field ").concat(iface.name, ".").concat(fieldName, "."), [typeArg.astNode, ifaceField.astNode]);
          }
        };
        for (var _i20 = 0, _typeField$args2 = typeField.args; _i20 < _typeField$args2.length; _i20++) {
          _loop2(_i20, _typeField$args2);
        }
      }
    }
    function validateTypeImplementsAncestors(context, type, iface) {
      var ifaceInterfaces = type.getInterfaces();
      for (var _i22 = 0, _iface$getInterfaces2 = iface.getInterfaces(); _i22 < _iface$getInterfaces2.length; _i22++) {
        var transitive = _iface$getInterfaces2[_i22];
        if (ifaceInterfaces.indexOf(transitive) === -1) {
          context.reportError(transitive === type ? "Type ".concat(type.name, " cannot implement ").concat(iface.name, " because it would create a circular reference.") : "Type ".concat(type.name, " must implement ").concat(transitive.name, " because it is implemented by ").concat(iface.name, "."), [].concat(getAllImplementsInterfaceNodes(iface, transitive), getAllImplementsInterfaceNodes(type, iface)));
        }
      }
    }
    function validateUnionMembers(context, union) {
      var memberTypes = union.getTypes();
      if (memberTypes.length === 0) {
        context.reportError("Union type ".concat(union.name, " must define one or more member types."), getAllNodes(union));
      }
      var includedTypeNames = Object.create(null);
      for (var _i24 = 0; _i24 < memberTypes.length; _i24++) {
        var memberType = memberTypes[_i24];
        if (includedTypeNames[memberType.name]) {
          context.reportError("Union type ".concat(union.name, " can only include type ").concat(memberType.name, " once."), getUnionMemberTypeNodes(union, memberType.name));
          continue;
        }
        includedTypeNames[memberType.name] = true;
        if (!(0, _definition.isObjectType)(memberType)) {
          context.reportError("Union type ".concat(union.name, " can only include Object types, ") + "it cannot include ".concat((0, _inspect.default)(memberType), "."), getUnionMemberTypeNodes(union, String(memberType)));
        }
      }
    }
    function validateEnumValues(context, enumType) {
      var enumValues = enumType.getValues();
      if (enumValues.length === 0) {
        context.reportError("Enum type ".concat(enumType.name, " must define one or more values."), getAllNodes(enumType));
      }
      for (var _i26 = 0; _i26 < enumValues.length; _i26++) {
        var enumValue = enumValues[_i26];
        var valueName = enumValue.name;
        validateName(context, enumValue);
        if (valueName === "true" || valueName === "false" || valueName === "null") {
          context.reportError("Enum type ".concat(enumType.name, " cannot include value: ").concat(valueName, "."), enumValue.astNode);
        }
      }
    }
    function validateInputFields(context, inputObj) {
      var fields = (0, _objectValues5.default)(inputObj.getFields());
      if (fields.length === 0) {
        context.reportError("Input Object type ".concat(inputObj.name, " must define one or more fields."), getAllNodes(inputObj));
      }
      for (var _i28 = 0; _i28 < fields.length; _i28++) {
        var field = fields[_i28];
        validateName(context, field);
        if (!(0, _definition.isInputType)(field.type)) {
          var _field$astNode2;
          context.reportError("The type of ".concat(inputObj.name, ".").concat(field.name, " must be Input Type ") + "but got: ".concat((0, _inspect.default)(field.type), "."), (_field$astNode2 = field.astNode) === null || _field$astNode2 === void 0 ? void 0 : _field$astNode2.type);
        }
        if ((0, _definition.isRequiredInputField)(field) && field.deprecationReason != null) {
          var _field$astNode3;
          context.reportError("Required input field ".concat(inputObj.name, ".").concat(field.name, " cannot be deprecated."), [
            getDeprecatedDirectiveNode(field.astNode),
            (_field$astNode3 = field.astNode) === null || _field$astNode3 === void 0 ? void 0 : _field$astNode3.type
          ]);
        }
      }
    }
    function createInputObjectCircularRefsValidator(context) {
      var visitedTypes = Object.create(null);
      var fieldPath = [];
      var fieldPathIndexByTypeName = Object.create(null);
      return detectCycleRecursive;
      function detectCycleRecursive(inputObj) {
        if (visitedTypes[inputObj.name]) {
          return;
        }
        visitedTypes[inputObj.name] = true;
        fieldPathIndexByTypeName[inputObj.name] = fieldPath.length;
        var fields = (0, _objectValues5.default)(inputObj.getFields());
        for (var _i30 = 0; _i30 < fields.length; _i30++) {
          var field = fields[_i30];
          if ((0, _definition.isNonNullType)(field.type) && (0, _definition.isInputObjectType)(field.type.ofType)) {
            var fieldType = field.type.ofType;
            var cycleIndex = fieldPathIndexByTypeName[fieldType.name];
            fieldPath.push(field);
            if (cycleIndex === void 0) {
              detectCycleRecursive(fieldType);
            } else {
              var cyclePath = fieldPath.slice(cycleIndex);
              var pathStr = cyclePath.map(function(fieldObj) {
                return fieldObj.name;
              }).join(".");
              context.reportError('Cannot reference Input Object "'.concat(fieldType.name, '" within itself through a series of non-null fields: "').concat(pathStr, '".'), cyclePath.map(function(fieldObj) {
                return fieldObj.astNode;
              }));
            }
            fieldPath.pop();
          }
        }
        fieldPathIndexByTypeName[inputObj.name] = void 0;
      }
    }
    function getAllNodes(object) {
      var astNode = object.astNode, extensionASTNodes = object.extensionASTNodes;
      return astNode ? extensionASTNodes ? [astNode].concat(extensionASTNodes) : [astNode] : extensionASTNodes !== null && extensionASTNodes !== void 0 ? extensionASTNodes : [];
    }
    function getAllSubNodes(object, getter) {
      var subNodes = [];
      for (var _i32 = 0, _getAllNodes2 = getAllNodes(object); _i32 < _getAllNodes2.length; _i32++) {
        var _getter;
        var node = _getAllNodes2[_i32];
        subNodes = subNodes.concat((_getter = getter(node)) !== null && _getter !== void 0 ? _getter : []);
      }
      return subNodes;
    }
    function getAllImplementsInterfaceNodes(type, iface) {
      return getAllSubNodes(type, function(typeNode) {
        return typeNode.interfaces;
      }).filter(function(ifaceNode) {
        return ifaceNode.name.value === iface.name;
      });
    }
    function getUnionMemberTypeNodes(union, typeName) {
      return getAllSubNodes(union, function(unionNode) {
        return unionNode.types;
      }).filter(function(typeNode) {
        return typeNode.name.value === typeName;
      });
    }
    function getDeprecatedDirectiveNode(definitionNode) {
      var _definitionNode$direc;
      return definitionNode === null || definitionNode === void 0 ? void 0 : (_definitionNode$direc = definitionNode.directives) === null || _definitionNode$direc === void 0 ? void 0 : _definitionNode$direc.find(function(node) {
        return node.name.value === _directives.GraphQLDeprecatedDirective.name;
      });
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/typeFromAST.js
var require_typeFromAST = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/typeFromAST.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.typeFromAST = typeFromAST2;
    var _inspect = _interopRequireDefault(require_inspect());
    var _invariant = _interopRequireDefault(require_invariant());
    var _kinds = require_kinds();
    var _definition = require_definition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function typeFromAST2(schema, typeNode) {
      var innerType;
      if (typeNode.kind === _kinds.Kind.LIST_TYPE) {
        innerType = typeFromAST2(schema, typeNode.type);
        return innerType && new _definition.GraphQLList(innerType);
      }
      if (typeNode.kind === _kinds.Kind.NON_NULL_TYPE) {
        innerType = typeFromAST2(schema, typeNode.type);
        return innerType && new _definition.GraphQLNonNull(innerType);
      }
      if (typeNode.kind === _kinds.Kind.NAMED_TYPE) {
        return schema.getType(typeNode.name.value);
      }
      (0, _invariant.default)(0, "Unexpected type node: " + (0, _inspect.default)(typeNode));
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/TypeInfo.js
var require_TypeInfo = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/TypeInfo.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.visitWithTypeInfo = visitWithTypeInfo;
    exports.TypeInfo = void 0;
    var _find = _interopRequireDefault(require_find());
    var _kinds = require_kinds();
    var _ast = require_ast();
    var _visitor = require_visitor();
    var _definition = require_definition();
    var _introspection = require_introspection();
    var _typeFromAST = require_typeFromAST();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var TypeInfo = /* @__PURE__ */ function() {
      function TypeInfo2(schema, getFieldDefFn, initialType) {
        this._schema = schema;
        this._typeStack = [];
        this._parentTypeStack = [];
        this._inputTypeStack = [];
        this._fieldDefStack = [];
        this._defaultValueStack = [];
        this._directive = null;
        this._argument = null;
        this._enumValue = null;
        this._getFieldDef = getFieldDefFn !== null && getFieldDefFn !== void 0 ? getFieldDefFn : getFieldDef;
        if (initialType) {
          if ((0, _definition.isInputType)(initialType)) {
            this._inputTypeStack.push(initialType);
          }
          if ((0, _definition.isCompositeType)(initialType)) {
            this._parentTypeStack.push(initialType);
          }
          if ((0, _definition.isOutputType)(initialType)) {
            this._typeStack.push(initialType);
          }
        }
      }
      var _proto = TypeInfo2.prototype;
      _proto.getType = function getType() {
        if (this._typeStack.length > 0) {
          return this._typeStack[this._typeStack.length - 1];
        }
      };
      _proto.getParentType = function getParentType() {
        if (this._parentTypeStack.length > 0) {
          return this._parentTypeStack[this._parentTypeStack.length - 1];
        }
      };
      _proto.getInputType = function getInputType() {
        if (this._inputTypeStack.length > 0) {
          return this._inputTypeStack[this._inputTypeStack.length - 1];
        }
      };
      _proto.getParentInputType = function getParentInputType() {
        if (this._inputTypeStack.length > 1) {
          return this._inputTypeStack[this._inputTypeStack.length - 2];
        }
      };
      _proto.getFieldDef = function getFieldDef2() {
        if (this._fieldDefStack.length > 0) {
          return this._fieldDefStack[this._fieldDefStack.length - 1];
        }
      };
      _proto.getDefaultValue = function getDefaultValue() {
        if (this._defaultValueStack.length > 0) {
          return this._defaultValueStack[this._defaultValueStack.length - 1];
        }
      };
      _proto.getDirective = function getDirective() {
        return this._directive;
      };
      _proto.getArgument = function getArgument() {
        return this._argument;
      };
      _proto.getEnumValue = function getEnumValue() {
        return this._enumValue;
      };
      _proto.enter = function enter(node) {
        var schema = this._schema;
        switch (node.kind) {
          case _kinds.Kind.SELECTION_SET: {
            var namedType = (0, _definition.getNamedType)(this.getType());
            this._parentTypeStack.push((0, _definition.isCompositeType)(namedType) ? namedType : void 0);
            break;
          }
          case _kinds.Kind.FIELD: {
            var parentType = this.getParentType();
            var fieldDef;
            var fieldType;
            if (parentType) {
              fieldDef = this._getFieldDef(schema, parentType, node);
              if (fieldDef) {
                fieldType = fieldDef.type;
              }
            }
            this._fieldDefStack.push(fieldDef);
            this._typeStack.push((0, _definition.isOutputType)(fieldType) ? fieldType : void 0);
            break;
          }
          case _kinds.Kind.DIRECTIVE:
            this._directive = schema.getDirective(node.name.value);
            break;
          case _kinds.Kind.OPERATION_DEFINITION: {
            var type;
            switch (node.operation) {
              case "query":
                type = schema.getQueryType();
                break;
              case "mutation":
                type = schema.getMutationType();
                break;
              case "subscription":
                type = schema.getSubscriptionType();
                break;
            }
            this._typeStack.push((0, _definition.isObjectType)(type) ? type : void 0);
            break;
          }
          case _kinds.Kind.INLINE_FRAGMENT:
          case _kinds.Kind.FRAGMENT_DEFINITION: {
            var typeConditionAST = node.typeCondition;
            var outputType = typeConditionAST ? (0, _typeFromAST.typeFromAST)(schema, typeConditionAST) : (0, _definition.getNamedType)(this.getType());
            this._typeStack.push((0, _definition.isOutputType)(outputType) ? outputType : void 0);
            break;
          }
          case _kinds.Kind.VARIABLE_DEFINITION: {
            var inputType = (0, _typeFromAST.typeFromAST)(schema, node.type);
            this._inputTypeStack.push((0, _definition.isInputType)(inputType) ? inputType : void 0);
            break;
          }
          case _kinds.Kind.ARGUMENT: {
            var _this$getDirective;
            var argDef;
            var argType;
            var fieldOrDirective = (_this$getDirective = this.getDirective()) !== null && _this$getDirective !== void 0 ? _this$getDirective : this.getFieldDef();
            if (fieldOrDirective) {
              argDef = (0, _find.default)(fieldOrDirective.args, function(arg) {
                return arg.name === node.name.value;
              });
              if (argDef) {
                argType = argDef.type;
              }
            }
            this._argument = argDef;
            this._defaultValueStack.push(argDef ? argDef.defaultValue : void 0);
            this._inputTypeStack.push((0, _definition.isInputType)(argType) ? argType : void 0);
            break;
          }
          case _kinds.Kind.LIST: {
            var listType = (0, _definition.getNullableType)(this.getInputType());
            var itemType = (0, _definition.isListType)(listType) ? listType.ofType : listType;
            this._defaultValueStack.push(void 0);
            this._inputTypeStack.push((0, _definition.isInputType)(itemType) ? itemType : void 0);
            break;
          }
          case _kinds.Kind.OBJECT_FIELD: {
            var objectType = (0, _definition.getNamedType)(this.getInputType());
            var inputFieldType;
            var inputField;
            if ((0, _definition.isInputObjectType)(objectType)) {
              inputField = objectType.getFields()[node.name.value];
              if (inputField) {
                inputFieldType = inputField.type;
              }
            }
            this._defaultValueStack.push(inputField ? inputField.defaultValue : void 0);
            this._inputTypeStack.push((0, _definition.isInputType)(inputFieldType) ? inputFieldType : void 0);
            break;
          }
          case _kinds.Kind.ENUM: {
            var enumType = (0, _definition.getNamedType)(this.getInputType());
            var enumValue;
            if ((0, _definition.isEnumType)(enumType)) {
              enumValue = enumType.getValue(node.value);
            }
            this._enumValue = enumValue;
            break;
          }
        }
      };
      _proto.leave = function leave(node) {
        switch (node.kind) {
          case _kinds.Kind.SELECTION_SET:
            this._parentTypeStack.pop();
            break;
          case _kinds.Kind.FIELD:
            this._fieldDefStack.pop();
            this._typeStack.pop();
            break;
          case _kinds.Kind.DIRECTIVE:
            this._directive = null;
            break;
          case _kinds.Kind.OPERATION_DEFINITION:
          case _kinds.Kind.INLINE_FRAGMENT:
          case _kinds.Kind.FRAGMENT_DEFINITION:
            this._typeStack.pop();
            break;
          case _kinds.Kind.VARIABLE_DEFINITION:
            this._inputTypeStack.pop();
            break;
          case _kinds.Kind.ARGUMENT:
            this._argument = null;
            this._defaultValueStack.pop();
            this._inputTypeStack.pop();
            break;
          case _kinds.Kind.LIST:
          case _kinds.Kind.OBJECT_FIELD:
            this._defaultValueStack.pop();
            this._inputTypeStack.pop();
            break;
          case _kinds.Kind.ENUM:
            this._enumValue = null;
            break;
        }
      };
      return TypeInfo2;
    }();
    exports.TypeInfo = TypeInfo;
    function getFieldDef(schema, parentType, fieldNode) {
      var name = fieldNode.name.value;
      if (name === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
        return _introspection.SchemaMetaFieldDef;
      }
      if (name === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
        return _introspection.TypeMetaFieldDef;
      }
      if (name === _introspection.TypeNameMetaFieldDef.name && (0, _definition.isCompositeType)(parentType)) {
        return _introspection.TypeNameMetaFieldDef;
      }
      if ((0, _definition.isObjectType)(parentType) || (0, _definition.isInterfaceType)(parentType)) {
        return parentType.getFields()[name];
      }
    }
    function visitWithTypeInfo(typeInfo, visitor) {
      return {
        enter: function enter(node) {
          typeInfo.enter(node);
          var fn = (0, _visitor.getVisitFn)(visitor, node.kind, false);
          if (fn) {
            var result = fn.apply(visitor, arguments);
            if (result !== void 0) {
              typeInfo.leave(node);
              if ((0, _ast.isNode)(result)) {
                typeInfo.enter(result);
              }
            }
            return result;
          }
        },
        leave: function leave(node) {
          var fn = (0, _visitor.getVisitFn)(visitor, node.kind, true);
          var result;
          if (fn) {
            result = fn.apply(visitor, arguments);
          }
          typeInfo.leave(node);
          return result;
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/predicates.js
var require_predicates = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/predicates.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isDefinitionNode = isDefinitionNode;
    exports.isExecutableDefinitionNode = isExecutableDefinitionNode;
    exports.isSelectionNode = isSelectionNode;
    exports.isValueNode = isValueNode;
    exports.isTypeNode = isTypeNode;
    exports.isTypeSystemDefinitionNode = isTypeSystemDefinitionNode2;
    exports.isTypeDefinitionNode = isTypeDefinitionNode;
    exports.isTypeSystemExtensionNode = isTypeSystemExtensionNode;
    exports.isTypeExtensionNode = isTypeExtensionNode;
    var _kinds = require_kinds();
    function isDefinitionNode(node) {
      return isExecutableDefinitionNode(node) || isTypeSystemDefinitionNode2(node) || isTypeSystemExtensionNode(node);
    }
    function isExecutableDefinitionNode(node) {
      return node.kind === _kinds.Kind.OPERATION_DEFINITION || node.kind === _kinds.Kind.FRAGMENT_DEFINITION;
    }
    function isSelectionNode(node) {
      return node.kind === _kinds.Kind.FIELD || node.kind === _kinds.Kind.FRAGMENT_SPREAD || node.kind === _kinds.Kind.INLINE_FRAGMENT;
    }
    function isValueNode(node) {
      return node.kind === _kinds.Kind.VARIABLE || node.kind === _kinds.Kind.INT || node.kind === _kinds.Kind.FLOAT || node.kind === _kinds.Kind.STRING || node.kind === _kinds.Kind.BOOLEAN || node.kind === _kinds.Kind.NULL || node.kind === _kinds.Kind.ENUM || node.kind === _kinds.Kind.LIST || node.kind === _kinds.Kind.OBJECT;
    }
    function isTypeNode(node) {
      return node.kind === _kinds.Kind.NAMED_TYPE || node.kind === _kinds.Kind.LIST_TYPE || node.kind === _kinds.Kind.NON_NULL_TYPE;
    }
    function isTypeSystemDefinitionNode2(node) {
      return node.kind === _kinds.Kind.SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === _kinds.Kind.DIRECTIVE_DEFINITION;
    }
    function isTypeDefinitionNode(node) {
      return node.kind === _kinds.Kind.SCALAR_TYPE_DEFINITION || node.kind === _kinds.Kind.OBJECT_TYPE_DEFINITION || node.kind === _kinds.Kind.INTERFACE_TYPE_DEFINITION || node.kind === _kinds.Kind.UNION_TYPE_DEFINITION || node.kind === _kinds.Kind.ENUM_TYPE_DEFINITION || node.kind === _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION;
    }
    function isTypeSystemExtensionNode(node) {
      return node.kind === _kinds.Kind.SCHEMA_EXTENSION || isTypeExtensionNode(node);
    }
    function isTypeExtensionNode(node) {
      return node.kind === _kinds.Kind.SCALAR_TYPE_EXTENSION || node.kind === _kinds.Kind.OBJECT_TYPE_EXTENSION || node.kind === _kinds.Kind.INTERFACE_TYPE_EXTENSION || node.kind === _kinds.Kind.UNION_TYPE_EXTENSION || node.kind === _kinds.Kind.ENUM_TYPE_EXTENSION || node.kind === _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/ExecutableDefinitionsRule.js
var require_ExecutableDefinitionsRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/ExecutableDefinitionsRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ExecutableDefinitionsRule = ExecutableDefinitionsRule;
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _predicates = require_predicates();
    function ExecutableDefinitionsRule(context) {
      return {
        Document: function Document(node) {
          for (var _i2 = 0, _node$definitions2 = node.definitions; _i2 < _node$definitions2.length; _i2++) {
            var definition = _node$definitions2[_i2];
            if (!(0, _predicates.isExecutableDefinitionNode)(definition)) {
              var defName = definition.kind === _kinds.Kind.SCHEMA_DEFINITION || definition.kind === _kinds.Kind.SCHEMA_EXTENSION ? "schema" : '"' + definition.name.value + '"';
              context.reportError(new _GraphQLError.GraphQLError("The ".concat(defName, " definition is not executable."), definition));
            }
          }
          return false;
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueOperationNamesRule.js
var require_UniqueOperationNamesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueOperationNamesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueOperationNamesRule = UniqueOperationNamesRule;
    var _GraphQLError = require_GraphQLError();
    function UniqueOperationNamesRule(context) {
      var knownOperationNames = Object.create(null);
      return {
        OperationDefinition: function OperationDefinition(node) {
          var operationName = node.name;
          if (operationName) {
            if (knownOperationNames[operationName.value]) {
              context.reportError(new _GraphQLError.GraphQLError('There can be only one operation named "'.concat(operationName.value, '".'), [knownOperationNames[operationName.value], operationName]));
            } else {
              knownOperationNames[operationName.value] = operationName;
            }
          }
          return false;
        },
        FragmentDefinition: function FragmentDefinition() {
          return false;
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/LoneAnonymousOperationRule.js
var require_LoneAnonymousOperationRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/LoneAnonymousOperationRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LoneAnonymousOperationRule = LoneAnonymousOperationRule;
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    function LoneAnonymousOperationRule(context) {
      var operationCount = 0;
      return {
        Document: function Document(node) {
          operationCount = node.definitions.filter(function(definition) {
            return definition.kind === _kinds.Kind.OPERATION_DEFINITION;
          }).length;
        },
        OperationDefinition: function OperationDefinition(node) {
          if (!node.name && operationCount > 1) {
            context.reportError(new _GraphQLError.GraphQLError("This anonymous operation must be the only defined operation.", node));
          }
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.js
var require_SingleFieldSubscriptionsRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SingleFieldSubscriptionsRule = SingleFieldSubscriptionsRule;
    var _GraphQLError = require_GraphQLError();
    function SingleFieldSubscriptionsRule(context) {
      return {
        OperationDefinition: function OperationDefinition(node) {
          if (node.operation === "subscription") {
            if (node.selectionSet.selections.length !== 1) {
              context.reportError(new _GraphQLError.GraphQLError(node.name ? 'Subscription "'.concat(node.name.value, '" must select only one top level field.') : "Anonymous Subscription must select only one top level field.", node.selectionSet.selections.slice(1)));
            }
          }
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/KnownTypeNamesRule.js
var require_KnownTypeNamesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/KnownTypeNamesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.KnownTypeNamesRule = KnownTypeNamesRule;
    var _didYouMean = _interopRequireDefault(require_didYouMean());
    var _suggestionList = _interopRequireDefault(require_suggestionList());
    var _GraphQLError = require_GraphQLError();
    var _predicates = require_predicates();
    var _scalars = require_scalars();
    var _introspection = require_introspection();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function KnownTypeNamesRule(context) {
      var schema = context.getSchema();
      var existingTypesMap = schema ? schema.getTypeMap() : Object.create(null);
      var definedTypes = Object.create(null);
      for (var _i2 = 0, _context$getDocument$2 = context.getDocument().definitions; _i2 < _context$getDocument$2.length; _i2++) {
        var def = _context$getDocument$2[_i2];
        if ((0, _predicates.isTypeDefinitionNode)(def)) {
          definedTypes[def.name.value] = true;
        }
      }
      var typeNames = Object.keys(existingTypesMap).concat(Object.keys(definedTypes));
      return {
        NamedType: function NamedType(node, _1, parent, _2, ancestors) {
          var typeName = node.name.value;
          if (!existingTypesMap[typeName] && !definedTypes[typeName]) {
            var _ancestors$;
            var definitionNode = (_ancestors$ = ancestors[2]) !== null && _ancestors$ !== void 0 ? _ancestors$ : parent;
            var isSDL = definitionNode != null && isSDLNode(definitionNode);
            if (isSDL && isStandardTypeName(typeName)) {
              return;
            }
            var suggestedTypes = (0, _suggestionList.default)(typeName, isSDL ? standardTypeNames.concat(typeNames) : typeNames);
            context.reportError(new _GraphQLError.GraphQLError('Unknown type "'.concat(typeName, '".') + (0, _didYouMean.default)(suggestedTypes), node));
          }
        }
      };
    }
    var standardTypeNames = [].concat(_scalars.specifiedScalarTypes, _introspection.introspectionTypes).map(function(type) {
      return type.name;
    });
    function isStandardTypeName(typeName) {
      return standardTypeNames.indexOf(typeName) !== -1;
    }
    function isSDLNode(value) {
      return !Array.isArray(value) && ((0, _predicates.isTypeSystemDefinitionNode)(value) || (0, _predicates.isTypeSystemExtensionNode)(value));
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.js
var require_FragmentsOnCompositeTypesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.FragmentsOnCompositeTypesRule = FragmentsOnCompositeTypesRule;
    var _GraphQLError = require_GraphQLError();
    var _printer = require_printer();
    var _definition = require_definition();
    var _typeFromAST = require_typeFromAST();
    function FragmentsOnCompositeTypesRule(context) {
      return {
        InlineFragment: function InlineFragment(node) {
          var typeCondition = node.typeCondition;
          if (typeCondition) {
            var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), typeCondition);
            if (type && !(0, _definition.isCompositeType)(type)) {
              var typeStr = (0, _printer.print)(typeCondition);
              context.reportError(new _GraphQLError.GraphQLError('Fragment cannot condition on non composite type "'.concat(typeStr, '".'), typeCondition));
            }
          }
        },
        FragmentDefinition: function FragmentDefinition(node) {
          var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), node.typeCondition);
          if (type && !(0, _definition.isCompositeType)(type)) {
            var typeStr = (0, _printer.print)(node.typeCondition);
            context.reportError(new _GraphQLError.GraphQLError('Fragment "'.concat(node.name.value, '" cannot condition on non composite type "').concat(typeStr, '".'), node.typeCondition));
          }
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/VariablesAreInputTypesRule.js
var require_VariablesAreInputTypesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/VariablesAreInputTypesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.VariablesAreInputTypesRule = VariablesAreInputTypesRule;
    var _GraphQLError = require_GraphQLError();
    var _printer = require_printer();
    var _definition = require_definition();
    var _typeFromAST = require_typeFromAST();
    function VariablesAreInputTypesRule(context) {
      return {
        VariableDefinition: function VariableDefinition(node) {
          var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), node.type);
          if (type && !(0, _definition.isInputType)(type)) {
            var variableName = node.variable.name.value;
            var typeName = (0, _printer.print)(node.type);
            context.reportError(new _GraphQLError.GraphQLError('Variable "$'.concat(variableName, '" cannot be non-input type "').concat(typeName, '".'), node.type));
          }
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/ScalarLeafsRule.js
var require_ScalarLeafsRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/ScalarLeafsRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ScalarLeafsRule = ScalarLeafsRule;
    var _inspect = _interopRequireDefault(require_inspect());
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function ScalarLeafsRule(context) {
      return {
        Field: function Field(node) {
          var type = context.getType();
          var selectionSet = node.selectionSet;
          if (type) {
            if ((0, _definition.isLeafType)((0, _definition.getNamedType)(type))) {
              if (selectionSet) {
                var fieldName = node.name.value;
                var typeStr = (0, _inspect.default)(type);
                context.reportError(new _GraphQLError.GraphQLError('Field "'.concat(fieldName, '" must not have a selection since type "').concat(typeStr, '" has no subfields.'), selectionSet));
              }
            } else if (!selectionSet) {
              var _fieldName = node.name.value;
              var _typeStr = (0, _inspect.default)(type);
              context.reportError(new _GraphQLError.GraphQLError('Field "'.concat(_fieldName, '" of type "').concat(_typeStr, '" must have a selection of subfields. Did you mean "').concat(_fieldName, ' { ... }"?'), node));
            }
          }
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.js
var require_FieldsOnCorrectTypeRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.FieldsOnCorrectTypeRule = FieldsOnCorrectTypeRule;
    var _arrayFrom = _interopRequireDefault(require_arrayFrom());
    var _didYouMean = _interopRequireDefault(require_didYouMean());
    var _suggestionList = _interopRequireDefault(require_suggestionList());
    var _naturalCompare = _interopRequireDefault(require_naturalCompare());
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function FieldsOnCorrectTypeRule(context) {
      return {
        Field: function Field(node) {
          var type = context.getParentType();
          if (type) {
            var fieldDef = context.getFieldDef();
            if (!fieldDef) {
              var schema = context.getSchema();
              var fieldName = node.name.value;
              var suggestion = (0, _didYouMean.default)("to use an inline fragment on", getSuggestedTypeNames(schema, type, fieldName));
              if (suggestion === "") {
                suggestion = (0, _didYouMean.default)(getSuggestedFieldNames(type, fieldName));
              }
              context.reportError(new _GraphQLError.GraphQLError('Cannot query field "'.concat(fieldName, '" on type "').concat(type.name, '".') + suggestion, node));
            }
          }
        }
      };
    }
    function getSuggestedTypeNames(schema, type, fieldName) {
      if (!(0, _definition.isAbstractType)(type)) {
        return [];
      }
      var suggestedTypes = new Set();
      var usageCount = Object.create(null);
      for (var _i2 = 0, _schema$getPossibleTy2 = schema.getPossibleTypes(type); _i2 < _schema$getPossibleTy2.length; _i2++) {
        var possibleType = _schema$getPossibleTy2[_i2];
        if (!possibleType.getFields()[fieldName]) {
          continue;
        }
        suggestedTypes.add(possibleType);
        usageCount[possibleType.name] = 1;
        for (var _i4 = 0, _possibleType$getInte2 = possibleType.getInterfaces(); _i4 < _possibleType$getInte2.length; _i4++) {
          var _usageCount$possibleI;
          var possibleInterface = _possibleType$getInte2[_i4];
          if (!possibleInterface.getFields()[fieldName]) {
            continue;
          }
          suggestedTypes.add(possibleInterface);
          usageCount[possibleInterface.name] = ((_usageCount$possibleI = usageCount[possibleInterface.name]) !== null && _usageCount$possibleI !== void 0 ? _usageCount$possibleI : 0) + 1;
        }
      }
      return (0, _arrayFrom.default)(suggestedTypes).sort(function(typeA, typeB) {
        var usageCountDiff = usageCount[typeB.name] - usageCount[typeA.name];
        if (usageCountDiff !== 0) {
          return usageCountDiff;
        }
        if ((0, _definition.isInterfaceType)(typeA) && schema.isSubType(typeA, typeB)) {
          return -1;
        }
        if ((0, _definition.isInterfaceType)(typeB) && schema.isSubType(typeB, typeA)) {
          return 1;
        }
        return (0, _naturalCompare.default)(typeA.name, typeB.name);
      }).map(function(x) {
        return x.name;
      });
    }
    function getSuggestedFieldNames(type, fieldName) {
      if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type)) {
        var possibleFieldNames = Object.keys(type.getFields());
        return (0, _suggestionList.default)(fieldName, possibleFieldNames);
      }
      return [];
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueFragmentNamesRule.js
var require_UniqueFragmentNamesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueFragmentNamesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueFragmentNamesRule = UniqueFragmentNamesRule;
    var _GraphQLError = require_GraphQLError();
    function UniqueFragmentNamesRule(context) {
      var knownFragmentNames = Object.create(null);
      return {
        OperationDefinition: function OperationDefinition() {
          return false;
        },
        FragmentDefinition: function FragmentDefinition(node) {
          var fragmentName = node.name.value;
          if (knownFragmentNames[fragmentName]) {
            context.reportError(new _GraphQLError.GraphQLError('There can be only one fragment named "'.concat(fragmentName, '".'), [knownFragmentNames[fragmentName], node.name]));
          } else {
            knownFragmentNames[fragmentName] = node.name;
          }
          return false;
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/KnownFragmentNamesRule.js
var require_KnownFragmentNamesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/KnownFragmentNamesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.KnownFragmentNamesRule = KnownFragmentNamesRule;
    var _GraphQLError = require_GraphQLError();
    function KnownFragmentNamesRule(context) {
      return {
        FragmentSpread: function FragmentSpread(node) {
          var fragmentName = node.name.value;
          var fragment = context.getFragment(fragmentName);
          if (!fragment) {
            context.reportError(new _GraphQLError.GraphQLError('Unknown fragment "'.concat(fragmentName, '".'), node.name));
          }
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/NoUnusedFragmentsRule.js
var require_NoUnusedFragmentsRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/NoUnusedFragmentsRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NoUnusedFragmentsRule = NoUnusedFragmentsRule;
    var _GraphQLError = require_GraphQLError();
    function NoUnusedFragmentsRule(context) {
      var operationDefs = [];
      var fragmentDefs = [];
      return {
        OperationDefinition: function OperationDefinition(node) {
          operationDefs.push(node);
          return false;
        },
        FragmentDefinition: function FragmentDefinition(node) {
          fragmentDefs.push(node);
          return false;
        },
        Document: {
          leave: function leave() {
            var fragmentNameUsed = Object.create(null);
            for (var _i2 = 0; _i2 < operationDefs.length; _i2++) {
              var operation = operationDefs[_i2];
              for (var _i4 = 0, _context$getRecursive2 = context.getRecursivelyReferencedFragments(operation); _i4 < _context$getRecursive2.length; _i4++) {
                var fragment = _context$getRecursive2[_i4];
                fragmentNameUsed[fragment.name.value] = true;
              }
            }
            for (var _i6 = 0; _i6 < fragmentDefs.length; _i6++) {
              var fragmentDef = fragmentDefs[_i6];
              var fragName = fragmentDef.name.value;
              if (fragmentNameUsed[fragName] !== true) {
                context.reportError(new _GraphQLError.GraphQLError('Fragment "'.concat(fragName, '" is never used.'), fragmentDef));
              }
            }
          }
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.js
var require_PossibleFragmentSpreadsRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PossibleFragmentSpreadsRule = PossibleFragmentSpreadsRule;
    var _inspect = _interopRequireDefault(require_inspect());
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    var _typeFromAST = require_typeFromAST();
    var _typeComparators = require_typeComparators();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function PossibleFragmentSpreadsRule(context) {
      return {
        InlineFragment: function InlineFragment(node) {
          var fragType = context.getType();
          var parentType = context.getParentType();
          if ((0, _definition.isCompositeType)(fragType) && (0, _definition.isCompositeType)(parentType) && !(0, _typeComparators.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
            var parentTypeStr = (0, _inspect.default)(parentType);
            var fragTypeStr = (0, _inspect.default)(fragType);
            context.reportError(new _GraphQLError.GraphQLError('Fragment cannot be spread here as objects of type "'.concat(parentTypeStr, '" can never be of type "').concat(fragTypeStr, '".'), node));
          }
        },
        FragmentSpread: function FragmentSpread(node) {
          var fragName = node.name.value;
          var fragType = getFragmentType(context, fragName);
          var parentType = context.getParentType();
          if (fragType && parentType && !(0, _typeComparators.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
            var parentTypeStr = (0, _inspect.default)(parentType);
            var fragTypeStr = (0, _inspect.default)(fragType);
            context.reportError(new _GraphQLError.GraphQLError('Fragment "'.concat(fragName, '" cannot be spread here as objects of type "').concat(parentTypeStr, '" can never be of type "').concat(fragTypeStr, '".'), node));
          }
        }
      };
    }
    function getFragmentType(context, name) {
      var frag = context.getFragment(name);
      if (frag) {
        var type = (0, _typeFromAST.typeFromAST)(context.getSchema(), frag.typeCondition);
        if ((0, _definition.isCompositeType)(type)) {
          return type;
        }
      }
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/NoFragmentCyclesRule.js
var require_NoFragmentCyclesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/NoFragmentCyclesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NoFragmentCyclesRule = NoFragmentCyclesRule;
    var _GraphQLError = require_GraphQLError();
    function NoFragmentCyclesRule(context) {
      var visitedFrags = Object.create(null);
      var spreadPath = [];
      var spreadPathIndexByName = Object.create(null);
      return {
        OperationDefinition: function OperationDefinition() {
          return false;
        },
        FragmentDefinition: function FragmentDefinition(node) {
          detectCycleRecursive(node);
          return false;
        }
      };
      function detectCycleRecursive(fragment) {
        if (visitedFrags[fragment.name.value]) {
          return;
        }
        var fragmentName = fragment.name.value;
        visitedFrags[fragmentName] = true;
        var spreadNodes = context.getFragmentSpreads(fragment.selectionSet);
        if (spreadNodes.length === 0) {
          return;
        }
        spreadPathIndexByName[fragmentName] = spreadPath.length;
        for (var _i2 = 0; _i2 < spreadNodes.length; _i2++) {
          var spreadNode = spreadNodes[_i2];
          var spreadName = spreadNode.name.value;
          var cycleIndex = spreadPathIndexByName[spreadName];
          spreadPath.push(spreadNode);
          if (cycleIndex === void 0) {
            var spreadFragment = context.getFragment(spreadName);
            if (spreadFragment) {
              detectCycleRecursive(spreadFragment);
            }
          } else {
            var cyclePath = spreadPath.slice(cycleIndex);
            var viaPath = cyclePath.slice(0, -1).map(function(s) {
              return '"' + s.name.value + '"';
            }).join(", ");
            context.reportError(new _GraphQLError.GraphQLError('Cannot spread fragment "'.concat(spreadName, '" within itself') + (viaPath !== "" ? " via ".concat(viaPath, ".") : "."), cyclePath));
          }
          spreadPath.pop();
        }
        spreadPathIndexByName[fragmentName] = void 0;
      }
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueVariableNamesRule.js
var require_UniqueVariableNamesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueVariableNamesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueVariableNamesRule = UniqueVariableNamesRule;
    var _GraphQLError = require_GraphQLError();
    function UniqueVariableNamesRule(context) {
      var knownVariableNames = Object.create(null);
      return {
        OperationDefinition: function OperationDefinition() {
          knownVariableNames = Object.create(null);
        },
        VariableDefinition: function VariableDefinition(node) {
          var variableName = node.variable.name.value;
          if (knownVariableNames[variableName]) {
            context.reportError(new _GraphQLError.GraphQLError('There can be only one variable named "$'.concat(variableName, '".'), [knownVariableNames[variableName], node.variable.name]));
          } else {
            knownVariableNames[variableName] = node.variable.name;
          }
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/NoUndefinedVariablesRule.js
var require_NoUndefinedVariablesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/NoUndefinedVariablesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NoUndefinedVariablesRule = NoUndefinedVariablesRule;
    var _GraphQLError = require_GraphQLError();
    function NoUndefinedVariablesRule(context) {
      var variableNameDefined = Object.create(null);
      return {
        OperationDefinition: {
          enter: function enter() {
            variableNameDefined = Object.create(null);
          },
          leave: function leave(operation) {
            var usages = context.getRecursiveVariableUsages(operation);
            for (var _i2 = 0; _i2 < usages.length; _i2++) {
              var _ref2 = usages[_i2];
              var node = _ref2.node;
              var varName = node.name.value;
              if (variableNameDefined[varName] !== true) {
                context.reportError(new _GraphQLError.GraphQLError(operation.name ? 'Variable "$'.concat(varName, '" is not defined by operation "').concat(operation.name.value, '".') : 'Variable "$'.concat(varName, '" is not defined.'), [node, operation]));
              }
            }
          }
        },
        VariableDefinition: function VariableDefinition(node) {
          variableNameDefined[node.variable.name.value] = true;
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/NoUnusedVariablesRule.js
var require_NoUnusedVariablesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/NoUnusedVariablesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NoUnusedVariablesRule = NoUnusedVariablesRule;
    var _GraphQLError = require_GraphQLError();
    function NoUnusedVariablesRule(context) {
      var variableDefs = [];
      return {
        OperationDefinition: {
          enter: function enter() {
            variableDefs = [];
          },
          leave: function leave(operation) {
            var variableNameUsed = Object.create(null);
            var usages = context.getRecursiveVariableUsages(operation);
            for (var _i2 = 0; _i2 < usages.length; _i2++) {
              var _ref2 = usages[_i2];
              var node = _ref2.node;
              variableNameUsed[node.name.value] = true;
            }
            for (var _i4 = 0, _variableDefs2 = variableDefs; _i4 < _variableDefs2.length; _i4++) {
              var variableDef = _variableDefs2[_i4];
              var variableName = variableDef.variable.name.value;
              if (variableNameUsed[variableName] !== true) {
                context.reportError(new _GraphQLError.GraphQLError(operation.name ? 'Variable "$'.concat(variableName, '" is never used in operation "').concat(operation.name.value, '".') : 'Variable "$'.concat(variableName, '" is never used.'), variableDef));
              }
            }
          }
        },
        VariableDefinition: function VariableDefinition(def) {
          variableDefs.push(def);
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/KnownDirectivesRule.js
var require_KnownDirectivesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/KnownDirectivesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.KnownDirectivesRule = KnownDirectivesRule;
    var _inspect = _interopRequireDefault(require_inspect());
    var _invariant = _interopRequireDefault(require_invariant());
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _directiveLocation = require_directiveLocation();
    var _directives = require_directives();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function KnownDirectivesRule(context) {
      var locationsMap = Object.create(null);
      var schema = context.getSchema();
      var definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
      for (var _i2 = 0; _i2 < definedDirectives.length; _i2++) {
        var directive = definedDirectives[_i2];
        locationsMap[directive.name] = directive.locations;
      }
      var astDefinitions = context.getDocument().definitions;
      for (var _i4 = 0; _i4 < astDefinitions.length; _i4++) {
        var def = astDefinitions[_i4];
        if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
          locationsMap[def.name.value] = def.locations.map(function(name) {
            return name.value;
          });
        }
      }
      return {
        Directive: function Directive(node, _key, _parent, _path, ancestors) {
          var name = node.name.value;
          var locations = locationsMap[name];
          if (!locations) {
            context.reportError(new _GraphQLError.GraphQLError('Unknown directive "@'.concat(name, '".'), node));
            return;
          }
          var candidateLocation = getDirectiveLocationForASTPath(ancestors);
          if (candidateLocation && locations.indexOf(candidateLocation) === -1) {
            context.reportError(new _GraphQLError.GraphQLError('Directive "@'.concat(name, '" may not be used on ').concat(candidateLocation, "."), node));
          }
        }
      };
    }
    function getDirectiveLocationForASTPath(ancestors) {
      var appliedTo = ancestors[ancestors.length - 1];
      !Array.isArray(appliedTo) || (0, _invariant.default)(0);
      switch (appliedTo.kind) {
        case _kinds.Kind.OPERATION_DEFINITION:
          return getDirectiveLocationForOperation(appliedTo.operation);
        case _kinds.Kind.FIELD:
          return _directiveLocation.DirectiveLocation.FIELD;
        case _kinds.Kind.FRAGMENT_SPREAD:
          return _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD;
        case _kinds.Kind.INLINE_FRAGMENT:
          return _directiveLocation.DirectiveLocation.INLINE_FRAGMENT;
        case _kinds.Kind.FRAGMENT_DEFINITION:
          return _directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION;
        case _kinds.Kind.VARIABLE_DEFINITION:
          return _directiveLocation.DirectiveLocation.VARIABLE_DEFINITION;
        case _kinds.Kind.SCHEMA_DEFINITION:
        case _kinds.Kind.SCHEMA_EXTENSION:
          return _directiveLocation.DirectiveLocation.SCHEMA;
        case _kinds.Kind.SCALAR_TYPE_DEFINITION:
        case _kinds.Kind.SCALAR_TYPE_EXTENSION:
          return _directiveLocation.DirectiveLocation.SCALAR;
        case _kinds.Kind.OBJECT_TYPE_DEFINITION:
        case _kinds.Kind.OBJECT_TYPE_EXTENSION:
          return _directiveLocation.DirectiveLocation.OBJECT;
        case _kinds.Kind.FIELD_DEFINITION:
          return _directiveLocation.DirectiveLocation.FIELD_DEFINITION;
        case _kinds.Kind.INTERFACE_TYPE_DEFINITION:
        case _kinds.Kind.INTERFACE_TYPE_EXTENSION:
          return _directiveLocation.DirectiveLocation.INTERFACE;
        case _kinds.Kind.UNION_TYPE_DEFINITION:
        case _kinds.Kind.UNION_TYPE_EXTENSION:
          return _directiveLocation.DirectiveLocation.UNION;
        case _kinds.Kind.ENUM_TYPE_DEFINITION:
        case _kinds.Kind.ENUM_TYPE_EXTENSION:
          return _directiveLocation.DirectiveLocation.ENUM;
        case _kinds.Kind.ENUM_VALUE_DEFINITION:
          return _directiveLocation.DirectiveLocation.ENUM_VALUE;
        case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
        case _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
          return _directiveLocation.DirectiveLocation.INPUT_OBJECT;
        case _kinds.Kind.INPUT_VALUE_DEFINITION: {
          var parentNode = ancestors[ancestors.length - 3];
          return parentNode.kind === _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION ? _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION : _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION;
        }
      }
    }
    function getDirectiveLocationForOperation(operation) {
      switch (operation) {
        case "query":
          return _directiveLocation.DirectiveLocation.QUERY;
        case "mutation":
          return _directiveLocation.DirectiveLocation.MUTATION;
        case "subscription":
          return _directiveLocation.DirectiveLocation.SUBSCRIPTION;
      }
      (0, _invariant.default)(0, "Unexpected operation: " + (0, _inspect.default)(operation));
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.js
var require_UniqueDirectivesPerLocationRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueDirectivesPerLocationRule = UniqueDirectivesPerLocationRule;
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _predicates = require_predicates();
    var _directives = require_directives();
    function UniqueDirectivesPerLocationRule(context) {
      var uniqueDirectiveMap = Object.create(null);
      var schema = context.getSchema();
      var definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
      for (var _i2 = 0; _i2 < definedDirectives.length; _i2++) {
        var directive = definedDirectives[_i2];
        uniqueDirectiveMap[directive.name] = !directive.isRepeatable;
      }
      var astDefinitions = context.getDocument().definitions;
      for (var _i4 = 0; _i4 < astDefinitions.length; _i4++) {
        var def = astDefinitions[_i4];
        if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
          uniqueDirectiveMap[def.name.value] = !def.repeatable;
        }
      }
      var schemaDirectives = Object.create(null);
      var typeDirectivesMap = Object.create(null);
      return {
        enter: function enter(node) {
          if (node.directives == null) {
            return;
          }
          var seenDirectives;
          if (node.kind === _kinds.Kind.SCHEMA_DEFINITION || node.kind === _kinds.Kind.SCHEMA_EXTENSION) {
            seenDirectives = schemaDirectives;
          } else if ((0, _predicates.isTypeDefinitionNode)(node) || (0, _predicates.isTypeExtensionNode)(node)) {
            var typeName = node.name.value;
            seenDirectives = typeDirectivesMap[typeName];
            if (seenDirectives === void 0) {
              typeDirectivesMap[typeName] = seenDirectives = Object.create(null);
            }
          } else {
            seenDirectives = Object.create(null);
          }
          for (var _i6 = 0, _node$directives2 = node.directives; _i6 < _node$directives2.length; _i6++) {
            var _directive = _node$directives2[_i6];
            var directiveName = _directive.name.value;
            if (uniqueDirectiveMap[directiveName]) {
              if (seenDirectives[directiveName]) {
                context.reportError(new _GraphQLError.GraphQLError('The directive "@'.concat(directiveName, '" can only be used once at this location.'), [seenDirectives[directiveName], _directive]));
              } else {
                seenDirectives[directiveName] = _directive;
              }
            }
          }
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/KnownArgumentNamesRule.js
var require_KnownArgumentNamesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/KnownArgumentNamesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.KnownArgumentNamesRule = KnownArgumentNamesRule;
    exports.KnownArgumentNamesOnDirectivesRule = KnownArgumentNamesOnDirectivesRule;
    var _didYouMean = _interopRequireDefault(require_didYouMean());
    var _suggestionList = _interopRequireDefault(require_suggestionList());
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _directives = require_directives();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function KnownArgumentNamesRule(context) {
      return _objectSpread(_objectSpread({}, KnownArgumentNamesOnDirectivesRule(context)), {}, {
        Argument: function Argument(argNode) {
          var argDef = context.getArgument();
          var fieldDef = context.getFieldDef();
          var parentType = context.getParentType();
          if (!argDef && fieldDef && parentType) {
            var argName = argNode.name.value;
            var knownArgsNames = fieldDef.args.map(function(arg) {
              return arg.name;
            });
            var suggestions = (0, _suggestionList.default)(argName, knownArgsNames);
            context.reportError(new _GraphQLError.GraphQLError('Unknown argument "'.concat(argName, '" on field "').concat(parentType.name, ".").concat(fieldDef.name, '".') + (0, _didYouMean.default)(suggestions), argNode));
          }
        }
      });
    }
    function KnownArgumentNamesOnDirectivesRule(context) {
      var directiveArgs = Object.create(null);
      var schema = context.getSchema();
      var definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
      for (var _i2 = 0; _i2 < definedDirectives.length; _i2++) {
        var directive = definedDirectives[_i2];
        directiveArgs[directive.name] = directive.args.map(function(arg) {
          return arg.name;
        });
      }
      var astDefinitions = context.getDocument().definitions;
      for (var _i4 = 0; _i4 < astDefinitions.length; _i4++) {
        var def = astDefinitions[_i4];
        if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
          var _def$arguments;
          var argsNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
          directiveArgs[def.name.value] = argsNodes.map(function(arg) {
            return arg.name.value;
          });
        }
      }
      return {
        Directive: function Directive(directiveNode) {
          var directiveName = directiveNode.name.value;
          var knownArgs = directiveArgs[directiveName];
          if (directiveNode.arguments && knownArgs) {
            for (var _i6 = 0, _directiveNode$argume2 = directiveNode.arguments; _i6 < _directiveNode$argume2.length; _i6++) {
              var argNode = _directiveNode$argume2[_i6];
              var argName = argNode.name.value;
              if (knownArgs.indexOf(argName) === -1) {
                var suggestions = (0, _suggestionList.default)(argName, knownArgs);
                context.reportError(new _GraphQLError.GraphQLError('Unknown argument "'.concat(argName, '" on directive "@').concat(directiveName, '".') + (0, _didYouMean.default)(suggestions), argNode));
              }
            }
          }
          return false;
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueArgumentNamesRule.js
var require_UniqueArgumentNamesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueArgumentNamesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueArgumentNamesRule = UniqueArgumentNamesRule;
    var _GraphQLError = require_GraphQLError();
    function UniqueArgumentNamesRule(context) {
      var knownArgNames = Object.create(null);
      return {
        Field: function Field() {
          knownArgNames = Object.create(null);
        },
        Directive: function Directive() {
          knownArgNames = Object.create(null);
        },
        Argument: function Argument(node) {
          var argName = node.name.value;
          if (knownArgNames[argName]) {
            context.reportError(new _GraphQLError.GraphQLError('There can be only one argument named "'.concat(argName, '".'), [knownArgNames[argName], node.name]));
          } else {
            knownArgNames[argName] = node.name;
          }
          return false;
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.js
var require_ValuesOfCorrectTypeRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ValuesOfCorrectTypeRule = ValuesOfCorrectTypeRule;
    var _objectValues3 = _interopRequireDefault(require_objectValues());
    var _keyMap = _interopRequireDefault(require_keyMap());
    var _inspect = _interopRequireDefault(require_inspect());
    var _didYouMean = _interopRequireDefault(require_didYouMean());
    var _suggestionList = _interopRequireDefault(require_suggestionList());
    var _GraphQLError = require_GraphQLError();
    var _printer = require_printer();
    var _definition = require_definition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function ValuesOfCorrectTypeRule(context) {
      return {
        ListValue: function ListValue(node) {
          var type = (0, _definition.getNullableType)(context.getParentInputType());
          if (!(0, _definition.isListType)(type)) {
            isValidValueNode(context, node);
            return false;
          }
        },
        ObjectValue: function ObjectValue(node) {
          var type = (0, _definition.getNamedType)(context.getInputType());
          if (!(0, _definition.isInputObjectType)(type)) {
            isValidValueNode(context, node);
            return false;
          }
          var fieldNodeMap = (0, _keyMap.default)(node.fields, function(field) {
            return field.name.value;
          });
          for (var _i2 = 0, _objectValues2 = (0, _objectValues3.default)(type.getFields()); _i2 < _objectValues2.length; _i2++) {
            var fieldDef = _objectValues2[_i2];
            var fieldNode = fieldNodeMap[fieldDef.name];
            if (!fieldNode && (0, _definition.isRequiredInputField)(fieldDef)) {
              var typeStr = (0, _inspect.default)(fieldDef.type);
              context.reportError(new _GraphQLError.GraphQLError('Field "'.concat(type.name, ".").concat(fieldDef.name, '" of required type "').concat(typeStr, '" was not provided.'), node));
            }
          }
        },
        ObjectField: function ObjectField(node) {
          var parentType = (0, _definition.getNamedType)(context.getParentInputType());
          var fieldType = context.getInputType();
          if (!fieldType && (0, _definition.isInputObjectType)(parentType)) {
            var suggestions = (0, _suggestionList.default)(node.name.value, Object.keys(parentType.getFields()));
            context.reportError(new _GraphQLError.GraphQLError('Field "'.concat(node.name.value, '" is not defined by type "').concat(parentType.name, '".') + (0, _didYouMean.default)(suggestions), node));
          }
        },
        NullValue: function NullValue(node) {
          var type = context.getInputType();
          if ((0, _definition.isNonNullType)(type)) {
            context.reportError(new _GraphQLError.GraphQLError('Expected value of type "'.concat((0, _inspect.default)(type), '", found ').concat((0, _printer.print)(node), "."), node));
          }
        },
        EnumValue: function EnumValue(node) {
          return isValidValueNode(context, node);
        },
        IntValue: function IntValue(node) {
          return isValidValueNode(context, node);
        },
        FloatValue: function FloatValue(node) {
          return isValidValueNode(context, node);
        },
        StringValue: function StringValue(node) {
          return isValidValueNode(context, node);
        },
        BooleanValue: function BooleanValue(node) {
          return isValidValueNode(context, node);
        }
      };
    }
    function isValidValueNode(context, node) {
      var locationType = context.getInputType();
      if (!locationType) {
        return;
      }
      var type = (0, _definition.getNamedType)(locationType);
      if (!(0, _definition.isLeafType)(type)) {
        var typeStr = (0, _inspect.default)(locationType);
        context.reportError(new _GraphQLError.GraphQLError('Expected value of type "'.concat(typeStr, '", found ').concat((0, _printer.print)(node), "."), node));
        return;
      }
      try {
        var parseResult = type.parseLiteral(node, void 0);
        if (parseResult === void 0) {
          var _typeStr = (0, _inspect.default)(locationType);
          context.reportError(new _GraphQLError.GraphQLError('Expected value of type "'.concat(_typeStr, '", found ').concat((0, _printer.print)(node), "."), node));
        }
      } catch (error) {
        var _typeStr2 = (0, _inspect.default)(locationType);
        if (error instanceof _GraphQLError.GraphQLError) {
          context.reportError(error);
        } else {
          context.reportError(new _GraphQLError.GraphQLError('Expected value of type "'.concat(_typeStr2, '", found ').concat((0, _printer.print)(node), "; ") + error.message, node, void 0, void 0, void 0, error));
        }
      }
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.js
var require_ProvidedRequiredArgumentsRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ProvidedRequiredArgumentsRule = ProvidedRequiredArgumentsRule;
    exports.ProvidedRequiredArgumentsOnDirectivesRule = ProvidedRequiredArgumentsOnDirectivesRule;
    var _inspect = _interopRequireDefault(require_inspect());
    var _keyMap = _interopRequireDefault(require_keyMap());
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _printer = require_printer();
    var _directives = require_directives();
    var _definition = require_definition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function ProvidedRequiredArgumentsRule(context) {
      return _objectSpread(_objectSpread({}, ProvidedRequiredArgumentsOnDirectivesRule(context)), {}, {
        Field: {
          leave: function leave(fieldNode) {
            var _fieldNode$arguments;
            var fieldDef = context.getFieldDef();
            if (!fieldDef) {
              return false;
            }
            var argNodes = (_fieldNode$arguments = fieldNode.arguments) !== null && _fieldNode$arguments !== void 0 ? _fieldNode$arguments : [];
            var argNodeMap = (0, _keyMap.default)(argNodes, function(arg) {
              return arg.name.value;
            });
            for (var _i2 = 0, _fieldDef$args2 = fieldDef.args; _i2 < _fieldDef$args2.length; _i2++) {
              var argDef = _fieldDef$args2[_i2];
              var argNode = argNodeMap[argDef.name];
              if (!argNode && (0, _definition.isRequiredArgument)(argDef)) {
                var argTypeStr = (0, _inspect.default)(argDef.type);
                context.reportError(new _GraphQLError.GraphQLError('Field "'.concat(fieldDef.name, '" argument "').concat(argDef.name, '" of type "').concat(argTypeStr, '" is required, but it was not provided.'), fieldNode));
              }
            }
          }
        }
      });
    }
    function ProvidedRequiredArgumentsOnDirectivesRule(context) {
      var requiredArgsMap = Object.create(null);
      var schema = context.getSchema();
      var definedDirectives = schema ? schema.getDirectives() : _directives.specifiedDirectives;
      for (var _i4 = 0; _i4 < definedDirectives.length; _i4++) {
        var directive = definedDirectives[_i4];
        requiredArgsMap[directive.name] = (0, _keyMap.default)(directive.args.filter(_definition.isRequiredArgument), function(arg) {
          return arg.name;
        });
      }
      var astDefinitions = context.getDocument().definitions;
      for (var _i6 = 0; _i6 < astDefinitions.length; _i6++) {
        var def = astDefinitions[_i6];
        if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
          var _def$arguments;
          var argNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
          requiredArgsMap[def.name.value] = (0, _keyMap.default)(argNodes.filter(isRequiredArgumentNode), function(arg) {
            return arg.name.value;
          });
        }
      }
      return {
        Directive: {
          leave: function leave(directiveNode) {
            var directiveName = directiveNode.name.value;
            var requiredArgs = requiredArgsMap[directiveName];
            if (requiredArgs) {
              var _directiveNode$argume;
              var _argNodes = (_directiveNode$argume = directiveNode.arguments) !== null && _directiveNode$argume !== void 0 ? _directiveNode$argume : [];
              var argNodeMap = (0, _keyMap.default)(_argNodes, function(arg) {
                return arg.name.value;
              });
              for (var _i8 = 0, _Object$keys2 = Object.keys(requiredArgs); _i8 < _Object$keys2.length; _i8++) {
                var argName = _Object$keys2[_i8];
                if (!argNodeMap[argName]) {
                  var argType = requiredArgs[argName].type;
                  var argTypeStr = (0, _definition.isType)(argType) ? (0, _inspect.default)(argType) : (0, _printer.print)(argType);
                  context.reportError(new _GraphQLError.GraphQLError('Directive "@'.concat(directiveName, '" argument "').concat(argName, '" of type "').concat(argTypeStr, '" is required, but it was not provided.'), directiveNode));
                }
              }
            }
          }
        }
      };
    }
    function isRequiredArgumentNode(arg) {
      return arg.type.kind === _kinds.Kind.NON_NULL_TYPE && arg.defaultValue == null;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.js
var require_VariablesInAllowedPositionRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.VariablesInAllowedPositionRule = VariablesInAllowedPositionRule;
    var _inspect = _interopRequireDefault(require_inspect());
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _definition = require_definition();
    var _typeFromAST = require_typeFromAST();
    var _typeComparators = require_typeComparators();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function VariablesInAllowedPositionRule(context) {
      var varDefMap = Object.create(null);
      return {
        OperationDefinition: {
          enter: function enter() {
            varDefMap = Object.create(null);
          },
          leave: function leave(operation) {
            var usages = context.getRecursiveVariableUsages(operation);
            for (var _i2 = 0; _i2 < usages.length; _i2++) {
              var _ref2 = usages[_i2];
              var node = _ref2.node;
              var type = _ref2.type;
              var defaultValue = _ref2.defaultValue;
              var varName = node.name.value;
              var varDef = varDefMap[varName];
              if (varDef && type) {
                var schema = context.getSchema();
                var varType = (0, _typeFromAST.typeFromAST)(schema, varDef.type);
                if (varType && !allowedVariableUsage(schema, varType, varDef.defaultValue, type, defaultValue)) {
                  var varTypeStr = (0, _inspect.default)(varType);
                  var typeStr = (0, _inspect.default)(type);
                  context.reportError(new _GraphQLError.GraphQLError('Variable "$'.concat(varName, '" of type "').concat(varTypeStr, '" used in position expecting type "').concat(typeStr, '".'), [varDef, node]));
                }
              }
            }
          }
        },
        VariableDefinition: function VariableDefinition(node) {
          varDefMap[node.variable.name.value] = node;
        }
      };
    }
    function allowedVariableUsage(schema, varType, varDefaultValue, locationType, locationDefaultValue) {
      if ((0, _definition.isNonNullType)(locationType) && !(0, _definition.isNonNullType)(varType)) {
        var hasNonNullVariableDefaultValue = varDefaultValue != null && varDefaultValue.kind !== _kinds.Kind.NULL;
        var hasLocationDefaultValue = locationDefaultValue !== void 0;
        if (!hasNonNullVariableDefaultValue && !hasLocationDefaultValue) {
          return false;
        }
        var nullableLocationType = locationType.ofType;
        return (0, _typeComparators.isTypeSubTypeOf)(schema, varType, nullableLocationType);
      }
      return (0, _typeComparators.isTypeSubTypeOf)(schema, varType, locationType);
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.js
var require_OverlappingFieldsCanBeMergedRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.OverlappingFieldsCanBeMergedRule = OverlappingFieldsCanBeMergedRule;
    var _find = _interopRequireDefault(require_find());
    var _objectEntries3 = _interopRequireDefault(require_objectEntries());
    var _inspect = _interopRequireDefault(require_inspect());
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _printer = require_printer();
    var _definition = require_definition();
    var _typeFromAST = require_typeFromAST();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function reasonMessage(reason) {
      if (Array.isArray(reason)) {
        return reason.map(function(_ref) {
          var responseName = _ref[0], subReason = _ref[1];
          return 'subfields "'.concat(responseName, '" conflict because ') + reasonMessage(subReason);
        }).join(" and ");
      }
      return reason;
    }
    function OverlappingFieldsCanBeMergedRule(context) {
      var comparedFragmentPairs = new PairSet();
      var cachedFieldsAndFragmentNames = new Map();
      return {
        SelectionSet: function SelectionSet(selectionSet) {
          var conflicts = findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, context.getParentType(), selectionSet);
          for (var _i2 = 0; _i2 < conflicts.length; _i2++) {
            var _ref3 = conflicts[_i2];
            var _ref2$ = _ref3[0];
            var responseName = _ref2$[0];
            var reason = _ref2$[1];
            var fields1 = _ref3[1];
            var fields2 = _ref3[2];
            var reasonMsg = reasonMessage(reason);
            context.reportError(new _GraphQLError.GraphQLError('Fields "'.concat(responseName, '" conflict because ').concat(reasonMsg, ". Use different aliases on the fields to fetch both if this was intentional."), fields1.concat(fields2)));
          }
        }
      };
    }
    function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentType, selectionSet) {
      var conflicts = [];
      var _getFieldsAndFragment = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet), fieldMap = _getFieldsAndFragment[0], fragmentNames = _getFieldsAndFragment[1];
      collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap);
      if (fragmentNames.length !== 0) {
        for (var i = 0; i < fragmentNames.length; i++) {
          collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fieldMap, fragmentNames[i]);
          for (var j = i + 1; j < fragmentNames.length; j++) {
            collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fragmentNames[i], fragmentNames[j]);
          }
        }
      }
      return conflicts;
    }
    function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
      var fragment = context.getFragment(fragmentName);
      if (!fragment) {
        return;
      }
      var _getReferencedFieldsA = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment), fieldMap2 = _getReferencedFieldsA[0], fragmentNames2 = _getReferencedFieldsA[1];
      if (fieldMap === fieldMap2) {
        return;
      }
      collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fieldMap2);
      for (var i = 0; i < fragmentNames2.length; i++) {
        collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentNames2[i]);
      }
    }
    function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
      if (fragmentName1 === fragmentName2) {
        return;
      }
      if (comparedFragmentPairs.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
        return;
      }
      comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);
      var fragment1 = context.getFragment(fragmentName1);
      var fragment2 = context.getFragment(fragmentName2);
      if (!fragment1 || !fragment2) {
        return;
      }
      var _getReferencedFieldsA2 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment1), fieldMap1 = _getReferencedFieldsA2[0], fragmentNames1 = _getReferencedFieldsA2[1];
      var _getReferencedFieldsA3 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment2), fieldMap2 = _getReferencedFieldsA3[0], fragmentNames2 = _getReferencedFieldsA3[1];
      collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2);
      for (var j = 0; j < fragmentNames2.length; j++) {
        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentNames2[j]);
      }
      for (var i = 0; i < fragmentNames1.length; i++) {
        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[i], fragmentName2);
      }
    }
    function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
      var conflicts = [];
      var _getFieldsAndFragment2 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType1, selectionSet1), fieldMap1 = _getFieldsAndFragment2[0], fragmentNames1 = _getFieldsAndFragment2[1];
      var _getFieldsAndFragment3 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType2, selectionSet2), fieldMap2 = _getFieldsAndFragment3[0], fragmentNames2 = _getFieldsAndFragment3[1];
      collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2);
      if (fragmentNames2.length !== 0) {
        for (var j = 0; j < fragmentNames2.length; j++) {
          collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fragmentNames2[j]);
        }
      }
      if (fragmentNames1.length !== 0) {
        for (var i = 0; i < fragmentNames1.length; i++) {
          collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap2, fragmentNames1[i]);
        }
      }
      for (var _i3 = 0; _i3 < fragmentNames1.length; _i3++) {
        for (var _j = 0; _j < fragmentNames2.length; _j++) {
          collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[_i3], fragmentNames2[_j]);
        }
      }
      return conflicts;
    }
    function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap) {
      for (var _i5 = 0, _objectEntries2 = (0, _objectEntries3.default)(fieldMap); _i5 < _objectEntries2.length; _i5++) {
        var _ref5 = _objectEntries2[_i5];
        var responseName = _ref5[0];
        var fields = _ref5[1];
        if (fields.length > 1) {
          for (var i = 0; i < fields.length; i++) {
            for (var j = i + 1; j < fields.length; j++) {
              var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, responseName, fields[i], fields[j]);
              if (conflict) {
                conflicts.push(conflict);
              }
            }
          }
        }
      }
    }
    function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
      for (var _i7 = 0, _Object$keys2 = Object.keys(fieldMap1); _i7 < _Object$keys2.length; _i7++) {
        var responseName = _Object$keys2[_i7];
        var fields2 = fieldMap2[responseName];
        if (fields2) {
          var fields1 = fieldMap1[responseName];
          for (var i = 0; i < fields1.length; i++) {
            for (var j = 0; j < fields2.length; j++) {
              var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, fields1[i], fields2[j]);
              if (conflict) {
                conflicts.push(conflict);
              }
            }
          }
        }
      }
    }
    function findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
      var parentType1 = field1[0], node1 = field1[1], def1 = field1[2];
      var parentType2 = field2[0], node2 = field2[1], def2 = field2[2];
      var areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && (0, _definition.isObjectType)(parentType1) && (0, _definition.isObjectType)(parentType2);
      if (!areMutuallyExclusive) {
        var _node1$arguments, _node2$arguments;
        var name1 = node1.name.value;
        var name2 = node2.name.value;
        if (name1 !== name2) {
          return [[responseName, '"'.concat(name1, '" and "').concat(name2, '" are different fields')], [node1], [node2]];
        }
        var args1 = (_node1$arguments = node1.arguments) !== null && _node1$arguments !== void 0 ? _node1$arguments : [];
        var args2 = (_node2$arguments = node2.arguments) !== null && _node2$arguments !== void 0 ? _node2$arguments : [];
        if (!sameArguments(args1, args2)) {
          return [[responseName, "they have differing arguments"], [node1], [node2]];
        }
      }
      var type1 = def1 === null || def1 === void 0 ? void 0 : def1.type;
      var type2 = def2 === null || def2 === void 0 ? void 0 : def2.type;
      if (type1 && type2 && doTypesConflict(type1, type2)) {
        return [[responseName, 'they return conflicting types "'.concat((0, _inspect.default)(type1), '" and "').concat((0, _inspect.default)(type2), '"')], [node1], [node2]];
      }
      var selectionSet1 = node1.selectionSet;
      var selectionSet2 = node2.selectionSet;
      if (selectionSet1 && selectionSet2) {
        var conflicts = findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, (0, _definition.getNamedType)(type1), selectionSet1, (0, _definition.getNamedType)(type2), selectionSet2);
        return subfieldConflicts(conflicts, responseName, node1, node2);
      }
    }
    function sameArguments(arguments1, arguments2) {
      if (arguments1.length !== arguments2.length) {
        return false;
      }
      return arguments1.every(function(argument1) {
        var argument2 = (0, _find.default)(arguments2, function(argument) {
          return argument.name.value === argument1.name.value;
        });
        if (!argument2) {
          return false;
        }
        return sameValue(argument1.value, argument2.value);
      });
    }
    function sameValue(value1, value2) {
      return (0, _printer.print)(value1) === (0, _printer.print)(value2);
    }
    function doTypesConflict(type1, type2) {
      if ((0, _definition.isListType)(type1)) {
        return (0, _definition.isListType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
      }
      if ((0, _definition.isListType)(type2)) {
        return true;
      }
      if ((0, _definition.isNonNullType)(type1)) {
        return (0, _definition.isNonNullType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
      }
      if ((0, _definition.isNonNullType)(type2)) {
        return true;
      }
      if ((0, _definition.isLeafType)(type1) || (0, _definition.isLeafType)(type2)) {
        return type1 !== type2;
      }
      return false;
    }
    function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
      var cached = cachedFieldsAndFragmentNames.get(selectionSet);
      if (!cached) {
        var nodeAndDefs = Object.create(null);
        var fragmentNames = Object.create(null);
        _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames);
        cached = [nodeAndDefs, Object.keys(fragmentNames)];
        cachedFieldsAndFragmentNames.set(selectionSet, cached);
      }
      return cached;
    }
    function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
      var cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);
      if (cached) {
        return cached;
      }
      var fragmentType = (0, _typeFromAST.typeFromAST)(context.getSchema(), fragment.typeCondition);
      return getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
    }
    function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
      for (var _i9 = 0, _selectionSet$selecti2 = selectionSet.selections; _i9 < _selectionSet$selecti2.length; _i9++) {
        var selection = _selectionSet$selecti2[_i9];
        switch (selection.kind) {
          case _kinds.Kind.FIELD: {
            var fieldName = selection.name.value;
            var fieldDef = void 0;
            if ((0, _definition.isObjectType)(parentType) || (0, _definition.isInterfaceType)(parentType)) {
              fieldDef = parentType.getFields()[fieldName];
            }
            var responseName = selection.alias ? selection.alias.value : fieldName;
            if (!nodeAndDefs[responseName]) {
              nodeAndDefs[responseName] = [];
            }
            nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
            break;
          }
          case _kinds.Kind.FRAGMENT_SPREAD:
            fragmentNames[selection.name.value] = true;
            break;
          case _kinds.Kind.INLINE_FRAGMENT: {
            var typeCondition = selection.typeCondition;
            var inlineFragmentType = typeCondition ? (0, _typeFromAST.typeFromAST)(context.getSchema(), typeCondition) : parentType;
            _collectFieldsAndFragmentNames(context, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);
            break;
          }
        }
      }
    }
    function subfieldConflicts(conflicts, responseName, node1, node2) {
      if (conflicts.length > 0) {
        return [[responseName, conflicts.map(function(_ref6) {
          var reason = _ref6[0];
          return reason;
        })], conflicts.reduce(function(allFields, _ref7) {
          var fields1 = _ref7[1];
          return allFields.concat(fields1);
        }, [node1]), conflicts.reduce(function(allFields, _ref8) {
          var fields2 = _ref8[2];
          return allFields.concat(fields2);
        }, [node2])];
      }
    }
    var PairSet = /* @__PURE__ */ function() {
      function PairSet2() {
        this._data = Object.create(null);
      }
      var _proto = PairSet2.prototype;
      _proto.has = function has(a, b, areMutuallyExclusive) {
        var first = this._data[a];
        var result = first && first[b];
        if (result === void 0) {
          return false;
        }
        if (areMutuallyExclusive === false) {
          return result === false;
        }
        return true;
      };
      _proto.add = function add(a, b, areMutuallyExclusive) {
        this._pairSetAdd(a, b, areMutuallyExclusive);
        this._pairSetAdd(b, a, areMutuallyExclusive);
      };
      _proto._pairSetAdd = function _pairSetAdd(a, b, areMutuallyExclusive) {
        var map = this._data[a];
        if (!map) {
          map = Object.create(null);
          this._data[a] = map;
        }
        map[b] = areMutuallyExclusive;
      };
      return PairSet2;
    }();
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.js
var require_UniqueInputFieldNamesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueInputFieldNamesRule = UniqueInputFieldNamesRule;
    var _GraphQLError = require_GraphQLError();
    function UniqueInputFieldNamesRule(context) {
      var knownNameStack = [];
      var knownNames = Object.create(null);
      return {
        ObjectValue: {
          enter: function enter() {
            knownNameStack.push(knownNames);
            knownNames = Object.create(null);
          },
          leave: function leave() {
            knownNames = knownNameStack.pop();
          }
        },
        ObjectField: function ObjectField(node) {
          var fieldName = node.name.value;
          if (knownNames[fieldName]) {
            context.reportError(new _GraphQLError.GraphQLError('There can be only one input field named "'.concat(fieldName, '".'), [knownNames[fieldName], node.name]));
          } else {
            knownNames[fieldName] = node.name;
          }
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.js
var require_LoneSchemaDefinitionRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LoneSchemaDefinitionRule = LoneSchemaDefinitionRule;
    var _GraphQLError = require_GraphQLError();
    function LoneSchemaDefinitionRule(context) {
      var _ref, _ref2, _oldSchema$astNode;
      var oldSchema = context.getSchema();
      var alreadyDefined = (_ref = (_ref2 = (_oldSchema$astNode = oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.astNode) !== null && _oldSchema$astNode !== void 0 ? _oldSchema$astNode : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getQueryType()) !== null && _ref2 !== void 0 ? _ref2 : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getMutationType()) !== null && _ref !== void 0 ? _ref : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getSubscriptionType();
      var schemaDefinitionsCount = 0;
      return {
        SchemaDefinition: function SchemaDefinition(node) {
          if (alreadyDefined) {
            context.reportError(new _GraphQLError.GraphQLError("Cannot define a new schema within a schema extension.", node));
            return;
          }
          if (schemaDefinitionsCount > 0) {
            context.reportError(new _GraphQLError.GraphQLError("Must provide only one schema definition.", node));
          }
          ++schemaDefinitionsCount;
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueOperationTypesRule.js
var require_UniqueOperationTypesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueOperationTypesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueOperationTypesRule = UniqueOperationTypesRule;
    var _GraphQLError = require_GraphQLError();
    function UniqueOperationTypesRule(context) {
      var schema = context.getSchema();
      var definedOperationTypes = Object.create(null);
      var existingOperationTypes = schema ? {
        query: schema.getQueryType(),
        mutation: schema.getMutationType(),
        subscription: schema.getSubscriptionType()
      } : {};
      return {
        SchemaDefinition: checkOperationTypes,
        SchemaExtension: checkOperationTypes
      };
      function checkOperationTypes(node) {
        var _node$operationTypes;
        var operationTypesNodes = (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : [];
        for (var _i2 = 0; _i2 < operationTypesNodes.length; _i2++) {
          var operationType = operationTypesNodes[_i2];
          var operation = operationType.operation;
          var alreadyDefinedOperationType = definedOperationTypes[operation];
          if (existingOperationTypes[operation]) {
            context.reportError(new _GraphQLError.GraphQLError("Type for ".concat(operation, " already defined in the schema. It cannot be redefined."), operationType));
          } else if (alreadyDefinedOperationType) {
            context.reportError(new _GraphQLError.GraphQLError("There can be only one ".concat(operation, " type in schema."), [alreadyDefinedOperationType, operationType]));
          } else {
            definedOperationTypes[operation] = operationType;
          }
        }
        return false;
      }
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueTypeNamesRule.js
var require_UniqueTypeNamesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueTypeNamesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueTypeNamesRule = UniqueTypeNamesRule;
    var _GraphQLError = require_GraphQLError();
    function UniqueTypeNamesRule(context) {
      var knownTypeNames = Object.create(null);
      var schema = context.getSchema();
      return {
        ScalarTypeDefinition: checkTypeName,
        ObjectTypeDefinition: checkTypeName,
        InterfaceTypeDefinition: checkTypeName,
        UnionTypeDefinition: checkTypeName,
        EnumTypeDefinition: checkTypeName,
        InputObjectTypeDefinition: checkTypeName
      };
      function checkTypeName(node) {
        var typeName = node.name.value;
        if (schema !== null && schema !== void 0 && schema.getType(typeName)) {
          context.reportError(new _GraphQLError.GraphQLError('Type "'.concat(typeName, '" already exists in the schema. It cannot also be defined in this type definition.'), node.name));
          return;
        }
        if (knownTypeNames[typeName]) {
          context.reportError(new _GraphQLError.GraphQLError('There can be only one type named "'.concat(typeName, '".'), [knownTypeNames[typeName], node.name]));
        } else {
          knownTypeNames[typeName] = node.name;
        }
        return false;
      }
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.js
var require_UniqueEnumValueNamesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueEnumValueNamesRule = UniqueEnumValueNamesRule;
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    function UniqueEnumValueNamesRule(context) {
      var schema = context.getSchema();
      var existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
      var knownValueNames = Object.create(null);
      return {
        EnumTypeDefinition: checkValueUniqueness,
        EnumTypeExtension: checkValueUniqueness
      };
      function checkValueUniqueness(node) {
        var _node$values;
        var typeName = node.name.value;
        if (!knownValueNames[typeName]) {
          knownValueNames[typeName] = Object.create(null);
        }
        var valueNodes = (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : [];
        var valueNames = knownValueNames[typeName];
        for (var _i2 = 0; _i2 < valueNodes.length; _i2++) {
          var valueDef = valueNodes[_i2];
          var valueName = valueDef.name.value;
          var existingType = existingTypeMap[typeName];
          if ((0, _definition.isEnumType)(existingType) && existingType.getValue(valueName)) {
            context.reportError(new _GraphQLError.GraphQLError('Enum value "'.concat(typeName, ".").concat(valueName, '" already exists in the schema. It cannot also be defined in this type extension.'), valueDef.name));
          } else if (valueNames[valueName]) {
            context.reportError(new _GraphQLError.GraphQLError('Enum value "'.concat(typeName, ".").concat(valueName, '" can only be defined once.'), [valueNames[valueName], valueDef.name]));
          } else {
            valueNames[valueName] = valueDef.name;
          }
        }
        return false;
      }
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.js
var require_UniqueFieldDefinitionNamesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueFieldDefinitionNamesRule = UniqueFieldDefinitionNamesRule;
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    function UniqueFieldDefinitionNamesRule(context) {
      var schema = context.getSchema();
      var existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
      var knownFieldNames = Object.create(null);
      return {
        InputObjectTypeDefinition: checkFieldUniqueness,
        InputObjectTypeExtension: checkFieldUniqueness,
        InterfaceTypeDefinition: checkFieldUniqueness,
        InterfaceTypeExtension: checkFieldUniqueness,
        ObjectTypeDefinition: checkFieldUniqueness,
        ObjectTypeExtension: checkFieldUniqueness
      };
      function checkFieldUniqueness(node) {
        var _node$fields;
        var typeName = node.name.value;
        if (!knownFieldNames[typeName]) {
          knownFieldNames[typeName] = Object.create(null);
        }
        var fieldNodes = (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : [];
        var fieldNames = knownFieldNames[typeName];
        for (var _i2 = 0; _i2 < fieldNodes.length; _i2++) {
          var fieldDef = fieldNodes[_i2];
          var fieldName = fieldDef.name.value;
          if (hasField(existingTypeMap[typeName], fieldName)) {
            context.reportError(new _GraphQLError.GraphQLError('Field "'.concat(typeName, ".").concat(fieldName, '" already exists in the schema. It cannot also be defined in this type extension.'), fieldDef.name));
          } else if (fieldNames[fieldName]) {
            context.reportError(new _GraphQLError.GraphQLError('Field "'.concat(typeName, ".").concat(fieldName, '" can only be defined once.'), [fieldNames[fieldName], fieldDef.name]));
          } else {
            fieldNames[fieldName] = fieldDef.name;
          }
        }
        return false;
      }
    }
    function hasField(type, fieldName) {
      if ((0, _definition.isObjectType)(type) || (0, _definition.isInterfaceType)(type) || (0, _definition.isInputObjectType)(type)) {
        return type.getFields()[fieldName] != null;
      }
      return false;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.js
var require_UniqueDirectiveNamesRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UniqueDirectiveNamesRule = UniqueDirectiveNamesRule;
    var _GraphQLError = require_GraphQLError();
    function UniqueDirectiveNamesRule(context) {
      var knownDirectiveNames = Object.create(null);
      var schema = context.getSchema();
      return {
        DirectiveDefinition: function DirectiveDefinition(node) {
          var directiveName = node.name.value;
          if (schema !== null && schema !== void 0 && schema.getDirective(directiveName)) {
            context.reportError(new _GraphQLError.GraphQLError('Directive "@'.concat(directiveName, '" already exists in the schema. It cannot be redefined.'), node.name));
            return;
          }
          if (knownDirectiveNames[directiveName]) {
            context.reportError(new _GraphQLError.GraphQLError('There can be only one directive named "@'.concat(directiveName, '".'), [knownDirectiveNames[directiveName], node.name]));
          } else {
            knownDirectiveNames[directiveName] = node.name;
          }
          return false;
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.js
var require_PossibleTypeExtensionsRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PossibleTypeExtensionsRule = PossibleTypeExtensionsRule;
    var _inspect = _interopRequireDefault(require_inspect());
    var _invariant = _interopRequireDefault(require_invariant());
    var _didYouMean = _interopRequireDefault(require_didYouMean());
    var _suggestionList = _interopRequireDefault(require_suggestionList());
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _predicates = require_predicates();
    var _definition = require_definition();
    var _defKindToExtKind;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function PossibleTypeExtensionsRule(context) {
      var schema = context.getSchema();
      var definedTypes = Object.create(null);
      for (var _i2 = 0, _context$getDocument$2 = context.getDocument().definitions; _i2 < _context$getDocument$2.length; _i2++) {
        var def = _context$getDocument$2[_i2];
        if ((0, _predicates.isTypeDefinitionNode)(def)) {
          definedTypes[def.name.value] = def;
        }
      }
      return {
        ScalarTypeExtension: checkExtension,
        ObjectTypeExtension: checkExtension,
        InterfaceTypeExtension: checkExtension,
        UnionTypeExtension: checkExtension,
        EnumTypeExtension: checkExtension,
        InputObjectTypeExtension: checkExtension
      };
      function checkExtension(node) {
        var typeName = node.name.value;
        var defNode = definedTypes[typeName];
        var existingType = schema === null || schema === void 0 ? void 0 : schema.getType(typeName);
        var expectedKind;
        if (defNode) {
          expectedKind = defKindToExtKind[defNode.kind];
        } else if (existingType) {
          expectedKind = typeToExtKind(existingType);
        }
        if (expectedKind) {
          if (expectedKind !== node.kind) {
            var kindStr = extensionKindToTypeName(node.kind);
            context.reportError(new _GraphQLError.GraphQLError("Cannot extend non-".concat(kindStr, ' type "').concat(typeName, '".'), defNode ? [defNode, node] : node));
          }
        } else {
          var allTypeNames = Object.keys(definedTypes);
          if (schema) {
            allTypeNames = allTypeNames.concat(Object.keys(schema.getTypeMap()));
          }
          var suggestedTypes = (0, _suggestionList.default)(typeName, allTypeNames);
          context.reportError(new _GraphQLError.GraphQLError('Cannot extend type "'.concat(typeName, '" because it is not defined.') + (0, _didYouMean.default)(suggestedTypes), node.name));
        }
      }
    }
    var defKindToExtKind = (_defKindToExtKind = {}, _defineProperty(_defKindToExtKind, _kinds.Kind.SCALAR_TYPE_DEFINITION, _kinds.Kind.SCALAR_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _kinds.Kind.OBJECT_TYPE_DEFINITION, _kinds.Kind.OBJECT_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _kinds.Kind.INTERFACE_TYPE_DEFINITION, _kinds.Kind.INTERFACE_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _kinds.Kind.UNION_TYPE_DEFINITION, _kinds.Kind.UNION_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _kinds.Kind.ENUM_TYPE_DEFINITION, _kinds.Kind.ENUM_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION, _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION), _defKindToExtKind);
    function typeToExtKind(type) {
      if ((0, _definition.isScalarType)(type)) {
        return _kinds.Kind.SCALAR_TYPE_EXTENSION;
      }
      if ((0, _definition.isObjectType)(type)) {
        return _kinds.Kind.OBJECT_TYPE_EXTENSION;
      }
      if ((0, _definition.isInterfaceType)(type)) {
        return _kinds.Kind.INTERFACE_TYPE_EXTENSION;
      }
      if ((0, _definition.isUnionType)(type)) {
        return _kinds.Kind.UNION_TYPE_EXTENSION;
      }
      if ((0, _definition.isEnumType)(type)) {
        return _kinds.Kind.ENUM_TYPE_EXTENSION;
      }
      if ((0, _definition.isInputObjectType)(type)) {
        return _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION;
      }
      (0, _invariant.default)(0, "Unexpected type: " + (0, _inspect.default)(type));
    }
    function extensionKindToTypeName(kind) {
      switch (kind) {
        case _kinds.Kind.SCALAR_TYPE_EXTENSION:
          return "scalar";
        case _kinds.Kind.OBJECT_TYPE_EXTENSION:
          return "object";
        case _kinds.Kind.INTERFACE_TYPE_EXTENSION:
          return "interface";
        case _kinds.Kind.UNION_TYPE_EXTENSION:
          return "union";
        case _kinds.Kind.ENUM_TYPE_EXTENSION:
          return "enum";
        case _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
          return "input object";
      }
      (0, _invariant.default)(0, "Unexpected kind: " + (0, _inspect.default)(kind));
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/specifiedRules.js
var require_specifiedRules = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/specifiedRules.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.specifiedSDLRules = exports.specifiedRules = void 0;
    var _ExecutableDefinitionsRule = require_ExecutableDefinitionsRule();
    var _UniqueOperationNamesRule = require_UniqueOperationNamesRule();
    var _LoneAnonymousOperationRule = require_LoneAnonymousOperationRule();
    var _SingleFieldSubscriptionsRule = require_SingleFieldSubscriptionsRule();
    var _KnownTypeNamesRule = require_KnownTypeNamesRule();
    var _FragmentsOnCompositeTypesRule = require_FragmentsOnCompositeTypesRule();
    var _VariablesAreInputTypesRule = require_VariablesAreInputTypesRule();
    var _ScalarLeafsRule = require_ScalarLeafsRule();
    var _FieldsOnCorrectTypeRule = require_FieldsOnCorrectTypeRule();
    var _UniqueFragmentNamesRule = require_UniqueFragmentNamesRule();
    var _KnownFragmentNamesRule = require_KnownFragmentNamesRule();
    var _NoUnusedFragmentsRule = require_NoUnusedFragmentsRule();
    var _PossibleFragmentSpreadsRule = require_PossibleFragmentSpreadsRule();
    var _NoFragmentCyclesRule = require_NoFragmentCyclesRule();
    var _UniqueVariableNamesRule = require_UniqueVariableNamesRule();
    var _NoUndefinedVariablesRule = require_NoUndefinedVariablesRule();
    var _NoUnusedVariablesRule = require_NoUnusedVariablesRule();
    var _KnownDirectivesRule = require_KnownDirectivesRule();
    var _UniqueDirectivesPerLocationRule = require_UniqueDirectivesPerLocationRule();
    var _KnownArgumentNamesRule = require_KnownArgumentNamesRule();
    var _UniqueArgumentNamesRule = require_UniqueArgumentNamesRule();
    var _ValuesOfCorrectTypeRule = require_ValuesOfCorrectTypeRule();
    var _ProvidedRequiredArgumentsRule = require_ProvidedRequiredArgumentsRule();
    var _VariablesInAllowedPositionRule = require_VariablesInAllowedPositionRule();
    var _OverlappingFieldsCanBeMergedRule = require_OverlappingFieldsCanBeMergedRule();
    var _UniqueInputFieldNamesRule = require_UniqueInputFieldNamesRule();
    var _LoneSchemaDefinitionRule = require_LoneSchemaDefinitionRule();
    var _UniqueOperationTypesRule = require_UniqueOperationTypesRule();
    var _UniqueTypeNamesRule = require_UniqueTypeNamesRule();
    var _UniqueEnumValueNamesRule = require_UniqueEnumValueNamesRule();
    var _UniqueFieldDefinitionNamesRule = require_UniqueFieldDefinitionNamesRule();
    var _UniqueDirectiveNamesRule = require_UniqueDirectiveNamesRule();
    var _PossibleTypeExtensionsRule = require_PossibleTypeExtensionsRule();
    var specifiedRules2 = Object.freeze([_ExecutableDefinitionsRule.ExecutableDefinitionsRule, _UniqueOperationNamesRule.UniqueOperationNamesRule, _LoneAnonymousOperationRule.LoneAnonymousOperationRule, _SingleFieldSubscriptionsRule.SingleFieldSubscriptionsRule, _KnownTypeNamesRule.KnownTypeNamesRule, _FragmentsOnCompositeTypesRule.FragmentsOnCompositeTypesRule, _VariablesAreInputTypesRule.VariablesAreInputTypesRule, _ScalarLeafsRule.ScalarLeafsRule, _FieldsOnCorrectTypeRule.FieldsOnCorrectTypeRule, _UniqueFragmentNamesRule.UniqueFragmentNamesRule, _KnownFragmentNamesRule.KnownFragmentNamesRule, _NoUnusedFragmentsRule.NoUnusedFragmentsRule, _PossibleFragmentSpreadsRule.PossibleFragmentSpreadsRule, _NoFragmentCyclesRule.NoFragmentCyclesRule, _UniqueVariableNamesRule.UniqueVariableNamesRule, _NoUndefinedVariablesRule.NoUndefinedVariablesRule, _NoUnusedVariablesRule.NoUnusedVariablesRule, _KnownDirectivesRule.KnownDirectivesRule, _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule, _KnownArgumentNamesRule.KnownArgumentNamesRule, _UniqueArgumentNamesRule.UniqueArgumentNamesRule, _ValuesOfCorrectTypeRule.ValuesOfCorrectTypeRule, _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsRule, _VariablesInAllowedPositionRule.VariablesInAllowedPositionRule, _OverlappingFieldsCanBeMergedRule.OverlappingFieldsCanBeMergedRule, _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule]);
    exports.specifiedRules = specifiedRules2;
    var specifiedSDLRules = Object.freeze([_LoneSchemaDefinitionRule.LoneSchemaDefinitionRule, _UniqueOperationTypesRule.UniqueOperationTypesRule, _UniqueTypeNamesRule.UniqueTypeNamesRule, _UniqueEnumValueNamesRule.UniqueEnumValueNamesRule, _UniqueFieldDefinitionNamesRule.UniqueFieldDefinitionNamesRule, _UniqueDirectiveNamesRule.UniqueDirectiveNamesRule, _KnownTypeNamesRule.KnownTypeNamesRule, _KnownDirectivesRule.KnownDirectivesRule, _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule, _PossibleTypeExtensionsRule.PossibleTypeExtensionsRule, _KnownArgumentNamesRule.KnownArgumentNamesOnDirectivesRule, _UniqueArgumentNamesRule.UniqueArgumentNamesRule, _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule, _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsOnDirectivesRule]);
    exports.specifiedSDLRules = specifiedSDLRules;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/ValidationContext.js
var require_ValidationContext = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/ValidationContext.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ValidationContext = exports.SDLValidationContext = exports.ASTValidationContext = void 0;
    var _kinds = require_kinds();
    var _visitor = require_visitor();
    var _TypeInfo = require_TypeInfo();
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var ASTValidationContext = /* @__PURE__ */ function() {
      function ASTValidationContext2(ast, onError) {
        this._ast = ast;
        this._fragments = void 0;
        this._fragmentSpreads = new Map();
        this._recursivelyReferencedFragments = new Map();
        this._onError = onError;
      }
      var _proto = ASTValidationContext2.prototype;
      _proto.reportError = function reportError(error) {
        this._onError(error);
      };
      _proto.getDocument = function getDocument() {
        return this._ast;
      };
      _proto.getFragment = function getFragment(name) {
        var fragments = this._fragments;
        if (!fragments) {
          this._fragments = fragments = this.getDocument().definitions.reduce(function(frags, statement) {
            if (statement.kind === _kinds.Kind.FRAGMENT_DEFINITION) {
              frags[statement.name.value] = statement;
            }
            return frags;
          }, Object.create(null));
        }
        return fragments[name];
      };
      _proto.getFragmentSpreads = function getFragmentSpreads(node) {
        var spreads = this._fragmentSpreads.get(node);
        if (!spreads) {
          spreads = [];
          var setsToVisit = [node];
          while (setsToVisit.length !== 0) {
            var set = setsToVisit.pop();
            for (var _i2 = 0, _set$selections2 = set.selections; _i2 < _set$selections2.length; _i2++) {
              var selection = _set$selections2[_i2];
              if (selection.kind === _kinds.Kind.FRAGMENT_SPREAD) {
                spreads.push(selection);
              } else if (selection.selectionSet) {
                setsToVisit.push(selection.selectionSet);
              }
            }
          }
          this._fragmentSpreads.set(node, spreads);
        }
        return spreads;
      };
      _proto.getRecursivelyReferencedFragments = function getRecursivelyReferencedFragments(operation) {
        var fragments = this._recursivelyReferencedFragments.get(operation);
        if (!fragments) {
          fragments = [];
          var collectedNames = Object.create(null);
          var nodesToVisit = [operation.selectionSet];
          while (nodesToVisit.length !== 0) {
            var node = nodesToVisit.pop();
            for (var _i4 = 0, _this$getFragmentSpre2 = this.getFragmentSpreads(node); _i4 < _this$getFragmentSpre2.length; _i4++) {
              var spread = _this$getFragmentSpre2[_i4];
              var fragName = spread.name.value;
              if (collectedNames[fragName] !== true) {
                collectedNames[fragName] = true;
                var fragment = this.getFragment(fragName);
                if (fragment) {
                  fragments.push(fragment);
                  nodesToVisit.push(fragment.selectionSet);
                }
              }
            }
          }
          this._recursivelyReferencedFragments.set(operation, fragments);
        }
        return fragments;
      };
      return ASTValidationContext2;
    }();
    exports.ASTValidationContext = ASTValidationContext;
    var SDLValidationContext = /* @__PURE__ */ function(_ASTValidationContext) {
      _inheritsLoose(SDLValidationContext2, _ASTValidationContext);
      function SDLValidationContext2(ast, schema, onError) {
        var _this;
        _this = _ASTValidationContext.call(this, ast, onError) || this;
        _this._schema = schema;
        return _this;
      }
      var _proto2 = SDLValidationContext2.prototype;
      _proto2.getSchema = function getSchema() {
        return this._schema;
      };
      return SDLValidationContext2;
    }(ASTValidationContext);
    exports.SDLValidationContext = SDLValidationContext;
    var ValidationContext = /* @__PURE__ */ function(_ASTValidationContext2) {
      _inheritsLoose(ValidationContext2, _ASTValidationContext2);
      function ValidationContext2(schema, ast, typeInfo, onError) {
        var _this2;
        _this2 = _ASTValidationContext2.call(this, ast, onError) || this;
        _this2._schema = schema;
        _this2._typeInfo = typeInfo;
        _this2._variableUsages = new Map();
        _this2._recursiveVariableUsages = new Map();
        return _this2;
      }
      var _proto3 = ValidationContext2.prototype;
      _proto3.getSchema = function getSchema() {
        return this._schema;
      };
      _proto3.getVariableUsages = function getVariableUsages(node) {
        var usages = this._variableUsages.get(node);
        if (!usages) {
          var newUsages = [];
          var typeInfo = new _TypeInfo.TypeInfo(this._schema);
          (0, _visitor.visit)(node, (0, _TypeInfo.visitWithTypeInfo)(typeInfo, {
            VariableDefinition: function VariableDefinition() {
              return false;
            },
            Variable: function Variable(variable) {
              newUsages.push({
                node: variable,
                type: typeInfo.getInputType(),
                defaultValue: typeInfo.getDefaultValue()
              });
            }
          }));
          usages = newUsages;
          this._variableUsages.set(node, usages);
        }
        return usages;
      };
      _proto3.getRecursiveVariableUsages = function getRecursiveVariableUsages(operation) {
        var usages = this._recursiveVariableUsages.get(operation);
        if (!usages) {
          usages = this.getVariableUsages(operation);
          for (var _i6 = 0, _this$getRecursivelyR2 = this.getRecursivelyReferencedFragments(operation); _i6 < _this$getRecursivelyR2.length; _i6++) {
            var frag = _this$getRecursivelyR2[_i6];
            usages = usages.concat(this.getVariableUsages(frag));
          }
          this._recursiveVariableUsages.set(operation, usages);
        }
        return usages;
      };
      _proto3.getType = function getType() {
        return this._typeInfo.getType();
      };
      _proto3.getParentType = function getParentType() {
        return this._typeInfo.getParentType();
      };
      _proto3.getInputType = function getInputType() {
        return this._typeInfo.getInputType();
      };
      _proto3.getParentInputType = function getParentInputType() {
        return this._typeInfo.getParentInputType();
      };
      _proto3.getFieldDef = function getFieldDef() {
        return this._typeInfo.getFieldDef();
      };
      _proto3.getDirective = function getDirective() {
        return this._typeInfo.getDirective();
      };
      _proto3.getArgument = function getArgument() {
        return this._typeInfo.getArgument();
      };
      _proto3.getEnumValue = function getEnumValue() {
        return this._typeInfo.getEnumValue();
      };
      return ValidationContext2;
    }(ASTValidationContext);
    exports.ValidationContext = ValidationContext;
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/validate.js
var require_validate2 = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/validate.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.validate = validate2;
    exports.validateSDL = validateSDL;
    exports.assertValidSDL = assertValidSDL;
    exports.assertValidSDLExtension = assertValidSDLExtension;
    var _devAssert = _interopRequireDefault(require_devAssert());
    var _GraphQLError = require_GraphQLError();
    var _visitor = require_visitor();
    var _validate = require_validate();
    var _TypeInfo = require_TypeInfo();
    var _specifiedRules = require_specifiedRules();
    var _ValidationContext = require_ValidationContext();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function validate2(schema, documentAST) {
      var rules = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _specifiedRules.specifiedRules;
      var typeInfo = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : new _TypeInfo.TypeInfo(schema);
      var options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        maxErrors: void 0
      };
      documentAST || (0, _devAssert.default)(0, "Must provide document.");
      (0, _validate.assertValidSchema)(schema);
      var abortObj = Object.freeze({});
      var errors = [];
      var context = new _ValidationContext.ValidationContext(schema, documentAST, typeInfo, function(error) {
        if (options.maxErrors != null && errors.length >= options.maxErrors) {
          errors.push(new _GraphQLError.GraphQLError("Too many validation errors, error limit reached. Validation aborted."));
          throw abortObj;
        }
        errors.push(error);
      });
      var visitor = (0, _visitor.visitInParallel)(rules.map(function(rule) {
        return rule(context);
      }));
      try {
        (0, _visitor.visit)(documentAST, (0, _TypeInfo.visitWithTypeInfo)(typeInfo, visitor));
      } catch (e) {
        if (e !== abortObj) {
          throw e;
        }
      }
      return errors;
    }
    function validateSDL(documentAST, schemaToExtend) {
      var rules = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _specifiedRules.specifiedSDLRules;
      var errors = [];
      var context = new _ValidationContext.SDLValidationContext(documentAST, schemaToExtend, function(error) {
        errors.push(error);
      });
      var visitors = rules.map(function(rule) {
        return rule(context);
      });
      (0, _visitor.visit)(documentAST, (0, _visitor.visitInParallel)(visitors));
      return errors;
    }
    function assertValidSDL(documentAST) {
      var errors = validateSDL(documentAST);
      if (errors.length !== 0) {
        throw new Error(errors.map(function(error) {
          return error.message;
        }).join("\n\n"));
      }
    }
    function assertValidSDLExtension(documentAST, schema) {
      var errors = validateSDL(documentAST, schema);
      if (errors.length !== 0) {
        throw new Error(errors.map(function(error) {
          return error.message;
        }).join("\n\n"));
      }
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/memoize3.js
var require_memoize3 = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/memoize3.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = memoize3;
    function memoize3(fn) {
      var cache0;
      return function memoized(a1, a2, a3) {
        if (!cache0) {
          cache0 = new WeakMap();
        }
        var cache1 = cache0.get(a1);
        var cache2;
        if (cache1) {
          cache2 = cache1.get(a2);
          if (cache2) {
            var cachedValue = cache2.get(a3);
            if (cachedValue !== void 0) {
              return cachedValue;
            }
          }
        } else {
          cache1 = new WeakMap();
          cache0.set(a1, cache1);
        }
        if (!cache2) {
          cache2 = new WeakMap();
          cache1.set(a2, cache2);
        }
        var newValue = fn(a1, a2, a3);
        cache2.set(a3, newValue);
        return newValue;
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/promiseReduce.js
var require_promiseReduce = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/promiseReduce.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = promiseReduce;
    var _isPromise = _interopRequireDefault(require_isPromise());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function promiseReduce(values, callback, initialValue) {
      return values.reduce(function(previous, value) {
        return (0, _isPromise.default)(previous) ? previous.then(function(resolved) {
          return callback(resolved, value);
        }) : callback(previous, value);
      }, initialValue);
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/promiseForObject.js
var require_promiseForObject = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/promiseForObject.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = promiseForObject;
    function promiseForObject(object) {
      var keys = Object.keys(object);
      var valuesAndPromises = keys.map(function(name) {
        return object[name];
      });
      return Promise.all(valuesAndPromises).then(function(values) {
        return values.reduce(function(resolvedObject, value, i) {
          resolvedObject[keys[i]] = value;
          return resolvedObject;
        }, Object.create(null));
      });
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/Path.js
var require_Path = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/Path.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addPath = addPath;
    exports.pathToArray = pathToArray;
    function addPath(prev, key, typename) {
      return {
        prev,
        key,
        typename
      };
    }
    function pathToArray(path) {
      var flattened = [];
      var curr = path;
      while (curr) {
        flattened.push(curr.key);
        curr = curr.prev;
      }
      return flattened.reverse();
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/getOperationRootType.js
var require_getOperationRootType = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/getOperationRootType.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getOperationRootType = getOperationRootType2;
    var _GraphQLError = require_GraphQLError();
    function getOperationRootType2(schema, operation) {
      if (operation.operation === "query") {
        var queryType = schema.getQueryType();
        if (!queryType) {
          throw new _GraphQLError.GraphQLError("Schema does not define the required query root type.", operation);
        }
        return queryType;
      }
      if (operation.operation === "mutation") {
        var mutationType = schema.getMutationType();
        if (!mutationType) {
          throw new _GraphQLError.GraphQLError("Schema is not configured for mutations.", operation);
        }
        return mutationType;
      }
      if (operation.operation === "subscription") {
        var subscriptionType = schema.getSubscriptionType();
        if (!subscriptionType) {
          throw new _GraphQLError.GraphQLError("Schema is not configured for subscriptions.", operation);
        }
        return subscriptionType;
      }
      throw new _GraphQLError.GraphQLError("Can only have query, mutation and subscription operations.", operation);
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/printPathArray.js
var require_printPathArray = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/printPathArray.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = printPathArray;
    function printPathArray(path) {
      return path.map(function(key) {
        return typeof key === "number" ? "[" + key.toString() + "]" : "." + key;
      }).join("");
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/valueFromAST.js
var require_valueFromAST = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/valueFromAST.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.valueFromAST = valueFromAST2;
    var _objectValues3 = _interopRequireDefault(require_objectValues());
    var _keyMap = _interopRequireDefault(require_keyMap());
    var _inspect = _interopRequireDefault(require_inspect());
    var _invariant = _interopRequireDefault(require_invariant());
    var _kinds = require_kinds();
    var _definition = require_definition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function valueFromAST2(valueNode, type, variables) {
      if (!valueNode) {
        return;
      }
      if (valueNode.kind === _kinds.Kind.VARIABLE) {
        var variableName = valueNode.name.value;
        if (variables == null || variables[variableName] === void 0) {
          return;
        }
        var variableValue = variables[variableName];
        if (variableValue === null && (0, _definition.isNonNullType)(type)) {
          return;
        }
        return variableValue;
      }
      if ((0, _definition.isNonNullType)(type)) {
        if (valueNode.kind === _kinds.Kind.NULL) {
          return;
        }
        return valueFromAST2(valueNode, type.ofType, variables);
      }
      if (valueNode.kind === _kinds.Kind.NULL) {
        return null;
      }
      if ((0, _definition.isListType)(type)) {
        var itemType = type.ofType;
        if (valueNode.kind === _kinds.Kind.LIST) {
          var coercedValues = [];
          for (var _i2 = 0, _valueNode$values2 = valueNode.values; _i2 < _valueNode$values2.length; _i2++) {
            var itemNode = _valueNode$values2[_i2];
            if (isMissingVariable(itemNode, variables)) {
              if ((0, _definition.isNonNullType)(itemType)) {
                return;
              }
              coercedValues.push(null);
            } else {
              var itemValue = valueFromAST2(itemNode, itemType, variables);
              if (itemValue === void 0) {
                return;
              }
              coercedValues.push(itemValue);
            }
          }
          return coercedValues;
        }
        var coercedValue = valueFromAST2(valueNode, itemType, variables);
        if (coercedValue === void 0) {
          return;
        }
        return [coercedValue];
      }
      if ((0, _definition.isInputObjectType)(type)) {
        if (valueNode.kind !== _kinds.Kind.OBJECT) {
          return;
        }
        var coercedObj = Object.create(null);
        var fieldNodes = (0, _keyMap.default)(valueNode.fields, function(field2) {
          return field2.name.value;
        });
        for (var _i4 = 0, _objectValues2 = (0, _objectValues3.default)(type.getFields()); _i4 < _objectValues2.length; _i4++) {
          var field = _objectValues2[_i4];
          var fieldNode = fieldNodes[field.name];
          if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
            if (field.defaultValue !== void 0) {
              coercedObj[field.name] = field.defaultValue;
            } else if ((0, _definition.isNonNullType)(field.type)) {
              return;
            }
            continue;
          }
          var fieldValue = valueFromAST2(fieldNode.value, field.type, variables);
          if (fieldValue === void 0) {
            return;
          }
          coercedObj[field.name] = fieldValue;
        }
        return coercedObj;
      }
      if ((0, _definition.isLeafType)(type)) {
        var result;
        try {
          result = type.parseLiteral(valueNode, variables);
        } catch (_error) {
          return;
        }
        if (result === void 0) {
          return;
        }
        return result;
      }
      (0, _invariant.default)(0, "Unexpected input type: " + (0, _inspect.default)(type));
    }
    function isMissingVariable(valueNode, variables) {
      return valueNode.kind === _kinds.Kind.VARIABLE && (variables == null || variables[valueNode.name.value] === void 0);
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/coerceInputValue.js
var require_coerceInputValue = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/coerceInputValue.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.coerceInputValue = coerceInputValue;
    var _objectValues3 = _interopRequireDefault(require_objectValues());
    var _inspect = _interopRequireDefault(require_inspect());
    var _invariant = _interopRequireDefault(require_invariant());
    var _didYouMean = _interopRequireDefault(require_didYouMean());
    var _isObjectLike = _interopRequireDefault(require_isObjectLike());
    var _safeArrayFrom = _interopRequireDefault(require_safeArrayFrom());
    var _suggestionList = _interopRequireDefault(require_suggestionList());
    var _printPathArray = _interopRequireDefault(require_printPathArray());
    var _Path = require_Path();
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function coerceInputValue(inputValue, type) {
      var onError = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultOnError;
      return coerceInputValueImpl(inputValue, type, onError);
    }
    function defaultOnError(path, invalidValue, error) {
      var errorPrefix = "Invalid value " + (0, _inspect.default)(invalidValue);
      if (path.length > 0) {
        errorPrefix += ' at "value'.concat((0, _printPathArray.default)(path), '"');
      }
      error.message = errorPrefix + ": " + error.message;
      throw error;
    }
    function coerceInputValueImpl(inputValue, type, onError, path) {
      if ((0, _definition.isNonNullType)(type)) {
        if (inputValue != null) {
          return coerceInputValueImpl(inputValue, type.ofType, onError, path);
        }
        onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError('Expected non-nullable type "'.concat((0, _inspect.default)(type), '" not to be null.')));
        return;
      }
      if (inputValue == null) {
        return null;
      }
      if ((0, _definition.isListType)(type)) {
        var itemType = type.ofType;
        var coercedList = (0, _safeArrayFrom.default)(inputValue, function(itemValue, index) {
          var itemPath = (0, _Path.addPath)(path, index, void 0);
          return coerceInputValueImpl(itemValue, itemType, onError, itemPath);
        });
        if (coercedList != null) {
          return coercedList;
        }
        return [coerceInputValueImpl(inputValue, itemType, onError, path)];
      }
      if ((0, _definition.isInputObjectType)(type)) {
        if (!(0, _isObjectLike.default)(inputValue)) {
          onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError('Expected type "'.concat(type.name, '" to be an object.')));
          return;
        }
        var coercedValue = {};
        var fieldDefs = type.getFields();
        for (var _i2 = 0, _objectValues2 = (0, _objectValues3.default)(fieldDefs); _i2 < _objectValues2.length; _i2++) {
          var field = _objectValues2[_i2];
          var fieldValue = inputValue[field.name];
          if (fieldValue === void 0) {
            if (field.defaultValue !== void 0) {
              coercedValue[field.name] = field.defaultValue;
            } else if ((0, _definition.isNonNullType)(field.type)) {
              var typeStr = (0, _inspect.default)(field.type);
              onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError('Field "'.concat(field.name, '" of required type "').concat(typeStr, '" was not provided.')));
            }
            continue;
          }
          coercedValue[field.name] = coerceInputValueImpl(fieldValue, field.type, onError, (0, _Path.addPath)(path, field.name, type.name));
        }
        for (var _i4 = 0, _Object$keys2 = Object.keys(inputValue); _i4 < _Object$keys2.length; _i4++) {
          var fieldName = _Object$keys2[_i4];
          if (!fieldDefs[fieldName]) {
            var suggestions = (0, _suggestionList.default)(fieldName, Object.keys(type.getFields()));
            onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError('Field "'.concat(fieldName, '" is not defined by type "').concat(type.name, '".') + (0, _didYouMean.default)(suggestions)));
          }
        }
        return coercedValue;
      }
      if ((0, _definition.isLeafType)(type)) {
        var parseResult;
        try {
          parseResult = type.parseValue(inputValue);
        } catch (error) {
          if (error instanceof _GraphQLError.GraphQLError) {
            onError((0, _Path.pathToArray)(path), inputValue, error);
          } else {
            onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError('Expected type "'.concat(type.name, '". ') + error.message, void 0, void 0, void 0, void 0, error));
          }
          return;
        }
        if (parseResult === void 0) {
          onError((0, _Path.pathToArray)(path), inputValue, new _GraphQLError.GraphQLError('Expected type "'.concat(type.name, '".')));
        }
        return parseResult;
      }
      (0, _invariant.default)(0, "Unexpected input type: " + (0, _inspect.default)(type));
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/execution/values.js
var require_values = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/execution/values.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getVariableValues = getVariableValues;
    exports.getArgumentValues = getArgumentValues;
    exports.getDirectiveValues = getDirectiveValues2;
    var _find = _interopRequireDefault(require_find());
    var _keyMap = _interopRequireDefault(require_keyMap());
    var _inspect = _interopRequireDefault(require_inspect());
    var _printPathArray = _interopRequireDefault(require_printPathArray());
    var _GraphQLError = require_GraphQLError();
    var _kinds = require_kinds();
    var _printer = require_printer();
    var _definition = require_definition();
    var _typeFromAST = require_typeFromAST();
    var _valueFromAST = require_valueFromAST();
    var _coerceInputValue = require_coerceInputValue();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getVariableValues(schema, varDefNodes, inputs, options) {
      var errors = [];
      var maxErrors = options === null || options === void 0 ? void 0 : options.maxErrors;
      try {
        var coerced = coerceVariableValues(schema, varDefNodes, inputs, function(error) {
          if (maxErrors != null && errors.length >= maxErrors) {
            throw new _GraphQLError.GraphQLError("Too many errors processing variables, error limit reached. Execution aborted.");
          }
          errors.push(error);
        });
        if (errors.length === 0) {
          return {
            coerced
          };
        }
      } catch (error) {
        errors.push(error);
      }
      return {
        errors
      };
    }
    function coerceVariableValues(schema, varDefNodes, inputs, onError) {
      var coercedValues = {};
      var _loop = function _loop2(_i22) {
        var varDefNode = varDefNodes[_i22];
        var varName = varDefNode.variable.name.value;
        var varType = (0, _typeFromAST.typeFromAST)(schema, varDefNode.type);
        if (!(0, _definition.isInputType)(varType)) {
          var varTypeStr = (0, _printer.print)(varDefNode.type);
          onError(new _GraphQLError.GraphQLError('Variable "$'.concat(varName, '" expected value of type "').concat(varTypeStr, '" which cannot be used as an input type.'), varDefNode.type));
          return "continue";
        }
        if (!hasOwnProperty(inputs, varName)) {
          if (varDefNode.defaultValue) {
            coercedValues[varName] = (0, _valueFromAST.valueFromAST)(varDefNode.defaultValue, varType);
          } else if ((0, _definition.isNonNullType)(varType)) {
            var _varTypeStr = (0, _inspect.default)(varType);
            onError(new _GraphQLError.GraphQLError('Variable "$'.concat(varName, '" of required type "').concat(_varTypeStr, '" was not provided.'), varDefNode));
          }
          return "continue";
        }
        var value = inputs[varName];
        if (value === null && (0, _definition.isNonNullType)(varType)) {
          var _varTypeStr2 = (0, _inspect.default)(varType);
          onError(new _GraphQLError.GraphQLError('Variable "$'.concat(varName, '" of non-null type "').concat(_varTypeStr2, '" must not be null.'), varDefNode));
          return "continue";
        }
        coercedValues[varName] = (0, _coerceInputValue.coerceInputValue)(value, varType, function(path, invalidValue, error) {
          var prefix = 'Variable "$'.concat(varName, '" got invalid value ') + (0, _inspect.default)(invalidValue);
          if (path.length > 0) {
            prefix += ' at "'.concat(varName).concat((0, _printPathArray.default)(path), '"');
          }
          onError(new _GraphQLError.GraphQLError(prefix + "; " + error.message, varDefNode, void 0, void 0, void 0, error.originalError));
        });
      };
      for (var _i2 = 0; _i2 < varDefNodes.length; _i2++) {
        var _ret = _loop(_i2);
        if (_ret === "continue")
          continue;
      }
      return coercedValues;
    }
    function getArgumentValues(def, node, variableValues) {
      var _node$arguments;
      var coercedValues = {};
      var argumentNodes = (_node$arguments = node.arguments) !== null && _node$arguments !== void 0 ? _node$arguments : [];
      var argNodeMap = (0, _keyMap.default)(argumentNodes, function(arg) {
        return arg.name.value;
      });
      for (var _i4 = 0, _def$args2 = def.args; _i4 < _def$args2.length; _i4++) {
        var argDef = _def$args2[_i4];
        var name = argDef.name;
        var argType = argDef.type;
        var argumentNode = argNodeMap[name];
        if (!argumentNode) {
          if (argDef.defaultValue !== void 0) {
            coercedValues[name] = argDef.defaultValue;
          } else if ((0, _definition.isNonNullType)(argType)) {
            throw new _GraphQLError.GraphQLError('Argument "'.concat(name, '" of required type "').concat((0, _inspect.default)(argType), '" ') + "was not provided.", node);
          }
          continue;
        }
        var valueNode = argumentNode.value;
        var isNull = valueNode.kind === _kinds.Kind.NULL;
        if (valueNode.kind === _kinds.Kind.VARIABLE) {
          var variableName = valueNode.name.value;
          if (variableValues == null || !hasOwnProperty(variableValues, variableName)) {
            if (argDef.defaultValue !== void 0) {
              coercedValues[name] = argDef.defaultValue;
            } else if ((0, _definition.isNonNullType)(argType)) {
              throw new _GraphQLError.GraphQLError('Argument "'.concat(name, '" of required type "').concat((0, _inspect.default)(argType), '" ') + 'was provided the variable "$'.concat(variableName, '" which was not provided a runtime value.'), valueNode);
            }
            continue;
          }
          isNull = variableValues[variableName] == null;
        }
        if (isNull && (0, _definition.isNonNullType)(argType)) {
          throw new _GraphQLError.GraphQLError('Argument "'.concat(name, '" of non-null type "').concat((0, _inspect.default)(argType), '" ') + "must not be null.", valueNode);
        }
        var coercedValue = (0, _valueFromAST.valueFromAST)(valueNode, argType, variableValues);
        if (coercedValue === void 0) {
          throw new _GraphQLError.GraphQLError('Argument "'.concat(name, '" has invalid value ').concat((0, _printer.print)(valueNode), "."), valueNode);
        }
        coercedValues[name] = coercedValue;
      }
      return coercedValues;
    }
    function getDirectiveValues2(directiveDef, node, variableValues) {
      var directiveNode = node.directives && (0, _find.default)(node.directives, function(directive) {
        return directive.name.value === directiveDef.name;
      });
      if (directiveNode) {
        return getArgumentValues(directiveDef, directiveNode, variableValues);
      }
    }
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/execution/execute.js
var require_execute = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/execution/execute.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.execute = execute;
    exports.executeSync = executeSync;
    exports.assertValidExecutionArguments = assertValidExecutionArguments;
    exports.buildExecutionContext = buildExecutionContext;
    exports.collectFields = collectFields2;
    exports.buildResolveInfo = buildResolveInfo;
    exports.getFieldDef = getFieldDef;
    exports.defaultFieldResolver = exports.defaultTypeResolver = void 0;
    var _inspect = _interopRequireDefault(require_inspect());
    var _memoize = _interopRequireDefault(require_memoize3());
    var _invariant = _interopRequireDefault(require_invariant());
    var _devAssert = _interopRequireDefault(require_devAssert());
    var _isPromise = _interopRequireDefault(require_isPromise());
    var _isObjectLike = _interopRequireDefault(require_isObjectLike());
    var _safeArrayFrom = _interopRequireDefault(require_safeArrayFrom());
    var _promiseReduce = _interopRequireDefault(require_promiseReduce());
    var _promiseForObject = _interopRequireDefault(require_promiseForObject());
    var _Path = require_Path();
    var _GraphQLError = require_GraphQLError();
    var _locatedError = require_locatedError();
    var _kinds = require_kinds();
    var _validate = require_validate();
    var _introspection = require_introspection();
    var _directives = require_directives();
    var _definition = require_definition();
    var _typeFromAST = require_typeFromAST();
    var _getOperationRootType = require_getOperationRootType();
    var _values = require_values();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function execute(argsOrSchema, document2, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
      return arguments.length === 1 ? executeImpl(argsOrSchema) : executeImpl({
        schema: argsOrSchema,
        document: document2,
        rootValue,
        contextValue,
        variableValues,
        operationName,
        fieldResolver,
        typeResolver
      });
    }
    function executeSync(args) {
      var result = executeImpl(args);
      if ((0, _isPromise.default)(result)) {
        throw new Error("GraphQL execution failed to complete synchronously.");
      }
      return result;
    }
    function executeImpl(args) {
      var schema = args.schema, document2 = args.document, rootValue = args.rootValue, contextValue = args.contextValue, variableValues = args.variableValues, operationName = args.operationName, fieldResolver = args.fieldResolver, typeResolver = args.typeResolver;
      assertValidExecutionArguments(schema, document2, variableValues);
      var exeContext = buildExecutionContext(schema, document2, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver);
      if (Array.isArray(exeContext)) {
        return {
          errors: exeContext
        };
      }
      var data = executeOperation(exeContext, exeContext.operation, rootValue);
      return buildResponse(exeContext, data);
    }
    function buildResponse(exeContext, data) {
      if ((0, _isPromise.default)(data)) {
        return data.then(function(resolved) {
          return buildResponse(exeContext, resolved);
        });
      }
      return exeContext.errors.length === 0 ? {
        data
      } : {
        errors: exeContext.errors,
        data
      };
    }
    function assertValidExecutionArguments(schema, document2, rawVariableValues) {
      document2 || (0, _devAssert.default)(0, "Must provide document.");
      (0, _validate.assertValidSchema)(schema);
      rawVariableValues == null || (0, _isObjectLike.default)(rawVariableValues) || (0, _devAssert.default)(0, "Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.");
    }
    function buildExecutionContext(schema, document2, rootValue, contextValue, rawVariableValues, operationName, fieldResolver, typeResolver) {
      var _definition$name, _operation$variableDe;
      var operation;
      var fragments = Object.create(null);
      for (var _i2 = 0, _document$definitions2 = document2.definitions; _i2 < _document$definitions2.length; _i2++) {
        var definition = _document$definitions2[_i2];
        switch (definition.kind) {
          case _kinds.Kind.OPERATION_DEFINITION:
            if (operationName == null) {
              if (operation !== void 0) {
                return [new _GraphQLError.GraphQLError("Must provide operation name if query contains multiple operations.")];
              }
              operation = definition;
            } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
              operation = definition;
            }
            break;
          case _kinds.Kind.FRAGMENT_DEFINITION:
            fragments[definition.name.value] = definition;
            break;
        }
      }
      if (!operation) {
        if (operationName != null) {
          return [new _GraphQLError.GraphQLError('Unknown operation named "'.concat(operationName, '".'))];
        }
        return [new _GraphQLError.GraphQLError("Must provide an operation.")];
      }
      var variableDefinitions = (_operation$variableDe = operation.variableDefinitions) !== null && _operation$variableDe !== void 0 ? _operation$variableDe : [];
      var coercedVariableValues = (0, _values.getVariableValues)(schema, variableDefinitions, rawVariableValues !== null && rawVariableValues !== void 0 ? rawVariableValues : {}, {
        maxErrors: 50
      });
      if (coercedVariableValues.errors) {
        return coercedVariableValues.errors;
      }
      return {
        schema,
        fragments,
        rootValue,
        contextValue,
        operation,
        variableValues: coercedVariableValues.coerced,
        fieldResolver: fieldResolver !== null && fieldResolver !== void 0 ? fieldResolver : defaultFieldResolver,
        typeResolver: typeResolver !== null && typeResolver !== void 0 ? typeResolver : defaultTypeResolver,
        errors: []
      };
    }
    function executeOperation(exeContext, operation, rootValue) {
      var type = (0, _getOperationRootType.getOperationRootType)(exeContext.schema, operation);
      var fields = collectFields2(exeContext, type, operation.selectionSet, Object.create(null), Object.create(null));
      var path = void 0;
      try {
        var result = operation.operation === "mutation" ? executeFieldsSerially(exeContext, type, rootValue, path, fields) : executeFields(exeContext, type, rootValue, path, fields);
        if ((0, _isPromise.default)(result)) {
          return result.then(void 0, function(error) {
            exeContext.errors.push(error);
            return Promise.resolve(null);
          });
        }
        return result;
      } catch (error) {
        exeContext.errors.push(error);
        return null;
      }
    }
    function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
      return (0, _promiseReduce.default)(Object.keys(fields), function(results, responseName) {
        var fieldNodes = fields[responseName];
        var fieldPath = (0, _Path.addPath)(path, responseName, parentType.name);
        var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
        if (result === void 0) {
          return results;
        }
        if ((0, _isPromise.default)(result)) {
          return result.then(function(resolvedResult) {
            results[responseName] = resolvedResult;
            return results;
          });
        }
        results[responseName] = result;
        return results;
      }, Object.create(null));
    }
    function executeFields(exeContext, parentType, sourceValue, path, fields) {
      var results = Object.create(null);
      var containsPromise = false;
      for (var _i4 = 0, _Object$keys2 = Object.keys(fields); _i4 < _Object$keys2.length; _i4++) {
        var responseName = _Object$keys2[_i4];
        var fieldNodes = fields[responseName];
        var fieldPath = (0, _Path.addPath)(path, responseName, parentType.name);
        var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
        if (result !== void 0) {
          results[responseName] = result;
          if ((0, _isPromise.default)(result)) {
            containsPromise = true;
          }
        }
      }
      if (!containsPromise) {
        return results;
      }
      return (0, _promiseForObject.default)(results);
    }
    function collectFields2(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
      for (var _i6 = 0, _selectionSet$selecti2 = selectionSet.selections; _i6 < _selectionSet$selecti2.length; _i6++) {
        var selection = _selectionSet$selecti2[_i6];
        switch (selection.kind) {
          case _kinds.Kind.FIELD: {
            if (!shouldIncludeNode2(exeContext, selection)) {
              continue;
            }
            var name = getFieldEntryKey2(selection);
            if (!fields[name]) {
              fields[name] = [];
            }
            fields[name].push(selection);
            break;
          }
          case _kinds.Kind.INLINE_FRAGMENT: {
            if (!shouldIncludeNode2(exeContext, selection) || !doesFragmentConditionMatch2(exeContext, selection, runtimeType)) {
              continue;
            }
            collectFields2(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
            break;
          }
          case _kinds.Kind.FRAGMENT_SPREAD: {
            var fragName = selection.name.value;
            if (visitedFragmentNames[fragName] || !shouldIncludeNode2(exeContext, selection)) {
              continue;
            }
            visitedFragmentNames[fragName] = true;
            var fragment = exeContext.fragments[fragName];
            if (!fragment || !doesFragmentConditionMatch2(exeContext, fragment, runtimeType)) {
              continue;
            }
            collectFields2(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
            break;
          }
        }
      }
      return fields;
    }
    function shouldIncludeNode2(exeContext, node) {
      var skip = (0, _values.getDirectiveValues)(_directives.GraphQLSkipDirective, node, exeContext.variableValues);
      if ((skip === null || skip === void 0 ? void 0 : skip.if) === true) {
        return false;
      }
      var include = (0, _values.getDirectiveValues)(_directives.GraphQLIncludeDirective, node, exeContext.variableValues);
      if ((include === null || include === void 0 ? void 0 : include.if) === false) {
        return false;
      }
      return true;
    }
    function doesFragmentConditionMatch2(exeContext, fragment, type) {
      var typeConditionNode = fragment.typeCondition;
      if (!typeConditionNode) {
        return true;
      }
      var conditionalType = (0, _typeFromAST.typeFromAST)(exeContext.schema, typeConditionNode);
      if (conditionalType === type) {
        return true;
      }
      if ((0, _definition.isAbstractType)(conditionalType)) {
        return exeContext.schema.isSubType(conditionalType, type);
      }
      return false;
    }
    function getFieldEntryKey2(node) {
      return node.alias ? node.alias.value : node.name.value;
    }
    function resolveField(exeContext, parentType, source, fieldNodes, path) {
      var _fieldDef$resolve;
      var fieldNode = fieldNodes[0];
      var fieldName = fieldNode.name.value;
      var fieldDef = getFieldDef(exeContext.schema, parentType, fieldName);
      if (!fieldDef) {
        return;
      }
      var returnType = fieldDef.type;
      var resolveFn = (_fieldDef$resolve = fieldDef.resolve) !== null && _fieldDef$resolve !== void 0 ? _fieldDef$resolve : exeContext.fieldResolver;
      var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path);
      try {
        var args = (0, _values.getArgumentValues)(fieldDef, fieldNodes[0], exeContext.variableValues);
        var _contextValue = exeContext.contextValue;
        var result = resolveFn(source, args, _contextValue, info);
        var completed;
        if ((0, _isPromise.default)(result)) {
          completed = result.then(function(resolved) {
            return completeValue(exeContext, returnType, fieldNodes, info, path, resolved);
          });
        } else {
          completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
        }
        if ((0, _isPromise.default)(completed)) {
          return completed.then(void 0, function(rawError) {
            var error2 = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(path));
            return handleFieldError(error2, returnType, exeContext);
          });
        }
        return completed;
      } catch (rawError) {
        var error = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(path));
        return handleFieldError(error, returnType, exeContext);
      }
    }
    function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
      return {
        fieldName: fieldDef.name,
        fieldNodes,
        returnType: fieldDef.type,
        parentType,
        path,
        schema: exeContext.schema,
        fragments: exeContext.fragments,
        rootValue: exeContext.rootValue,
        operation: exeContext.operation,
        variableValues: exeContext.variableValues
      };
    }
    function handleFieldError(error, returnType, exeContext) {
      if ((0, _definition.isNonNullType)(returnType)) {
        throw error;
      }
      exeContext.errors.push(error);
      return null;
    }
    function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
      if (result instanceof Error) {
        throw result;
      }
      if ((0, _definition.isNonNullType)(returnType)) {
        var completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);
        if (completed === null) {
          throw new Error("Cannot return null for non-nullable field ".concat(info.parentType.name, ".").concat(info.fieldName, "."));
        }
        return completed;
      }
      if (result == null) {
        return null;
      }
      if ((0, _definition.isListType)(returnType)) {
        return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
      }
      if ((0, _definition.isLeafType)(returnType)) {
        return completeLeafValue(returnType, result);
      }
      if ((0, _definition.isAbstractType)(returnType)) {
        return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
      }
      if ((0, _definition.isObjectType)(returnType)) {
        return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
      }
      (0, _invariant.default)(0, "Cannot complete value of unexpected output type: " + (0, _inspect.default)(returnType));
    }
    function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
      var itemType = returnType.ofType;
      var containsPromise = false;
      var completedResults = (0, _safeArrayFrom.default)(result, function(item, index) {
        var itemPath = (0, _Path.addPath)(path, index, void 0);
        try {
          var completedItem;
          if ((0, _isPromise.default)(item)) {
            completedItem = item.then(function(resolved) {
              return completeValue(exeContext, itemType, fieldNodes, info, itemPath, resolved);
            });
          } else {
            completedItem = completeValue(exeContext, itemType, fieldNodes, info, itemPath, item);
          }
          if ((0, _isPromise.default)(completedItem)) {
            containsPromise = true;
            return completedItem.then(void 0, function(rawError) {
              var error2 = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(itemPath));
              return handleFieldError(error2, itemType, exeContext);
            });
          }
          return completedItem;
        } catch (rawError) {
          var error = (0, _locatedError.locatedError)(rawError, fieldNodes, (0, _Path.pathToArray)(itemPath));
          return handleFieldError(error, itemType, exeContext);
        }
      });
      if (completedResults == null) {
        throw new _GraphQLError.GraphQLError('Expected Iterable, but did not find one for field "'.concat(info.parentType.name, ".").concat(info.fieldName, '".'));
      }
      return containsPromise ? Promise.all(completedResults) : completedResults;
    }
    function completeLeafValue(returnType, result) {
      var serializedResult = returnType.serialize(result);
      if (serializedResult === void 0) {
        throw new Error('Expected a value of type "'.concat((0, _inspect.default)(returnType), '" but ') + "received: ".concat((0, _inspect.default)(result)));
      }
      return serializedResult;
    }
    function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
      var _returnType$resolveTy;
      var resolveTypeFn = (_returnType$resolveTy = returnType.resolveType) !== null && _returnType$resolveTy !== void 0 ? _returnType$resolveTy : exeContext.typeResolver;
      var contextValue = exeContext.contextValue;
      var runtimeType = resolveTypeFn(result, contextValue, info, returnType);
      if ((0, _isPromise.default)(runtimeType)) {
        return runtimeType.then(function(resolvedRuntimeType) {
          return completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
        });
      }
      return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
    }
    function ensureValidRuntimeType(runtimeTypeOrName, exeContext, returnType, fieldNodes, info, result) {
      if (runtimeTypeOrName == null) {
        throw new _GraphQLError.GraphQLError('Abstract type "'.concat(returnType.name, '" must resolve to an Object type at runtime for field "').concat(info.parentType.name, ".").concat(info.fieldName, '". Either the "').concat(returnType.name, '" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.'), fieldNodes);
      }
      var runtimeTypeName = (0, _definition.isNamedType)(runtimeTypeOrName) ? runtimeTypeOrName.name : runtimeTypeOrName;
      if (typeof runtimeTypeName !== "string") {
        throw new _GraphQLError.GraphQLError('Abstract type "'.concat(returnType.name, '" must resolve to an Object type at runtime for field "').concat(info.parentType.name, ".").concat(info.fieldName, '" with ') + "value ".concat((0, _inspect.default)(result), ', received "').concat((0, _inspect.default)(runtimeTypeOrName), '".'));
      }
      var runtimeType = exeContext.schema.getType(runtimeTypeName);
      if (runtimeType == null) {
        throw new _GraphQLError.GraphQLError('Abstract type "'.concat(returnType.name, '" was resolve to a type "').concat(runtimeTypeName, '" that does not exist inside schema.'), fieldNodes);
      }
      if (!(0, _definition.isObjectType)(runtimeType)) {
        throw new _GraphQLError.GraphQLError('Abstract type "'.concat(returnType.name, '" was resolve to a non-object type "').concat(runtimeTypeName, '".'), fieldNodes);
      }
      if (!exeContext.schema.isSubType(returnType, runtimeType)) {
        throw new _GraphQLError.GraphQLError('Runtime Object type "'.concat(runtimeType.name, '" is not a possible type for "').concat(returnType.name, '".'), fieldNodes);
      }
      return runtimeType;
    }
    function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
      if (returnType.isTypeOf) {
        var isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);
        if ((0, _isPromise.default)(isTypeOf)) {
          return isTypeOf.then(function(resolvedIsTypeOf) {
            if (!resolvedIsTypeOf) {
              throw invalidReturnTypeError(returnType, result, fieldNodes);
            }
            return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
          });
        }
        if (!isTypeOf) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }
      }
      return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
    }
    function invalidReturnTypeError(returnType, result, fieldNodes) {
      return new _GraphQLError.GraphQLError('Expected value of type "'.concat(returnType.name, '" but got: ').concat((0, _inspect.default)(result), "."), fieldNodes);
    }
    function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result) {
      var subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
      return executeFields(exeContext, returnType, result, path, subFieldNodes);
    }
    var collectSubfields = (0, _memoize.default)(_collectSubfields);
    function _collectSubfields(exeContext, returnType, fieldNodes) {
      var subFieldNodes = Object.create(null);
      var visitedFragmentNames = Object.create(null);
      for (var _i8 = 0; _i8 < fieldNodes.length; _i8++) {
        var node = fieldNodes[_i8];
        if (node.selectionSet) {
          subFieldNodes = collectFields2(exeContext, returnType, node.selectionSet, subFieldNodes, visitedFragmentNames);
        }
      }
      return subFieldNodes;
    }
    var defaultTypeResolver = function defaultTypeResolver2(value, contextValue, info, abstractType) {
      if ((0, _isObjectLike.default)(value) && typeof value.__typename === "string") {
        return value.__typename;
      }
      var possibleTypes = info.schema.getPossibleTypes(abstractType);
      var promisedIsTypeOfResults = [];
      for (var i = 0; i < possibleTypes.length; i++) {
        var type = possibleTypes[i];
        if (type.isTypeOf) {
          var isTypeOfResult = type.isTypeOf(value, contextValue, info);
          if ((0, _isPromise.default)(isTypeOfResult)) {
            promisedIsTypeOfResults[i] = isTypeOfResult;
          } else if (isTypeOfResult) {
            return type.name;
          }
        }
      }
      if (promisedIsTypeOfResults.length) {
        return Promise.all(promisedIsTypeOfResults).then(function(isTypeOfResults) {
          for (var _i9 = 0; _i9 < isTypeOfResults.length; _i9++) {
            if (isTypeOfResults[_i9]) {
              return possibleTypes[_i9].name;
            }
          }
        });
      }
    };
    exports.defaultTypeResolver = defaultTypeResolver;
    var defaultFieldResolver = function defaultFieldResolver2(source, args, contextValue, info) {
      if ((0, _isObjectLike.default)(source) || typeof source === "function") {
        var property = source[info.fieldName];
        if (typeof property === "function") {
          return source[info.fieldName](args, contextValue, info);
        }
        return property;
      }
    };
    exports.defaultFieldResolver = defaultFieldResolver;
    function getFieldDef(schema, parentType, fieldName) {
      if (fieldName === _introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
        return _introspection.SchemaMetaFieldDef;
      } else if (fieldName === _introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
        return _introspection.TypeMetaFieldDef;
      } else if (fieldName === _introspection.TypeNameMetaFieldDef.name) {
        return _introspection.TypeNameMetaFieldDef;
      }
      return parentType.getFields()[fieldName];
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/graphql.js
var require_graphql = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/graphql.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.graphql = graphql;
    exports.graphqlSync = graphqlSync;
    var _isPromise = _interopRequireDefault(require_isPromise());
    var _parser = require_parser();
    var _validate = require_validate2();
    var _validate2 = require_validate();
    var _execute = require_execute();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function graphql(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
      var _arguments = arguments;
      return new Promise(function(resolve2) {
        return resolve2(_arguments.length === 1 ? graphqlImpl(argsOrSchema) : graphqlImpl({
          schema: argsOrSchema,
          source,
          rootValue,
          contextValue,
          variableValues,
          operationName,
          fieldResolver,
          typeResolver
        }));
      });
    }
    function graphqlSync(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
      var result = arguments.length === 1 ? graphqlImpl(argsOrSchema) : graphqlImpl({
        schema: argsOrSchema,
        source,
        rootValue,
        contextValue,
        variableValues,
        operationName,
        fieldResolver,
        typeResolver
      });
      if ((0, _isPromise.default)(result)) {
        throw new Error("GraphQL execution failed to complete synchronously.");
      }
      return result;
    }
    function graphqlImpl(args) {
      var schema = args.schema, source = args.source, rootValue = args.rootValue, contextValue = args.contextValue, variableValues = args.variableValues, operationName = args.operationName, fieldResolver = args.fieldResolver, typeResolver = args.typeResolver;
      var schemaValidationErrors = (0, _validate2.validateSchema)(schema);
      if (schemaValidationErrors.length > 0) {
        return {
          errors: schemaValidationErrors
        };
      }
      var document2;
      try {
        document2 = (0, _parser.parse)(source);
      } catch (syntaxError) {
        return {
          errors: [syntaxError]
        };
      }
      var validationErrors = (0, _validate.validate)(schema, document2);
      if (validationErrors.length > 0) {
        return {
          errors: validationErrors
        };
      }
      return (0, _execute.execute)({
        schema,
        document: document2,
        rootValue,
        contextValue,
        variableValues,
        operationName,
        fieldResolver,
        typeResolver
      });
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/type/index.js
var require_type = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/type/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "isSchema", {
      enumerable: true,
      get: function get() {
        return _schema.isSchema;
      }
    });
    Object.defineProperty(exports, "assertSchema", {
      enumerable: true,
      get: function get() {
        return _schema.assertSchema;
      }
    });
    Object.defineProperty(exports, "GraphQLSchema", {
      enumerable: true,
      get: function get() {
        return _schema.GraphQLSchema;
      }
    });
    Object.defineProperty(exports, "isType", {
      enumerable: true,
      get: function get() {
        return _definition.isType;
      }
    });
    Object.defineProperty(exports, "isScalarType", {
      enumerable: true,
      get: function get() {
        return _definition.isScalarType;
      }
    });
    Object.defineProperty(exports, "isObjectType", {
      enumerable: true,
      get: function get() {
        return _definition.isObjectType;
      }
    });
    Object.defineProperty(exports, "isInterfaceType", {
      enumerable: true,
      get: function get() {
        return _definition.isInterfaceType;
      }
    });
    Object.defineProperty(exports, "isUnionType", {
      enumerable: true,
      get: function get() {
        return _definition.isUnionType;
      }
    });
    Object.defineProperty(exports, "isEnumType", {
      enumerable: true,
      get: function get() {
        return _definition.isEnumType;
      }
    });
    Object.defineProperty(exports, "isInputObjectType", {
      enumerable: true,
      get: function get() {
        return _definition.isInputObjectType;
      }
    });
    Object.defineProperty(exports, "isListType", {
      enumerable: true,
      get: function get() {
        return _definition.isListType;
      }
    });
    Object.defineProperty(exports, "isNonNullType", {
      enumerable: true,
      get: function get() {
        return _definition.isNonNullType;
      }
    });
    Object.defineProperty(exports, "isInputType", {
      enumerable: true,
      get: function get() {
        return _definition.isInputType;
      }
    });
    Object.defineProperty(exports, "isOutputType", {
      enumerable: true,
      get: function get() {
        return _definition.isOutputType;
      }
    });
    Object.defineProperty(exports, "isLeafType", {
      enumerable: true,
      get: function get() {
        return _definition.isLeafType;
      }
    });
    Object.defineProperty(exports, "isCompositeType", {
      enumerable: true,
      get: function get() {
        return _definition.isCompositeType;
      }
    });
    Object.defineProperty(exports, "isAbstractType", {
      enumerable: true,
      get: function get() {
        return _definition.isAbstractType;
      }
    });
    Object.defineProperty(exports, "isWrappingType", {
      enumerable: true,
      get: function get() {
        return _definition.isWrappingType;
      }
    });
    Object.defineProperty(exports, "isNullableType", {
      enumerable: true,
      get: function get() {
        return _definition.isNullableType;
      }
    });
    Object.defineProperty(exports, "isNamedType", {
      enumerable: true,
      get: function get() {
        return _definition.isNamedType;
      }
    });
    Object.defineProperty(exports, "isRequiredArgument", {
      enumerable: true,
      get: function get() {
        return _definition.isRequiredArgument;
      }
    });
    Object.defineProperty(exports, "isRequiredInputField", {
      enumerable: true,
      get: function get() {
        return _definition.isRequiredInputField;
      }
    });
    Object.defineProperty(exports, "assertType", {
      enumerable: true,
      get: function get() {
        return _definition.assertType;
      }
    });
    Object.defineProperty(exports, "assertScalarType", {
      enumerable: true,
      get: function get() {
        return _definition.assertScalarType;
      }
    });
    Object.defineProperty(exports, "assertObjectType", {
      enumerable: true,
      get: function get() {
        return _definition.assertObjectType;
      }
    });
    Object.defineProperty(exports, "assertInterfaceType", {
      enumerable: true,
      get: function get() {
        return _definition.assertInterfaceType;
      }
    });
    Object.defineProperty(exports, "assertUnionType", {
      enumerable: true,
      get: function get() {
        return _definition.assertUnionType;
      }
    });
    Object.defineProperty(exports, "assertEnumType", {
      enumerable: true,
      get: function get() {
        return _definition.assertEnumType;
      }
    });
    Object.defineProperty(exports, "assertInputObjectType", {
      enumerable: true,
      get: function get() {
        return _definition.assertInputObjectType;
      }
    });
    Object.defineProperty(exports, "assertListType", {
      enumerable: true,
      get: function get() {
        return _definition.assertListType;
      }
    });
    Object.defineProperty(exports, "assertNonNullType", {
      enumerable: true,
      get: function get() {
        return _definition.assertNonNullType;
      }
    });
    Object.defineProperty(exports, "assertInputType", {
      enumerable: true,
      get: function get() {
        return _definition.assertInputType;
      }
    });
    Object.defineProperty(exports, "assertOutputType", {
      enumerable: true,
      get: function get() {
        return _definition.assertOutputType;
      }
    });
    Object.defineProperty(exports, "assertLeafType", {
      enumerable: true,
      get: function get() {
        return _definition.assertLeafType;
      }
    });
    Object.defineProperty(exports, "assertCompositeType", {
      enumerable: true,
      get: function get() {
        return _definition.assertCompositeType;
      }
    });
    Object.defineProperty(exports, "assertAbstractType", {
      enumerable: true,
      get: function get() {
        return _definition.assertAbstractType;
      }
    });
    Object.defineProperty(exports, "assertWrappingType", {
      enumerable: true,
      get: function get() {
        return _definition.assertWrappingType;
      }
    });
    Object.defineProperty(exports, "assertNullableType", {
      enumerable: true,
      get: function get() {
        return _definition.assertNullableType;
      }
    });
    Object.defineProperty(exports, "assertNamedType", {
      enumerable: true,
      get: function get() {
        return _definition.assertNamedType;
      }
    });
    Object.defineProperty(exports, "getNullableType", {
      enumerable: true,
      get: function get() {
        return _definition.getNullableType;
      }
    });
    Object.defineProperty(exports, "getNamedType", {
      enumerable: true,
      get: function get() {
        return _definition.getNamedType;
      }
    });
    Object.defineProperty(exports, "GraphQLScalarType", {
      enumerable: true,
      get: function get() {
        return _definition.GraphQLScalarType;
      }
    });
    Object.defineProperty(exports, "GraphQLObjectType", {
      enumerable: true,
      get: function get() {
        return _definition.GraphQLObjectType;
      }
    });
    Object.defineProperty(exports, "GraphQLInterfaceType", {
      enumerable: true,
      get: function get() {
        return _definition.GraphQLInterfaceType;
      }
    });
    Object.defineProperty(exports, "GraphQLUnionType", {
      enumerable: true,
      get: function get() {
        return _definition.GraphQLUnionType;
      }
    });
    Object.defineProperty(exports, "GraphQLEnumType", {
      enumerable: true,
      get: function get() {
        return _definition.GraphQLEnumType;
      }
    });
    Object.defineProperty(exports, "GraphQLInputObjectType", {
      enumerable: true,
      get: function get() {
        return _definition.GraphQLInputObjectType;
      }
    });
    Object.defineProperty(exports, "GraphQLList", {
      enumerable: true,
      get: function get() {
        return _definition.GraphQLList;
      }
    });
    Object.defineProperty(exports, "GraphQLNonNull", {
      enumerable: true,
      get: function get() {
        return _definition.GraphQLNonNull;
      }
    });
    Object.defineProperty(exports, "isDirective", {
      enumerable: true,
      get: function get() {
        return _directives.isDirective;
      }
    });
    Object.defineProperty(exports, "assertDirective", {
      enumerable: true,
      get: function get() {
        return _directives.assertDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLDirective", {
      enumerable: true,
      get: function get() {
        return _directives.GraphQLDirective;
      }
    });
    Object.defineProperty(exports, "isSpecifiedDirective", {
      enumerable: true,
      get: function get() {
        return _directives.isSpecifiedDirective;
      }
    });
    Object.defineProperty(exports, "specifiedDirectives", {
      enumerable: true,
      get: function get() {
        return _directives.specifiedDirectives;
      }
    });
    Object.defineProperty(exports, "GraphQLIncludeDirective", {
      enumerable: true,
      get: function get() {
        return _directives.GraphQLIncludeDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLSkipDirective", {
      enumerable: true,
      get: function get() {
        return _directives.GraphQLSkipDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLDeprecatedDirective", {
      enumerable: true,
      get: function get() {
        return _directives.GraphQLDeprecatedDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLSpecifiedByDirective", {
      enumerable: true,
      get: function get() {
        return _directives.GraphQLSpecifiedByDirective;
      }
    });
    Object.defineProperty(exports, "DEFAULT_DEPRECATION_REASON", {
      enumerable: true,
      get: function get() {
        return _directives.DEFAULT_DEPRECATION_REASON;
      }
    });
    Object.defineProperty(exports, "isSpecifiedScalarType", {
      enumerable: true,
      get: function get() {
        return _scalars.isSpecifiedScalarType;
      }
    });
    Object.defineProperty(exports, "specifiedScalarTypes", {
      enumerable: true,
      get: function get() {
        return _scalars.specifiedScalarTypes;
      }
    });
    Object.defineProperty(exports, "GraphQLInt", {
      enumerable: true,
      get: function get() {
        return _scalars.GraphQLInt;
      }
    });
    Object.defineProperty(exports, "GraphQLFloat", {
      enumerable: true,
      get: function get() {
        return _scalars.GraphQLFloat;
      }
    });
    Object.defineProperty(exports, "GraphQLString", {
      enumerable: true,
      get: function get() {
        return _scalars.GraphQLString;
      }
    });
    Object.defineProperty(exports, "GraphQLBoolean", {
      enumerable: true,
      get: function get() {
        return _scalars.GraphQLBoolean;
      }
    });
    Object.defineProperty(exports, "GraphQLID", {
      enumerable: true,
      get: function get() {
        return _scalars.GraphQLID;
      }
    });
    Object.defineProperty(exports, "isIntrospectionType", {
      enumerable: true,
      get: function get() {
        return _introspection.isIntrospectionType;
      }
    });
    Object.defineProperty(exports, "introspectionTypes", {
      enumerable: true,
      get: function get() {
        return _introspection.introspectionTypes;
      }
    });
    Object.defineProperty(exports, "__Schema", {
      enumerable: true,
      get: function get() {
        return _introspection.__Schema;
      }
    });
    Object.defineProperty(exports, "__Directive", {
      enumerable: true,
      get: function get() {
        return _introspection.__Directive;
      }
    });
    Object.defineProperty(exports, "__DirectiveLocation", {
      enumerable: true,
      get: function get() {
        return _introspection.__DirectiveLocation;
      }
    });
    Object.defineProperty(exports, "__Type", {
      enumerable: true,
      get: function get() {
        return _introspection.__Type;
      }
    });
    Object.defineProperty(exports, "__Field", {
      enumerable: true,
      get: function get() {
        return _introspection.__Field;
      }
    });
    Object.defineProperty(exports, "__InputValue", {
      enumerable: true,
      get: function get() {
        return _introspection.__InputValue;
      }
    });
    Object.defineProperty(exports, "__EnumValue", {
      enumerable: true,
      get: function get() {
        return _introspection.__EnumValue;
      }
    });
    Object.defineProperty(exports, "__TypeKind", {
      enumerable: true,
      get: function get() {
        return _introspection.__TypeKind;
      }
    });
    Object.defineProperty(exports, "TypeKind", {
      enumerable: true,
      get: function get() {
        return _introspection.TypeKind;
      }
    });
    Object.defineProperty(exports, "SchemaMetaFieldDef", {
      enumerable: true,
      get: function get() {
        return _introspection.SchemaMetaFieldDef;
      }
    });
    Object.defineProperty(exports, "TypeMetaFieldDef", {
      enumerable: true,
      get: function get() {
        return _introspection.TypeMetaFieldDef;
      }
    });
    Object.defineProperty(exports, "TypeNameMetaFieldDef", {
      enumerable: true,
      get: function get() {
        return _introspection.TypeNameMetaFieldDef;
      }
    });
    Object.defineProperty(exports, "validateSchema", {
      enumerable: true,
      get: function get() {
        return _validate.validateSchema;
      }
    });
    Object.defineProperty(exports, "assertValidSchema", {
      enumerable: true,
      get: function get() {
        return _validate.assertValidSchema;
      }
    });
    var _schema = require_schema();
    var _definition = require_definition();
    var _directives = require_directives();
    var _scalars = require_scalars();
    var _introspection = require_introspection();
    var _validate = require_validate();
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/index.js
var require_language = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/language/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Source", {
      enumerable: true,
      get: function get() {
        return _source.Source;
      }
    });
    Object.defineProperty(exports, "getLocation", {
      enumerable: true,
      get: function get() {
        return _location.getLocation;
      }
    });
    Object.defineProperty(exports, "printLocation", {
      enumerable: true,
      get: function get() {
        return _printLocation.printLocation;
      }
    });
    Object.defineProperty(exports, "printSourceLocation", {
      enumerable: true,
      get: function get() {
        return _printLocation.printSourceLocation;
      }
    });
    Object.defineProperty(exports, "Kind", {
      enumerable: true,
      get: function get() {
        return _kinds.Kind;
      }
    });
    Object.defineProperty(exports, "TokenKind", {
      enumerable: true,
      get: function get() {
        return _tokenKind.TokenKind;
      }
    });
    Object.defineProperty(exports, "Lexer", {
      enumerable: true,
      get: function get() {
        return _lexer.Lexer;
      }
    });
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: function get() {
        return _parser.parse;
      }
    });
    Object.defineProperty(exports, "parseValue", {
      enumerable: true,
      get: function get() {
        return _parser.parseValue;
      }
    });
    Object.defineProperty(exports, "parseType", {
      enumerable: true,
      get: function get() {
        return _parser.parseType;
      }
    });
    Object.defineProperty(exports, "print", {
      enumerable: true,
      get: function get() {
        return _printer.print;
      }
    });
    Object.defineProperty(exports, "visit", {
      enumerable: true,
      get: function get() {
        return _visitor.visit;
      }
    });
    Object.defineProperty(exports, "visitInParallel", {
      enumerable: true,
      get: function get() {
        return _visitor.visitInParallel;
      }
    });
    Object.defineProperty(exports, "getVisitFn", {
      enumerable: true,
      get: function get() {
        return _visitor.getVisitFn;
      }
    });
    Object.defineProperty(exports, "BREAK", {
      enumerable: true,
      get: function get() {
        return _visitor.BREAK;
      }
    });
    Object.defineProperty(exports, "Location", {
      enumerable: true,
      get: function get() {
        return _ast.Location;
      }
    });
    Object.defineProperty(exports, "Token", {
      enumerable: true,
      get: function get() {
        return _ast.Token;
      }
    });
    Object.defineProperty(exports, "isDefinitionNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isExecutableDefinitionNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isExecutableDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isSelectionNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isSelectionNode;
      }
    });
    Object.defineProperty(exports, "isValueNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isValueNode;
      }
    });
    Object.defineProperty(exports, "isTypeNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isTypeNode;
      }
    });
    Object.defineProperty(exports, "isTypeSystemDefinitionNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isTypeSystemDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isTypeDefinitionNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isTypeDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isTypeSystemExtensionNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isTypeSystemExtensionNode;
      }
    });
    Object.defineProperty(exports, "isTypeExtensionNode", {
      enumerable: true,
      get: function get() {
        return _predicates.isTypeExtensionNode;
      }
    });
    Object.defineProperty(exports, "DirectiveLocation", {
      enumerable: true,
      get: function get() {
        return _directiveLocation.DirectiveLocation;
      }
    });
    var _source = require_source();
    var _location = require_location();
    var _printLocation = require_printLocation();
    var _kinds = require_kinds();
    var _tokenKind = require_tokenKind();
    var _lexer = require_lexer();
    var _parser = require_parser();
    var _printer = require_printer();
    var _visitor = require_visitor();
    var _ast = require_ast();
    var _predicates = require_predicates();
    var _directiveLocation = require_directiveLocation();
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/execution/index.js
var require_execution = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/execution/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "responsePathAsArray", {
      enumerable: true,
      get: function get() {
        return _Path.pathToArray;
      }
    });
    Object.defineProperty(exports, "execute", {
      enumerable: true,
      get: function get() {
        return _execute.execute;
      }
    });
    Object.defineProperty(exports, "executeSync", {
      enumerable: true,
      get: function get() {
        return _execute.executeSync;
      }
    });
    Object.defineProperty(exports, "defaultFieldResolver", {
      enumerable: true,
      get: function get() {
        return _execute.defaultFieldResolver;
      }
    });
    Object.defineProperty(exports, "defaultTypeResolver", {
      enumerable: true,
      get: function get() {
        return _execute.defaultTypeResolver;
      }
    });
    Object.defineProperty(exports, "getDirectiveValues", {
      enumerable: true,
      get: function get() {
        return _values.getDirectiveValues;
      }
    });
    var _Path = require_Path();
    var _execute = require_execute();
    var _values = require_values();
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/isAsyncIterable.js
var require_isAsyncIterable = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/jsutils/isAsyncIterable.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isAsyncIterable;
    var _symbols = require_symbols();
    function isAsyncIterable(maybeAsyncIterable) {
      return typeof (maybeAsyncIterable === null || maybeAsyncIterable === void 0 ? void 0 : maybeAsyncIterable[_symbols.SYMBOL_ASYNC_ITERATOR]) === "function";
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/subscription/mapAsyncIterator.js
var require_mapAsyncIterator = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/subscription/mapAsyncIterator.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = mapAsyncIterator;
    var _symbols = require_symbols();
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function mapAsyncIterator(iterable, callback, rejectCallback) {
      var iteratorMethod = iterable[_symbols.SYMBOL_ASYNC_ITERATOR];
      var iterator = iteratorMethod.call(iterable);
      var $return;
      var abruptClose;
      if (typeof iterator.return === "function") {
        $return = iterator.return;
        abruptClose = function abruptClose2(error) {
          var rethrow = function rethrow2() {
            return Promise.reject(error);
          };
          return $return.call(iterator).then(rethrow, rethrow);
        };
      }
      function mapResult(result) {
        return result.done ? result : asyncMapValue(result.value, callback).then(iteratorResult, abruptClose);
      }
      var mapReject;
      if (rejectCallback) {
        var reject = rejectCallback;
        mapReject = function mapReject2(error) {
          return asyncMapValue(error, reject).then(iteratorResult, abruptClose);
        };
      }
      return _defineProperty({
        next: function next() {
          return iterator.next().then(mapResult, mapReject);
        },
        return: function _return() {
          return $return ? $return.call(iterator).then(mapResult, mapReject) : Promise.resolve({
            value: void 0,
            done: true
          });
        },
        throw: function _throw(error) {
          if (typeof iterator.throw === "function") {
            return iterator.throw(error).then(mapResult, mapReject);
          }
          return Promise.reject(error).catch(abruptClose);
        }
      }, _symbols.SYMBOL_ASYNC_ITERATOR, function() {
        return this;
      });
    }
    function asyncMapValue(value, callback) {
      return new Promise(function(resolve2) {
        return resolve2(callback(value));
      });
    }
    function iteratorResult(value) {
      return {
        value,
        done: false
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/subscription/subscribe.js
var require_subscribe = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/subscription/subscribe.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.subscribe = subscribe;
    exports.createSourceEventStream = createSourceEventStream;
    var _inspect = _interopRequireDefault(require_inspect());
    var _isAsyncIterable = _interopRequireDefault(require_isAsyncIterable());
    var _Path = require_Path();
    var _GraphQLError = require_GraphQLError();
    var _locatedError = require_locatedError();
    var _values = require_values();
    var _execute = require_execute();
    var _getOperationRootType = require_getOperationRootType();
    var _mapAsyncIterator = _interopRequireDefault(require_mapAsyncIterator());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function subscribe(argsOrSchema, document2, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
      return arguments.length === 1 ? subscribeImpl(argsOrSchema) : subscribeImpl({
        schema: argsOrSchema,
        document: document2,
        rootValue,
        contextValue,
        variableValues,
        operationName,
        fieldResolver,
        subscribeFieldResolver
      });
    }
    function reportGraphQLError(error) {
      if (error instanceof _GraphQLError.GraphQLError) {
        return {
          errors: [error]
        };
      }
      throw error;
    }
    function subscribeImpl(args) {
      var schema = args.schema, document2 = args.document, rootValue = args.rootValue, contextValue = args.contextValue, variableValues = args.variableValues, operationName = args.operationName, fieldResolver = args.fieldResolver, subscribeFieldResolver = args.subscribeFieldResolver;
      var sourcePromise = createSourceEventStream(schema, document2, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver);
      var mapSourceToResponse = function mapSourceToResponse2(payload) {
        return (0, _execute.execute)({
          schema,
          document: document2,
          rootValue: payload,
          contextValue,
          variableValues,
          operationName,
          fieldResolver
        });
      };
      return sourcePromise.then(function(resultOrStream) {
        return (0, _isAsyncIterable.default)(resultOrStream) ? (0, _mapAsyncIterator.default)(resultOrStream, mapSourceToResponse, reportGraphQLError) : resultOrStream;
      });
    }
    function createSourceEventStream(schema, document2, rootValue, contextValue, variableValues, operationName, fieldResolver) {
      (0, _execute.assertValidExecutionArguments)(schema, document2, variableValues);
      return new Promise(function(resolve2) {
        var exeContext = (0, _execute.buildExecutionContext)(schema, document2, rootValue, contextValue, variableValues, operationName, fieldResolver);
        resolve2(Array.isArray(exeContext) ? {
          errors: exeContext
        } : executeSubscription(exeContext));
      }).catch(reportGraphQLError);
    }
    function executeSubscription(exeContext) {
      var schema = exeContext.schema, operation = exeContext.operation, variableValues = exeContext.variableValues, rootValue = exeContext.rootValue;
      var type = (0, _getOperationRootType.getOperationRootType)(schema, operation);
      var fields = (0, _execute.collectFields)(exeContext, type, operation.selectionSet, Object.create(null), Object.create(null));
      var responseNames = Object.keys(fields);
      var responseName = responseNames[0];
      var fieldNodes = fields[responseName];
      var fieldNode = fieldNodes[0];
      var fieldName = fieldNode.name.value;
      var fieldDef = (0, _execute.getFieldDef)(schema, type, fieldName);
      if (!fieldDef) {
        throw new _GraphQLError.GraphQLError('The subscription field "'.concat(fieldName, '" is not defined.'), fieldNodes);
      }
      var path = (0, _Path.addPath)(void 0, responseName, type.name);
      var info = (0, _execute.buildResolveInfo)(exeContext, fieldDef, fieldNodes, type, path);
      return new Promise(function(resolveResult) {
        var _fieldDef$subscribe;
        var args = (0, _values.getArgumentValues)(fieldDef, fieldNodes[0], variableValues);
        var contextValue = exeContext.contextValue;
        var resolveFn = (_fieldDef$subscribe = fieldDef.subscribe) !== null && _fieldDef$subscribe !== void 0 ? _fieldDef$subscribe : exeContext.fieldResolver;
        resolveResult(resolveFn(rootValue, args, contextValue, info));
      }).then(function(eventStream) {
        if (eventStream instanceof Error) {
          throw (0, _locatedError.locatedError)(eventStream, fieldNodes, (0, _Path.pathToArray)(path));
        }
        if (!(0, _isAsyncIterable.default)(eventStream)) {
          throw new Error("Subscription field must return Async Iterable. " + "Received: ".concat((0, _inspect.default)(eventStream), "."));
        }
        return eventStream;
      }, function(error) {
        throw (0, _locatedError.locatedError)(error, fieldNodes, (0, _Path.pathToArray)(path));
      });
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/subscription/index.js
var require_subscription = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/subscription/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "subscribe", {
      enumerable: true,
      get: function get() {
        return _subscribe.subscribe;
      }
    });
    Object.defineProperty(exports, "createSourceEventStream", {
      enumerable: true,
      get: function get() {
        return _subscribe.createSourceEventStream;
      }
    });
    var _subscribe = require_subscribe();
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/custom/NoDeprecatedCustomRule.js
var require_NoDeprecatedCustomRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/custom/NoDeprecatedCustomRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NoDeprecatedCustomRule = NoDeprecatedCustomRule;
    var _invariant = _interopRequireDefault(require_invariant());
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function NoDeprecatedCustomRule(context) {
      return {
        Field: function Field(node) {
          var fieldDef = context.getFieldDef();
          var deprecationReason = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.deprecationReason;
          if (fieldDef && deprecationReason != null) {
            var parentType = context.getParentType();
            parentType != null || (0, _invariant.default)(0);
            context.reportError(new _GraphQLError.GraphQLError("The field ".concat(parentType.name, ".").concat(fieldDef.name, " is deprecated. ").concat(deprecationReason), node));
          }
        },
        Argument: function Argument(node) {
          var argDef = context.getArgument();
          var deprecationReason = argDef === null || argDef === void 0 ? void 0 : argDef.deprecationReason;
          if (argDef && deprecationReason != null) {
            var directiveDef = context.getDirective();
            if (directiveDef != null) {
              context.reportError(new _GraphQLError.GraphQLError('Directive "@'.concat(directiveDef.name, '" argument "').concat(argDef.name, '" is deprecated. ').concat(deprecationReason), node));
            } else {
              var parentType = context.getParentType();
              var fieldDef = context.getFieldDef();
              parentType != null && fieldDef != null || (0, _invariant.default)(0);
              context.reportError(new _GraphQLError.GraphQLError('Field "'.concat(parentType.name, ".").concat(fieldDef.name, '" argument "').concat(argDef.name, '" is deprecated. ').concat(deprecationReason), node));
            }
          }
        },
        ObjectField: function ObjectField(node) {
          var inputObjectDef = (0, _definition.getNamedType)(context.getParentInputType());
          if ((0, _definition.isInputObjectType)(inputObjectDef)) {
            var inputFieldDef = inputObjectDef.getFields()[node.name.value];
            var deprecationReason = inputFieldDef === null || inputFieldDef === void 0 ? void 0 : inputFieldDef.deprecationReason;
            if (deprecationReason != null) {
              context.reportError(new _GraphQLError.GraphQLError("The input field ".concat(inputObjectDef.name, ".").concat(inputFieldDef.name, " is deprecated. ").concat(deprecationReason), node));
            }
          }
        },
        EnumValue: function EnumValue(node) {
          var enumValueDef = context.getEnumValue();
          var deprecationReason = enumValueDef === null || enumValueDef === void 0 ? void 0 : enumValueDef.deprecationReason;
          if (enumValueDef && deprecationReason != null) {
            var enumTypeDef = (0, _definition.getNamedType)(context.getInputType());
            enumTypeDef != null || (0, _invariant.default)(0);
            context.reportError(new _GraphQLError.GraphQLError('The enum value "'.concat(enumTypeDef.name, ".").concat(enumValueDef.name, '" is deprecated. ').concat(deprecationReason), node));
          }
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/custom/NoSchemaIntrospectionCustomRule.js
var require_NoSchemaIntrospectionCustomRule = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/rules/custom/NoSchemaIntrospectionCustomRule.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NoSchemaIntrospectionCustomRule = NoSchemaIntrospectionCustomRule;
    var _GraphQLError = require_GraphQLError();
    var _definition = require_definition();
    var _introspection = require_introspection();
    function NoSchemaIntrospectionCustomRule(context) {
      return {
        Field: function Field(node) {
          var type = (0, _definition.getNamedType)(context.getType());
          if (type && (0, _introspection.isIntrospectionType)(type)) {
            context.reportError(new _GraphQLError.GraphQLError('GraphQL introspection has been disabled, but the requested query contained the field "'.concat(node.name.value, '".'), node));
          }
        }
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/index.js
var require_validation = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/validation/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "validate", {
      enumerable: true,
      get: function get() {
        return _validate.validate;
      }
    });
    Object.defineProperty(exports, "ValidationContext", {
      enumerable: true,
      get: function get() {
        return _ValidationContext.ValidationContext;
      }
    });
    Object.defineProperty(exports, "specifiedRules", {
      enumerable: true,
      get: function get() {
        return _specifiedRules.specifiedRules;
      }
    });
    Object.defineProperty(exports, "ExecutableDefinitionsRule", {
      enumerable: true,
      get: function get() {
        return _ExecutableDefinitionsRule.ExecutableDefinitionsRule;
      }
    });
    Object.defineProperty(exports, "FieldsOnCorrectTypeRule", {
      enumerable: true,
      get: function get() {
        return _FieldsOnCorrectTypeRule.FieldsOnCorrectTypeRule;
      }
    });
    Object.defineProperty(exports, "FragmentsOnCompositeTypesRule", {
      enumerable: true,
      get: function get() {
        return _FragmentsOnCompositeTypesRule.FragmentsOnCompositeTypesRule;
      }
    });
    Object.defineProperty(exports, "KnownArgumentNamesRule", {
      enumerable: true,
      get: function get() {
        return _KnownArgumentNamesRule.KnownArgumentNamesRule;
      }
    });
    Object.defineProperty(exports, "KnownDirectivesRule", {
      enumerable: true,
      get: function get() {
        return _KnownDirectivesRule.KnownDirectivesRule;
      }
    });
    Object.defineProperty(exports, "KnownFragmentNamesRule", {
      enumerable: true,
      get: function get() {
        return _KnownFragmentNamesRule.KnownFragmentNamesRule;
      }
    });
    Object.defineProperty(exports, "KnownTypeNamesRule", {
      enumerable: true,
      get: function get() {
        return _KnownTypeNamesRule.KnownTypeNamesRule;
      }
    });
    Object.defineProperty(exports, "LoneAnonymousOperationRule", {
      enumerable: true,
      get: function get() {
        return _LoneAnonymousOperationRule.LoneAnonymousOperationRule;
      }
    });
    Object.defineProperty(exports, "NoFragmentCyclesRule", {
      enumerable: true,
      get: function get() {
        return _NoFragmentCyclesRule.NoFragmentCyclesRule;
      }
    });
    Object.defineProperty(exports, "NoUndefinedVariablesRule", {
      enumerable: true,
      get: function get() {
        return _NoUndefinedVariablesRule.NoUndefinedVariablesRule;
      }
    });
    Object.defineProperty(exports, "NoUnusedFragmentsRule", {
      enumerable: true,
      get: function get() {
        return _NoUnusedFragmentsRule.NoUnusedFragmentsRule;
      }
    });
    Object.defineProperty(exports, "NoUnusedVariablesRule", {
      enumerable: true,
      get: function get() {
        return _NoUnusedVariablesRule.NoUnusedVariablesRule;
      }
    });
    Object.defineProperty(exports, "OverlappingFieldsCanBeMergedRule", {
      enumerable: true,
      get: function get() {
        return _OverlappingFieldsCanBeMergedRule.OverlappingFieldsCanBeMergedRule;
      }
    });
    Object.defineProperty(exports, "PossibleFragmentSpreadsRule", {
      enumerable: true,
      get: function get() {
        return _PossibleFragmentSpreadsRule.PossibleFragmentSpreadsRule;
      }
    });
    Object.defineProperty(exports, "ProvidedRequiredArgumentsRule", {
      enumerable: true,
      get: function get() {
        return _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsRule;
      }
    });
    Object.defineProperty(exports, "ScalarLeafsRule", {
      enumerable: true,
      get: function get() {
        return _ScalarLeafsRule.ScalarLeafsRule;
      }
    });
    Object.defineProperty(exports, "SingleFieldSubscriptionsRule", {
      enumerable: true,
      get: function get() {
        return _SingleFieldSubscriptionsRule.SingleFieldSubscriptionsRule;
      }
    });
    Object.defineProperty(exports, "UniqueArgumentNamesRule", {
      enumerable: true,
      get: function get() {
        return _UniqueArgumentNamesRule.UniqueArgumentNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueDirectivesPerLocationRule", {
      enumerable: true,
      get: function get() {
        return _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule;
      }
    });
    Object.defineProperty(exports, "UniqueFragmentNamesRule", {
      enumerable: true,
      get: function get() {
        return _UniqueFragmentNamesRule.UniqueFragmentNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueInputFieldNamesRule", {
      enumerable: true,
      get: function get() {
        return _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueOperationNamesRule", {
      enumerable: true,
      get: function get() {
        return _UniqueOperationNamesRule.UniqueOperationNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueVariableNamesRule", {
      enumerable: true,
      get: function get() {
        return _UniqueVariableNamesRule.UniqueVariableNamesRule;
      }
    });
    Object.defineProperty(exports, "ValuesOfCorrectTypeRule", {
      enumerable: true,
      get: function get() {
        return _ValuesOfCorrectTypeRule.ValuesOfCorrectTypeRule;
      }
    });
    Object.defineProperty(exports, "VariablesAreInputTypesRule", {
      enumerable: true,
      get: function get() {
        return _VariablesAreInputTypesRule.VariablesAreInputTypesRule;
      }
    });
    Object.defineProperty(exports, "VariablesInAllowedPositionRule", {
      enumerable: true,
      get: function get() {
        return _VariablesInAllowedPositionRule.VariablesInAllowedPositionRule;
      }
    });
    Object.defineProperty(exports, "LoneSchemaDefinitionRule", {
      enumerable: true,
      get: function get() {
        return _LoneSchemaDefinitionRule.LoneSchemaDefinitionRule;
      }
    });
    Object.defineProperty(exports, "UniqueOperationTypesRule", {
      enumerable: true,
      get: function get() {
        return _UniqueOperationTypesRule.UniqueOperationTypesRule;
      }
    });
    Object.defineProperty(exports, "UniqueTypeNamesRule", {
      enumerable: true,
      get: function get() {
        return _UniqueTypeNamesRule.UniqueTypeNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueEnumValueNamesRule", {
      enumerable: true,
      get: function get() {
        return _UniqueEnumValueNamesRule.UniqueEnumValueNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueFieldDefinitionNamesRule", {
      enumerable: true,
      get: function get() {
        return _UniqueFieldDefinitionNamesRule.UniqueFieldDefinitionNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueDirectiveNamesRule", {
      enumerable: true,
      get: function get() {
        return _UniqueDirectiveNamesRule.UniqueDirectiveNamesRule;
      }
    });
    Object.defineProperty(exports, "PossibleTypeExtensionsRule", {
      enumerable: true,
      get: function get() {
        return _PossibleTypeExtensionsRule.PossibleTypeExtensionsRule;
      }
    });
    Object.defineProperty(exports, "NoDeprecatedCustomRule", {
      enumerable: true,
      get: function get() {
        return _NoDeprecatedCustomRule.NoDeprecatedCustomRule;
      }
    });
    Object.defineProperty(exports, "NoSchemaIntrospectionCustomRule", {
      enumerable: true,
      get: function get() {
        return _NoSchemaIntrospectionCustomRule.NoSchemaIntrospectionCustomRule;
      }
    });
    var _validate = require_validate2();
    var _ValidationContext = require_ValidationContext();
    var _specifiedRules = require_specifiedRules();
    var _ExecutableDefinitionsRule = require_ExecutableDefinitionsRule();
    var _FieldsOnCorrectTypeRule = require_FieldsOnCorrectTypeRule();
    var _FragmentsOnCompositeTypesRule = require_FragmentsOnCompositeTypesRule();
    var _KnownArgumentNamesRule = require_KnownArgumentNamesRule();
    var _KnownDirectivesRule = require_KnownDirectivesRule();
    var _KnownFragmentNamesRule = require_KnownFragmentNamesRule();
    var _KnownTypeNamesRule = require_KnownTypeNamesRule();
    var _LoneAnonymousOperationRule = require_LoneAnonymousOperationRule();
    var _NoFragmentCyclesRule = require_NoFragmentCyclesRule();
    var _NoUndefinedVariablesRule = require_NoUndefinedVariablesRule();
    var _NoUnusedFragmentsRule = require_NoUnusedFragmentsRule();
    var _NoUnusedVariablesRule = require_NoUnusedVariablesRule();
    var _OverlappingFieldsCanBeMergedRule = require_OverlappingFieldsCanBeMergedRule();
    var _PossibleFragmentSpreadsRule = require_PossibleFragmentSpreadsRule();
    var _ProvidedRequiredArgumentsRule = require_ProvidedRequiredArgumentsRule();
    var _ScalarLeafsRule = require_ScalarLeafsRule();
    var _SingleFieldSubscriptionsRule = require_SingleFieldSubscriptionsRule();
    var _UniqueArgumentNamesRule = require_UniqueArgumentNamesRule();
    var _UniqueDirectivesPerLocationRule = require_UniqueDirectivesPerLocationRule();
    var _UniqueFragmentNamesRule = require_UniqueFragmentNamesRule();
    var _UniqueInputFieldNamesRule = require_UniqueInputFieldNamesRule();
    var _UniqueOperationNamesRule = require_UniqueOperationNamesRule();
    var _UniqueVariableNamesRule = require_UniqueVariableNamesRule();
    var _ValuesOfCorrectTypeRule = require_ValuesOfCorrectTypeRule();
    var _VariablesAreInputTypesRule = require_VariablesAreInputTypesRule();
    var _VariablesInAllowedPositionRule = require_VariablesInAllowedPositionRule();
    var _LoneSchemaDefinitionRule = require_LoneSchemaDefinitionRule();
    var _UniqueOperationTypesRule = require_UniqueOperationTypesRule();
    var _UniqueTypeNamesRule = require_UniqueTypeNamesRule();
    var _UniqueEnumValueNamesRule = require_UniqueEnumValueNamesRule();
    var _UniqueFieldDefinitionNamesRule = require_UniqueFieldDefinitionNamesRule();
    var _UniqueDirectiveNamesRule = require_UniqueDirectiveNamesRule();
    var _PossibleTypeExtensionsRule = require_PossibleTypeExtensionsRule();
    var _NoDeprecatedCustomRule = require_NoDeprecatedCustomRule();
    var _NoSchemaIntrospectionCustomRule = require_NoSchemaIntrospectionCustomRule();
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/error/formatError.js
var require_formatError = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/error/formatError.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatError = formatError;
    var _devAssert = _interopRequireDefault(require_devAssert());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function formatError(error) {
      var _error$message;
      error || (0, _devAssert.default)(0, "Received null or undefined error.");
      var message = (_error$message = error.message) !== null && _error$message !== void 0 ? _error$message : "An unknown error occurred.";
      var locations = error.locations;
      var path = error.path;
      var extensions = error.extensions;
      return extensions ? {
        message,
        locations,
        path,
        extensions
      } : {
        message,
        locations,
        path
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/error/index.js
var require_error = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/error/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "GraphQLError", {
      enumerable: true,
      get: function get() {
        return _GraphQLError.GraphQLError;
      }
    });
    Object.defineProperty(exports, "printError", {
      enumerable: true,
      get: function get() {
        return _GraphQLError.printError;
      }
    });
    Object.defineProperty(exports, "syntaxError", {
      enumerable: true,
      get: function get() {
        return _syntaxError.syntaxError;
      }
    });
    Object.defineProperty(exports, "locatedError", {
      enumerable: true,
      get: function get() {
        return _locatedError.locatedError;
      }
    });
    Object.defineProperty(exports, "formatError", {
      enumerable: true,
      get: function get() {
        return _formatError.formatError;
      }
    });
    var _GraphQLError = require_GraphQLError();
    var _syntaxError = require_syntaxError();
    var _locatedError = require_locatedError();
    var _formatError = require_formatError();
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/getIntrospectionQuery.js
var require_getIntrospectionQuery = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/getIntrospectionQuery.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getIntrospectionQuery = getIntrospectionQuery;
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function getIntrospectionQuery(options) {
      var optionsWithDefault = _objectSpread({
        descriptions: true,
        specifiedByUrl: false,
        directiveIsRepeatable: false,
        schemaDescription: false,
        inputValueDeprecation: false
      }, options);
      var descriptions = optionsWithDefault.descriptions ? "description" : "";
      var specifiedByUrl = optionsWithDefault.specifiedByUrl ? "specifiedByUrl" : "";
      var directiveIsRepeatable = optionsWithDefault.directiveIsRepeatable ? "isRepeatable" : "";
      var schemaDescription = optionsWithDefault.schemaDescription ? descriptions : "";
      function inputDeprecation(str) {
        return optionsWithDefault.inputValueDeprecation ? str : "";
      }
      return "\n    query IntrospectionQuery {\n      __schema {\n        ".concat(schemaDescription, "\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ").concat(descriptions, "\n          ").concat(directiveIsRepeatable, "\n          locations\n          args").concat(inputDeprecation("(includeDeprecated: true)"), " {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ").concat(descriptions, "\n      ").concat(specifiedByUrl, "\n      fields(includeDeprecated: true) {\n        name\n        ").concat(descriptions, "\n        args").concat(inputDeprecation("(includeDeprecated: true)"), " {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields").concat(inputDeprecation("(includeDeprecated: true)"), " {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ").concat(descriptions, "\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ").concat(descriptions, "\n      type { ...TypeRef }\n      defaultValue\n      ").concat(inputDeprecation("isDeprecated"), "\n      ").concat(inputDeprecation("deprecationReason"), "\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ");
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/getOperationAST.js
var require_getOperationAST = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/getOperationAST.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getOperationAST = getOperationAST2;
    var _kinds = require_kinds();
    function getOperationAST2(documentAST, operationName) {
      var operation = null;
      for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
        var definition = _documentAST$definiti2[_i2];
        if (definition.kind === _kinds.Kind.OPERATION_DEFINITION) {
          var _definition$name;
          if (operationName == null) {
            if (operation) {
              return null;
            }
            operation = definition;
          } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
            return definition;
          }
        }
      }
      return operation;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/introspectionFromSchema.js
var require_introspectionFromSchema = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/introspectionFromSchema.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.introspectionFromSchema = introspectionFromSchema;
    var _invariant = _interopRequireDefault(require_invariant());
    var _parser = require_parser();
    var _execute = require_execute();
    var _getIntrospectionQuery = require_getIntrospectionQuery();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function introspectionFromSchema(schema, options) {
      var optionsWithDefaults = _objectSpread({
        specifiedByUrl: true,
        directiveIsRepeatable: true,
        schemaDescription: true,
        inputValueDeprecation: true
      }, options);
      var document2 = (0, _parser.parse)((0, _getIntrospectionQuery.getIntrospectionQuery)(optionsWithDefaults));
      var result = (0, _execute.executeSync)({
        schema,
        document: document2
      });
      !result.errors && result.data || (0, _invariant.default)(0);
      return result.data;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/buildClientSchema.js
var require_buildClientSchema = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/buildClientSchema.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.buildClientSchema = buildClientSchema2;
    var _objectValues = _interopRequireDefault(require_objectValues());
    var _inspect = _interopRequireDefault(require_inspect());
    var _devAssert = _interopRequireDefault(require_devAssert());
    var _keyValMap = _interopRequireDefault(require_keyValMap());
    var _isObjectLike = _interopRequireDefault(require_isObjectLike());
    var _parser = require_parser();
    var _schema = require_schema();
    var _directives = require_directives();
    var _scalars = require_scalars();
    var _introspection = require_introspection();
    var _definition = require_definition();
    var _valueFromAST = require_valueFromAST();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function buildClientSchema2(introspection, options) {
      (0, _isObjectLike.default)(introspection) && (0, _isObjectLike.default)(introspection.__schema) || (0, _devAssert.default)(0, 'Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: '.concat((0, _inspect.default)(introspection), "."));
      var schemaIntrospection = introspection.__schema;
      var typeMap = (0, _keyValMap.default)(schemaIntrospection.types, function(typeIntrospection) {
        return typeIntrospection.name;
      }, function(typeIntrospection) {
        return buildType(typeIntrospection);
      });
      for (var _i2 = 0, _ref2 = [].concat(_scalars.specifiedScalarTypes, _introspection.introspectionTypes); _i2 < _ref2.length; _i2++) {
        var stdType = _ref2[_i2];
        if (typeMap[stdType.name]) {
          typeMap[stdType.name] = stdType;
        }
      }
      var queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;
      var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;
      var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null;
      var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : [];
      return new _schema.GraphQLSchema({
        description: schemaIntrospection.description,
        query: queryType,
        mutation: mutationType,
        subscription: subscriptionType,
        types: (0, _objectValues.default)(typeMap),
        directives,
        assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
      });
      function getType(typeRef) {
        if (typeRef.kind === _introspection.TypeKind.LIST) {
          var itemRef = typeRef.ofType;
          if (!itemRef) {
            throw new Error("Decorated type deeper than introspection query.");
          }
          return new _definition.GraphQLList(getType(itemRef));
        }
        if (typeRef.kind === _introspection.TypeKind.NON_NULL) {
          var nullableRef = typeRef.ofType;
          if (!nullableRef) {
            throw new Error("Decorated type deeper than introspection query.");
          }
          var nullableType = getType(nullableRef);
          return new _definition.GraphQLNonNull((0, _definition.assertNullableType)(nullableType));
        }
        return getNamedType2(typeRef);
      }
      function getNamedType2(typeRef) {
        var typeName = typeRef.name;
        if (!typeName) {
          throw new Error("Unknown type reference: ".concat((0, _inspect.default)(typeRef), "."));
        }
        var type = typeMap[typeName];
        if (!type) {
          throw new Error("Invalid or incomplete schema, unknown type: ".concat(typeName, ". Ensure that a full introspection query is used in order to build a client schema."));
        }
        return type;
      }
      function getObjectType(typeRef) {
        return (0, _definition.assertObjectType)(getNamedType2(typeRef));
      }
      function getInterfaceType(typeRef) {
        return (0, _definition.assertInterfaceType)(getNamedType2(typeRef));
      }
      function buildType(type) {
        if (type != null && type.name != null && type.kind != null) {
          switch (type.kind) {
            case _introspection.TypeKind.SCALAR:
              return buildScalarDef(type);
            case _introspection.TypeKind.OBJECT:
              return buildObjectDef(type);
            case _introspection.TypeKind.INTERFACE:
              return buildInterfaceDef(type);
            case _introspection.TypeKind.UNION:
              return buildUnionDef(type);
            case _introspection.TypeKind.ENUM:
              return buildEnumDef(type);
            case _introspection.TypeKind.INPUT_OBJECT:
              return buildInputObjectDef(type);
          }
        }
        var typeStr = (0, _inspect.default)(type);
        throw new Error("Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ".concat(typeStr, "."));
      }
      function buildScalarDef(scalarIntrospection) {
        return new _definition.GraphQLScalarType({
          name: scalarIntrospection.name,
          description: scalarIntrospection.description,
          specifiedByUrl: scalarIntrospection.specifiedByUrl
        });
      }
      function buildImplementationsList(implementingIntrospection) {
        if (implementingIntrospection.interfaces === null && implementingIntrospection.kind === _introspection.TypeKind.INTERFACE) {
          return [];
        }
        if (!implementingIntrospection.interfaces) {
          var implementingIntrospectionStr = (0, _inspect.default)(implementingIntrospection);
          throw new Error("Introspection result missing interfaces: ".concat(implementingIntrospectionStr, "."));
        }
        return implementingIntrospection.interfaces.map(getInterfaceType);
      }
      function buildObjectDef(objectIntrospection) {
        return new _definition.GraphQLObjectType({
          name: objectIntrospection.name,
          description: objectIntrospection.description,
          interfaces: function interfaces() {
            return buildImplementationsList(objectIntrospection);
          },
          fields: function fields() {
            return buildFieldDefMap(objectIntrospection);
          }
        });
      }
      function buildInterfaceDef(interfaceIntrospection) {
        return new _definition.GraphQLInterfaceType({
          name: interfaceIntrospection.name,
          description: interfaceIntrospection.description,
          interfaces: function interfaces() {
            return buildImplementationsList(interfaceIntrospection);
          },
          fields: function fields() {
            return buildFieldDefMap(interfaceIntrospection);
          }
        });
      }
      function buildUnionDef(unionIntrospection) {
        if (!unionIntrospection.possibleTypes) {
          var unionIntrospectionStr = (0, _inspect.default)(unionIntrospection);
          throw new Error("Introspection result missing possibleTypes: ".concat(unionIntrospectionStr, "."));
        }
        return new _definition.GraphQLUnionType({
          name: unionIntrospection.name,
          description: unionIntrospection.description,
          types: function types() {
            return unionIntrospection.possibleTypes.map(getObjectType);
          }
        });
      }
      function buildEnumDef(enumIntrospection) {
        if (!enumIntrospection.enumValues) {
          var enumIntrospectionStr = (0, _inspect.default)(enumIntrospection);
          throw new Error("Introspection result missing enumValues: ".concat(enumIntrospectionStr, "."));
        }
        return new _definition.GraphQLEnumType({
          name: enumIntrospection.name,
          description: enumIntrospection.description,
          values: (0, _keyValMap.default)(enumIntrospection.enumValues, function(valueIntrospection) {
            return valueIntrospection.name;
          }, function(valueIntrospection) {
            return {
              description: valueIntrospection.description,
              deprecationReason: valueIntrospection.deprecationReason
            };
          })
        });
      }
      function buildInputObjectDef(inputObjectIntrospection) {
        if (!inputObjectIntrospection.inputFields) {
          var inputObjectIntrospectionStr = (0, _inspect.default)(inputObjectIntrospection);
          throw new Error("Introspection result missing inputFields: ".concat(inputObjectIntrospectionStr, "."));
        }
        return new _definition.GraphQLInputObjectType({
          name: inputObjectIntrospection.name,
          description: inputObjectIntrospection.description,
          fields: function fields() {
            return buildInputValueDefMap(inputObjectIntrospection.inputFields);
          }
        });
      }
      function buildFieldDefMap(typeIntrospection) {
        if (!typeIntrospection.fields) {
          throw new Error("Introspection result missing fields: ".concat((0, _inspect.default)(typeIntrospection), "."));
        }
        return (0, _keyValMap.default)(typeIntrospection.fields, function(fieldIntrospection) {
          return fieldIntrospection.name;
        }, buildField);
      }
      function buildField(fieldIntrospection) {
        var type = getType(fieldIntrospection.type);
        if (!(0, _definition.isOutputType)(type)) {
          var typeStr = (0, _inspect.default)(type);
          throw new Error("Introspection must provide output type for fields, but received: ".concat(typeStr, "."));
        }
        if (!fieldIntrospection.args) {
          var fieldIntrospectionStr = (0, _inspect.default)(fieldIntrospection);
          throw new Error("Introspection result missing field args: ".concat(fieldIntrospectionStr, "."));
        }
        return {
          description: fieldIntrospection.description,
          deprecationReason: fieldIntrospection.deprecationReason,
          type,
          args: buildInputValueDefMap(fieldIntrospection.args)
        };
      }
      function buildInputValueDefMap(inputValueIntrospections) {
        return (0, _keyValMap.default)(inputValueIntrospections, function(inputValue) {
          return inputValue.name;
        }, buildInputValue);
      }
      function buildInputValue(inputValueIntrospection) {
        var type = getType(inputValueIntrospection.type);
        if (!(0, _definition.isInputType)(type)) {
          var typeStr = (0, _inspect.default)(type);
          throw new Error("Introspection must provide input type for arguments, but received: ".concat(typeStr, "."));
        }
        var defaultValue = inputValueIntrospection.defaultValue != null ? (0, _valueFromAST.valueFromAST)((0, _parser.parseValue)(inputValueIntrospection.defaultValue), type) : void 0;
        return {
          description: inputValueIntrospection.description,
          type,
          defaultValue,
          deprecationReason: inputValueIntrospection.deprecationReason
        };
      }
      function buildDirective(directiveIntrospection) {
        if (!directiveIntrospection.args) {
          var directiveIntrospectionStr = (0, _inspect.default)(directiveIntrospection);
          throw new Error("Introspection result missing directive args: ".concat(directiveIntrospectionStr, "."));
        }
        if (!directiveIntrospection.locations) {
          var _directiveIntrospectionStr = (0, _inspect.default)(directiveIntrospection);
          throw new Error("Introspection result missing directive locations: ".concat(_directiveIntrospectionStr, "."));
        }
        return new _directives.GraphQLDirective({
          name: directiveIntrospection.name,
          description: directiveIntrospection.description,
          isRepeatable: directiveIntrospection.isRepeatable,
          locations: directiveIntrospection.locations.slice(),
          args: buildInputValueDefMap(directiveIntrospection.args)
        });
      }
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/extendSchema.js
var require_extendSchema = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/extendSchema.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.extendSchema = extendSchema;
    exports.extendSchemaImpl = extendSchemaImpl;
    exports.getDescription = getDescription;
    var _objectValues = _interopRequireDefault(require_objectValues());
    var _keyMap = _interopRequireDefault(require_keyMap());
    var _inspect = _interopRequireDefault(require_inspect());
    var _mapValue = _interopRequireDefault(require_mapValue());
    var _invariant = _interopRequireDefault(require_invariant());
    var _devAssert = _interopRequireDefault(require_devAssert());
    var _kinds = require_kinds();
    var _tokenKind = require_tokenKind();
    var _blockString = require_blockString();
    var _predicates = require_predicates();
    var _validate = require_validate2();
    var _values = require_values();
    var _schema = require_schema();
    var _scalars = require_scalars();
    var _introspection = require_introspection();
    var _directives = require_directives();
    var _definition = require_definition();
    var _valueFromAST = require_valueFromAST();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function extendSchema(schema, documentAST, options) {
      (0, _schema.assertSchema)(schema);
      documentAST != null && documentAST.kind === _kinds.Kind.DOCUMENT || (0, _devAssert.default)(0, "Must provide valid Document AST.");
      if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
        (0, _validate.assertValidSDLExtension)(documentAST, schema);
      }
      var schemaConfig = schema.toConfig();
      var extendedConfig = extendSchemaImpl(schemaConfig, documentAST, options);
      return schemaConfig === extendedConfig ? schema : new _schema.GraphQLSchema(extendedConfig);
    }
    function extendSchemaImpl(schemaConfig, documentAST, options) {
      var _schemaDef, _schemaDef$descriptio, _schemaDef2, _options$assumeValid;
      var typeDefs = [];
      var typeExtensionsMap = Object.create(null);
      var directiveDefs = [];
      var schemaDef;
      var schemaExtensions = [];
      for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
        var def = _documentAST$definiti2[_i2];
        if (def.kind === _kinds.Kind.SCHEMA_DEFINITION) {
          schemaDef = def;
        } else if (def.kind === _kinds.Kind.SCHEMA_EXTENSION) {
          schemaExtensions.push(def);
        } else if ((0, _predicates.isTypeDefinitionNode)(def)) {
          typeDefs.push(def);
        } else if ((0, _predicates.isTypeExtensionNode)(def)) {
          var extendedTypeName = def.name.value;
          var existingTypeExtensions = typeExtensionsMap[extendedTypeName];
          typeExtensionsMap[extendedTypeName] = existingTypeExtensions ? existingTypeExtensions.concat([def]) : [def];
        } else if (def.kind === _kinds.Kind.DIRECTIVE_DEFINITION) {
          directiveDefs.push(def);
        }
      }
      if (Object.keys(typeExtensionsMap).length === 0 && typeDefs.length === 0 && directiveDefs.length === 0 && schemaExtensions.length === 0 && schemaDef == null) {
        return schemaConfig;
      }
      var typeMap = Object.create(null);
      for (var _i4 = 0, _schemaConfig$types2 = schemaConfig.types; _i4 < _schemaConfig$types2.length; _i4++) {
        var existingType = _schemaConfig$types2[_i4];
        typeMap[existingType.name] = extendNamedType(existingType);
      }
      for (var _i6 = 0; _i6 < typeDefs.length; _i6++) {
        var _stdTypeMap$name;
        var typeNode = typeDefs[_i6];
        var name = typeNode.name.value;
        typeMap[name] = (_stdTypeMap$name = stdTypeMap[name]) !== null && _stdTypeMap$name !== void 0 ? _stdTypeMap$name : buildType(typeNode);
      }
      var operationTypes = _objectSpread(_objectSpread({
        query: schemaConfig.query && replaceNamedType(schemaConfig.query),
        mutation: schemaConfig.mutation && replaceNamedType(schemaConfig.mutation),
        subscription: schemaConfig.subscription && replaceNamedType(schemaConfig.subscription)
      }, schemaDef && getOperationTypes([schemaDef])), getOperationTypes(schemaExtensions));
      return _objectSpread(_objectSpread({
        description: (_schemaDef = schemaDef) === null || _schemaDef === void 0 ? void 0 : (_schemaDef$descriptio = _schemaDef.description) === null || _schemaDef$descriptio === void 0 ? void 0 : _schemaDef$descriptio.value
      }, operationTypes), {}, {
        types: (0, _objectValues.default)(typeMap),
        directives: [].concat(schemaConfig.directives.map(replaceDirective), directiveDefs.map(buildDirective)),
        extensions: void 0,
        astNode: (_schemaDef2 = schemaDef) !== null && _schemaDef2 !== void 0 ? _schemaDef2 : schemaConfig.astNode,
        extensionASTNodes: schemaConfig.extensionASTNodes.concat(schemaExtensions),
        assumeValid: (_options$assumeValid = options === null || options === void 0 ? void 0 : options.assumeValid) !== null && _options$assumeValid !== void 0 ? _options$assumeValid : false
      });
      function replaceType(type) {
        if ((0, _definition.isListType)(type)) {
          return new _definition.GraphQLList(replaceType(type.ofType));
        }
        if ((0, _definition.isNonNullType)(type)) {
          return new _definition.GraphQLNonNull(replaceType(type.ofType));
        }
        return replaceNamedType(type);
      }
      function replaceNamedType(type) {
        return typeMap[type.name];
      }
      function replaceDirective(directive) {
        var config = directive.toConfig();
        return new _directives.GraphQLDirective(_objectSpread(_objectSpread({}, config), {}, {
          args: (0, _mapValue.default)(config.args, extendArg)
        }));
      }
      function extendNamedType(type) {
        if ((0, _introspection.isIntrospectionType)(type) || (0, _scalars.isSpecifiedScalarType)(type)) {
          return type;
        }
        if ((0, _definition.isScalarType)(type)) {
          return extendScalarType(type);
        }
        if ((0, _definition.isObjectType)(type)) {
          return extendObjectType(type);
        }
        if ((0, _definition.isInterfaceType)(type)) {
          return extendInterfaceType(type);
        }
        if ((0, _definition.isUnionType)(type)) {
          return extendUnionType(type);
        }
        if ((0, _definition.isEnumType)(type)) {
          return extendEnumType(type);
        }
        if ((0, _definition.isInputObjectType)(type)) {
          return extendInputObjectType(type);
        }
        (0, _invariant.default)(0, "Unexpected type: " + (0, _inspect.default)(type));
      }
      function extendInputObjectType(type) {
        var _typeExtensionsMap$co;
        var config = type.toConfig();
        var extensions = (_typeExtensionsMap$co = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co !== void 0 ? _typeExtensionsMap$co : [];
        return new _definition.GraphQLInputObjectType(_objectSpread(_objectSpread({}, config), {}, {
          fields: function fields() {
            return _objectSpread(_objectSpread({}, (0, _mapValue.default)(config.fields, function(field) {
              return _objectSpread(_objectSpread({}, field), {}, {
                type: replaceType(field.type)
              });
            })), buildInputFieldMap(extensions));
          },
          extensionASTNodes: config.extensionASTNodes.concat(extensions)
        }));
      }
      function extendEnumType(type) {
        var _typeExtensionsMap$ty;
        var config = type.toConfig();
        var extensions = (_typeExtensionsMap$ty = typeExtensionsMap[type.name]) !== null && _typeExtensionsMap$ty !== void 0 ? _typeExtensionsMap$ty : [];
        return new _definition.GraphQLEnumType(_objectSpread(_objectSpread({}, config), {}, {
          values: _objectSpread(_objectSpread({}, config.values), buildEnumValueMap(extensions)),
          extensionASTNodes: config.extensionASTNodes.concat(extensions)
        }));
      }
      function extendScalarType(type) {
        var _typeExtensionsMap$co2;
        var config = type.toConfig();
        var extensions = (_typeExtensionsMap$co2 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co2 !== void 0 ? _typeExtensionsMap$co2 : [];
        var specifiedByUrl = config.specifiedByUrl;
        for (var _i8 = 0; _i8 < extensions.length; _i8++) {
          var _getSpecifiedByUrl;
          var extensionNode = extensions[_i8];
          specifiedByUrl = (_getSpecifiedByUrl = getSpecifiedByUrl(extensionNode)) !== null && _getSpecifiedByUrl !== void 0 ? _getSpecifiedByUrl : specifiedByUrl;
        }
        return new _definition.GraphQLScalarType(_objectSpread(_objectSpread({}, config), {}, {
          specifiedByUrl,
          extensionASTNodes: config.extensionASTNodes.concat(extensions)
        }));
      }
      function extendObjectType(type) {
        var _typeExtensionsMap$co3;
        var config = type.toConfig();
        var extensions = (_typeExtensionsMap$co3 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co3 !== void 0 ? _typeExtensionsMap$co3 : [];
        return new _definition.GraphQLObjectType(_objectSpread(_objectSpread({}, config), {}, {
          interfaces: function interfaces() {
            return [].concat(type.getInterfaces().map(replaceNamedType), buildInterfaces(extensions));
          },
          fields: function fields() {
            return _objectSpread(_objectSpread({}, (0, _mapValue.default)(config.fields, extendField)), buildFieldMap(extensions));
          },
          extensionASTNodes: config.extensionASTNodes.concat(extensions)
        }));
      }
      function extendInterfaceType(type) {
        var _typeExtensionsMap$co4;
        var config = type.toConfig();
        var extensions = (_typeExtensionsMap$co4 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co4 !== void 0 ? _typeExtensionsMap$co4 : [];
        return new _definition.GraphQLInterfaceType(_objectSpread(_objectSpread({}, config), {}, {
          interfaces: function interfaces() {
            return [].concat(type.getInterfaces().map(replaceNamedType), buildInterfaces(extensions));
          },
          fields: function fields() {
            return _objectSpread(_objectSpread({}, (0, _mapValue.default)(config.fields, extendField)), buildFieldMap(extensions));
          },
          extensionASTNodes: config.extensionASTNodes.concat(extensions)
        }));
      }
      function extendUnionType(type) {
        var _typeExtensionsMap$co5;
        var config = type.toConfig();
        var extensions = (_typeExtensionsMap$co5 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co5 !== void 0 ? _typeExtensionsMap$co5 : [];
        return new _definition.GraphQLUnionType(_objectSpread(_objectSpread({}, config), {}, {
          types: function types() {
            return [].concat(type.getTypes().map(replaceNamedType), buildUnionTypes(extensions));
          },
          extensionASTNodes: config.extensionASTNodes.concat(extensions)
        }));
      }
      function extendField(field) {
        return _objectSpread(_objectSpread({}, field), {}, {
          type: replaceType(field.type),
          args: (0, _mapValue.default)(field.args, extendArg)
        });
      }
      function extendArg(arg) {
        return _objectSpread(_objectSpread({}, arg), {}, {
          type: replaceType(arg.type)
        });
      }
      function getOperationTypes(nodes) {
        var opTypes = {};
        for (var _i10 = 0; _i10 < nodes.length; _i10++) {
          var _node$operationTypes;
          var node = nodes[_i10];
          var operationTypesNodes = (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : [];
          for (var _i12 = 0; _i12 < operationTypesNodes.length; _i12++) {
            var operationType = operationTypesNodes[_i12];
            opTypes[operationType.operation] = getNamedType2(operationType.type);
          }
        }
        return opTypes;
      }
      function getNamedType2(node) {
        var _stdTypeMap$name2;
        var name2 = node.name.value;
        var type = (_stdTypeMap$name2 = stdTypeMap[name2]) !== null && _stdTypeMap$name2 !== void 0 ? _stdTypeMap$name2 : typeMap[name2];
        if (type === void 0) {
          throw new Error('Unknown type: "'.concat(name2, '".'));
        }
        return type;
      }
      function getWrappedType(node) {
        if (node.kind === _kinds.Kind.LIST_TYPE) {
          return new _definition.GraphQLList(getWrappedType(node.type));
        }
        if (node.kind === _kinds.Kind.NON_NULL_TYPE) {
          return new _definition.GraphQLNonNull(getWrappedType(node.type));
        }
        return getNamedType2(node);
      }
      function buildDirective(node) {
        var locations = node.locations.map(function(_ref) {
          var value = _ref.value;
          return value;
        });
        return new _directives.GraphQLDirective({
          name: node.name.value,
          description: getDescription(node, options),
          locations,
          isRepeatable: node.repeatable,
          args: buildArgumentMap(node.arguments),
          astNode: node
        });
      }
      function buildFieldMap(nodes) {
        var fieldConfigMap = Object.create(null);
        for (var _i14 = 0; _i14 < nodes.length; _i14++) {
          var _node$fields;
          var node = nodes[_i14];
          var nodeFields = (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : [];
          for (var _i16 = 0; _i16 < nodeFields.length; _i16++) {
            var field = nodeFields[_i16];
            fieldConfigMap[field.name.value] = {
              type: getWrappedType(field.type),
              description: getDescription(field, options),
              args: buildArgumentMap(field.arguments),
              deprecationReason: getDeprecationReason(field),
              astNode: field
            };
          }
        }
        return fieldConfigMap;
      }
      function buildArgumentMap(args) {
        var argsNodes = args !== null && args !== void 0 ? args : [];
        var argConfigMap = Object.create(null);
        for (var _i18 = 0; _i18 < argsNodes.length; _i18++) {
          var arg = argsNodes[_i18];
          var type = getWrappedType(arg.type);
          argConfigMap[arg.name.value] = {
            type,
            description: getDescription(arg, options),
            defaultValue: (0, _valueFromAST.valueFromAST)(arg.defaultValue, type),
            deprecationReason: getDeprecationReason(arg),
            astNode: arg
          };
        }
        return argConfigMap;
      }
      function buildInputFieldMap(nodes) {
        var inputFieldMap = Object.create(null);
        for (var _i20 = 0; _i20 < nodes.length; _i20++) {
          var _node$fields2;
          var node = nodes[_i20];
          var fieldsNodes = (_node$fields2 = node.fields) !== null && _node$fields2 !== void 0 ? _node$fields2 : [];
          for (var _i22 = 0; _i22 < fieldsNodes.length; _i22++) {
            var field = fieldsNodes[_i22];
            var type = getWrappedType(field.type);
            inputFieldMap[field.name.value] = {
              type,
              description: getDescription(field, options),
              defaultValue: (0, _valueFromAST.valueFromAST)(field.defaultValue, type),
              deprecationReason: getDeprecationReason(field),
              astNode: field
            };
          }
        }
        return inputFieldMap;
      }
      function buildEnumValueMap(nodes) {
        var enumValueMap = Object.create(null);
        for (var _i24 = 0; _i24 < nodes.length; _i24++) {
          var _node$values;
          var node = nodes[_i24];
          var valuesNodes = (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : [];
          for (var _i26 = 0; _i26 < valuesNodes.length; _i26++) {
            var value = valuesNodes[_i26];
            enumValueMap[value.name.value] = {
              description: getDescription(value, options),
              deprecationReason: getDeprecationReason(value),
              astNode: value
            };
          }
        }
        return enumValueMap;
      }
      function buildInterfaces(nodes) {
        var interfaces = [];
        for (var _i28 = 0; _i28 < nodes.length; _i28++) {
          var _node$interfaces;
          var node = nodes[_i28];
          var interfacesNodes = (_node$interfaces = node.interfaces) !== null && _node$interfaces !== void 0 ? _node$interfaces : [];
          for (var _i30 = 0; _i30 < interfacesNodes.length; _i30++) {
            var type = interfacesNodes[_i30];
            interfaces.push(getNamedType2(type));
          }
        }
        return interfaces;
      }
      function buildUnionTypes(nodes) {
        var types = [];
        for (var _i32 = 0; _i32 < nodes.length; _i32++) {
          var _node$types;
          var node = nodes[_i32];
          var typeNodes = (_node$types = node.types) !== null && _node$types !== void 0 ? _node$types : [];
          for (var _i34 = 0; _i34 < typeNodes.length; _i34++) {
            var type = typeNodes[_i34];
            types.push(getNamedType2(type));
          }
        }
        return types;
      }
      function buildType(astNode) {
        var _typeExtensionsMap$na;
        var name2 = astNode.name.value;
        var description = getDescription(astNode, options);
        var extensionNodes = (_typeExtensionsMap$na = typeExtensionsMap[name2]) !== null && _typeExtensionsMap$na !== void 0 ? _typeExtensionsMap$na : [];
        switch (astNode.kind) {
          case _kinds.Kind.OBJECT_TYPE_DEFINITION: {
            var extensionASTNodes = extensionNodes;
            var allNodes = [astNode].concat(extensionASTNodes);
            return new _definition.GraphQLObjectType({
              name: name2,
              description,
              interfaces: function interfaces() {
                return buildInterfaces(allNodes);
              },
              fields: function fields() {
                return buildFieldMap(allNodes);
              },
              astNode,
              extensionASTNodes
            });
          }
          case _kinds.Kind.INTERFACE_TYPE_DEFINITION: {
            var _extensionASTNodes = extensionNodes;
            var _allNodes = [astNode].concat(_extensionASTNodes);
            return new _definition.GraphQLInterfaceType({
              name: name2,
              description,
              interfaces: function interfaces() {
                return buildInterfaces(_allNodes);
              },
              fields: function fields() {
                return buildFieldMap(_allNodes);
              },
              astNode,
              extensionASTNodes: _extensionASTNodes
            });
          }
          case _kinds.Kind.ENUM_TYPE_DEFINITION: {
            var _extensionASTNodes2 = extensionNodes;
            var _allNodes2 = [astNode].concat(_extensionASTNodes2);
            return new _definition.GraphQLEnumType({
              name: name2,
              description,
              values: buildEnumValueMap(_allNodes2),
              astNode,
              extensionASTNodes: _extensionASTNodes2
            });
          }
          case _kinds.Kind.UNION_TYPE_DEFINITION: {
            var _extensionASTNodes3 = extensionNodes;
            var _allNodes3 = [astNode].concat(_extensionASTNodes3);
            return new _definition.GraphQLUnionType({
              name: name2,
              description,
              types: function types() {
                return buildUnionTypes(_allNodes3);
              },
              astNode,
              extensionASTNodes: _extensionASTNodes3
            });
          }
          case _kinds.Kind.SCALAR_TYPE_DEFINITION: {
            var _extensionASTNodes4 = extensionNodes;
            return new _definition.GraphQLScalarType({
              name: name2,
              description,
              specifiedByUrl: getSpecifiedByUrl(astNode),
              astNode,
              extensionASTNodes: _extensionASTNodes4
            });
          }
          case _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION: {
            var _extensionASTNodes5 = extensionNodes;
            var _allNodes4 = [astNode].concat(_extensionASTNodes5);
            return new _definition.GraphQLInputObjectType({
              name: name2,
              description,
              fields: function fields() {
                return buildInputFieldMap(_allNodes4);
              },
              astNode,
              extensionASTNodes: _extensionASTNodes5
            });
          }
        }
        (0, _invariant.default)(0, "Unexpected type definition node: " + (0, _inspect.default)(astNode));
      }
    }
    var stdTypeMap = (0, _keyMap.default)(_scalars.specifiedScalarTypes.concat(_introspection.introspectionTypes), function(type) {
      return type.name;
    });
    function getDeprecationReason(node) {
      var deprecated = (0, _values.getDirectiveValues)(_directives.GraphQLDeprecatedDirective, node);
      return deprecated === null || deprecated === void 0 ? void 0 : deprecated.reason;
    }
    function getSpecifiedByUrl(node) {
      var specifiedBy = (0, _values.getDirectiveValues)(_directives.GraphQLSpecifiedByDirective, node);
      return specifiedBy === null || specifiedBy === void 0 ? void 0 : specifiedBy.url;
    }
    function getDescription(node, options) {
      if (node.description) {
        return node.description.value;
      }
      if ((options === null || options === void 0 ? void 0 : options.commentDescriptions) === true) {
        var rawValue = getLeadingCommentBlock(node);
        if (rawValue !== void 0) {
          return (0, _blockString.dedentBlockStringValue)("\n" + rawValue);
        }
      }
    }
    function getLeadingCommentBlock(node) {
      var loc = node.loc;
      if (!loc) {
        return;
      }
      var comments = [];
      var token = loc.startToken.prev;
      while (token != null && token.kind === _tokenKind.TokenKind.COMMENT && token.next && token.prev && token.line + 1 === token.next.line && token.line !== token.prev.line) {
        var value = String(token.value);
        comments.push(value);
        token = token.prev;
      }
      return comments.length > 0 ? comments.reverse().join("\n") : void 0;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/buildASTSchema.js
var require_buildASTSchema = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/buildASTSchema.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.buildASTSchema = buildASTSchema2;
    exports.buildSchema = buildSchema;
    var _devAssert = _interopRequireDefault(require_devAssert());
    var _kinds = require_kinds();
    var _parser = require_parser();
    var _validate = require_validate2();
    var _schema = require_schema();
    var _directives = require_directives();
    var _extendSchema = require_extendSchema();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function buildASTSchema2(documentAST, options) {
      documentAST != null && documentAST.kind === _kinds.Kind.DOCUMENT || (0, _devAssert.default)(0, "Must provide valid Document AST.");
      if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
        (0, _validate.assertValidSDL)(documentAST);
      }
      var emptySchemaConfig = {
        description: void 0,
        types: [],
        directives: [],
        extensions: void 0,
        extensionASTNodes: [],
        assumeValid: false
      };
      var config = (0, _extendSchema.extendSchemaImpl)(emptySchemaConfig, documentAST, options);
      if (config.astNode == null) {
        for (var _i2 = 0, _config$types2 = config.types; _i2 < _config$types2.length; _i2++) {
          var type = _config$types2[_i2];
          switch (type.name) {
            case "Query":
              config.query = type;
              break;
            case "Mutation":
              config.mutation = type;
              break;
            case "Subscription":
              config.subscription = type;
              break;
          }
        }
      }
      var directives = config.directives;
      var _loop = function _loop2(_i42) {
        var stdDirective = _directives.specifiedDirectives[_i42];
        if (directives.every(function(directive) {
          return directive.name !== stdDirective.name;
        })) {
          directives.push(stdDirective);
        }
      };
      for (var _i4 = 0; _i4 < _directives.specifiedDirectives.length; _i4++) {
        _loop(_i4);
      }
      return new _schema.GraphQLSchema(config);
    }
    function buildSchema(source, options) {
      var document2 = (0, _parser.parse)(source, {
        noLocation: options === null || options === void 0 ? void 0 : options.noLocation,
        allowLegacySDLEmptyFields: options === null || options === void 0 ? void 0 : options.allowLegacySDLEmptyFields,
        allowLegacySDLImplementsInterfaces: options === null || options === void 0 ? void 0 : options.allowLegacySDLImplementsInterfaces,
        experimentalFragmentVariables: options === null || options === void 0 ? void 0 : options.experimentalFragmentVariables
      });
      return buildASTSchema2(document2, {
        commentDescriptions: options === null || options === void 0 ? void 0 : options.commentDescriptions,
        assumeValidSDL: options === null || options === void 0 ? void 0 : options.assumeValidSDL,
        assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
      });
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/lexicographicSortSchema.js
var require_lexicographicSortSchema = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/lexicographicSortSchema.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.lexicographicSortSchema = lexicographicSortSchema;
    var _objectValues = _interopRequireDefault(require_objectValues());
    var _inspect = _interopRequireDefault(require_inspect());
    var _invariant = _interopRequireDefault(require_invariant());
    var _keyValMap = _interopRequireDefault(require_keyValMap());
    var _naturalCompare = _interopRequireDefault(require_naturalCompare());
    var _schema = require_schema();
    var _directives = require_directives();
    var _introspection = require_introspection();
    var _definition = require_definition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function lexicographicSortSchema(schema) {
      var schemaConfig = schema.toConfig();
      var typeMap = (0, _keyValMap.default)(sortByName(schemaConfig.types), function(type) {
        return type.name;
      }, sortNamedType);
      return new _schema.GraphQLSchema(_objectSpread(_objectSpread({}, schemaConfig), {}, {
        types: (0, _objectValues.default)(typeMap),
        directives: sortByName(schemaConfig.directives).map(sortDirective),
        query: replaceMaybeType(schemaConfig.query),
        mutation: replaceMaybeType(schemaConfig.mutation),
        subscription: replaceMaybeType(schemaConfig.subscription)
      }));
      function replaceType(type) {
        if ((0, _definition.isListType)(type)) {
          return new _definition.GraphQLList(replaceType(type.ofType));
        } else if ((0, _definition.isNonNullType)(type)) {
          return new _definition.GraphQLNonNull(replaceType(type.ofType));
        }
        return replaceNamedType(type);
      }
      function replaceNamedType(type) {
        return typeMap[type.name];
      }
      function replaceMaybeType(maybeType) {
        return maybeType && replaceNamedType(maybeType);
      }
      function sortDirective(directive) {
        var config = directive.toConfig();
        return new _directives.GraphQLDirective(_objectSpread(_objectSpread({}, config), {}, {
          locations: sortBy(config.locations, function(x) {
            return x;
          }),
          args: sortArgs(config.args)
        }));
      }
      function sortArgs(args) {
        return sortObjMap(args, function(arg) {
          return _objectSpread(_objectSpread({}, arg), {}, {
            type: replaceType(arg.type)
          });
        });
      }
      function sortFields(fieldsMap) {
        return sortObjMap(fieldsMap, function(field) {
          return _objectSpread(_objectSpread({}, field), {}, {
            type: replaceType(field.type),
            args: sortArgs(field.args)
          });
        });
      }
      function sortInputFields(fieldsMap) {
        return sortObjMap(fieldsMap, function(field) {
          return _objectSpread(_objectSpread({}, field), {}, {
            type: replaceType(field.type)
          });
        });
      }
      function sortTypes(arr) {
        return sortByName(arr).map(replaceNamedType);
      }
      function sortNamedType(type) {
        if ((0, _definition.isScalarType)(type) || (0, _introspection.isIntrospectionType)(type)) {
          return type;
        }
        if ((0, _definition.isObjectType)(type)) {
          var config = type.toConfig();
          return new _definition.GraphQLObjectType(_objectSpread(_objectSpread({}, config), {}, {
            interfaces: function interfaces() {
              return sortTypes(config.interfaces);
            },
            fields: function fields() {
              return sortFields(config.fields);
            }
          }));
        }
        if ((0, _definition.isInterfaceType)(type)) {
          var _config = type.toConfig();
          return new _definition.GraphQLInterfaceType(_objectSpread(_objectSpread({}, _config), {}, {
            interfaces: function interfaces() {
              return sortTypes(_config.interfaces);
            },
            fields: function fields() {
              return sortFields(_config.fields);
            }
          }));
        }
        if ((0, _definition.isUnionType)(type)) {
          var _config2 = type.toConfig();
          return new _definition.GraphQLUnionType(_objectSpread(_objectSpread({}, _config2), {}, {
            types: function types() {
              return sortTypes(_config2.types);
            }
          }));
        }
        if ((0, _definition.isEnumType)(type)) {
          var _config3 = type.toConfig();
          return new _definition.GraphQLEnumType(_objectSpread(_objectSpread({}, _config3), {}, {
            values: sortObjMap(_config3.values)
          }));
        }
        if ((0, _definition.isInputObjectType)(type)) {
          var _config4 = type.toConfig();
          return new _definition.GraphQLInputObjectType(_objectSpread(_objectSpread({}, _config4), {}, {
            fields: function fields() {
              return sortInputFields(_config4.fields);
            }
          }));
        }
        (0, _invariant.default)(0, "Unexpected type: " + (0, _inspect.default)(type));
      }
    }
    function sortObjMap(map, sortValueFn) {
      var sortedMap = Object.create(null);
      var sortedKeys = sortBy(Object.keys(map), function(x) {
        return x;
      });
      for (var _i2 = 0; _i2 < sortedKeys.length; _i2++) {
        var key = sortedKeys[_i2];
        var value = map[key];
        sortedMap[key] = sortValueFn ? sortValueFn(value) : value;
      }
      return sortedMap;
    }
    function sortByName(array) {
      return sortBy(array, function(obj) {
        return obj.name;
      });
    }
    function sortBy(array, mapToKey) {
      return array.slice().sort(function(obj1, obj2) {
        var key1 = mapToKey(obj1);
        var key2 = mapToKey(obj2);
        return (0, _naturalCompare.default)(key1, key2);
      });
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/printSchema.js
var require_printSchema = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/printSchema.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printSchema = printSchema;
    exports.printIntrospectionSchema = printIntrospectionSchema;
    exports.printType = printType;
    var _objectValues = _interopRequireDefault(require_objectValues());
    var _inspect = _interopRequireDefault(require_inspect());
    var _invariant = _interopRequireDefault(require_invariant());
    var _printer = require_printer();
    var _blockString = require_blockString();
    var _introspection = require_introspection();
    var _scalars = require_scalars();
    var _directives = require_directives();
    var _definition = require_definition();
    var _astFromValue = require_astFromValue();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function printSchema(schema, options) {
      return printFilteredSchema(schema, function(n) {
        return !(0, _directives.isSpecifiedDirective)(n);
      }, isDefinedType, options);
    }
    function printIntrospectionSchema(schema, options) {
      return printFilteredSchema(schema, _directives.isSpecifiedDirective, _introspection.isIntrospectionType, options);
    }
    function isDefinedType(type) {
      return !(0, _scalars.isSpecifiedScalarType)(type) && !(0, _introspection.isIntrospectionType)(type);
    }
    function printFilteredSchema(schema, directiveFilter, typeFilter, options) {
      var directives = schema.getDirectives().filter(directiveFilter);
      var types = (0, _objectValues.default)(schema.getTypeMap()).filter(typeFilter);
      return [printSchemaDefinition(schema)].concat(directives.map(function(directive) {
        return printDirective(directive, options);
      }), types.map(function(type) {
        return printType(type, options);
      })).filter(Boolean).join("\n\n") + "\n";
    }
    function printSchemaDefinition(schema) {
      if (schema.description == null && isSchemaOfCommonNames(schema)) {
        return;
      }
      var operationTypes = [];
      var queryType = schema.getQueryType();
      if (queryType) {
        operationTypes.push("  query: ".concat(queryType.name));
      }
      var mutationType = schema.getMutationType();
      if (mutationType) {
        operationTypes.push("  mutation: ".concat(mutationType.name));
      }
      var subscriptionType = schema.getSubscriptionType();
      if (subscriptionType) {
        operationTypes.push("  subscription: ".concat(subscriptionType.name));
      }
      return printDescription({}, schema) + "schema {\n".concat(operationTypes.join("\n"), "\n}");
    }
    function isSchemaOfCommonNames(schema) {
      var queryType = schema.getQueryType();
      if (queryType && queryType.name !== "Query") {
        return false;
      }
      var mutationType = schema.getMutationType();
      if (mutationType && mutationType.name !== "Mutation") {
        return false;
      }
      var subscriptionType = schema.getSubscriptionType();
      if (subscriptionType && subscriptionType.name !== "Subscription") {
        return false;
      }
      return true;
    }
    function printType(type, options) {
      if ((0, _definition.isScalarType)(type)) {
        return printScalar(type, options);
      }
      if ((0, _definition.isObjectType)(type)) {
        return printObject(type, options);
      }
      if ((0, _definition.isInterfaceType)(type)) {
        return printInterface(type, options);
      }
      if ((0, _definition.isUnionType)(type)) {
        return printUnion(type, options);
      }
      if ((0, _definition.isEnumType)(type)) {
        return printEnum(type, options);
      }
      if ((0, _definition.isInputObjectType)(type)) {
        return printInputObject(type, options);
      }
      (0, _invariant.default)(0, "Unexpected type: " + (0, _inspect.default)(type));
    }
    function printScalar(type, options) {
      return printDescription(options, type) + "scalar ".concat(type.name) + printSpecifiedByUrl(type);
    }
    function printImplementedInterfaces(type) {
      var interfaces = type.getInterfaces();
      return interfaces.length ? " implements " + interfaces.map(function(i) {
        return i.name;
      }).join(" & ") : "";
    }
    function printObject(type, options) {
      return printDescription(options, type) + "type ".concat(type.name) + printImplementedInterfaces(type) + printFields(options, type);
    }
    function printInterface(type, options) {
      return printDescription(options, type) + "interface ".concat(type.name) + printImplementedInterfaces(type) + printFields(options, type);
    }
    function printUnion(type, options) {
      var types = type.getTypes();
      var possibleTypes = types.length ? " = " + types.join(" | ") : "";
      return printDescription(options, type) + "union " + type.name + possibleTypes;
    }
    function printEnum(type, options) {
      var values = type.getValues().map(function(value, i) {
        return printDescription(options, value, "  ", !i) + "  " + value.name + printDeprecated(value.deprecationReason);
      });
      return printDescription(options, type) + "enum ".concat(type.name) + printBlock(values);
    }
    function printInputObject(type, options) {
      var fields = (0, _objectValues.default)(type.getFields()).map(function(f, i) {
        return printDescription(options, f, "  ", !i) + "  " + printInputValue(f);
      });
      return printDescription(options, type) + "input ".concat(type.name) + printBlock(fields);
    }
    function printFields(options, type) {
      var fields = (0, _objectValues.default)(type.getFields()).map(function(f, i) {
        return printDescription(options, f, "  ", !i) + "  " + f.name + printArgs(options, f.args, "  ") + ": " + String(f.type) + printDeprecated(f.deprecationReason);
      });
      return printBlock(fields);
    }
    function printBlock(items) {
      return items.length !== 0 ? " {\n" + items.join("\n") + "\n}" : "";
    }
    function printArgs(options, args) {
      var indentation = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
      if (args.length === 0) {
        return "";
      }
      if (args.every(function(arg) {
        return !arg.description;
      })) {
        return "(" + args.map(printInputValue).join(", ") + ")";
      }
      return "(\n" + args.map(function(arg, i) {
        return printDescription(options, arg, "  " + indentation, !i) + "  " + indentation + printInputValue(arg);
      }).join("\n") + "\n" + indentation + ")";
    }
    function printInputValue(arg) {
      var defaultAST = (0, _astFromValue.astFromValue)(arg.defaultValue, arg.type);
      var argDecl = arg.name + ": " + String(arg.type);
      if (defaultAST) {
        argDecl += " = ".concat((0, _printer.print)(defaultAST));
      }
      return argDecl + printDeprecated(arg.deprecationReason);
    }
    function printDirective(directive, options) {
      return printDescription(options, directive) + "directive @" + directive.name + printArgs(options, directive.args) + (directive.isRepeatable ? " repeatable" : "") + " on " + directive.locations.join(" | ");
    }
    function printDeprecated(reason) {
      if (reason == null) {
        return "";
      }
      var reasonAST = (0, _astFromValue.astFromValue)(reason, _scalars.GraphQLString);
      if (reasonAST && reason !== _directives.DEFAULT_DEPRECATION_REASON) {
        return " @deprecated(reason: " + (0, _printer.print)(reasonAST) + ")";
      }
      return " @deprecated";
    }
    function printSpecifiedByUrl(scalar) {
      if (scalar.specifiedByUrl == null) {
        return "";
      }
      var url = scalar.specifiedByUrl;
      var urlAST = (0, _astFromValue.astFromValue)(url, _scalars.GraphQLString);
      urlAST || (0, _invariant.default)(0, "Unexpected null value returned from `astFromValue` for specifiedByUrl");
      return " @specifiedBy(url: " + (0, _printer.print)(urlAST) + ")";
    }
    function printDescription(options, def) {
      var indentation = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
      var firstInBlock = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
      var description = def.description;
      if (description == null) {
        return "";
      }
      if ((options === null || options === void 0 ? void 0 : options.commentDescriptions) === true) {
        return printDescriptionWithComments(description, indentation, firstInBlock);
      }
      var preferMultipleLines = description.length > 70;
      var blockString = (0, _blockString.printBlockString)(description, "", preferMultipleLines);
      var prefix = indentation && !firstInBlock ? "\n" + indentation : indentation;
      return prefix + blockString.replace(/\n/g, "\n" + indentation) + "\n";
    }
    function printDescriptionWithComments(description, indentation, firstInBlock) {
      var prefix = indentation && !firstInBlock ? "\n" : "";
      var comment = description.split("\n").map(function(line) {
        return indentation + (line !== "" ? "# " + line : "#");
      }).join("\n");
      return prefix + comment + "\n";
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/concatAST.js
var require_concatAST = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/concatAST.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.concatAST = concatAST3;
    function concatAST3(documents) {
      var definitions = [];
      for (var _i2 = 0; _i2 < documents.length; _i2++) {
        var doc = documents[_i2];
        definitions = definitions.concat(doc.definitions);
      }
      return {
        kind: "Document",
        definitions
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/separateOperations.js
var require_separateOperations = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/separateOperations.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.separateOperations = separateOperations;
    var _kinds = require_kinds();
    var _visitor = require_visitor();
    function separateOperations(documentAST) {
      var operations = [];
      var depGraph = Object.create(null);
      for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
        var definitionNode = _documentAST$definiti2[_i2];
        switch (definitionNode.kind) {
          case _kinds.Kind.OPERATION_DEFINITION:
            operations.push(definitionNode);
            break;
          case _kinds.Kind.FRAGMENT_DEFINITION:
            depGraph[definitionNode.name.value] = collectDependencies(definitionNode.selectionSet);
            break;
        }
      }
      var separatedDocumentASTs = Object.create(null);
      var _loop = function _loop2(_i42) {
        var operation = operations[_i42];
        var dependencies = new Set();
        for (var _i6 = 0, _collectDependencies2 = collectDependencies(operation.selectionSet); _i6 < _collectDependencies2.length; _i6++) {
          var fragmentName = _collectDependencies2[_i6];
          collectTransitiveDependencies(dependencies, depGraph, fragmentName);
        }
        var operationName = operation.name ? operation.name.value : "";
        separatedDocumentASTs[operationName] = {
          kind: _kinds.Kind.DOCUMENT,
          definitions: documentAST.definitions.filter(function(node) {
            return node === operation || node.kind === _kinds.Kind.FRAGMENT_DEFINITION && dependencies.has(node.name.value);
          })
        };
      };
      for (var _i4 = 0; _i4 < operations.length; _i4++) {
        _loop(_i4);
      }
      return separatedDocumentASTs;
    }
    function collectTransitiveDependencies(collected, depGraph, fromName) {
      if (!collected.has(fromName)) {
        collected.add(fromName);
        var immediateDeps = depGraph[fromName];
        if (immediateDeps !== void 0) {
          for (var _i8 = 0; _i8 < immediateDeps.length; _i8++) {
            var toName = immediateDeps[_i8];
            collectTransitiveDependencies(collected, depGraph, toName);
          }
        }
      }
    }
    function collectDependencies(selectionSet) {
      var dependencies = [];
      (0, _visitor.visit)(selectionSet, {
        FragmentSpread: function FragmentSpread(node) {
          dependencies.push(node.name.value);
        }
      });
      return dependencies;
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/stripIgnoredCharacters.js
var require_stripIgnoredCharacters = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/stripIgnoredCharacters.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.stripIgnoredCharacters = stripIgnoredCharacters;
    var _source = require_source();
    var _tokenKind = require_tokenKind();
    var _lexer = require_lexer();
    var _blockString = require_blockString();
    function stripIgnoredCharacters(source) {
      var sourceObj = (0, _source.isSource)(source) ? source : new _source.Source(source);
      var body = sourceObj.body;
      var lexer = new _lexer.Lexer(sourceObj);
      var strippedBody = "";
      var wasLastAddedTokenNonPunctuator = false;
      while (lexer.advance().kind !== _tokenKind.TokenKind.EOF) {
        var currentToken = lexer.token;
        var tokenKind = currentToken.kind;
        var isNonPunctuator = !(0, _lexer.isPunctuatorTokenKind)(currentToken.kind);
        if (wasLastAddedTokenNonPunctuator) {
          if (isNonPunctuator || currentToken.kind === _tokenKind.TokenKind.SPREAD) {
            strippedBody += " ";
          }
        }
        var tokenBody = body.slice(currentToken.start, currentToken.end);
        if (tokenKind === _tokenKind.TokenKind.BLOCK_STRING) {
          strippedBody += dedentBlockString(tokenBody);
        } else {
          strippedBody += tokenBody;
        }
        wasLastAddedTokenNonPunctuator = isNonPunctuator;
      }
      return strippedBody;
    }
    function dedentBlockString(blockStr) {
      var rawStr = blockStr.slice(3, -3);
      var body = (0, _blockString.dedentBlockStringValue)(rawStr);
      if ((0, _blockString.getBlockStringIndentation)(body) > 0) {
        body = "\n" + body;
      }
      var lastChar = body[body.length - 1];
      var hasTrailingQuote = lastChar === '"' && body.slice(-4) !== '\\"""';
      if (hasTrailingQuote || lastChar === "\\") {
        body += "\n";
      }
      return '"""' + body + '"""';
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/findBreakingChanges.js
var require_findBreakingChanges = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/findBreakingChanges.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.findBreakingChanges = findBreakingChanges;
    exports.findDangerousChanges = findDangerousChanges;
    exports.DangerousChangeType = exports.BreakingChangeType = void 0;
    var _objectValues = _interopRequireDefault(require_objectValues());
    var _keyMap = _interopRequireDefault(require_keyMap());
    var _inspect = _interopRequireDefault(require_inspect());
    var _invariant = _interopRequireDefault(require_invariant());
    var _naturalCompare = _interopRequireDefault(require_naturalCompare());
    var _printer = require_printer();
    var _visitor = require_visitor();
    var _scalars = require_scalars();
    var _definition = require_definition();
    var _astFromValue = require_astFromValue();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var BreakingChangeType = Object.freeze({
      TYPE_REMOVED: "TYPE_REMOVED",
      TYPE_CHANGED_KIND: "TYPE_CHANGED_KIND",
      TYPE_REMOVED_FROM_UNION: "TYPE_REMOVED_FROM_UNION",
      VALUE_REMOVED_FROM_ENUM: "VALUE_REMOVED_FROM_ENUM",
      REQUIRED_INPUT_FIELD_ADDED: "REQUIRED_INPUT_FIELD_ADDED",
      IMPLEMENTED_INTERFACE_REMOVED: "IMPLEMENTED_INTERFACE_REMOVED",
      FIELD_REMOVED: "FIELD_REMOVED",
      FIELD_CHANGED_KIND: "FIELD_CHANGED_KIND",
      REQUIRED_ARG_ADDED: "REQUIRED_ARG_ADDED",
      ARG_REMOVED: "ARG_REMOVED",
      ARG_CHANGED_KIND: "ARG_CHANGED_KIND",
      DIRECTIVE_REMOVED: "DIRECTIVE_REMOVED",
      DIRECTIVE_ARG_REMOVED: "DIRECTIVE_ARG_REMOVED",
      REQUIRED_DIRECTIVE_ARG_ADDED: "REQUIRED_DIRECTIVE_ARG_ADDED",
      DIRECTIVE_REPEATABLE_REMOVED: "DIRECTIVE_REPEATABLE_REMOVED",
      DIRECTIVE_LOCATION_REMOVED: "DIRECTIVE_LOCATION_REMOVED"
    });
    exports.BreakingChangeType = BreakingChangeType;
    var DangerousChangeType = Object.freeze({
      VALUE_ADDED_TO_ENUM: "VALUE_ADDED_TO_ENUM",
      TYPE_ADDED_TO_UNION: "TYPE_ADDED_TO_UNION",
      OPTIONAL_INPUT_FIELD_ADDED: "OPTIONAL_INPUT_FIELD_ADDED",
      OPTIONAL_ARG_ADDED: "OPTIONAL_ARG_ADDED",
      IMPLEMENTED_INTERFACE_ADDED: "IMPLEMENTED_INTERFACE_ADDED",
      ARG_DEFAULT_VALUE_CHANGE: "ARG_DEFAULT_VALUE_CHANGE"
    });
    exports.DangerousChangeType = DangerousChangeType;
    function findBreakingChanges(oldSchema, newSchema) {
      var breakingChanges = findSchemaChanges(oldSchema, newSchema).filter(function(change) {
        return change.type in BreakingChangeType;
      });
      return breakingChanges;
    }
    function findDangerousChanges(oldSchema, newSchema) {
      var dangerousChanges = findSchemaChanges(oldSchema, newSchema).filter(function(change) {
        return change.type in DangerousChangeType;
      });
      return dangerousChanges;
    }
    function findSchemaChanges(oldSchema, newSchema) {
      return [].concat(findTypeChanges(oldSchema, newSchema), findDirectiveChanges(oldSchema, newSchema));
    }
    function findDirectiveChanges(oldSchema, newSchema) {
      var schemaChanges = [];
      var directivesDiff = diff(oldSchema.getDirectives(), newSchema.getDirectives());
      for (var _i2 = 0, _directivesDiff$remov2 = directivesDiff.removed; _i2 < _directivesDiff$remov2.length; _i2++) {
        var oldDirective = _directivesDiff$remov2[_i2];
        schemaChanges.push({
          type: BreakingChangeType.DIRECTIVE_REMOVED,
          description: "".concat(oldDirective.name, " was removed.")
        });
      }
      for (var _i4 = 0, _directivesDiff$persi2 = directivesDiff.persisted; _i4 < _directivesDiff$persi2.length; _i4++) {
        var _ref2 = _directivesDiff$persi2[_i4];
        var _oldDirective = _ref2[0];
        var newDirective = _ref2[1];
        var argsDiff = diff(_oldDirective.args, newDirective.args);
        for (var _i6 = 0, _argsDiff$added2 = argsDiff.added; _i6 < _argsDiff$added2.length; _i6++) {
          var newArg = _argsDiff$added2[_i6];
          if ((0, _definition.isRequiredArgument)(newArg)) {
            schemaChanges.push({
              type: BreakingChangeType.REQUIRED_DIRECTIVE_ARG_ADDED,
              description: "A required arg ".concat(newArg.name, " on directive ").concat(_oldDirective.name, " was added.")
            });
          }
        }
        for (var _i8 = 0, _argsDiff$removed2 = argsDiff.removed; _i8 < _argsDiff$removed2.length; _i8++) {
          var oldArg = _argsDiff$removed2[_i8];
          schemaChanges.push({
            type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
            description: "".concat(oldArg.name, " was removed from ").concat(_oldDirective.name, ".")
          });
        }
        if (_oldDirective.isRepeatable && !newDirective.isRepeatable) {
          schemaChanges.push({
            type: BreakingChangeType.DIRECTIVE_REPEATABLE_REMOVED,
            description: "Repeatable flag was removed from ".concat(_oldDirective.name, ".")
          });
        }
        for (var _i10 = 0, _oldDirective$locatio2 = _oldDirective.locations; _i10 < _oldDirective$locatio2.length; _i10++) {
          var location = _oldDirective$locatio2[_i10];
          if (newDirective.locations.indexOf(location) === -1) {
            schemaChanges.push({
              type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
              description: "".concat(location, " was removed from ").concat(_oldDirective.name, ".")
            });
          }
        }
      }
      return schemaChanges;
    }
    function findTypeChanges(oldSchema, newSchema) {
      var schemaChanges = [];
      var typesDiff = diff((0, _objectValues.default)(oldSchema.getTypeMap()), (0, _objectValues.default)(newSchema.getTypeMap()));
      for (var _i12 = 0, _typesDiff$removed2 = typesDiff.removed; _i12 < _typesDiff$removed2.length; _i12++) {
        var oldType = _typesDiff$removed2[_i12];
        schemaChanges.push({
          type: BreakingChangeType.TYPE_REMOVED,
          description: (0, _scalars.isSpecifiedScalarType)(oldType) ? "Standard scalar ".concat(oldType.name, " was removed because it is not referenced anymore.") : "".concat(oldType.name, " was removed.")
        });
      }
      for (var _i14 = 0, _typesDiff$persisted2 = typesDiff.persisted; _i14 < _typesDiff$persisted2.length; _i14++) {
        var _ref4 = _typesDiff$persisted2[_i14];
        var _oldType = _ref4[0];
        var newType = _ref4[1];
        if ((0, _definition.isEnumType)(_oldType) && (0, _definition.isEnumType)(newType)) {
          schemaChanges.push.apply(schemaChanges, findEnumTypeChanges(_oldType, newType));
        } else if ((0, _definition.isUnionType)(_oldType) && (0, _definition.isUnionType)(newType)) {
          schemaChanges.push.apply(schemaChanges, findUnionTypeChanges(_oldType, newType));
        } else if ((0, _definition.isInputObjectType)(_oldType) && (0, _definition.isInputObjectType)(newType)) {
          schemaChanges.push.apply(schemaChanges, findInputObjectTypeChanges(_oldType, newType));
        } else if ((0, _definition.isObjectType)(_oldType) && (0, _definition.isObjectType)(newType)) {
          schemaChanges.push.apply(schemaChanges, findFieldChanges(_oldType, newType).concat(findImplementedInterfacesChanges(_oldType, newType)));
        } else if ((0, _definition.isInterfaceType)(_oldType) && (0, _definition.isInterfaceType)(newType)) {
          schemaChanges.push.apply(schemaChanges, findFieldChanges(_oldType, newType).concat(findImplementedInterfacesChanges(_oldType, newType)));
        } else if (_oldType.constructor !== newType.constructor) {
          schemaChanges.push({
            type: BreakingChangeType.TYPE_CHANGED_KIND,
            description: "".concat(_oldType.name, " changed from ") + "".concat(typeKindName(_oldType), " to ").concat(typeKindName(newType), ".")
          });
        }
      }
      return schemaChanges;
    }
    function findInputObjectTypeChanges(oldType, newType) {
      var schemaChanges = [];
      var fieldsDiff = diff((0, _objectValues.default)(oldType.getFields()), (0, _objectValues.default)(newType.getFields()));
      for (var _i16 = 0, _fieldsDiff$added2 = fieldsDiff.added; _i16 < _fieldsDiff$added2.length; _i16++) {
        var newField = _fieldsDiff$added2[_i16];
        if ((0, _definition.isRequiredInputField)(newField)) {
          schemaChanges.push({
            type: BreakingChangeType.REQUIRED_INPUT_FIELD_ADDED,
            description: "A required field ".concat(newField.name, " on input type ").concat(oldType.name, " was added.")
          });
        } else {
          schemaChanges.push({
            type: DangerousChangeType.OPTIONAL_INPUT_FIELD_ADDED,
            description: "An optional field ".concat(newField.name, " on input type ").concat(oldType.name, " was added.")
          });
        }
      }
      for (var _i18 = 0, _fieldsDiff$removed2 = fieldsDiff.removed; _i18 < _fieldsDiff$removed2.length; _i18++) {
        var oldField = _fieldsDiff$removed2[_i18];
        schemaChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: "".concat(oldType.name, ".").concat(oldField.name, " was removed.")
        });
      }
      for (var _i20 = 0, _fieldsDiff$persisted2 = fieldsDiff.persisted; _i20 < _fieldsDiff$persisted2.length; _i20++) {
        var _ref6 = _fieldsDiff$persisted2[_i20];
        var _oldField = _ref6[0];
        var _newField = _ref6[1];
        var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(_oldField.type, _newField.type);
        if (!isSafe) {
          schemaChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: "".concat(oldType.name, ".").concat(_oldField.name, " changed type from ") + "".concat(String(_oldField.type), " to ").concat(String(_newField.type), ".")
          });
        }
      }
      return schemaChanges;
    }
    function findUnionTypeChanges(oldType, newType) {
      var schemaChanges = [];
      var possibleTypesDiff = diff(oldType.getTypes(), newType.getTypes());
      for (var _i22 = 0, _possibleTypesDiff$ad2 = possibleTypesDiff.added; _i22 < _possibleTypesDiff$ad2.length; _i22++) {
        var newPossibleType = _possibleTypesDiff$ad2[_i22];
        schemaChanges.push({
          type: DangerousChangeType.TYPE_ADDED_TO_UNION,
          description: "".concat(newPossibleType.name, " was added to union type ").concat(oldType.name, ".")
        });
      }
      for (var _i24 = 0, _possibleTypesDiff$re2 = possibleTypesDiff.removed; _i24 < _possibleTypesDiff$re2.length; _i24++) {
        var oldPossibleType = _possibleTypesDiff$re2[_i24];
        schemaChanges.push({
          type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
          description: "".concat(oldPossibleType.name, " was removed from union type ").concat(oldType.name, ".")
        });
      }
      return schemaChanges;
    }
    function findEnumTypeChanges(oldType, newType) {
      var schemaChanges = [];
      var valuesDiff = diff(oldType.getValues(), newType.getValues());
      for (var _i26 = 0, _valuesDiff$added2 = valuesDiff.added; _i26 < _valuesDiff$added2.length; _i26++) {
        var newValue = _valuesDiff$added2[_i26];
        schemaChanges.push({
          type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
          description: "".concat(newValue.name, " was added to enum type ").concat(oldType.name, ".")
        });
      }
      for (var _i28 = 0, _valuesDiff$removed2 = valuesDiff.removed; _i28 < _valuesDiff$removed2.length; _i28++) {
        var oldValue = _valuesDiff$removed2[_i28];
        schemaChanges.push({
          type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
          description: "".concat(oldValue.name, " was removed from enum type ").concat(oldType.name, ".")
        });
      }
      return schemaChanges;
    }
    function findImplementedInterfacesChanges(oldType, newType) {
      var schemaChanges = [];
      var interfacesDiff = diff(oldType.getInterfaces(), newType.getInterfaces());
      for (var _i30 = 0, _interfacesDiff$added2 = interfacesDiff.added; _i30 < _interfacesDiff$added2.length; _i30++) {
        var newInterface = _interfacesDiff$added2[_i30];
        schemaChanges.push({
          type: DangerousChangeType.IMPLEMENTED_INTERFACE_ADDED,
          description: "".concat(newInterface.name, " added to interfaces implemented by ").concat(oldType.name, ".")
        });
      }
      for (var _i32 = 0, _interfacesDiff$remov2 = interfacesDiff.removed; _i32 < _interfacesDiff$remov2.length; _i32++) {
        var oldInterface = _interfacesDiff$remov2[_i32];
        schemaChanges.push({
          type: BreakingChangeType.IMPLEMENTED_INTERFACE_REMOVED,
          description: "".concat(oldType.name, " no longer implements interface ").concat(oldInterface.name, ".")
        });
      }
      return schemaChanges;
    }
    function findFieldChanges(oldType, newType) {
      var schemaChanges = [];
      var fieldsDiff = diff((0, _objectValues.default)(oldType.getFields()), (0, _objectValues.default)(newType.getFields()));
      for (var _i34 = 0, _fieldsDiff$removed4 = fieldsDiff.removed; _i34 < _fieldsDiff$removed4.length; _i34++) {
        var oldField = _fieldsDiff$removed4[_i34];
        schemaChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: "".concat(oldType.name, ".").concat(oldField.name, " was removed.")
        });
      }
      for (var _i36 = 0, _fieldsDiff$persisted4 = fieldsDiff.persisted; _i36 < _fieldsDiff$persisted4.length; _i36++) {
        var _ref8 = _fieldsDiff$persisted4[_i36];
        var _oldField2 = _ref8[0];
        var newField = _ref8[1];
        schemaChanges.push.apply(schemaChanges, findArgChanges(oldType, _oldField2, newField));
        var isSafe = isChangeSafeForObjectOrInterfaceField(_oldField2.type, newField.type);
        if (!isSafe) {
          schemaChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: "".concat(oldType.name, ".").concat(_oldField2.name, " changed type from ") + "".concat(String(_oldField2.type), " to ").concat(String(newField.type), ".")
          });
        }
      }
      return schemaChanges;
    }
    function findArgChanges(oldType, oldField, newField) {
      var schemaChanges = [];
      var argsDiff = diff(oldField.args, newField.args);
      for (var _i38 = 0, _argsDiff$removed4 = argsDiff.removed; _i38 < _argsDiff$removed4.length; _i38++) {
        var oldArg = _argsDiff$removed4[_i38];
        schemaChanges.push({
          type: BreakingChangeType.ARG_REMOVED,
          description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(oldArg.name, " was removed.")
        });
      }
      for (var _i40 = 0, _argsDiff$persisted2 = argsDiff.persisted; _i40 < _argsDiff$persisted2.length; _i40++) {
        var _ref10 = _argsDiff$persisted2[_i40];
        var _oldArg = _ref10[0];
        var newArg = _ref10[1];
        var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(_oldArg.type, newArg.type);
        if (!isSafe) {
          schemaChanges.push({
            type: BreakingChangeType.ARG_CHANGED_KIND,
            description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " has changed type from ") + "".concat(String(_oldArg.type), " to ").concat(String(newArg.type), ".")
          });
        } else if (_oldArg.defaultValue !== void 0) {
          if (newArg.defaultValue === void 0) {
            schemaChanges.push({
              type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
              description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " defaultValue was removed.")
            });
          } else {
            var oldValueStr = stringifyValue(_oldArg.defaultValue, _oldArg.type);
            var newValueStr = stringifyValue(newArg.defaultValue, newArg.type);
            if (oldValueStr !== newValueStr) {
              schemaChanges.push({
                type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
                description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " has changed defaultValue from ").concat(oldValueStr, " to ").concat(newValueStr, ".")
              });
            }
          }
        }
      }
      for (var _i42 = 0, _argsDiff$added4 = argsDiff.added; _i42 < _argsDiff$added4.length; _i42++) {
        var _newArg = _argsDiff$added4[_i42];
        if ((0, _definition.isRequiredArgument)(_newArg)) {
          schemaChanges.push({
            type: BreakingChangeType.REQUIRED_ARG_ADDED,
            description: "A required arg ".concat(_newArg.name, " on ").concat(oldType.name, ".").concat(oldField.name, " was added.")
          });
        } else {
          schemaChanges.push({
            type: DangerousChangeType.OPTIONAL_ARG_ADDED,
            description: "An optional arg ".concat(_newArg.name, " on ").concat(oldType.name, ".").concat(oldField.name, " was added.")
          });
        }
      }
      return schemaChanges;
    }
    function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
      if ((0, _definition.isListType)(oldType)) {
        return (0, _definition.isListType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) || (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType);
      }
      if ((0, _definition.isNonNullType)(oldType)) {
        return (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
      }
      return (0, _definition.isNamedType)(newType) && oldType.name === newType.name || (0, _definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType);
    }
    function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
      if ((0, _definition.isListType)(oldType)) {
        return (0, _definition.isListType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
      }
      if ((0, _definition.isNonNullType)(oldType)) {
        return (0, _definition.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) || !(0, _definition.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType);
      }
      return (0, _definition.isNamedType)(newType) && oldType.name === newType.name;
    }
    function typeKindName(type) {
      if ((0, _definition.isScalarType)(type)) {
        return "a Scalar type";
      }
      if ((0, _definition.isObjectType)(type)) {
        return "an Object type";
      }
      if ((0, _definition.isInterfaceType)(type)) {
        return "an Interface type";
      }
      if ((0, _definition.isUnionType)(type)) {
        return "a Union type";
      }
      if ((0, _definition.isEnumType)(type)) {
        return "an Enum type";
      }
      if ((0, _definition.isInputObjectType)(type)) {
        return "an Input type";
      }
      (0, _invariant.default)(0, "Unexpected type: " + (0, _inspect.default)(type));
    }
    function stringifyValue(value, type) {
      var ast = (0, _astFromValue.astFromValue)(value, type);
      ast != null || (0, _invariant.default)(0);
      var sortedAST = (0, _visitor.visit)(ast, {
        ObjectValue: function ObjectValue(objectNode) {
          var fields = [].concat(objectNode.fields);
          fields.sort(function(fieldA, fieldB) {
            return (0, _naturalCompare.default)(fieldA.name.value, fieldB.name.value);
          });
          return _objectSpread(_objectSpread({}, objectNode), {}, {
            fields
          });
        }
      });
      return (0, _printer.print)(sortedAST);
    }
    function diff(oldArray, newArray) {
      var added = [];
      var removed = [];
      var persisted = [];
      var oldMap = (0, _keyMap.default)(oldArray, function(_ref11) {
        var name = _ref11.name;
        return name;
      });
      var newMap = (0, _keyMap.default)(newArray, function(_ref12) {
        var name = _ref12.name;
        return name;
      });
      for (var _i44 = 0; _i44 < oldArray.length; _i44++) {
        var oldItem = oldArray[_i44];
        var newItem = newMap[oldItem.name];
        if (newItem === void 0) {
          removed.push(oldItem);
        } else {
          persisted.push([oldItem, newItem]);
        }
      }
      for (var _i46 = 0; _i46 < newArray.length; _i46++) {
        var _newItem = newArray[_i46];
        if (oldMap[_newItem.name] === void 0) {
          added.push(_newItem);
        }
      }
      return {
        added,
        persisted,
        removed
      };
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/findDeprecatedUsages.js
var require_findDeprecatedUsages = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/findDeprecatedUsages.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.findDeprecatedUsages = findDeprecatedUsages;
    var _validate = require_validate2();
    var _NoDeprecatedCustomRule = require_NoDeprecatedCustomRule();
    function findDeprecatedUsages(schema, ast) {
      return (0, _validate.validate)(schema, ast, [_NoDeprecatedCustomRule.NoDeprecatedCustomRule]);
    }
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/index.js
var require_utilities = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/utilities/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getIntrospectionQuery", {
      enumerable: true,
      get: function get() {
        return _getIntrospectionQuery.getIntrospectionQuery;
      }
    });
    Object.defineProperty(exports, "getOperationAST", {
      enumerable: true,
      get: function get() {
        return _getOperationAST.getOperationAST;
      }
    });
    Object.defineProperty(exports, "getOperationRootType", {
      enumerable: true,
      get: function get() {
        return _getOperationRootType.getOperationRootType;
      }
    });
    Object.defineProperty(exports, "introspectionFromSchema", {
      enumerable: true,
      get: function get() {
        return _introspectionFromSchema.introspectionFromSchema;
      }
    });
    Object.defineProperty(exports, "buildClientSchema", {
      enumerable: true,
      get: function get() {
        return _buildClientSchema.buildClientSchema;
      }
    });
    Object.defineProperty(exports, "buildASTSchema", {
      enumerable: true,
      get: function get() {
        return _buildASTSchema.buildASTSchema;
      }
    });
    Object.defineProperty(exports, "buildSchema", {
      enumerable: true,
      get: function get() {
        return _buildASTSchema.buildSchema;
      }
    });
    Object.defineProperty(exports, "extendSchema", {
      enumerable: true,
      get: function get() {
        return _extendSchema.extendSchema;
      }
    });
    Object.defineProperty(exports, "getDescription", {
      enumerable: true,
      get: function get() {
        return _extendSchema.getDescription;
      }
    });
    Object.defineProperty(exports, "lexicographicSortSchema", {
      enumerable: true,
      get: function get() {
        return _lexicographicSortSchema.lexicographicSortSchema;
      }
    });
    Object.defineProperty(exports, "printSchema", {
      enumerable: true,
      get: function get() {
        return _printSchema.printSchema;
      }
    });
    Object.defineProperty(exports, "printType", {
      enumerable: true,
      get: function get() {
        return _printSchema.printType;
      }
    });
    Object.defineProperty(exports, "printIntrospectionSchema", {
      enumerable: true,
      get: function get() {
        return _printSchema.printIntrospectionSchema;
      }
    });
    Object.defineProperty(exports, "typeFromAST", {
      enumerable: true,
      get: function get() {
        return _typeFromAST.typeFromAST;
      }
    });
    Object.defineProperty(exports, "valueFromAST", {
      enumerable: true,
      get: function get() {
        return _valueFromAST.valueFromAST;
      }
    });
    Object.defineProperty(exports, "valueFromASTUntyped", {
      enumerable: true,
      get: function get() {
        return _valueFromASTUntyped.valueFromASTUntyped;
      }
    });
    Object.defineProperty(exports, "astFromValue", {
      enumerable: true,
      get: function get() {
        return _astFromValue.astFromValue;
      }
    });
    Object.defineProperty(exports, "TypeInfo", {
      enumerable: true,
      get: function get() {
        return _TypeInfo.TypeInfo;
      }
    });
    Object.defineProperty(exports, "visitWithTypeInfo", {
      enumerable: true,
      get: function get() {
        return _TypeInfo.visitWithTypeInfo;
      }
    });
    Object.defineProperty(exports, "coerceInputValue", {
      enumerable: true,
      get: function get() {
        return _coerceInputValue.coerceInputValue;
      }
    });
    Object.defineProperty(exports, "concatAST", {
      enumerable: true,
      get: function get() {
        return _concatAST.concatAST;
      }
    });
    Object.defineProperty(exports, "separateOperations", {
      enumerable: true,
      get: function get() {
        return _separateOperations.separateOperations;
      }
    });
    Object.defineProperty(exports, "stripIgnoredCharacters", {
      enumerable: true,
      get: function get() {
        return _stripIgnoredCharacters.stripIgnoredCharacters;
      }
    });
    Object.defineProperty(exports, "isEqualType", {
      enumerable: true,
      get: function get() {
        return _typeComparators.isEqualType;
      }
    });
    Object.defineProperty(exports, "isTypeSubTypeOf", {
      enumerable: true,
      get: function get() {
        return _typeComparators.isTypeSubTypeOf;
      }
    });
    Object.defineProperty(exports, "doTypesOverlap", {
      enumerable: true,
      get: function get() {
        return _typeComparators.doTypesOverlap;
      }
    });
    Object.defineProperty(exports, "assertValidName", {
      enumerable: true,
      get: function get() {
        return _assertValidName.assertValidName;
      }
    });
    Object.defineProperty(exports, "isValidNameError", {
      enumerable: true,
      get: function get() {
        return _assertValidName.isValidNameError;
      }
    });
    Object.defineProperty(exports, "BreakingChangeType", {
      enumerable: true,
      get: function get() {
        return _findBreakingChanges.BreakingChangeType;
      }
    });
    Object.defineProperty(exports, "DangerousChangeType", {
      enumerable: true,
      get: function get() {
        return _findBreakingChanges.DangerousChangeType;
      }
    });
    Object.defineProperty(exports, "findBreakingChanges", {
      enumerable: true,
      get: function get() {
        return _findBreakingChanges.findBreakingChanges;
      }
    });
    Object.defineProperty(exports, "findDangerousChanges", {
      enumerable: true,
      get: function get() {
        return _findBreakingChanges.findDangerousChanges;
      }
    });
    Object.defineProperty(exports, "findDeprecatedUsages", {
      enumerable: true,
      get: function get() {
        return _findDeprecatedUsages.findDeprecatedUsages;
      }
    });
    var _getIntrospectionQuery = require_getIntrospectionQuery();
    var _getOperationAST = require_getOperationAST();
    var _getOperationRootType = require_getOperationRootType();
    var _introspectionFromSchema = require_introspectionFromSchema();
    var _buildClientSchema = require_buildClientSchema();
    var _buildASTSchema = require_buildASTSchema();
    var _extendSchema = require_extendSchema();
    var _lexicographicSortSchema = require_lexicographicSortSchema();
    var _printSchema = require_printSchema();
    var _typeFromAST = require_typeFromAST();
    var _valueFromAST = require_valueFromAST();
    var _valueFromASTUntyped = require_valueFromASTUntyped();
    var _astFromValue = require_astFromValue();
    var _TypeInfo = require_TypeInfo();
    var _coerceInputValue = require_coerceInputValue();
    var _concatAST = require_concatAST();
    var _separateOperations = require_separateOperations();
    var _stripIgnoredCharacters = require_stripIgnoredCharacters();
    var _typeComparators = require_typeComparators();
    var _assertValidName = require_assertValidName();
    var _findBreakingChanges = require_findBreakingChanges();
    var _findDeprecatedUsages = require_findDeprecatedUsages();
  }
});

// ../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/index.js
var require_graphql2 = __commonJS({
  "../../../node_modules/.pnpm/graphql@15.6.1/node_modules/graphql/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "version", {
      enumerable: true,
      get: function get() {
        return _version.version;
      }
    });
    Object.defineProperty(exports, "versionInfo", {
      enumerable: true,
      get: function get() {
        return _version.versionInfo;
      }
    });
    Object.defineProperty(exports, "graphql", {
      enumerable: true,
      get: function get() {
        return _graphql.graphql;
      }
    });
    Object.defineProperty(exports, "graphqlSync", {
      enumerable: true,
      get: function get() {
        return _graphql.graphqlSync;
      }
    });
    Object.defineProperty(exports, "GraphQLSchema", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLSchema;
      }
    });
    Object.defineProperty(exports, "GraphQLDirective", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLScalarType", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLScalarType;
      }
    });
    Object.defineProperty(exports, "GraphQLObjectType", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLObjectType;
      }
    });
    Object.defineProperty(exports, "GraphQLInterfaceType", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLInterfaceType;
      }
    });
    Object.defineProperty(exports, "GraphQLUnionType", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLUnionType;
      }
    });
    Object.defineProperty(exports, "GraphQLEnumType", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLEnumType;
      }
    });
    Object.defineProperty(exports, "GraphQLInputObjectType", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLInputObjectType;
      }
    });
    Object.defineProperty(exports, "GraphQLList", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLList;
      }
    });
    Object.defineProperty(exports, "GraphQLNonNull", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLNonNull;
      }
    });
    Object.defineProperty(exports, "specifiedScalarTypes", {
      enumerable: true,
      get: function get() {
        return _index.specifiedScalarTypes;
      }
    });
    Object.defineProperty(exports, "GraphQLInt", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLInt;
      }
    });
    Object.defineProperty(exports, "GraphQLFloat", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLFloat;
      }
    });
    Object.defineProperty(exports, "GraphQLString", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLString;
      }
    });
    Object.defineProperty(exports, "GraphQLBoolean", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLBoolean;
      }
    });
    Object.defineProperty(exports, "GraphQLID", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLID;
      }
    });
    Object.defineProperty(exports, "specifiedDirectives", {
      enumerable: true,
      get: function get() {
        return _index.specifiedDirectives;
      }
    });
    Object.defineProperty(exports, "GraphQLIncludeDirective", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLIncludeDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLSkipDirective", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLSkipDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLDeprecatedDirective", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLDeprecatedDirective;
      }
    });
    Object.defineProperty(exports, "GraphQLSpecifiedByDirective", {
      enumerable: true,
      get: function get() {
        return _index.GraphQLSpecifiedByDirective;
      }
    });
    Object.defineProperty(exports, "TypeKind", {
      enumerable: true,
      get: function get() {
        return _index.TypeKind;
      }
    });
    Object.defineProperty(exports, "DEFAULT_DEPRECATION_REASON", {
      enumerable: true,
      get: function get() {
        return _index.DEFAULT_DEPRECATION_REASON;
      }
    });
    Object.defineProperty(exports, "introspectionTypes", {
      enumerable: true,
      get: function get() {
        return _index.introspectionTypes;
      }
    });
    Object.defineProperty(exports, "__Schema", {
      enumerable: true,
      get: function get() {
        return _index.__Schema;
      }
    });
    Object.defineProperty(exports, "__Directive", {
      enumerable: true,
      get: function get() {
        return _index.__Directive;
      }
    });
    Object.defineProperty(exports, "__DirectiveLocation", {
      enumerable: true,
      get: function get() {
        return _index.__DirectiveLocation;
      }
    });
    Object.defineProperty(exports, "__Type", {
      enumerable: true,
      get: function get() {
        return _index.__Type;
      }
    });
    Object.defineProperty(exports, "__Field", {
      enumerable: true,
      get: function get() {
        return _index.__Field;
      }
    });
    Object.defineProperty(exports, "__InputValue", {
      enumerable: true,
      get: function get() {
        return _index.__InputValue;
      }
    });
    Object.defineProperty(exports, "__EnumValue", {
      enumerable: true,
      get: function get() {
        return _index.__EnumValue;
      }
    });
    Object.defineProperty(exports, "__TypeKind", {
      enumerable: true,
      get: function get() {
        return _index.__TypeKind;
      }
    });
    Object.defineProperty(exports, "SchemaMetaFieldDef", {
      enumerable: true,
      get: function get() {
        return _index.SchemaMetaFieldDef;
      }
    });
    Object.defineProperty(exports, "TypeMetaFieldDef", {
      enumerable: true,
      get: function get() {
        return _index.TypeMetaFieldDef;
      }
    });
    Object.defineProperty(exports, "TypeNameMetaFieldDef", {
      enumerable: true,
      get: function get() {
        return _index.TypeNameMetaFieldDef;
      }
    });
    Object.defineProperty(exports, "isSchema", {
      enumerable: true,
      get: function get() {
        return _index.isSchema;
      }
    });
    Object.defineProperty(exports, "isDirective", {
      enumerable: true,
      get: function get() {
        return _index.isDirective;
      }
    });
    Object.defineProperty(exports, "isType", {
      enumerable: true,
      get: function get() {
        return _index.isType;
      }
    });
    Object.defineProperty(exports, "isScalarType", {
      enumerable: true,
      get: function get() {
        return _index.isScalarType;
      }
    });
    Object.defineProperty(exports, "isObjectType", {
      enumerable: true,
      get: function get() {
        return _index.isObjectType;
      }
    });
    Object.defineProperty(exports, "isInterfaceType", {
      enumerable: true,
      get: function get() {
        return _index.isInterfaceType;
      }
    });
    Object.defineProperty(exports, "isUnionType", {
      enumerable: true,
      get: function get() {
        return _index.isUnionType;
      }
    });
    Object.defineProperty(exports, "isEnumType", {
      enumerable: true,
      get: function get() {
        return _index.isEnumType;
      }
    });
    Object.defineProperty(exports, "isInputObjectType", {
      enumerable: true,
      get: function get() {
        return _index.isInputObjectType;
      }
    });
    Object.defineProperty(exports, "isListType", {
      enumerable: true,
      get: function get() {
        return _index.isListType;
      }
    });
    Object.defineProperty(exports, "isNonNullType", {
      enumerable: true,
      get: function get() {
        return _index.isNonNullType;
      }
    });
    Object.defineProperty(exports, "isInputType", {
      enumerable: true,
      get: function get() {
        return _index.isInputType;
      }
    });
    Object.defineProperty(exports, "isOutputType", {
      enumerable: true,
      get: function get() {
        return _index.isOutputType;
      }
    });
    Object.defineProperty(exports, "isLeafType", {
      enumerable: true,
      get: function get() {
        return _index.isLeafType;
      }
    });
    Object.defineProperty(exports, "isCompositeType", {
      enumerable: true,
      get: function get() {
        return _index.isCompositeType;
      }
    });
    Object.defineProperty(exports, "isAbstractType", {
      enumerable: true,
      get: function get() {
        return _index.isAbstractType;
      }
    });
    Object.defineProperty(exports, "isWrappingType", {
      enumerable: true,
      get: function get() {
        return _index.isWrappingType;
      }
    });
    Object.defineProperty(exports, "isNullableType", {
      enumerable: true,
      get: function get() {
        return _index.isNullableType;
      }
    });
    Object.defineProperty(exports, "isNamedType", {
      enumerable: true,
      get: function get() {
        return _index.isNamedType;
      }
    });
    Object.defineProperty(exports, "isRequiredArgument", {
      enumerable: true,
      get: function get() {
        return _index.isRequiredArgument;
      }
    });
    Object.defineProperty(exports, "isRequiredInputField", {
      enumerable: true,
      get: function get() {
        return _index.isRequiredInputField;
      }
    });
    Object.defineProperty(exports, "isSpecifiedScalarType", {
      enumerable: true,
      get: function get() {
        return _index.isSpecifiedScalarType;
      }
    });
    Object.defineProperty(exports, "isIntrospectionType", {
      enumerable: true,
      get: function get() {
        return _index.isIntrospectionType;
      }
    });
    Object.defineProperty(exports, "isSpecifiedDirective", {
      enumerable: true,
      get: function get() {
        return _index.isSpecifiedDirective;
      }
    });
    Object.defineProperty(exports, "assertSchema", {
      enumerable: true,
      get: function get() {
        return _index.assertSchema;
      }
    });
    Object.defineProperty(exports, "assertDirective", {
      enumerable: true,
      get: function get() {
        return _index.assertDirective;
      }
    });
    Object.defineProperty(exports, "assertType", {
      enumerable: true,
      get: function get() {
        return _index.assertType;
      }
    });
    Object.defineProperty(exports, "assertScalarType", {
      enumerable: true,
      get: function get() {
        return _index.assertScalarType;
      }
    });
    Object.defineProperty(exports, "assertObjectType", {
      enumerable: true,
      get: function get() {
        return _index.assertObjectType;
      }
    });
    Object.defineProperty(exports, "assertInterfaceType", {
      enumerable: true,
      get: function get() {
        return _index.assertInterfaceType;
      }
    });
    Object.defineProperty(exports, "assertUnionType", {
      enumerable: true,
      get: function get() {
        return _index.assertUnionType;
      }
    });
    Object.defineProperty(exports, "assertEnumType", {
      enumerable: true,
      get: function get() {
        return _index.assertEnumType;
      }
    });
    Object.defineProperty(exports, "assertInputObjectType", {
      enumerable: true,
      get: function get() {
        return _index.assertInputObjectType;
      }
    });
    Object.defineProperty(exports, "assertListType", {
      enumerable: true,
      get: function get() {
        return _index.assertListType;
      }
    });
    Object.defineProperty(exports, "assertNonNullType", {
      enumerable: true,
      get: function get() {
        return _index.assertNonNullType;
      }
    });
    Object.defineProperty(exports, "assertInputType", {
      enumerable: true,
      get: function get() {
        return _index.assertInputType;
      }
    });
    Object.defineProperty(exports, "assertOutputType", {
      enumerable: true,
      get: function get() {
        return _index.assertOutputType;
      }
    });
    Object.defineProperty(exports, "assertLeafType", {
      enumerable: true,
      get: function get() {
        return _index.assertLeafType;
      }
    });
    Object.defineProperty(exports, "assertCompositeType", {
      enumerable: true,
      get: function get() {
        return _index.assertCompositeType;
      }
    });
    Object.defineProperty(exports, "assertAbstractType", {
      enumerable: true,
      get: function get() {
        return _index.assertAbstractType;
      }
    });
    Object.defineProperty(exports, "assertWrappingType", {
      enumerable: true,
      get: function get() {
        return _index.assertWrappingType;
      }
    });
    Object.defineProperty(exports, "assertNullableType", {
      enumerable: true,
      get: function get() {
        return _index.assertNullableType;
      }
    });
    Object.defineProperty(exports, "assertNamedType", {
      enumerable: true,
      get: function get() {
        return _index.assertNamedType;
      }
    });
    Object.defineProperty(exports, "getNullableType", {
      enumerable: true,
      get: function get() {
        return _index.getNullableType;
      }
    });
    Object.defineProperty(exports, "getNamedType", {
      enumerable: true,
      get: function get() {
        return _index.getNamedType;
      }
    });
    Object.defineProperty(exports, "validateSchema", {
      enumerable: true,
      get: function get() {
        return _index.validateSchema;
      }
    });
    Object.defineProperty(exports, "assertValidSchema", {
      enumerable: true,
      get: function get() {
        return _index.assertValidSchema;
      }
    });
    Object.defineProperty(exports, "Token", {
      enumerable: true,
      get: function get() {
        return _index2.Token;
      }
    });
    Object.defineProperty(exports, "Source", {
      enumerable: true,
      get: function get() {
        return _index2.Source;
      }
    });
    Object.defineProperty(exports, "Location", {
      enumerable: true,
      get: function get() {
        return _index2.Location;
      }
    });
    Object.defineProperty(exports, "getLocation", {
      enumerable: true,
      get: function get() {
        return _index2.getLocation;
      }
    });
    Object.defineProperty(exports, "printLocation", {
      enumerable: true,
      get: function get() {
        return _index2.printLocation;
      }
    });
    Object.defineProperty(exports, "printSourceLocation", {
      enumerable: true,
      get: function get() {
        return _index2.printSourceLocation;
      }
    });
    Object.defineProperty(exports, "Lexer", {
      enumerable: true,
      get: function get() {
        return _index2.Lexer;
      }
    });
    Object.defineProperty(exports, "TokenKind", {
      enumerable: true,
      get: function get() {
        return _index2.TokenKind;
      }
    });
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: function get() {
        return _index2.parse;
      }
    });
    Object.defineProperty(exports, "parseValue", {
      enumerable: true,
      get: function get() {
        return _index2.parseValue;
      }
    });
    Object.defineProperty(exports, "parseType", {
      enumerable: true,
      get: function get() {
        return _index2.parseType;
      }
    });
    Object.defineProperty(exports, "print", {
      enumerable: true,
      get: function get() {
        return _index2.print;
      }
    });
    Object.defineProperty(exports, "visit", {
      enumerable: true,
      get: function get() {
        return _index2.visit;
      }
    });
    Object.defineProperty(exports, "visitInParallel", {
      enumerable: true,
      get: function get() {
        return _index2.visitInParallel;
      }
    });
    Object.defineProperty(exports, "getVisitFn", {
      enumerable: true,
      get: function get() {
        return _index2.getVisitFn;
      }
    });
    Object.defineProperty(exports, "BREAK", {
      enumerable: true,
      get: function get() {
        return _index2.BREAK;
      }
    });
    Object.defineProperty(exports, "Kind", {
      enumerable: true,
      get: function get() {
        return _index2.Kind;
      }
    });
    Object.defineProperty(exports, "DirectiveLocation", {
      enumerable: true,
      get: function get() {
        return _index2.DirectiveLocation;
      }
    });
    Object.defineProperty(exports, "isDefinitionNode", {
      enumerable: true,
      get: function get() {
        return _index2.isDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isExecutableDefinitionNode", {
      enumerable: true,
      get: function get() {
        return _index2.isExecutableDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isSelectionNode", {
      enumerable: true,
      get: function get() {
        return _index2.isSelectionNode;
      }
    });
    Object.defineProperty(exports, "isValueNode", {
      enumerable: true,
      get: function get() {
        return _index2.isValueNode;
      }
    });
    Object.defineProperty(exports, "isTypeNode", {
      enumerable: true,
      get: function get() {
        return _index2.isTypeNode;
      }
    });
    Object.defineProperty(exports, "isTypeSystemDefinitionNode", {
      enumerable: true,
      get: function get() {
        return _index2.isTypeSystemDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isTypeDefinitionNode", {
      enumerable: true,
      get: function get() {
        return _index2.isTypeDefinitionNode;
      }
    });
    Object.defineProperty(exports, "isTypeSystemExtensionNode", {
      enumerable: true,
      get: function get() {
        return _index2.isTypeSystemExtensionNode;
      }
    });
    Object.defineProperty(exports, "isTypeExtensionNode", {
      enumerable: true,
      get: function get() {
        return _index2.isTypeExtensionNode;
      }
    });
    Object.defineProperty(exports, "execute", {
      enumerable: true,
      get: function get() {
        return _index3.execute;
      }
    });
    Object.defineProperty(exports, "executeSync", {
      enumerable: true,
      get: function get() {
        return _index3.executeSync;
      }
    });
    Object.defineProperty(exports, "defaultFieldResolver", {
      enumerable: true,
      get: function get() {
        return _index3.defaultFieldResolver;
      }
    });
    Object.defineProperty(exports, "defaultTypeResolver", {
      enumerable: true,
      get: function get() {
        return _index3.defaultTypeResolver;
      }
    });
    Object.defineProperty(exports, "responsePathAsArray", {
      enumerable: true,
      get: function get() {
        return _index3.responsePathAsArray;
      }
    });
    Object.defineProperty(exports, "getDirectiveValues", {
      enumerable: true,
      get: function get() {
        return _index3.getDirectiveValues;
      }
    });
    Object.defineProperty(exports, "subscribe", {
      enumerable: true,
      get: function get() {
        return _index4.subscribe;
      }
    });
    Object.defineProperty(exports, "createSourceEventStream", {
      enumerable: true,
      get: function get() {
        return _index4.createSourceEventStream;
      }
    });
    Object.defineProperty(exports, "validate", {
      enumerable: true,
      get: function get() {
        return _index5.validate;
      }
    });
    Object.defineProperty(exports, "ValidationContext", {
      enumerable: true,
      get: function get() {
        return _index5.ValidationContext;
      }
    });
    Object.defineProperty(exports, "specifiedRules", {
      enumerable: true,
      get: function get() {
        return _index5.specifiedRules;
      }
    });
    Object.defineProperty(exports, "ExecutableDefinitionsRule", {
      enumerable: true,
      get: function get() {
        return _index5.ExecutableDefinitionsRule;
      }
    });
    Object.defineProperty(exports, "FieldsOnCorrectTypeRule", {
      enumerable: true,
      get: function get() {
        return _index5.FieldsOnCorrectTypeRule;
      }
    });
    Object.defineProperty(exports, "FragmentsOnCompositeTypesRule", {
      enumerable: true,
      get: function get() {
        return _index5.FragmentsOnCompositeTypesRule;
      }
    });
    Object.defineProperty(exports, "KnownArgumentNamesRule", {
      enumerable: true,
      get: function get() {
        return _index5.KnownArgumentNamesRule;
      }
    });
    Object.defineProperty(exports, "KnownDirectivesRule", {
      enumerable: true,
      get: function get() {
        return _index5.KnownDirectivesRule;
      }
    });
    Object.defineProperty(exports, "KnownFragmentNamesRule", {
      enumerable: true,
      get: function get() {
        return _index5.KnownFragmentNamesRule;
      }
    });
    Object.defineProperty(exports, "KnownTypeNamesRule", {
      enumerable: true,
      get: function get() {
        return _index5.KnownTypeNamesRule;
      }
    });
    Object.defineProperty(exports, "LoneAnonymousOperationRule", {
      enumerable: true,
      get: function get() {
        return _index5.LoneAnonymousOperationRule;
      }
    });
    Object.defineProperty(exports, "NoFragmentCyclesRule", {
      enumerable: true,
      get: function get() {
        return _index5.NoFragmentCyclesRule;
      }
    });
    Object.defineProperty(exports, "NoUndefinedVariablesRule", {
      enumerable: true,
      get: function get() {
        return _index5.NoUndefinedVariablesRule;
      }
    });
    Object.defineProperty(exports, "NoUnusedFragmentsRule", {
      enumerable: true,
      get: function get() {
        return _index5.NoUnusedFragmentsRule;
      }
    });
    Object.defineProperty(exports, "NoUnusedVariablesRule", {
      enumerable: true,
      get: function get() {
        return _index5.NoUnusedVariablesRule;
      }
    });
    Object.defineProperty(exports, "OverlappingFieldsCanBeMergedRule", {
      enumerable: true,
      get: function get() {
        return _index5.OverlappingFieldsCanBeMergedRule;
      }
    });
    Object.defineProperty(exports, "PossibleFragmentSpreadsRule", {
      enumerable: true,
      get: function get() {
        return _index5.PossibleFragmentSpreadsRule;
      }
    });
    Object.defineProperty(exports, "ProvidedRequiredArgumentsRule", {
      enumerable: true,
      get: function get() {
        return _index5.ProvidedRequiredArgumentsRule;
      }
    });
    Object.defineProperty(exports, "ScalarLeafsRule", {
      enumerable: true,
      get: function get() {
        return _index5.ScalarLeafsRule;
      }
    });
    Object.defineProperty(exports, "SingleFieldSubscriptionsRule", {
      enumerable: true,
      get: function get() {
        return _index5.SingleFieldSubscriptionsRule;
      }
    });
    Object.defineProperty(exports, "UniqueArgumentNamesRule", {
      enumerable: true,
      get: function get() {
        return _index5.UniqueArgumentNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueDirectivesPerLocationRule", {
      enumerable: true,
      get: function get() {
        return _index5.UniqueDirectivesPerLocationRule;
      }
    });
    Object.defineProperty(exports, "UniqueFragmentNamesRule", {
      enumerable: true,
      get: function get() {
        return _index5.UniqueFragmentNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueInputFieldNamesRule", {
      enumerable: true,
      get: function get() {
        return _index5.UniqueInputFieldNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueOperationNamesRule", {
      enumerable: true,
      get: function get() {
        return _index5.UniqueOperationNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueVariableNamesRule", {
      enumerable: true,
      get: function get() {
        return _index5.UniqueVariableNamesRule;
      }
    });
    Object.defineProperty(exports, "ValuesOfCorrectTypeRule", {
      enumerable: true,
      get: function get() {
        return _index5.ValuesOfCorrectTypeRule;
      }
    });
    Object.defineProperty(exports, "VariablesAreInputTypesRule", {
      enumerable: true,
      get: function get() {
        return _index5.VariablesAreInputTypesRule;
      }
    });
    Object.defineProperty(exports, "VariablesInAllowedPositionRule", {
      enumerable: true,
      get: function get() {
        return _index5.VariablesInAllowedPositionRule;
      }
    });
    Object.defineProperty(exports, "LoneSchemaDefinitionRule", {
      enumerable: true,
      get: function get() {
        return _index5.LoneSchemaDefinitionRule;
      }
    });
    Object.defineProperty(exports, "UniqueOperationTypesRule", {
      enumerable: true,
      get: function get() {
        return _index5.UniqueOperationTypesRule;
      }
    });
    Object.defineProperty(exports, "UniqueTypeNamesRule", {
      enumerable: true,
      get: function get() {
        return _index5.UniqueTypeNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueEnumValueNamesRule", {
      enumerable: true,
      get: function get() {
        return _index5.UniqueEnumValueNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueFieldDefinitionNamesRule", {
      enumerable: true,
      get: function get() {
        return _index5.UniqueFieldDefinitionNamesRule;
      }
    });
    Object.defineProperty(exports, "UniqueDirectiveNamesRule", {
      enumerable: true,
      get: function get() {
        return _index5.UniqueDirectiveNamesRule;
      }
    });
    Object.defineProperty(exports, "PossibleTypeExtensionsRule", {
      enumerable: true,
      get: function get() {
        return _index5.PossibleTypeExtensionsRule;
      }
    });
    Object.defineProperty(exports, "NoDeprecatedCustomRule", {
      enumerable: true,
      get: function get() {
        return _index5.NoDeprecatedCustomRule;
      }
    });
    Object.defineProperty(exports, "NoSchemaIntrospectionCustomRule", {
      enumerable: true,
      get: function get() {
        return _index5.NoSchemaIntrospectionCustomRule;
      }
    });
    Object.defineProperty(exports, "GraphQLError", {
      enumerable: true,
      get: function get() {
        return _index6.GraphQLError;
      }
    });
    Object.defineProperty(exports, "syntaxError", {
      enumerable: true,
      get: function get() {
        return _index6.syntaxError;
      }
    });
    Object.defineProperty(exports, "locatedError", {
      enumerable: true,
      get: function get() {
        return _index6.locatedError;
      }
    });
    Object.defineProperty(exports, "printError", {
      enumerable: true,
      get: function get() {
        return _index6.printError;
      }
    });
    Object.defineProperty(exports, "formatError", {
      enumerable: true,
      get: function get() {
        return _index6.formatError;
      }
    });
    Object.defineProperty(exports, "getIntrospectionQuery", {
      enumerable: true,
      get: function get() {
        return _index7.getIntrospectionQuery;
      }
    });
    Object.defineProperty(exports, "getOperationAST", {
      enumerable: true,
      get: function get() {
        return _index7.getOperationAST;
      }
    });
    Object.defineProperty(exports, "getOperationRootType", {
      enumerable: true,
      get: function get() {
        return _index7.getOperationRootType;
      }
    });
    Object.defineProperty(exports, "introspectionFromSchema", {
      enumerable: true,
      get: function get() {
        return _index7.introspectionFromSchema;
      }
    });
    Object.defineProperty(exports, "buildClientSchema", {
      enumerable: true,
      get: function get() {
        return _index7.buildClientSchema;
      }
    });
    Object.defineProperty(exports, "buildASTSchema", {
      enumerable: true,
      get: function get() {
        return _index7.buildASTSchema;
      }
    });
    Object.defineProperty(exports, "buildSchema", {
      enumerable: true,
      get: function get() {
        return _index7.buildSchema;
      }
    });
    Object.defineProperty(exports, "getDescription", {
      enumerable: true,
      get: function get() {
        return _index7.getDescription;
      }
    });
    Object.defineProperty(exports, "extendSchema", {
      enumerable: true,
      get: function get() {
        return _index7.extendSchema;
      }
    });
    Object.defineProperty(exports, "lexicographicSortSchema", {
      enumerable: true,
      get: function get() {
        return _index7.lexicographicSortSchema;
      }
    });
    Object.defineProperty(exports, "printSchema", {
      enumerable: true,
      get: function get() {
        return _index7.printSchema;
      }
    });
    Object.defineProperty(exports, "printType", {
      enumerable: true,
      get: function get() {
        return _index7.printType;
      }
    });
    Object.defineProperty(exports, "printIntrospectionSchema", {
      enumerable: true,
      get: function get() {
        return _index7.printIntrospectionSchema;
      }
    });
    Object.defineProperty(exports, "typeFromAST", {
      enumerable: true,
      get: function get() {
        return _index7.typeFromAST;
      }
    });
    Object.defineProperty(exports, "valueFromAST", {
      enumerable: true,
      get: function get() {
        return _index7.valueFromAST;
      }
    });
    Object.defineProperty(exports, "valueFromASTUntyped", {
      enumerable: true,
      get: function get() {
        return _index7.valueFromASTUntyped;
      }
    });
    Object.defineProperty(exports, "astFromValue", {
      enumerable: true,
      get: function get() {
        return _index7.astFromValue;
      }
    });
    Object.defineProperty(exports, "TypeInfo", {
      enumerable: true,
      get: function get() {
        return _index7.TypeInfo;
      }
    });
    Object.defineProperty(exports, "visitWithTypeInfo", {
      enumerable: true,
      get: function get() {
        return _index7.visitWithTypeInfo;
      }
    });
    Object.defineProperty(exports, "coerceInputValue", {
      enumerable: true,
      get: function get() {
        return _index7.coerceInputValue;
      }
    });
    Object.defineProperty(exports, "concatAST", {
      enumerable: true,
      get: function get() {
        return _index7.concatAST;
      }
    });
    Object.defineProperty(exports, "separateOperations", {
      enumerable: true,
      get: function get() {
        return _index7.separateOperations;
      }
    });
    Object.defineProperty(exports, "stripIgnoredCharacters", {
      enumerable: true,
      get: function get() {
        return _index7.stripIgnoredCharacters;
      }
    });
    Object.defineProperty(exports, "isEqualType", {
      enumerable: true,
      get: function get() {
        return _index7.isEqualType;
      }
    });
    Object.defineProperty(exports, "isTypeSubTypeOf", {
      enumerable: true,
      get: function get() {
        return _index7.isTypeSubTypeOf;
      }
    });
    Object.defineProperty(exports, "doTypesOverlap", {
      enumerable: true,
      get: function get() {
        return _index7.doTypesOverlap;
      }
    });
    Object.defineProperty(exports, "assertValidName", {
      enumerable: true,
      get: function get() {
        return _index7.assertValidName;
      }
    });
    Object.defineProperty(exports, "isValidNameError", {
      enumerable: true,
      get: function get() {
        return _index7.isValidNameError;
      }
    });
    Object.defineProperty(exports, "BreakingChangeType", {
      enumerable: true,
      get: function get() {
        return _index7.BreakingChangeType;
      }
    });
    Object.defineProperty(exports, "DangerousChangeType", {
      enumerable: true,
      get: function get() {
        return _index7.DangerousChangeType;
      }
    });
    Object.defineProperty(exports, "findBreakingChanges", {
      enumerable: true,
      get: function get() {
        return _index7.findBreakingChanges;
      }
    });
    Object.defineProperty(exports, "findDangerousChanges", {
      enumerable: true,
      get: function get() {
        return _index7.findDangerousChanges;
      }
    });
    Object.defineProperty(exports, "findDeprecatedUsages", {
      enumerable: true,
      get: function get() {
        return _index7.findDeprecatedUsages;
      }
    });
    var _version = require_version();
    var _graphql = require_graphql();
    var _index = require_type();
    var _index2 = require_language();
    var _index3 = require_execution();
    var _index4 = require_subscription();
    var _index5 = require_validation();
    var _index6 = require_error();
    var _index7 = require_utilities();
  }
});

// ../../../node_modules/.pnpm/tslib@2.3.1/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../../node_modules/.pnpm/tslib@2.3.1/node_modules/tslib/tslib.js"(exports, module2) {
    init_cjs_shims();
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __spreadArray;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __createBinding;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root, createExporter(module2.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve2) {
            resolve2(value);
          });
        }
        return new (P || (P = Promise))(function(resolve2, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding(o, m, p);
      };
      __createBinding = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      };
      __spreadArrays = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await = function(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      };
      __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve2, reject) {
              v = o[n](v), settle(resolve2, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve2, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve2({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__spreadArray", __spreadArray);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    });
  }
});

// ../../../node_modules/.pnpm/lower-case@2.0.2/node_modules/lower-case/dist/index.js
var require_dist = __commonJS({
  "../../../node_modules/.pnpm/lower-case@2.0.2/node_modules/lower-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lowerCase = exports.localeLowerCase = void 0;
    var SUPPORTED_LOCALE = {
      tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
          \u0130: "i",
          I: "\u0131",
          I\u0307: "i"
        }
      },
      az: {
        regexp: /\u0130/g,
        map: {
          \u0130: "i",
          I: "\u0131",
          I\u0307: "i"
        }
      },
      lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
          I: "i\u0307",
          J: "j\u0307",
          \u012E: "\u012F\u0307",
          \u00CC: "i\u0307\u0300",
          \u00CD: "i\u0307\u0301",
          \u0128: "i\u0307\u0303"
        }
      }
    };
    function localeLowerCase(str, locale) {
      var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
      if (lang)
        return lowerCase(str.replace(lang.regexp, function(m) {
          return lang.map[m];
        }));
      return lowerCase(str);
    }
    exports.localeLowerCase = localeLowerCase;
    function lowerCase(str) {
      return str.toLowerCase();
    }
    exports.lowerCase = lowerCase;
  }
});

// ../../../node_modules/.pnpm/no-case@3.0.4/node_modules/no-case/dist/index.js
var require_dist2 = __commonJS({
  "../../../node_modules/.pnpm/no-case@3.0.4/node_modules/no-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.noCase = void 0;
    var lower_case_1 = require_dist();
    var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
    var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
    function noCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case_1.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
      var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
      var start = 0;
      var end = result.length;
      while (result.charAt(start) === "\0")
        start++;
      while (result.charAt(end - 1) === "\0")
        end--;
      return result.slice(start, end).split("\0").map(transform).join(delimiter);
    }
    exports.noCase = noCase;
    function replace(input, re, value) {
      if (re instanceof RegExp)
        return input.replace(re, value);
      return re.reduce(function(input2, re2) {
        return input2.replace(re2, value);
      }, input);
    }
  }
});

// ../../../node_modules/.pnpm/pascal-case@3.1.2/node_modules/pascal-case/dist/index.js
var require_dist3 = __commonJS({
  "../../../node_modules/.pnpm/pascal-case@3.1.2/node_modules/pascal-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pascalCase = exports.pascalCaseTransformMerge = exports.pascalCaseTransform = void 0;
    var tslib_1 = require_tslib();
    var no_case_1 = require_dist2();
    function pascalCaseTransform(input, index) {
      var firstChar = input.charAt(0);
      var lowerChars = input.substr(1).toLowerCase();
      if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
      }
      return "" + firstChar.toUpperCase() + lowerChars;
    }
    exports.pascalCaseTransform = pascalCaseTransform;
    function pascalCaseTransformMerge(input) {
      return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    }
    exports.pascalCaseTransformMerge = pascalCaseTransformMerge;
    function pascalCase3(input, options) {
      if (options === void 0) {
        options = {};
      }
      return no_case_1.noCase(input, tslib_1.__assign({ delimiter: "", transform: pascalCaseTransform }, options));
    }
    exports.pascalCase = pascalCase3;
  }
});

// ../../../node_modules/.pnpm/camel-case@4.1.2/node_modules/camel-case/dist/index.js
var require_dist4 = __commonJS({
  "../../../node_modules/.pnpm/camel-case@4.1.2/node_modules/camel-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.camelCase = exports.camelCaseTransformMerge = exports.camelCaseTransform = void 0;
    var tslib_1 = require_tslib();
    var pascal_case_1 = require_dist3();
    function camelCaseTransform(input, index) {
      if (index === 0)
        return input.toLowerCase();
      return pascal_case_1.pascalCaseTransform(input, index);
    }
    exports.camelCaseTransform = camelCaseTransform;
    function camelCaseTransformMerge(input, index) {
      if (index === 0)
        return input.toLowerCase();
      return pascal_case_1.pascalCaseTransformMerge(input);
    }
    exports.camelCaseTransformMerge = camelCaseTransformMerge;
    function camelCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return pascal_case_1.pascalCase(input, tslib_1.__assign({ transform: camelCaseTransform }, options));
    }
    exports.camelCase = camelCase;
  }
});

// ../../../node_modules/.pnpm/upper-case-first@2.0.2/node_modules/upper-case-first/dist/index.js
var require_dist5 = __commonJS({
  "../../../node_modules/.pnpm/upper-case-first@2.0.2/node_modules/upper-case-first/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.upperCaseFirst = void 0;
    function upperCaseFirst(input) {
      return input.charAt(0).toUpperCase() + input.substr(1);
    }
    exports.upperCaseFirst = upperCaseFirst;
  }
});

// ../../../node_modules/.pnpm/capital-case@1.0.4/node_modules/capital-case/dist/index.js
var require_dist6 = __commonJS({
  "../../../node_modules/.pnpm/capital-case@1.0.4/node_modules/capital-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.capitalCase = exports.capitalCaseTransform = void 0;
    var tslib_1 = require_tslib();
    var no_case_1 = require_dist2();
    var upper_case_first_1 = require_dist5();
    function capitalCaseTransform(input) {
      return upper_case_first_1.upperCaseFirst(input.toLowerCase());
    }
    exports.capitalCaseTransform = capitalCaseTransform;
    function capitalCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return no_case_1.noCase(input, tslib_1.__assign({ delimiter: " ", transform: capitalCaseTransform }, options));
    }
    exports.capitalCase = capitalCase;
  }
});

// ../../../node_modules/.pnpm/upper-case@2.0.2/node_modules/upper-case/dist/index.js
var require_dist7 = __commonJS({
  "../../../node_modules/.pnpm/upper-case@2.0.2/node_modules/upper-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.upperCase = exports.localeUpperCase = void 0;
    var SUPPORTED_LOCALE = {
      tr: {
        regexp: /[\u0069]/g,
        map: {
          i: "\u0130"
        }
      },
      az: {
        regexp: /[\u0069]/g,
        map: {
          i: "\u0130"
        }
      },
      lt: {
        regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
        map: {
          i\u0307: "I",
          j\u0307: "J",
          \u012F\u0307: "\u012E",
          i\u0307\u0300: "\xCC",
          i\u0307\u0301: "\xCD",
          i\u0307\u0303: "\u0128"
        }
      }
    };
    function localeUpperCase(str, locale) {
      var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
      if (lang)
        return upperCase(str.replace(lang.regexp, function(m) {
          return lang.map[m];
        }));
      return upperCase(str);
    }
    exports.localeUpperCase = localeUpperCase;
    function upperCase(str) {
      return str.toUpperCase();
    }
    exports.upperCase = upperCase;
  }
});

// ../../../node_modules/.pnpm/constant-case@3.0.4/node_modules/constant-case/dist/index.js
var require_dist8 = __commonJS({
  "../../../node_modules/.pnpm/constant-case@3.0.4/node_modules/constant-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.constantCase = void 0;
    var tslib_1 = require_tslib();
    var no_case_1 = require_dist2();
    var upper_case_1 = require_dist7();
    function constantCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return no_case_1.noCase(input, tslib_1.__assign({ delimiter: "_", transform: upper_case_1.upperCase }, options));
    }
    exports.constantCase = constantCase;
  }
});

// ../../../node_modules/.pnpm/dot-case@3.0.4/node_modules/dot-case/dist/index.js
var require_dist9 = __commonJS({
  "../../../node_modules/.pnpm/dot-case@3.0.4/node_modules/dot-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dotCase = void 0;
    var tslib_1 = require_tslib();
    var no_case_1 = require_dist2();
    function dotCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return no_case_1.noCase(input, tslib_1.__assign({ delimiter: "." }, options));
    }
    exports.dotCase = dotCase;
  }
});

// ../../../node_modules/.pnpm/header-case@2.0.4/node_modules/header-case/dist/index.js
var require_dist10 = __commonJS({
  "../../../node_modules/.pnpm/header-case@2.0.4/node_modules/header-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.headerCase = void 0;
    var tslib_1 = require_tslib();
    var capital_case_1 = require_dist6();
    function headerCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return capital_case_1.capitalCase(input, tslib_1.__assign({ delimiter: "-" }, options));
    }
    exports.headerCase = headerCase;
  }
});

// ../../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist/index.js
var require_dist11 = __commonJS({
  "../../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.paramCase = void 0;
    var tslib_1 = require_tslib();
    var dot_case_1 = require_dist9();
    function paramCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return dot_case_1.dotCase(input, tslib_1.__assign({ delimiter: "-" }, options));
    }
    exports.paramCase = paramCase;
  }
});

// ../../../node_modules/.pnpm/path-case@3.0.4/node_modules/path-case/dist/index.js
var require_dist12 = __commonJS({
  "../../../node_modules/.pnpm/path-case@3.0.4/node_modules/path-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pathCase = void 0;
    var tslib_1 = require_tslib();
    var dot_case_1 = require_dist9();
    function pathCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return dot_case_1.dotCase(input, tslib_1.__assign({ delimiter: "/" }, options));
    }
    exports.pathCase = pathCase;
  }
});

// ../../../node_modules/.pnpm/sentence-case@3.0.4/node_modules/sentence-case/dist/index.js
var require_dist13 = __commonJS({
  "../../../node_modules/.pnpm/sentence-case@3.0.4/node_modules/sentence-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sentenceCase = exports.sentenceCaseTransform = void 0;
    var tslib_1 = require_tslib();
    var no_case_1 = require_dist2();
    var upper_case_first_1 = require_dist5();
    function sentenceCaseTransform(input, index) {
      var result = input.toLowerCase();
      if (index === 0)
        return upper_case_first_1.upperCaseFirst(result);
      return result;
    }
    exports.sentenceCaseTransform = sentenceCaseTransform;
    function sentenceCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return no_case_1.noCase(input, tslib_1.__assign({ delimiter: " ", transform: sentenceCaseTransform }, options));
    }
    exports.sentenceCase = sentenceCase;
  }
});

// ../../../node_modules/.pnpm/snake-case@3.0.4/node_modules/snake-case/dist/index.js
var require_dist14 = __commonJS({
  "../../../node_modules/.pnpm/snake-case@3.0.4/node_modules/snake-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.snakeCase = void 0;
    var tslib_1 = require_tslib();
    var dot_case_1 = require_dist9();
    function snakeCase(input, options) {
      if (options === void 0) {
        options = {};
      }
      return dot_case_1.dotCase(input, tslib_1.__assign({ delimiter: "_" }, options));
    }
    exports.snakeCase = snakeCase;
  }
});

// ../../../node_modules/.pnpm/change-case@4.1.2/node_modules/change-case/dist/index.js
var require_dist15 = __commonJS({
  "../../../node_modules/.pnpm/change-case@4.1.2/node_modules/change-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib();
    tslib_1.__exportStar(require_dist4(), exports);
    tslib_1.__exportStar(require_dist6(), exports);
    tslib_1.__exportStar(require_dist8(), exports);
    tslib_1.__exportStar(require_dist9(), exports);
    tslib_1.__exportStar(require_dist10(), exports);
    tslib_1.__exportStar(require_dist2(), exports);
    tslib_1.__exportStar(require_dist11(), exports);
    tslib_1.__exportStar(require_dist3(), exports);
    tslib_1.__exportStar(require_dist12(), exports);
    tslib_1.__exportStar(require_dist13(), exports);
    tslib_1.__exportStar(require_dist14(), exports);
  }
});

// ../../../node_modules/.pnpm/lower-case-first@2.0.2/node_modules/lower-case-first/dist/index.js
var require_dist16 = __commonJS({
  "../../../node_modules/.pnpm/lower-case-first@2.0.2/node_modules/lower-case-first/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lowerCaseFirst = void 0;
    function lowerCaseFirst(input) {
      return input.charAt(0).toLowerCase() + input.substr(1);
    }
    exports.lowerCaseFirst = lowerCaseFirst;
  }
});

// ../../../node_modules/.pnpm/sponge-case@1.0.1/node_modules/sponge-case/dist/index.js
var require_dist17 = __commonJS({
  "../../../node_modules/.pnpm/sponge-case@1.0.1/node_modules/sponge-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.spongeCase = void 0;
    function spongeCase(input) {
      var result = "";
      for (var i = 0; i < input.length; i++) {
        result += Math.random() > 0.5 ? input[i].toUpperCase() : input[i].toLowerCase();
      }
      return result;
    }
    exports.spongeCase = spongeCase;
  }
});

// ../../../node_modules/.pnpm/swap-case@2.0.2/node_modules/swap-case/dist/index.js
var require_dist18 = __commonJS({
  "../../../node_modules/.pnpm/swap-case@2.0.2/node_modules/swap-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.swapCase = void 0;
    function swapCase(input) {
      var result = "";
      for (var i = 0; i < input.length; i++) {
        var lower = input[i].toLowerCase();
        result += input[i] === lower ? input[i].toUpperCase() : lower;
      }
      return result;
    }
    exports.swapCase = swapCase;
  }
});

// ../../../node_modules/.pnpm/title-case@3.0.3/node_modules/title-case/dist/index.js
var require_dist19 = __commonJS({
  "../../../node_modules/.pnpm/title-case@3.0.3/node_modules/title-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.titleCase = void 0;
    var SMALL_WORDS = /\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i;
    var TOKENS = /[^\s:–—-]+|./g;
    var WHITESPACE = /\s/;
    var IS_MANUAL_CASE = /.(?=[A-Z]|\..)/;
    var ALPHANUMERIC_PATTERN = /[A-Za-z0-9\u00C0-\u00FF]/;
    function titleCase(input) {
      var result = "";
      var m;
      while ((m = TOKENS.exec(input)) !== null) {
        var token = m[0], index = m.index;
        if (!IS_MANUAL_CASE.test(token) && (!SMALL_WORDS.test(token) || index === 0 || index + token.length === input.length) && (input.charAt(index + token.length) !== ":" || WHITESPACE.test(input.charAt(index + token.length + 1)))) {
          result += token.replace(ALPHANUMERIC_PATTERN, function(m2) {
            return m2.toUpperCase();
          });
          continue;
        }
        result += token;
      }
      return result;
    }
    exports.titleCase = titleCase;
  }
});

// ../../../node_modules/.pnpm/is-upper-case@2.0.2/node_modules/is-upper-case/dist/index.js
var require_dist20 = __commonJS({
  "../../../node_modules/.pnpm/is-upper-case@2.0.2/node_modules/is-upper-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isUpperCase = void 0;
    function isUpperCase(input) {
      return input.toUpperCase() === input && input.toLowerCase() !== input;
    }
    exports.isUpperCase = isUpperCase;
  }
});

// ../../../node_modules/.pnpm/is-lower-case@2.0.2/node_modules/is-lower-case/dist/index.js
var require_dist21 = __commonJS({
  "../../../node_modules/.pnpm/is-lower-case@2.0.2/node_modules/is-lower-case/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isLowerCase = void 0;
    function isLowerCase(input) {
      return input.toLowerCase() === input && input.toUpperCase() !== input;
    }
    exports.isLowerCase = isLowerCase;
  }
});

// ../../../node_modules/.pnpm/change-case-all@1.0.14/node_modules/change-case-all/dist/index.js
var require_dist22 = __commonJS({
  "../../../node_modules/.pnpm/change-case-all@1.0.14/node_modules/change-case-all/dist/index.js"(exports) {
    init_cjs_shims();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isLowerCase = exports.isUpperCase = exports.upperCaseFirst = exports.localeUpperCase = exports.upperCase = exports.titleCase = exports.swapCase = exports.spongeCase = exports.lowerCaseFirst = exports.localeLowerCase = exports.lowerCase = exports.snakeCase = exports.sentenceCase = exports.pathCase = exports.pascalCase = exports.paramCase = exports.noCase = exports.headerCase = exports.dotCase = exports.constantCase = exports.capitalCase = exports.camelCase = void 0;
    var changeCase = require_dist15();
    var lowerCase1 = require_dist();
    var lowerCaseFirst1 = require_dist16();
    var spongeCase1 = require_dist17();
    var swapCase1 = require_dist18();
    var titleCase1 = require_dist19();
    var upperCase1 = require_dist7();
    var upperCaseFirst1 = require_dist5();
    var isUpperCase1 = require_dist20();
    var isLowerCase1 = require_dist21();
    exports.camelCase = changeCase.camelCase;
    exports.capitalCase = changeCase.capitalCase;
    exports.constantCase = changeCase.constantCase;
    exports.dotCase = changeCase.dotCase;
    exports.headerCase = changeCase.headerCase;
    exports.noCase = changeCase.noCase;
    exports.paramCase = changeCase.paramCase;
    exports.pascalCase = changeCase.pascalCase;
    exports.pathCase = changeCase.pathCase;
    exports.sentenceCase = changeCase.sentenceCase;
    exports.snakeCase = changeCase.snakeCase;
    exports.lowerCase = lowerCase1.lowerCase;
    exports.localeLowerCase = lowerCase1.localeLowerCase;
    exports.lowerCaseFirst = lowerCaseFirst1.lowerCaseFirst;
    exports.spongeCase = spongeCase1.spongeCase;
    exports.swapCase = swapCase1.swapCase;
    exports.titleCase = titleCase1.titleCase;
    exports.upperCase = upperCase1.upperCase;
    exports.localeUpperCase = upperCase1.localeUpperCase;
    exports.upperCaseFirst = upperCaseFirst1.upperCaseFirst;
    exports.isUpperCase = isUpperCase1.isUpperCase;
    exports.isLowerCase = isLowerCase1.isLowerCase;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js"(exports, module2) {
    init_cjs_shims();
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module2.exports = listCacheClear;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js
var require_eq = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js"(exports, module2) {
    init_cjs_shims();
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module2.exports = eq;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js"(exports, module2) {
    init_cjs_shims();
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module2.exports = assocIndexOf;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheDelete.js"(exports, module2) {
    init_cjs_shims();
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module2.exports = listCacheDelete;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheGet.js"(exports, module2) {
    init_cjs_shims();
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module2.exports = listCacheGet;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheHas.js"(exports, module2) {
    init_cjs_shims();
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module2.exports = listCacheHas;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheSet.js"(exports, module2) {
    init_cjs_shims();
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module2.exports = listCacheSet;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js"(exports, module2) {
    init_cjs_shims();
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module2.exports = ListCache;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackClear.js"(exports, module2) {
    init_cjs_shims();
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module2.exports = stackClear;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackDelete.js"(exports, module2) {
    init_cjs_shims();
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module2.exports = stackDelete;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackGet.js"(exports, module2) {
    init_cjs_shims();
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module2.exports = stackGet;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackHas.js"(exports, module2) {
    init_cjs_shims();
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module2.exports = stackHas;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js"(exports, module2) {
    init_cjs_shims();
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module2.exports = freeGlobal;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js
var require_root = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js"(exports, module2) {
    init_cjs_shims();
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module2.exports = root;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js"(exports, module2) {
    init_cjs_shims();
    var root = require_root();
    var Symbol2 = root.Symbol;
    module2.exports = Symbol2;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js"(exports, module2) {
    init_cjs_shims();
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module2.exports = getRawTag;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js"(exports, module2) {
    init_cjs_shims();
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module2.exports = objectToString;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js"(exports, module2) {
    init_cjs_shims();
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module2.exports = baseGetTag;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"(exports, module2) {
    init_cjs_shims();
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module2.exports = isObject;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js"(exports, module2) {
    init_cjs_shims();
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module2.exports = isFunction;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_coreJsData.js"(exports, module2) {
    init_cjs_shims();
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module2.exports = coreJsData;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isMasked.js"(exports, module2) {
    init_cjs_shims();
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module2.exports = isMasked;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js"(exports, module2) {
    init_cjs_shims();
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module2.exports = toSource;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNative.js"(exports, module2) {
    init_cjs_shims();
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module2.exports = baseIsNative;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getValue.js"(exports, module2) {
    init_cjs_shims();
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module2.exports = getValue;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js"(exports, module2) {
    init_cjs_shims();
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module2.exports = getNative;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js"(exports, module2) {
    init_cjs_shims();
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module2.exports = Map2;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js"(exports, module2) {
    init_cjs_shims();
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module2.exports = nativeCreate;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashClear.js"(exports, module2) {
    init_cjs_shims();
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module2.exports = hashClear;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashDelete.js"(exports, module2) {
    init_cjs_shims();
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = hashDelete;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashGet.js"(exports, module2) {
    init_cjs_shims();
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module2.exports = hashGet;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashHas.js"(exports, module2) {
    init_cjs_shims();
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module2.exports = hashHas;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashSet.js"(exports, module2) {
    init_cjs_shims();
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module2.exports = hashSet;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Hash.js"(exports, module2) {
    init_cjs_shims();
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module2.exports = Hash;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheClear.js"(exports, module2) {
    init_cjs_shims();
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module2.exports = mapCacheClear;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKeyable.js"(exports, module2) {
    init_cjs_shims();
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module2.exports = isKeyable;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js"(exports, module2) {
    init_cjs_shims();
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module2.exports = getMapData;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheDelete.js"(exports, module2) {
    init_cjs_shims();
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = mapCacheDelete;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheGet.js"(exports, module2) {
    init_cjs_shims();
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module2.exports = mapCacheGet;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheHas.js"(exports, module2) {
    init_cjs_shims();
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module2.exports = mapCacheHas;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheSet.js"(exports, module2) {
    init_cjs_shims();
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module2.exports = mapCacheSet;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js"(exports, module2) {
    init_cjs_shims();
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module2.exports = MapCache;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackSet.js"(exports, module2) {
    init_cjs_shims();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module2.exports = stackSet;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Stack.js"(exports, module2) {
    init_cjs_shims();
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module2.exports = Stack;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_defineProperty.js"(exports, module2) {
    init_cjs_shims();
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module2.exports = defineProperty;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js"(exports, module2) {
    init_cjs_shims();
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module2.exports = baseAssignValue;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignMergeValue.js
var require_assignMergeValue = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignMergeValue.js"(exports, module2) {
    init_cjs_shims();
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    function assignMergeValue(object, key, value) {
      if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module2.exports = assignMergeValue;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createBaseFor.js"(exports, module2) {
    init_cjs_shims();
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    module2.exports = createBaseFor;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFor.js
var require_baseFor = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFor.js"(exports, module2) {
    init_cjs_shims();
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module2.exports = baseFor;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js"(exports, module2) {
    init_cjs_shims();
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module2.exports = cloneBuffer;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Uint8Array.js"(exports, module2) {
    init_cjs_shims();
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module2.exports = Uint8Array2;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js"(exports, module2) {
    init_cjs_shims();
    var Uint8Array2 = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    module2.exports = cloneArrayBuffer;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js"(exports, module2) {
    init_cjs_shims();
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module2.exports = cloneTypedArray;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js"(exports, module2) {
    init_cjs_shims();
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    module2.exports = copyArray;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js"(exports, module2) {
    init_cjs_shims();
    var isObject = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module2.exports = baseCreate;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overArg.js"(exports, module2) {
    init_cjs_shims();
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module2.exports = overArg;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getPrototype.js"(exports, module2) {
    init_cjs_shims();
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module2.exports = getPrototype;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js"(exports, module2) {
    init_cjs_shims();
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module2.exports = isPrototype;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js"(exports, module2) {
    init_cjs_shims();
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module2.exports = initCloneObject;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js
var require_isObjectLike2 = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js"(exports, module2) {
    init_cjs_shims();
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module2.exports = isObjectLike;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsArguments.js"(exports, module2) {
    init_cjs_shims();
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike2();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module2.exports = baseIsArguments;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js"(exports, module2) {
    init_cjs_shims();
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike2();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module2.exports = isArguments;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js"(exports, module2) {
    init_cjs_shims();
    var isArray = Array.isArray;
    module2.exports = isArray;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js"(exports, module2) {
    init_cjs_shims();
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module2.exports = isLength;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js"(exports, module2) {
    init_cjs_shims();
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module2.exports = isArrayLike;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLikeObject.js
var require_isArrayLikeObject = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLikeObject.js"(exports, module2) {
    init_cjs_shims();
    var isArrayLike = require_isArrayLike();
    var isObjectLike = require_isObjectLike2();
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    module2.exports = isArrayLikeObject;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubFalse.js"(exports, module2) {
    init_cjs_shims();
    function stubFalse() {
      return false;
    }
    module2.exports = stubFalse;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js"(exports, module2) {
    init_cjs_shims();
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module2.exports = isBuffer;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isPlainObject.js"(exports, module2) {
    init_cjs_shims();
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike2();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module2.exports = isPlainObject;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsTypedArray.js"(exports, module2) {
    init_cjs_shims();
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike2();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module2.exports = baseIsTypedArray;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js"(exports, module2) {
    init_cjs_shims();
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module2.exports = baseUnary;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nodeUtil.js"(exports, module2) {
    init_cjs_shims();
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module2.exports = nodeUtil;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isTypedArray.js"(exports, module2) {
    init_cjs_shims();
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module2.exports = isTypedArray;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_safeGet.js
var require_safeGet = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_safeGet.js"(exports, module2) {
    init_cjs_shims();
    function safeGet(object, key) {
      if (key === "constructor" && typeof object[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object[key];
    }
    module2.exports = safeGet;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js"(exports, module2) {
    init_cjs_shims();
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module2.exports = assignValue;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js"(exports, module2) {
    init_cjs_shims();
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    module2.exports = copyObject;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTimes.js"(exports, module2) {
    init_cjs_shims();
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module2.exports = baseTimes;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js"(exports, module2) {
    init_cjs_shims();
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module2.exports = isIndex;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayLikeKeys.js"(exports, module2) {
    init_cjs_shims();
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = arrayLikeKeys;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js"(exports, module2) {
    init_cjs_shims();
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = nativeKeysIn;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js"(exports, module2) {
    init_cjs_shims();
    var isObject = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = baseKeysIn;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js"(exports, module2) {
    init_cjs_shims();
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module2.exports = keysIn;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toPlainObject.js
var require_toPlainObject = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toPlainObject.js"(exports, module2) {
    init_cjs_shims();
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    module2.exports = toPlainObject;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMergeDeep.js
var require_baseMergeDeep = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMergeDeep.js"(exports, module2) {
    init_cjs_shims();
    var assignMergeValue = require_assignMergeValue();
    var cloneBuffer = require_cloneBuffer();
    var cloneTypedArray = require_cloneTypedArray();
    var copyArray = require_copyArray();
    var initCloneObject = require_initCloneObject();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isArrayLikeObject = require_isArrayLikeObject();
    var isBuffer = require_isBuffer();
    var isFunction = require_isFunction();
    var isObject = require_isObject();
    var isPlainObject = require_isPlainObject();
    var isTypedArray = require_isTypedArray();
    var safeGet = require_safeGet();
    var toPlainObject = require_toPlainObject();
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }
    module2.exports = baseMergeDeep;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMerge.js
var require_baseMerge = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMerge.js"(exports, module2) {
    init_cjs_shims();
    var Stack = require_Stack();
    var assignMergeValue = require_assignMergeValue();
    var baseFor = require_baseFor();
    var baseMergeDeep = require_baseMergeDeep();
    var isObject = require_isObject();
    var keysIn = require_keysIn();
    var safeGet = require_safeGet();
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack());
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }
    module2.exports = baseMerge;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js
var require_identity = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js"(exports, module2) {
    init_cjs_shims();
    function identity(value) {
      return value;
    }
    module2.exports = identity;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_apply.js"(exports, module2) {
    init_cjs_shims();
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module2.exports = apply;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overRest.js"(exports, module2) {
    init_cjs_shims();
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    module2.exports = overRest;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/constant.js
var require_constant = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/constant.js"(exports, module2) {
    init_cjs_shims();
    function constant(value) {
      return function() {
        return value;
      };
    }
    module2.exports = constant;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSetToString.js"(exports, module2) {
    init_cjs_shims();
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity = require_identity();
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module2.exports = baseSetToString;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_shortOut.js"(exports, module2) {
    init_cjs_shims();
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module2.exports = shortOut;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToString.js"(exports, module2) {
    init_cjs_shims();
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module2.exports = setToString;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseRest.js
var require_baseRest = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseRest.js"(exports, module2) {
    init_cjs_shims();
    var identity = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + "");
    }
    module2.exports = baseRest;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIterateeCall.js"(exports, module2) {
    init_cjs_shims();
    var eq = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    module2.exports = isIterateeCall;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createAssigner.js
var require_createAssigner = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createAssigner.js"(exports, module2) {
    init_cjs_shims();
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }
    module2.exports = createAssigner;
  }
});

// ../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/merge.js
var require_merge = __commonJS({
  "../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/merge.js"(exports, module2) {
    init_cjs_shims();
    var baseMerge = require_baseMerge();
    var createAssigner = require_createAssigner();
    var merge2 = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });
    module2.exports = merge2;
  }
});

// ../../../node_modules/.pnpm/unc-path-regex@0.1.2/node_modules/unc-path-regex/index.js
var require_unc_path_regex = __commonJS({
  "../../../node_modules/.pnpm/unc-path-regex@0.1.2/node_modules/unc-path-regex/index.js"(exports, module2) {
    init_cjs_shims();
    "use strict";
    module2.exports = function uncPathRegex() {
      return /^[\\\/]{2,}[^\\\/]+[\\\/]+[^\\\/]+/;
    };
  }
});

// ../../../node_modules/.pnpm/is-unc-path@1.0.0/node_modules/is-unc-path/index.js
var require_is_unc_path = __commonJS({
  "../../../node_modules/.pnpm/is-unc-path@1.0.0/node_modules/is-unc-path/index.js"(exports, module2) {
    init_cjs_shims();
    "use strict";
    var regex = require_unc_path_regex()();
    module2.exports = function(filepath) {
      if (typeof filepath !== "string") {
        throw new TypeError("expected a string");
      }
      return regex.test(filepath);
    };
  }
});

// ../../../node_modules/.pnpm/is-relative@1.0.0/node_modules/is-relative/index.js
var require_is_relative = __commonJS({
  "../../../node_modules/.pnpm/is-relative@1.0.0/node_modules/is-relative/index.js"(exports, module2) {
    init_cjs_shims();
    "use strict";
    var isUncPath = require_is_unc_path();
    module2.exports = function isRelative(filepath) {
      if (typeof filepath !== "string") {
        throw new TypeError("expected filepath to be a string");
      }
      return !isUncPath(filepath) && !/^([a-z]:)?[\\\/]/i.test(filepath);
    };
  }
});

// ../../../node_modules/.pnpm/is-windows@1.0.2/node_modules/is-windows/index.js
var require_is_windows = __commonJS({
  "../../../node_modules/.pnpm/is-windows@1.0.2/node_modules/is-windows/index.js"(exports, module2) {
    init_cjs_shims();
    (function(factory) {
      if (exports && typeof exports === "object" && typeof module2 !== "undefined") {
        module2.exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define([], factory);
      } else if (typeof window !== "undefined") {
        window.isWindows = factory();
      } else if (typeof global !== "undefined") {
        global.isWindows = factory();
      } else if (typeof self !== "undefined") {
        self.isWindows = factory();
      } else {
        this.isWindows = factory();
      }
    })(function() {
      "use strict";
      return function isWindows() {
        return process && (process.platform === "win32" || /^(msys|cygwin)$/.test(process.env.OSTYPE));
      };
    });
  }
});

// ../../../node_modules/.pnpm/is-absolute@1.0.0/node_modules/is-absolute/index.js
var require_is_absolute = __commonJS({
  "../../../node_modules/.pnpm/is-absolute@1.0.0/node_modules/is-absolute/index.js"(exports, module2) {
    init_cjs_shims();
    "use strict";
    var isRelative = require_is_relative();
    var isWindows = require_is_windows();
    module2.exports = isAbsolute2;
    function isAbsolute2(fp) {
      if (typeof fp !== "string") {
        throw new TypeError("isAbsolute expects a string.");
      }
      return isWindows() ? isAbsolute2.win32(fp) : isAbsolute2.posix(fp);
    }
    isAbsolute2.posix = function posixPath(fp) {
      return fp.charAt(0) === "/";
    };
    isAbsolute2.win32 = function win32(fp) {
      if (/[a-z]/i.test(fp.charAt(0)) && fp.charAt(1) === ":" && fp.charAt(2) === "\\") {
        return true;
      }
      if (fp.slice(0, 2) === "\\\\") {
        return true;
      }
      return !isRelative(fp);
    };
  }
});

// ../../../node_modules/.pnpm/path-root-regex@0.1.2/node_modules/path-root-regex/index.js
var require_path_root_regex = __commonJS({
  "../../../node_modules/.pnpm/path-root-regex@0.1.2/node_modules/path-root-regex/index.js"(exports, module2) {
    init_cjs_shims();
    "use strict";
    module2.exports = function() {
      return /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?/;
    };
  }
});

// ../../../node_modules/.pnpm/path-root@0.1.1/node_modules/path-root/index.js
var require_path_root = __commonJS({
  "../../../node_modules/.pnpm/path-root@0.1.1/node_modules/path-root/index.js"(exports, module2) {
    init_cjs_shims();
    "use strict";
    var pathRootRegex = require_path_root_regex();
    module2.exports = function(filepath) {
      if (typeof filepath !== "string") {
        throw new TypeError("expected a string");
      }
      var match = pathRootRegex().exec(filepath);
      if (match) {
        return match[0];
      }
    };
  }
});

// ../../../node_modules/.pnpm/map-cache@0.2.2/node_modules/map-cache/index.js
var require_map_cache = __commonJS({
  "../../../node_modules/.pnpm/map-cache@0.2.2/node_modules/map-cache/index.js"(exports, module2) {
    init_cjs_shims();
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    module2.exports = MapCache;
    function MapCache(data) {
      this.__data__ = data || {};
    }
    MapCache.prototype.set = function mapSet(key, value) {
      if (key !== "__proto__") {
        this.__data__[key] = value;
      }
      return this;
    };
    MapCache.prototype.get = function mapGet(key) {
      return key === "__proto__" ? void 0 : this.__data__[key];
    };
    MapCache.prototype.has = function mapHas(key) {
      return key !== "__proto__" && hasOwn.call(this.__data__, key);
    };
    MapCache.prototype.del = function mapDelete(key) {
      return this.has(key) && delete this.__data__[key];
    };
  }
});

// ../../../node_modules/.pnpm/parse-filepath@1.0.2/node_modules/parse-filepath/index.js
var require_parse_filepath = __commonJS({
  "../../../node_modules/.pnpm/parse-filepath@1.0.2/node_modules/parse-filepath/index.js"(exports, module2) {
    init_cjs_shims();
    "use strict";
    var path = require("path");
    var isAbsolute2 = require_is_absolute();
    var pathRoot = require_path_root();
    var MapCache = require_map_cache();
    var cache = new MapCache();
    module2.exports = function(filepath) {
      if (typeof filepath !== "string") {
        throw new TypeError("parse-filepath expects a string");
      }
      if (cache.has(filepath)) {
        return cache.get(filepath);
      }
      var obj = {};
      if (typeof path.parse === "function") {
        obj = path.parse(filepath);
        obj.extname = obj.ext;
        obj.basename = obj.base;
        obj.dirname = obj.dir;
        obj.stem = obj.name;
      } else {
        define2(obj, "root", function() {
          return pathRoot(this.path);
        });
        define2(obj, "extname", function() {
          return path.extname(filepath);
        });
        define2(obj, "ext", function() {
          return this.extname;
        });
        define2(obj, "name", function() {
          return path.basename(filepath, this.ext);
        });
        define2(obj, "stem", function() {
          return this.name;
        });
        define2(obj, "base", function() {
          return this.name + this.ext;
        });
        define2(obj, "basename", function() {
          return this.base;
        });
        define2(obj, "dir", function() {
          var dir = path.dirname(filepath);
          if (dir === ".") {
            return filepath[0] === "." ? dir : "";
          } else {
            return dir;
          }
        });
        define2(obj, "dirname", function() {
          return this.dir;
        });
      }
      obj.path = filepath;
      define2(obj, "absolute", function() {
        return path.resolve(this.path);
      });
      define2(obj, "isAbsolute", function() {
        return isAbsolute2(this.path);
      });
      cache.set(filepath, obj);
      return obj;
    };
    function define2(obj, prop, fn) {
      var cached;
      Object.defineProperty(obj, prop, {
        configurable: true,
        enumerable: true,
        set: function(val) {
          cached = val;
        },
        get: function() {
          return cached || (cached = fn.call(obj));
        }
      });
    }
  }
});

// ../../../node_modules/.pnpm/auto-bind@4.0.0/node_modules/auto-bind/index.js
var require_auto_bind = __commonJS({
  "../../../node_modules/.pnpm/auto-bind@4.0.0/node_modules/auto-bind/index.js"(exports, module2) {
    init_cjs_shims();
    "use strict";
    var getAllProperties = (object) => {
      const properties = new Set();
      do {
        for (const key of Reflect.ownKeys(object)) {
          properties.add([object, key]);
        }
      } while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);
      return properties;
    };
    module2.exports = (self2, { include, exclude } = {}) => {
      const filter = (key) => {
        const match = (pattern) => typeof pattern === "string" ? key === pattern : pattern.test(key);
        if (include) {
          return include.some(match);
        }
        if (exclude) {
          return !exclude.some(match);
        }
        return true;
      };
      for (const [object, key] of getAllProperties(self2.constructor.prototype)) {
        if (key === "constructor" || !filter(key)) {
          continue;
        }
        const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
        if (descriptor && typeof descriptor.value === "function") {
          self2[key] = self2[key].bind(self2);
        }
      }
      return self2;
    };
  }
});

// ../../../node_modules/.pnpm/dependency-graph@0.11.0/node_modules/dependency-graph/lib/dep_graph.js
var require_dep_graph = __commonJS({
  "../../../node_modules/.pnpm/dependency-graph@0.11.0/node_modules/dependency-graph/lib/dep_graph.js"(exports) {
    init_cjs_shims();
    function createDFS(edges, leavesOnly, result, circular) {
      var visited = {};
      return function(start) {
        if (visited[start]) {
          return;
        }
        var inCurrentPath = {};
        var currentPath = [];
        var todo = [];
        todo.push({ node: start, processed: false });
        while (todo.length > 0) {
          var current = todo[todo.length - 1];
          var processed = current.processed;
          var node = current.node;
          if (!processed) {
            if (visited[node]) {
              todo.pop();
              continue;
            } else if (inCurrentPath[node]) {
              if (circular) {
                todo.pop();
                continue;
              }
              currentPath.push(node);
              throw new DepGraphCycleError(currentPath);
            }
            inCurrentPath[node] = true;
            currentPath.push(node);
            var nodeEdges = edges[node];
            for (var i = nodeEdges.length - 1; i >= 0; i--) {
              todo.push({ node: nodeEdges[i], processed: false });
            }
            current.processed = true;
          } else {
            todo.pop();
            currentPath.pop();
            inCurrentPath[node] = false;
            visited[node] = true;
            if (!leavesOnly || edges[node].length === 0) {
              result.push(node);
            }
          }
        }
      };
    }
    var DepGraph2 = exports.DepGraph = function DepGraph3(opts) {
      this.nodes = {};
      this.outgoingEdges = {};
      this.incomingEdges = {};
      this.circular = opts && !!opts.circular;
    };
    DepGraph2.prototype = {
      size: function() {
        return Object.keys(this.nodes).length;
      },
      addNode: function(node, data) {
        if (!this.hasNode(node)) {
          if (arguments.length === 2) {
            this.nodes[node] = data;
          } else {
            this.nodes[node] = node;
          }
          this.outgoingEdges[node] = [];
          this.incomingEdges[node] = [];
        }
      },
      removeNode: function(node) {
        if (this.hasNode(node)) {
          delete this.nodes[node];
          delete this.outgoingEdges[node];
          delete this.incomingEdges[node];
          [this.incomingEdges, this.outgoingEdges].forEach(function(edgeList) {
            Object.keys(edgeList).forEach(function(key) {
              var idx = edgeList[key].indexOf(node);
              if (idx >= 0) {
                edgeList[key].splice(idx, 1);
              }
            }, this);
          });
        }
      },
      hasNode: function(node) {
        return this.nodes.hasOwnProperty(node);
      },
      getNodeData: function(node) {
        if (this.hasNode(node)) {
          return this.nodes[node];
        } else {
          throw new Error("Node does not exist: " + node);
        }
      },
      setNodeData: function(node, data) {
        if (this.hasNode(node)) {
          this.nodes[node] = data;
        } else {
          throw new Error("Node does not exist: " + node);
        }
      },
      addDependency: function(from, to) {
        if (!this.hasNode(from)) {
          throw new Error("Node does not exist: " + from);
        }
        if (!this.hasNode(to)) {
          throw new Error("Node does not exist: " + to);
        }
        if (this.outgoingEdges[from].indexOf(to) === -1) {
          this.outgoingEdges[from].push(to);
        }
        if (this.incomingEdges[to].indexOf(from) === -1) {
          this.incomingEdges[to].push(from);
        }
        return true;
      },
      removeDependency: function(from, to) {
        var idx;
        if (this.hasNode(from)) {
          idx = this.outgoingEdges[from].indexOf(to);
          if (idx >= 0) {
            this.outgoingEdges[from].splice(idx, 1);
          }
        }
        if (this.hasNode(to)) {
          idx = this.incomingEdges[to].indexOf(from);
          if (idx >= 0) {
            this.incomingEdges[to].splice(idx, 1);
          }
        }
      },
      clone: function() {
        var source = this;
        var result = new DepGraph2();
        var keys = Object.keys(source.nodes);
        keys.forEach(function(n) {
          result.nodes[n] = source.nodes[n];
          result.outgoingEdges[n] = source.outgoingEdges[n].slice(0);
          result.incomingEdges[n] = source.incomingEdges[n].slice(0);
        });
        return result;
      },
      directDependenciesOf: function(node) {
        if (this.hasNode(node)) {
          return this.outgoingEdges[node].slice(0);
        } else {
          throw new Error("Node does not exist: " + node);
        }
      },
      directDependantsOf: function(node) {
        if (this.hasNode(node)) {
          return this.incomingEdges[node].slice(0);
        } else {
          throw new Error("Node does not exist: " + node);
        }
      },
      dependenciesOf: function(node, leavesOnly) {
        if (this.hasNode(node)) {
          var result = [];
          var DFS = createDFS(this.outgoingEdges, leavesOnly, result, this.circular);
          DFS(node);
          var idx = result.indexOf(node);
          if (idx >= 0) {
            result.splice(idx, 1);
          }
          return result;
        } else {
          throw new Error("Node does not exist: " + node);
        }
      },
      dependantsOf: function(node, leavesOnly) {
        if (this.hasNode(node)) {
          var result = [];
          var DFS = createDFS(this.incomingEdges, leavesOnly, result, this.circular);
          DFS(node);
          var idx = result.indexOf(node);
          if (idx >= 0) {
            result.splice(idx, 1);
          }
          return result;
        } else {
          throw new Error("Node does not exist: " + node);
        }
      },
      overallOrder: function(leavesOnly) {
        var self2 = this;
        var result = [];
        var keys = Object.keys(this.nodes);
        if (keys.length === 0) {
          return result;
        } else {
          if (!this.circular) {
            var CycleDFS = createDFS(this.outgoingEdges, false, [], this.circular);
            keys.forEach(function(n) {
              CycleDFS(n);
            });
          }
          var DFS = createDFS(this.outgoingEdges, leavesOnly, result, this.circular);
          keys.filter(function(node) {
            return self2.incomingEdges[node].length === 0;
          }).forEach(function(n) {
            DFS(n);
          });
          if (this.circular) {
            keys.filter(function(node) {
              return result.indexOf(node) === -1;
            }).forEach(function(n) {
              DFS(n);
            });
          }
          return result;
        }
      },
      entryNodes: function() {
        var self2 = this;
        return Object.keys(this.nodes).filter(function(node) {
          return self2.incomingEdges[node].length === 0;
        });
      }
    };
    DepGraph2.prototype.directDependentsOf = DepGraph2.prototype.directDependantsOf;
    DepGraph2.prototype.dependentsOf = DepGraph2.prototype.dependantsOf;
    var DepGraphCycleError = exports.DepGraphCycleError = function(cyclePath) {
      var message = "Dependency Cycle Found: " + cyclePath.join(" -> ");
      var instance = new Error(message);
      instance.cyclePath = cyclePath;
      Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
      if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, DepGraphCycleError);
      }
      return instance;
    };
    DepGraphCycleError.prototype = Object.create(Error.prototype, {
      constructor: {
        value: Error,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    Object.setPrototypeOf(DepGraphCycleError, Error);
  }
});

// ../../../node_modules/.pnpm/graphql-tag@2.12.5_graphql@15.6.1/node_modules/graphql-tag/lib/graphql-tag.umd.js
var require_graphql_tag_umd = __commonJS({
  "../../../node_modules/.pnpm/graphql-tag@2.12.5_graphql@15.6.1/node_modules/graphql-tag/lib/graphql-tag.umd.js"(exports, module2) {
    init_cjs_shims();
    (function(global2, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports, require_tslib(), require_graphql2()) : typeof define === "function" && define.amd ? define(["exports", "tslib", "graphql"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2["graphql-tag"] = {}, global2.tslib, global2.graphql));
    })(exports, function(exports2, tslib, graphql) {
      "use strict";
      var docCache = new Map();
      var fragmentSourceMap = new Map();
      var printFragmentWarnings = true;
      var experimentalFragmentVariables = false;
      function normalize(string) {
        return string.replace(/[\s,]+/g, " ").trim();
      }
      function cacheKeyFromLoc(loc) {
        return normalize(loc.source.body.substring(loc.start, loc.end));
      }
      function processFragments(ast) {
        var seenKeys = new Set();
        var definitions = [];
        ast.definitions.forEach(function(fragmentDefinition) {
          if (fragmentDefinition.kind === "FragmentDefinition") {
            var fragmentName = fragmentDefinition.name.value;
            var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
            var sourceKeySet = fragmentSourceMap.get(fragmentName);
            if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
              if (printFragmentWarnings) {
                console.warn("Warning: fragment with name " + fragmentName + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
              }
            } else if (!sourceKeySet) {
              fragmentSourceMap.set(fragmentName, sourceKeySet = new Set());
            }
            sourceKeySet.add(sourceKey);
            if (!seenKeys.has(sourceKey)) {
              seenKeys.add(sourceKey);
              definitions.push(fragmentDefinition);
            }
          } else {
            definitions.push(fragmentDefinition);
          }
        });
        return tslib.__assign(tslib.__assign({}, ast), { definitions });
      }
      function stripLoc(doc) {
        var workSet = new Set(doc.definitions);
        workSet.forEach(function(node) {
          if (node.loc)
            delete node.loc;
          Object.keys(node).forEach(function(key) {
            var value = node[key];
            if (value && typeof value === "object") {
              workSet.add(value);
            }
          });
        });
        var loc = doc.loc;
        if (loc) {
          delete loc.startToken;
          delete loc.endToken;
        }
        return doc;
      }
      function parseDocument(source) {
        var cacheKey = normalize(source);
        if (!docCache.has(cacheKey)) {
          var parsed = graphql.parse(source, {
            experimentalFragmentVariables
          });
          if (!parsed || parsed.kind !== "Document") {
            throw new Error("Not a valid GraphQL document.");
          }
          docCache.set(cacheKey, stripLoc(processFragments(parsed)));
        }
        return docCache.get(cacheKey);
      }
      function gql(literals) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        if (typeof literals === "string") {
          literals = [literals];
        }
        var result = literals[0];
        args.forEach(function(arg, i) {
          if (arg && arg.kind === "Document") {
            result += arg.loc.source.body;
          } else {
            result += arg;
          }
          result += literals[i + 1];
        });
        return parseDocument(result);
      }
      function resetCaches() {
        docCache.clear();
        fragmentSourceMap.clear();
      }
      function disableFragmentWarnings() {
        printFragmentWarnings = false;
      }
      function enableExperimentalFragmentVariables() {
        experimentalFragmentVariables = true;
      }
      function disableExperimentalFragmentVariables() {
        experimentalFragmentVariables = false;
      }
      var extras = {
        gql,
        resetCaches,
        disableFragmentWarnings,
        enableExperimentalFragmentVariables,
        disableExperimentalFragmentVariables
      };
      (function(gql_1) {
        gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
      })(gql || (gql = {}));
      gql["default"] = gql;
      var gql$1 = gql;
      exports2.default = gql$1;
      exports2.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;
      exports2.disableFragmentWarnings = disableFragmentWarnings;
      exports2.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
      exports2.gql = gql;
      exports2.resetCaches = resetCaches;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// ../../../node_modules/.pnpm/graphql-tag@2.12.5_graphql@15.6.1/node_modules/graphql-tag/main.js
var require_main = __commonJS({
  "../../../node_modules/.pnpm/graphql-tag@2.12.5_graphql@15.6.1/node_modules/graphql-tag/main.js"(exports, module2) {
    init_cjs_shims();
    module2.exports = require_graphql_tag_umd().gql;
  }
});

// codegen.ts
__export(exports, {
  plugin: () => plugin
});
init_cjs_shims();
var import_graphql5 = __toModule(require_graphql2());

// ../../../node_modules/.pnpm/@graphql-codegen+plugin-helpers@2.2.0_graphql@15.6.1/node_modules/@graphql-codegen/plugin-helpers/index.mjs
init_cjs_shims();
var import_module = __toModule(require("module"));
var import_process = __toModule(require("process"));
var changeCaseAll = __toModule(require_dist22());
var import_graphql2 = __toModule(require_graphql2());
var import_merge = __toModule(require_merge());

// ../../../node_modules/.pnpm/@graphql-tools+utils@8.4.0_graphql@15.6.1/node_modules/@graphql-tools/utils/index.mjs
init_cjs_shims();
var import_graphql = __toModule(require_graphql2());
function isSome(input) {
  return input != null;
}
var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
function inspect(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (typeof value) {
    case "string":
      return JSON.stringify(value);
    case "function":
      return value.name ? `[function ${value.name}]` : "[function]";
    case "object":
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return "null";
  }
  if (previouslySeenValues.includes(value)) {
    return "[Circular]";
  }
  const seenValues = [...previouslySeenValues, value];
  if (isJSONable(value)) {
    const jsonValue = value.toJSON();
    if (jsonValue !== value) {
      return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function isJSONable(value) {
  return typeof value.toJSON === "function";
}
function formatObject(object, seenValues) {
  const entries = Object.entries(object);
  if (entries.length === 0) {
    return "{}";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[" + getObjectTag(object) + "]";
  }
  const properties = entries.map(([key, value]) => key + ": " + formatValue(value, seenValues));
  return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
  if (array.length === 0) {
    return "[]";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[Array]";
  }
  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];
  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }
  if (remaining === 1) {
    items.push("... 1 more item");
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }
  return "[" + items.join(", ") + "]";
}
function getObjectTag(object) {
  const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
  if (tag === "Object" && typeof object.constructor === "function") {
    const name = object.constructor.name;
    if (typeof name === "string" && name !== "") {
      return name;
    }
  }
  return tag;
}
function getDirectivesInExtensions(node, pathToDirectivesInExtensions = ["directives"]) {
  return pathToDirectivesInExtensions.reduce((acc, pathSegment) => acc == null ? acc : acc[pathSegment], node === null || node === void 0 ? void 0 : node.extensions);
}
function astFromType(type) {
  if ((0, import_graphql.isNonNullType)(type)) {
    const innerType = astFromType(type.ofType);
    if (innerType.kind === import_graphql.Kind.NON_NULL_TYPE) {
      throw new Error(`Invalid type node ${inspect(type)}. Inner type of non-null type cannot be a non-null type.`);
    }
    return {
      kind: import_graphql.Kind.NON_NULL_TYPE,
      type: innerType
    };
  } else if ((0, import_graphql.isListType)(type)) {
    return {
      kind: import_graphql.Kind.LIST_TYPE,
      type: astFromType(type.ofType)
    };
  }
  return {
    kind: import_graphql.Kind.NAMED_TYPE,
    name: {
      kind: import_graphql.Kind.NAME,
      value: type.name
    }
  };
}
function astFromValueUntyped(value) {
  if (value === null) {
    return { kind: import_graphql.Kind.NULL };
  }
  if (value === void 0) {
    return null;
  }
  if (Array.isArray(value)) {
    const valuesNodes = [];
    for (const item of value) {
      const itemNode = astFromValueUntyped(item);
      if (itemNode != null) {
        valuesNodes.push(itemNode);
      }
    }
    return { kind: import_graphql.Kind.LIST, values: valuesNodes };
  }
  if (typeof value === "object") {
    const fieldNodes = [];
    for (const fieldName in value) {
      const fieldValue = value[fieldName];
      const ast = astFromValueUntyped(fieldValue);
      if (ast) {
        fieldNodes.push({
          kind: import_graphql.Kind.OBJECT_FIELD,
          name: { kind: import_graphql.Kind.NAME, value: fieldName },
          value: ast
        });
      }
    }
    return { kind: import_graphql.Kind.OBJECT, fields: fieldNodes };
  }
  if (typeof value === "boolean") {
    return { kind: import_graphql.Kind.BOOLEAN, value };
  }
  if (typeof value === "number" && isFinite(value)) {
    const stringNum = String(value);
    return integerStringRegExp.test(stringNum) ? { kind: import_graphql.Kind.INT, value: stringNum } : { kind: import_graphql.Kind.FLOAT, value: stringNum };
  }
  if (typeof value === "string") {
    return { kind: import_graphql.Kind.STRING, value };
  }
  throw new TypeError(`Cannot convert value to AST: ${value}.`);
}
var integerStringRegExp = /^-?(?:0|[1-9][0-9]*)$/;
function memoize1(fn) {
  const memoize1cache = new WeakMap();
  return function memoized(a1) {
    const cachedValue = memoize1cache.get(a1);
    if (cachedValue === void 0) {
      const newValue = fn(a1);
      memoize1cache.set(a1, newValue);
      return newValue;
    }
    return cachedValue;
  };
}
function memoize5(fn) {
  const memoize5Cache = new WeakMap();
  return function memoized(a1, a2, a3, a4, a5) {
    let cache2 = memoize5Cache.get(a1);
    if (!cache2) {
      cache2 = new WeakMap();
      memoize5Cache.set(a1, cache2);
      const cache32 = new WeakMap();
      cache2.set(a2, cache32);
      const cache42 = new WeakMap();
      cache32.set(a3, cache42);
      const cache52 = new WeakMap();
      cache42.set(a4, cache52);
      const newValue = fn(a1, a2, a3, a4, a5);
      cache52.set(a5, newValue);
      return newValue;
    }
    let cache3 = cache2.get(a2);
    if (!cache3) {
      cache3 = new WeakMap();
      cache2.set(a2, cache3);
      const cache42 = new WeakMap();
      cache3.set(a3, cache42);
      const cache52 = new WeakMap();
      cache42.set(a4, cache52);
      const newValue = fn(a1, a2, a3, a4, a5);
      cache52.set(a5, newValue);
      return newValue;
    }
    let cache4 = cache3.get(a3);
    if (!cache4) {
      cache4 = new WeakMap();
      cache3.set(a3, cache4);
      const cache52 = new WeakMap();
      cache4.set(a4, cache52);
      const newValue = fn(a1, a2, a3, a4, a5);
      cache52.set(a5, newValue);
      return newValue;
    }
    let cache5 = cache4.get(a4);
    if (!cache5) {
      cache5 = new WeakMap();
      cache4.set(a4, cache5);
      const newValue = fn(a1, a2, a3, a4, a5);
      cache5.set(a5, newValue);
      return newValue;
    }
    const cachedValue = cache5.get(a5);
    if (cachedValue === void 0) {
      const newValue = fn(a1, a2, a3, a4, a5);
      cache5.set(a5, newValue);
      return newValue;
    }
    return cachedValue;
  };
}
var memoize2of4cache = new WeakMap();
var getRootTypeNames = memoize1(function getRootTypeNames2(schema) {
  const rootTypes = getRootTypes(schema);
  return new Set([...rootTypes].map((type) => type.name));
});
var getRootTypes = memoize1(function getRootTypes2(schema) {
  const rootTypeMap = getRootTypeMap(schema);
  return new Set(rootTypeMap.values());
});
var getRootTypeMap = memoize1(function getRootTypeMap2(schema) {
  const rootTypeMap = new Map();
  const queryType = schema.getQueryType();
  if (queryType) {
    rootTypeMap.set("query", queryType);
  }
  const mutationType = schema.getMutationType();
  if (mutationType) {
    rootTypeMap.set("mutation", mutationType);
  }
  const subscriptionType = schema.getSubscriptionType();
  if (subscriptionType) {
    rootTypeMap.set("subscription", subscriptionType);
  }
  return rootTypeMap;
});
function getDocumentNodeFromSchema(schema, options = {}) {
  const pathToDirectivesInExtensions = options.pathToDirectivesInExtensions;
  const typesMap = schema.getTypeMap();
  const schemaNode = astFromSchema(schema, pathToDirectivesInExtensions);
  const definitions = schemaNode != null ? [schemaNode] : [];
  const directives = schema.getDirectives();
  for (const directive of directives) {
    if ((0, import_graphql.isSpecifiedDirective)(directive)) {
      continue;
    }
    definitions.push(astFromDirective(directive, schema, pathToDirectivesInExtensions));
  }
  for (const typeName in typesMap) {
    const type = typesMap[typeName];
    const isPredefinedScalar = (0, import_graphql.isSpecifiedScalarType)(type);
    const isIntrospection = (0, import_graphql.isIntrospectionType)(type);
    if (isPredefinedScalar || isIntrospection) {
      continue;
    }
    if ((0, import_graphql.isObjectType)(type)) {
      definitions.push(astFromObjectType(type, schema, pathToDirectivesInExtensions));
    } else if ((0, import_graphql.isInterfaceType)(type)) {
      definitions.push(astFromInterfaceType(type, schema, pathToDirectivesInExtensions));
    } else if ((0, import_graphql.isUnionType)(type)) {
      definitions.push(astFromUnionType(type, schema, pathToDirectivesInExtensions));
    } else if ((0, import_graphql.isInputObjectType)(type)) {
      definitions.push(astFromInputObjectType(type, schema, pathToDirectivesInExtensions));
    } else if ((0, import_graphql.isEnumType)(type)) {
      definitions.push(astFromEnumType(type, schema, pathToDirectivesInExtensions));
    } else if ((0, import_graphql.isScalarType)(type)) {
      definitions.push(astFromScalarType(type, schema, pathToDirectivesInExtensions));
    } else {
      throw new Error(`Unknown type ${type}.`);
    }
  }
  return {
    kind: import_graphql.Kind.DOCUMENT,
    definitions
  };
}
function astFromSchema(schema, pathToDirectivesInExtensions) {
  var _a, _b;
  const operationTypeMap = new Map([
    ["query", void 0],
    ["mutation", void 0],
    ["subscription", void 0]
  ]);
  const nodes = [];
  if (schema.astNode != null) {
    nodes.push(schema.astNode);
  }
  if (schema.extensionASTNodes != null) {
    for (const extensionASTNode of schema.extensionASTNodes) {
      nodes.push(extensionASTNode);
    }
  }
  for (const node of nodes) {
    if (node.operationTypes) {
      for (const operationTypeDefinitionNode of node.operationTypes) {
        operationTypeMap.set(operationTypeDefinitionNode.operation, operationTypeDefinitionNode);
      }
    }
  }
  const rootTypeMap = getRootTypeMap(schema);
  for (const [operationTypeNode, operationTypeDefinitionNode] of operationTypeMap) {
    const rootType = rootTypeMap.get(operationTypeNode);
    if (rootType != null) {
      const rootTypeAST = astFromType(rootType);
      if (operationTypeDefinitionNode != null) {
        operationTypeDefinitionNode.type = rootTypeAST;
      } else {
        operationTypeMap.set(operationTypeNode, {
          kind: import_graphql.Kind.OPERATION_TYPE_DEFINITION,
          operation: operationTypeNode,
          type: rootTypeAST
        });
      }
    }
  }
  const operationTypes = [...operationTypeMap.values()].filter(isSome);
  const directives = getDirectiveNodes(schema, schema, pathToDirectivesInExtensions);
  if (!operationTypes.length && !directives.length) {
    return null;
  }
  const schemaNode = {
    kind: operationTypes != null ? import_graphql.Kind.SCHEMA_DEFINITION : import_graphql.Kind.SCHEMA_EXTENSION,
    operationTypes,
    directives
  };
  schemaNode.description = ((_b = (_a = schema.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : schema.description != null) ? {
    kind: import_graphql.Kind.STRING,
    value: schema.description,
    block: true
  } : void 0;
  return schemaNode;
}
function astFromDirective(directive, schema, pathToDirectivesInExtensions) {
  var _a, _b, _c, _d;
  return {
    kind: import_graphql.Kind.DIRECTIVE_DEFINITION,
    description: (_b = (_a = directive.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : directive.description ? {
      kind: import_graphql.Kind.STRING,
      value: directive.description
    } : void 0,
    name: {
      kind: import_graphql.Kind.NAME,
      value: directive.name
    },
    arguments: (_c = directive.args) === null || _c === void 0 ? void 0 : _c.map((arg) => astFromArg(arg, schema, pathToDirectivesInExtensions)),
    repeatable: directive.isRepeatable,
    locations: ((_d = directive.locations) === null || _d === void 0 ? void 0 : _d.map((location) => ({
      kind: import_graphql.Kind.NAME,
      value: location
    }))) || []
  };
}
function getDirectiveNodes(entity, schema, pathToDirectivesInExtensions) {
  const directivesInExtensions = getDirectivesInExtensions(entity, pathToDirectivesInExtensions);
  let nodes = [];
  if (entity.astNode != null) {
    nodes.push(entity.astNode);
  }
  if ("extensionASTNodes" in entity && entity.extensionASTNodes != null) {
    nodes = nodes.concat(entity.extensionASTNodes);
  }
  let directives;
  if (directivesInExtensions != null) {
    directives = makeDirectiveNodes(schema, directivesInExtensions);
  } else {
    directives = [];
    for (const node of nodes) {
      if (node.directives) {
        directives.push(...node.directives);
      }
    }
  }
  return directives;
}
function getDeprecatableDirectiveNodes(entity, schema, pathToDirectivesInExtensions) {
  var _a, _b;
  let directiveNodesBesidesDeprecated = [];
  let deprecatedDirectiveNode = null;
  const directivesInExtensions = getDirectivesInExtensions(entity, pathToDirectivesInExtensions);
  let directives;
  if (directivesInExtensions != null) {
    directives = makeDirectiveNodes(schema, directivesInExtensions);
  } else {
    directives = (_a = entity.astNode) === null || _a === void 0 ? void 0 : _a.directives;
  }
  if (directives != null) {
    directiveNodesBesidesDeprecated = directives.filter((directive) => directive.name.value !== "deprecated");
    if (entity.deprecationReason != null) {
      deprecatedDirectiveNode = (_b = directives.filter((directive) => directive.name.value === "deprecated")) === null || _b === void 0 ? void 0 : _b[0];
    }
  }
  if (entity.deprecationReason != null && deprecatedDirectiveNode == null) {
    deprecatedDirectiveNode = makeDeprecatedDirective(entity.deprecationReason);
  }
  return deprecatedDirectiveNode == null ? directiveNodesBesidesDeprecated : [deprecatedDirectiveNode].concat(directiveNodesBesidesDeprecated);
}
function astFromArg(arg, schema, pathToDirectivesInExtensions) {
  var _a, _b, _c;
  return {
    kind: import_graphql.Kind.INPUT_VALUE_DEFINITION,
    description: (_b = (_a = arg.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : arg.description ? {
      kind: import_graphql.Kind.STRING,
      value: arg.description,
      block: true
    } : void 0,
    name: {
      kind: import_graphql.Kind.NAME,
      value: arg.name
    },
    type: astFromType(arg.type),
    defaultValue: arg.defaultValue !== void 0 ? (_c = (0, import_graphql.astFromValue)(arg.defaultValue, arg.type)) !== null && _c !== void 0 ? _c : void 0 : void 0,
    directives: getDeprecatableDirectiveNodes(arg, schema, pathToDirectivesInExtensions)
  };
}
function astFromObjectType(type, schema, pathToDirectivesInExtensions) {
  var _a, _b;
  return {
    kind: import_graphql.Kind.OBJECT_TYPE_DEFINITION,
    description: (_b = (_a = type.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : type.description ? {
      kind: import_graphql.Kind.STRING,
      value: type.description,
      block: true
    } : void 0,
    name: {
      kind: import_graphql.Kind.NAME,
      value: type.name
    },
    fields: Object.values(type.getFields()).map((field) => astFromField(field, schema, pathToDirectivesInExtensions)),
    interfaces: Object.values(type.getInterfaces()).map((iFace) => astFromType(iFace)),
    directives: getDirectiveNodes(type, schema, pathToDirectivesInExtensions)
  };
}
function astFromInterfaceType(type, schema, pathToDirectivesInExtensions) {
  var _a, _b;
  const node = {
    kind: import_graphql.Kind.INTERFACE_TYPE_DEFINITION,
    description: (_b = (_a = type.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : type.description ? {
      kind: import_graphql.Kind.STRING,
      value: type.description,
      block: true
    } : void 0,
    name: {
      kind: import_graphql.Kind.NAME,
      value: type.name
    },
    fields: Object.values(type.getFields()).map((field) => astFromField(field, schema, pathToDirectivesInExtensions)),
    directives: getDirectiveNodes(type, schema, pathToDirectivesInExtensions)
  };
  if ("getInterfaces" in type) {
    node.interfaces = Object.values(type.getInterfaces()).map((iFace) => astFromType(iFace));
  }
  return node;
}
function astFromUnionType(type, schema, pathToDirectivesInExtensions) {
  var _a, _b;
  return {
    kind: import_graphql.Kind.UNION_TYPE_DEFINITION,
    description: (_b = (_a = type.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : type.description ? {
      kind: import_graphql.Kind.STRING,
      value: type.description,
      block: true
    } : void 0,
    name: {
      kind: import_graphql.Kind.NAME,
      value: type.name
    },
    directives: getDirectiveNodes(type, schema, pathToDirectivesInExtensions),
    types: type.getTypes().map((type2) => astFromType(type2))
  };
}
function astFromInputObjectType(type, schema, pathToDirectivesInExtensions) {
  var _a, _b;
  return {
    kind: import_graphql.Kind.INPUT_OBJECT_TYPE_DEFINITION,
    description: (_b = (_a = type.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : type.description ? {
      kind: import_graphql.Kind.STRING,
      value: type.description,
      block: true
    } : void 0,
    name: {
      kind: import_graphql.Kind.NAME,
      value: type.name
    },
    fields: Object.values(type.getFields()).map((field) => astFromInputField(field, schema, pathToDirectivesInExtensions)),
    directives: getDirectiveNodes(type, schema, pathToDirectivesInExtensions)
  };
}
function astFromEnumType(type, schema, pathToDirectivesInExtensions) {
  var _a, _b;
  return {
    kind: import_graphql.Kind.ENUM_TYPE_DEFINITION,
    description: (_b = (_a = type.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : type.description ? {
      kind: import_graphql.Kind.STRING,
      value: type.description,
      block: true
    } : void 0,
    name: {
      kind: import_graphql.Kind.NAME,
      value: type.name
    },
    values: Object.values(type.getValues()).map((value) => astFromEnumValue(value, schema, pathToDirectivesInExtensions)),
    directives: getDirectiveNodes(type, schema, pathToDirectivesInExtensions)
  };
}
function astFromScalarType(type, schema, pathToDirectivesInExtensions) {
  var _a, _b, _c;
  const directivesInExtensions = getDirectivesInExtensions(type, pathToDirectivesInExtensions);
  const directives = directivesInExtensions ? makeDirectiveNodes(schema, directivesInExtensions) : ((_a = type.astNode) === null || _a === void 0 ? void 0 : _a.directives) || [];
  if (type["specifiedByUrl"] && !directives.some((directiveNode) => directiveNode.name.value === "specifiedBy")) {
    const specifiedByArgs = {
      url: type["specifiedByUrl"]
    };
    directives.push(makeDirectiveNode("specifiedBy", specifiedByArgs));
  }
  return {
    kind: import_graphql.Kind.SCALAR_TYPE_DEFINITION,
    description: (_c = (_b = type.astNode) === null || _b === void 0 ? void 0 : _b.description) !== null && _c !== void 0 ? _c : type.description ? {
      kind: import_graphql.Kind.STRING,
      value: type.description,
      block: true
    } : void 0,
    name: {
      kind: import_graphql.Kind.NAME,
      value: type.name
    },
    directives
  };
}
function astFromField(field, schema, pathToDirectivesInExtensions) {
  var _a, _b;
  return {
    kind: import_graphql.Kind.FIELD_DEFINITION,
    description: (_b = (_a = field.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : field.description ? {
      kind: import_graphql.Kind.STRING,
      value: field.description,
      block: true
    } : void 0,
    name: {
      kind: import_graphql.Kind.NAME,
      value: field.name
    },
    arguments: field.args.map((arg) => astFromArg(arg, schema, pathToDirectivesInExtensions)),
    type: astFromType(field.type),
    directives: getDeprecatableDirectiveNodes(field, schema, pathToDirectivesInExtensions)
  };
}
function astFromInputField(field, schema, pathToDirectivesInExtensions) {
  var _a, _b, _c;
  return {
    kind: import_graphql.Kind.INPUT_VALUE_DEFINITION,
    description: (_b = (_a = field.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : field.description ? {
      kind: import_graphql.Kind.STRING,
      value: field.description,
      block: true
    } : void 0,
    name: {
      kind: import_graphql.Kind.NAME,
      value: field.name
    },
    type: astFromType(field.type),
    directives: getDeprecatableDirectiveNodes(field, schema, pathToDirectivesInExtensions),
    defaultValue: (_c = (0, import_graphql.astFromValue)(field.defaultValue, field.type)) !== null && _c !== void 0 ? _c : void 0
  };
}
function astFromEnumValue(value, schema, pathToDirectivesInExtensions) {
  var _a, _b;
  return {
    kind: import_graphql.Kind.ENUM_VALUE_DEFINITION,
    description: (_b = (_a = value.astNode) === null || _a === void 0 ? void 0 : _a.description) !== null && _b !== void 0 ? _b : value.description ? {
      kind: import_graphql.Kind.STRING,
      value: value.description,
      block: true
    } : void 0,
    name: {
      kind: import_graphql.Kind.NAME,
      value: value.name
    },
    directives: getDirectiveNodes(value, schema, pathToDirectivesInExtensions)
  };
}
function makeDeprecatedDirective(deprecationReason) {
  return makeDirectiveNode("deprecated", { reason: deprecationReason }, import_graphql.GraphQLDeprecatedDirective);
}
function makeDirectiveNode(name, args, directive) {
  const directiveArguments = [];
  if (directive != null) {
    for (const arg of directive.args) {
      const argName = arg.name;
      const argValue = args[argName];
      if (argValue !== void 0) {
        const value = (0, import_graphql.astFromValue)(argValue, arg.type);
        if (value) {
          directiveArguments.push({
            kind: import_graphql.Kind.ARGUMENT,
            name: {
              kind: import_graphql.Kind.NAME,
              value: argName
            },
            value
          });
        }
      }
    }
  } else {
    for (const argName in args) {
      const argValue = args[argName];
      const value = astFromValueUntyped(argValue);
      if (value) {
        directiveArguments.push({
          kind: import_graphql.Kind.ARGUMENT,
          name: {
            kind: import_graphql.Kind.NAME,
            value: argName
          },
          value
        });
      }
    }
  }
  return {
    kind: import_graphql.Kind.DIRECTIVE,
    name: {
      kind: import_graphql.Kind.NAME,
      value: name
    },
    arguments: directiveArguments
  };
}
function makeDirectiveNodes(schema, directiveValues) {
  const directiveNodes = [];
  for (const directiveName in directiveValues) {
    const arrayOrSingleValue = directiveValues[directiveName];
    const directive = schema === null || schema === void 0 ? void 0 : schema.getDirective(directiveName);
    if (Array.isArray(arrayOrSingleValue)) {
      for (const value of arrayOrSingleValue) {
        directiveNodes.push(makeDirectiveNode(directiveName, value, directive));
      }
    } else {
      directiveNodes.push(makeDirectiveNode(directiveName, arrayOrSingleValue, directive));
    }
  }
  return directiveNodes;
}
var AggregateErrorImpl = globalThis.AggregateError;
if (typeof AggregateErrorImpl === "undefined") {
  class AggregateErrorClass extends Error {
    constructor(errors, message = "") {
      super(message);
      this.errors = errors;
      this.name = "AggregateError";
      Error.captureStackTrace(this, AggregateErrorClass);
    }
  }
  AggregateErrorImpl = function(errors, message) {
    return new AggregateErrorClass(errors, message);
  };
}
var MAX_LINE_LENGTH = 80;
var commentsRegistry = {};
function printComment(comment) {
  return "\n# " + comment.replace(/\n/g, "\n# ");
}
function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter((x) => x).join(separator || "") : "";
}
function hasMultilineItems(maybeArray) {
  var _a;
  return (_a = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str) => str.includes("\n"))) !== null && _a !== void 0 ? _a : false;
}
function addDescription(cb) {
  return (node, _key, _parent, path, ancestors) => {
    var _a;
    const keys = [];
    const parent = path.reduce((prev, key2) => {
      if (["fields", "arguments", "values"].includes(key2) && prev.name) {
        keys.push(prev.name.value);
      }
      return prev[key2];
    }, ancestors[0]);
    const key = [...keys, (_a = parent === null || parent === void 0 ? void 0 : parent.name) === null || _a === void 0 ? void 0 : _a.value].filter(Boolean).join(".");
    const items = [];
    if (node.kind.includes("Definition") && commentsRegistry[key]) {
      items.push(...commentsRegistry[key]);
    }
    return join([...items.map(printComment), node.description, cb(node, _key, _parent, path, ancestors)], "\n");
  };
}
function indent(maybeString) {
  return maybeString && `  ${maybeString.replace(/\n/g, "\n  ")}`;
}
function block(array) {
  return array && array.length !== 0 ? `{
${indent(join(array, "\n"))}
}` : "";
}
function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || "") : "";
}
function printBlockString(value, isDescription = false) {
  const escaped = value.replace(/"""/g, '\\"""');
  return (value[0] === " " || value[0] === "	") && value.indexOf("\n") === -1 ? `"""${escaped.replace(/"$/, '"\n')}"""` : `"""
${isDescription ? escaped : indent(escaped)}
"""`;
}
var printDocASTReducer = {
  Name: { leave: (node) => node.value },
  Variable: { leave: (node) => "$" + node.name },
  Document: {
    leave: (node) => join(node.definitions, "\n\n")
  },
  OperationDefinition: {
    leave: (node) => {
      const varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
      const prefix = join([node.operation, join([node.name, varDefs]), join(node.directives, " ")], " ");
      return prefix + " " + node.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable, type, defaultValue, directives }) => variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "))
  },
  SelectionSet: { leave: ({ selections }) => block(selections) },
  Field: {
    leave({ alias, name, arguments: args, directives, selectionSet }) {
      const prefix = wrap("", alias, ": ") + name;
      let argsLine = prefix + wrap("(", join(args, ", "), ")");
      if (argsLine.length > MAX_LINE_LENGTH) {
        argsLine = prefix + wrap("(\n", indent(join(args, "\n")), "\n)");
      }
      return join([argsLine, join(directives, " "), selectionSet], " ");
    }
  },
  Argument: { leave: ({ name, value }) => name + ": " + value },
  FragmentSpread: {
    leave: ({ name, directives }) => "..." + name + wrap(" ", join(directives, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition, directives, selectionSet }) => join(["...", wrap("on ", typeCondition), join(directives, " "), selectionSet], " ")
  },
  FragmentDefinition: {
    leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet }) => `fragment ${name}${wrap("(", join(variableDefinitions, ", "), ")")} on ${typeCondition} ${wrap("", join(directives, " "), " ")}` + selectionSet
  },
  IntValue: { leave: ({ value }) => value },
  FloatValue: { leave: ({ value }) => value },
  StringValue: {
    leave: ({ value, block: isBlockString }) => {
      if (isBlockString) {
        return printBlockString(value);
      }
      return JSON.stringify(value);
    }
  },
  BooleanValue: { leave: ({ value }) => value ? "true" : "false" },
  NullValue: { leave: () => "null" },
  EnumValue: { leave: ({ value }) => value },
  ListValue: { leave: ({ values }) => "[" + join(values, ", ") + "]" },
  ObjectValue: { leave: ({ fields }) => "{" + join(fields, ", ") + "}" },
  ObjectField: { leave: ({ name, value }) => name + ": " + value },
  Directive: {
    leave: ({ name, arguments: args }) => "@" + name + wrap("(", join(args, ", "), ")")
  },
  NamedType: { leave: ({ name }) => name },
  ListType: { leave: ({ type }) => "[" + type + "]" },
  NonNullType: { leave: ({ type }) => type + "!" },
  SchemaDefinition: {
    leave: ({ directives, operationTypes }) => join(["schema", join(directives, " "), block(operationTypes)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation, type }) => operation + ": " + type
  },
  ScalarTypeDefinition: {
    leave: ({ name, directives }) => join(["scalar", name, join(directives, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ name, interfaces, directives, fields }) => join(["type", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ")
  },
  FieldDefinition: {
    leave: ({ name, arguments: args, type, directives }) => name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "))
  },
  InputValueDefinition: {
    leave: ({ name, type, defaultValue, directives }) => join([name + ": " + type, wrap("= ", defaultValue), join(directives, " ")], " ")
  },
  InterfaceTypeDefinition: {
    leave: ({ name, interfaces, directives, fields }) => join(["interface", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ")
  },
  UnionTypeDefinition: {
    leave: ({ name, directives, types }) => join(["union", name, join(directives, " "), wrap("= ", join(types, " | "))], " ")
  },
  EnumTypeDefinition: {
    leave: ({ name, directives, values }) => join(["enum", name, join(directives, " "), block(values)], " ")
  },
  EnumValueDefinition: {
    leave: ({ name, directives }) => join([name, join(directives, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ name, directives, fields }) => join(["input", name, join(directives, " "), block(fields)], " ")
  },
  DirectiveDefinition: {
    leave: ({ name, arguments: args, repeatable, locations }) => "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ")
  },
  SchemaExtension: {
    leave: ({ directives, operationTypes }) => join(["extend schema", join(directives, " "), block(operationTypes)], " ")
  },
  ScalarTypeExtension: {
    leave: ({ name, directives }) => join(["extend scalar", name, join(directives, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join(["extend type", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ")
  },
  InterfaceTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join(["extend interface", name, wrap("implements ", join(interfaces, " & ")), join(directives, " "), block(fields)], " ")
  },
  UnionTypeExtension: {
    leave: ({ name, directives, types }) => join(["extend union", name, join(directives, " "), wrap("= ", join(types, " | "))], " ")
  },
  EnumTypeExtension: {
    leave: ({ name, directives, values }) => join(["extend enum", name, join(directives, " "), block(values)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name, directives, fields }) => join(["extend input", name, join(directives, " "), block(fields)], " ")
  }
};
var printDocASTReducerWithComments = Object.keys(printDocASTReducer).reduce((prev, key) => __spreadProps(__spreadValues({}, prev), {
  [key]: {
    leave: addDescription(printDocASTReducer[key].leave)
  }
}), {});
var fieldTypeMap = new Map();
var MapperKind;
(function(MapperKind3) {
  MapperKind3["TYPE"] = "MapperKind.TYPE";
  MapperKind3["SCALAR_TYPE"] = "MapperKind.SCALAR_TYPE";
  MapperKind3["ENUM_TYPE"] = "MapperKind.ENUM_TYPE";
  MapperKind3["COMPOSITE_TYPE"] = "MapperKind.COMPOSITE_TYPE";
  MapperKind3["OBJECT_TYPE"] = "MapperKind.OBJECT_TYPE";
  MapperKind3["INPUT_OBJECT_TYPE"] = "MapperKind.INPUT_OBJECT_TYPE";
  MapperKind3["ABSTRACT_TYPE"] = "MapperKind.ABSTRACT_TYPE";
  MapperKind3["UNION_TYPE"] = "MapperKind.UNION_TYPE";
  MapperKind3["INTERFACE_TYPE"] = "MapperKind.INTERFACE_TYPE";
  MapperKind3["ROOT_OBJECT"] = "MapperKind.ROOT_OBJECT";
  MapperKind3["QUERY"] = "MapperKind.QUERY";
  MapperKind3["MUTATION"] = "MapperKind.MUTATION";
  MapperKind3["SUBSCRIPTION"] = "MapperKind.SUBSCRIPTION";
  MapperKind3["DIRECTIVE"] = "MapperKind.DIRECTIVE";
  MapperKind3["FIELD"] = "MapperKind.FIELD";
  MapperKind3["COMPOSITE_FIELD"] = "MapperKind.COMPOSITE_FIELD";
  MapperKind3["OBJECT_FIELD"] = "MapperKind.OBJECT_FIELD";
  MapperKind3["ROOT_FIELD"] = "MapperKind.ROOT_FIELD";
  MapperKind3["QUERY_ROOT_FIELD"] = "MapperKind.QUERY_ROOT_FIELD";
  MapperKind3["MUTATION_ROOT_FIELD"] = "MapperKind.MUTATION_ROOT_FIELD";
  MapperKind3["SUBSCRIPTION_ROOT_FIELD"] = "MapperKind.SUBSCRIPTION_ROOT_FIELD";
  MapperKind3["INTERFACE_FIELD"] = "MapperKind.INTERFACE_FIELD";
  MapperKind3["INPUT_OBJECT_FIELD"] = "MapperKind.INPUT_OBJECT_FIELD";
  MapperKind3["ARGUMENT"] = "MapperKind.ARGUMENT";
  MapperKind3["ENUM_VALUE"] = "MapperKind.ENUM_VALUE";
})(MapperKind || (MapperKind = {}));
function collectFields(schema, fragments, variableValues, runtimeType, selectionSet, fields, visitedFragmentNames) {
  for (const selection of selectionSet.selections) {
    switch (selection.kind) {
      case import_graphql.Kind.FIELD: {
        if (!shouldIncludeNode(variableValues, selection)) {
          continue;
        }
        const name = getFieldEntryKey(selection);
        const fieldList = fields.get(name);
        if (fieldList !== void 0) {
          fieldList.push(selection);
        } else {
          fields.set(name, [selection]);
        }
        break;
      }
      case import_graphql.Kind.INLINE_FRAGMENT: {
        if (!shouldIncludeNode(variableValues, selection) || !doesFragmentConditionMatch(schema, selection, runtimeType)) {
          continue;
        }
        collectFields(schema, fragments, variableValues, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
        break;
      }
      case import_graphql.Kind.FRAGMENT_SPREAD: {
        const fragName = selection.name.value;
        if (visitedFragmentNames.has(fragName) || !shouldIncludeNode(variableValues, selection)) {
          continue;
        }
        visitedFragmentNames.add(fragName);
        const fragment = fragments[fragName];
        if (!fragment || !doesFragmentConditionMatch(schema, fragment, runtimeType)) {
          continue;
        }
        collectFields(schema, fragments, variableValues, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
        break;
      }
    }
  }
  return fields;
}
function shouldIncludeNode(variableValues, node) {
  const skip = (0, import_graphql.getDirectiveValues)(import_graphql.GraphQLSkipDirective, node, variableValues);
  if ((skip === null || skip === void 0 ? void 0 : skip["if"]) === true) {
    return false;
  }
  const include = (0, import_graphql.getDirectiveValues)(import_graphql.GraphQLIncludeDirective, node, variableValues);
  if ((include === null || include === void 0 ? void 0 : include["if"]) === false) {
    return false;
  }
  return true;
}
function doesFragmentConditionMatch(schema, fragment, type) {
  const typeConditionNode = fragment.typeCondition;
  if (!typeConditionNode) {
    return true;
  }
  const conditionalType = (0, import_graphql.typeFromAST)(schema, typeConditionNode);
  if (conditionalType === type) {
    return true;
  }
  if ((0, import_graphql.isAbstractType)(conditionalType)) {
    const possibleTypes = schema.getPossibleTypes(conditionalType);
    return possibleTypes.includes(type);
  }
  return false;
}
function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}
var collectSubFields = memoize5(function collectSubFields2(schema, fragments, variableValues, type, fieldNodes) {
  const subFieldNodes = new Map();
  const visitedFragmentNames = new Set();
  for (const fieldNode of fieldNodes) {
    if (fieldNode.selectionSet) {
      collectFields(schema, fragments, variableValues, type, fieldNode.selectionSet, subFieldNodes, visitedFragmentNames);
    }
  }
  return subFieldNodes;
});

// ../../../node_modules/.pnpm/@graphql-codegen+plugin-helpers@2.2.0_graphql@15.6.1/node_modules/@graphql-codegen/plugin-helpers/index.mjs
function resolveExternalModuleAndFn(pointer) {
  if (typeof pointer === "function") {
    return pointer;
  }
  let [moduleName, functionName] = pointer.split("#");
  if (moduleName === "change-case") {
    moduleName = "change-case-all";
  }
  let loadedModule;
  if (moduleName === "change-case-all") {
    loadedModule = changeCaseAll;
  } else {
    const cwdRequire = (0, import_module.createRequire)((0, import_process.cwd)() + "/index.js");
    loadedModule = cwdRequire(moduleName);
    if (!(functionName in loadedModule) && typeof loadedModule !== "function") {
      throw new Error(`${functionName} couldn't be found in module ${moduleName}!`);
    }
  }
  return loadedModule[functionName] || loadedModule;
}
var federationSpec = (0, import_graphql2.parse)(`
  scalar _FieldSet

  directive @external on FIELD_DEFINITION
  directive @requires(fields: _FieldSet!) on FIELD_DEFINITION
  directive @provides(fields: _FieldSet!) on FIELD_DEFINITION
  directive @key(fields: _FieldSet!) on OBJECT | INTERFACE
`);
var getCachedDocumentNodeFromSchema = memoize1(getDocumentNodeFromSchema);

// ../../../node_modules/.pnpm/@graphql-codegen+visitor-plugin-common@2.4.0_graphql@15.6.1/node_modules/@graphql-codegen/visitor-plugin-common/index.mjs
init_cjs_shims();
var import_graphql4 = __toModule(require_graphql2());
var import_change_case_all = __toModule(require_dist22());
var import_path = __toModule(require("path"));
var import_parse_filepath = __toModule(require_parse_filepath());
var import_auto_bind = __toModule(require_auto_bind());
var import_dependency_graph = __toModule(require_dep_graph());
var import_graphql_tag = __toModule(require_main());

// ../../../node_modules/.pnpm/@graphql-tools+optimize@1.1.0_graphql@15.6.1/node_modules/@graphql-tools/optimize/index.mjs
init_cjs_shims();
var import_graphql3 = __toModule(require_graphql2());
var removeDescriptions = (input) => {
  function transformNode(node) {
    if (node.description) {
      node.description = void 0;
    }
    return node;
  }
  return (0, import_graphql3.visit)(input, {
    ScalarTypeDefinition: transformNode,
    ObjectTypeDefinition: transformNode,
    InterfaceTypeDefinition: transformNode,
    UnionTypeDefinition: transformNode,
    EnumTypeDefinition: transformNode,
    EnumValueDefinition: transformNode,
    InputObjectTypeDefinition: transformNode,
    InputValueDefinition: transformNode,
    FieldDefinition: transformNode
  });
};
var removeEmptyNodes = (input) => {
  function transformNode(node) {
    let resultNode = node;
    if (resultNode.directives && Array.isArray(resultNode.directives) && resultNode.directives.length === 0) {
      const _a = resultNode, { directives } = _a, rest = __objRest(_a, ["directives"]);
      resultNode = rest;
    }
    if (resultNode.arguments && Array.isArray(resultNode.arguments) && resultNode.arguments.length === 0) {
      const _b = resultNode, { arguments: args } = _b, rest = __objRest(_b, ["arguments"]);
      resultNode = rest;
    }
    if (resultNode.variableDefinitions && Array.isArray(resultNode.variableDefinitions) && resultNode.variableDefinitions.length === 0) {
      const _c = resultNode, { variableDefinitions } = _c, rest = __objRest(_c, ["variableDefinitions"]);
      resultNode = rest;
    }
    return resultNode;
  }
  return (0, import_graphql3.visit)(input, {
    FragmentDefinition: transformNode,
    OperationDefinition: transformNode,
    VariableDefinition: transformNode,
    Field: transformNode,
    FragmentSpread: transformNode,
    InlineFragment: transformNode,
    Name: transformNode,
    Directive: transformNode
  });
};
var removeLoc = (input) => {
  function transformNode(node) {
    if (node.loc && typeof node.loc === "object") {
      const _a = node, { loc } = _a, rest = __objRest(_a, ["loc"]);
      return rest;
    }
    return node;
  }
  return (0, import_graphql3.visit)(input, { enter: transformNode });
};
var DEFAULT_OPTIMIZERS = [removeDescriptions, removeEmptyNodes, removeLoc];
function optimizeDocumentNode(node, optimizers = DEFAULT_OPTIMIZERS) {
  let resultNode = node;
  for (const optimizer of optimizers) {
    if (typeof optimizer !== "function") {
      throw new Error(`Optimizer provided for "optimizeDocumentNode" must be a function!`);
    }
    const result = optimizer(resultNode);
    if (!result) {
      throw new Error(`Optimizer provided for "optimizeDocumentNode" returned empty value instead of modified "DocumentNode"!`);
    }
    resultNode = result;
  }
  return resultNode;
}

// ../../../node_modules/.pnpm/@graphql-codegen+visitor-plugin-common@2.4.0_graphql@15.6.1/node_modules/@graphql-codegen/visitor-plugin-common/index.mjs
var DEFAULT_SCALARS = {
  ID: "string",
  String: "string",
  Boolean: "boolean",
  Int: "number",
  Float: "number"
};
var MapperKind2;
(function(MapperKind3) {
  MapperKind3[MapperKind3["Namespace"] = 0] = "Namespace";
  MapperKind3[MapperKind3["Default"] = 1] = "Default";
  MapperKind3[MapperKind3["Regular"] = 2] = "Regular";
})(MapperKind2 || (MapperKind2 = {}));
function prepareLegacy(mapper) {
  const items = mapper.split("#");
  const isNamespace = items.length === 3;
  const isDefault = items[1].trim() === "default" || items[1].startsWith("default ");
  const hasAlias = items[1].includes(" as ");
  return {
    items,
    isDefault,
    isNamespace,
    hasAlias
  };
}
function prepare(mapper) {
  const [source, path] = mapper.split("#");
  const isNamespace = path.includes(".");
  const isDefault = path.trim() === "default" || path.startsWith("default ");
  const hasAlias = path.includes(" as ");
  return {
    items: isNamespace ? [source, ...path.split(".")] : [source, path],
    isDefault,
    isNamespace,
    hasAlias
  };
}
function isLegacyMode(mapper) {
  return mapper.split("#").length === 3;
}
function parseMapper(mapper, gqlTypeName = null, suffix) {
  if (isExternalMapper(mapper)) {
    let handleAlias = function(isDefault2 = false) {
      const [importedType, aliasType] = items[1].split(/\s+as\s+/);
      const type2 = maybeSuffix(aliasType);
      return {
        importElement: isDefault2 ? type2 : `${importedType} as ${type2}`,
        type: type2
      };
    }, maybeSuffix = function(type2) {
      if (suffix) {
        return addSuffix(type2, suffix);
      }
      return type2;
    }, handle = function() {
      switch (mapperKind) {
        case MapperKind2.Namespace: {
          const [, ns, identifier] = items;
          return {
            type: `${ns}.${identifier}`,
            importElement: ns
          };
        }
        case MapperKind2.Default: {
          if (hasAlias) {
            return handleAlias(true);
          }
          const type2 = maybeSuffix(`${gqlTypeName}`);
          return {
            importElement: type2,
            type: type2
          };
        }
        case MapperKind2.Regular: {
          if (hasAlias) {
            return handleAlias();
          }
          const identifier = items[1];
          const type2 = maybeSuffix(identifier);
          return {
            type: type2,
            importElement: suffix ? `${identifier} as ${type2}` : type2
          };
        }
      }
    };
    const { isNamespace, isDefault, hasAlias, items } = isLegacyMode(mapper) ? prepareLegacy(mapper) : prepare(mapper);
    const mapperKind = isNamespace ? MapperKind2.Namespace : isDefault ? MapperKind2.Default : MapperKind2.Regular;
    const { type, importElement } = handle();
    return {
      default: isDefault,
      isExternal: true,
      source: items[0],
      type,
      import: importElement.replace(/<(.*?)>/g, "")
    };
  }
  return {
    isExternal: false,
    type: mapper
  };
}
function addSuffix(element, suffix) {
  const generic = element.indexOf("<");
  if (generic === -1) {
    return `${element}${suffix}`;
  }
  return `${element.slice(0, generic)}${suffix}${element.slice(generic)}`;
}
function isExternalMapper(value) {
  return value.includes("#");
}
var getConfigValue = (value, defaultValue) => {
  if (value === null || value === void 0) {
    return defaultValue;
  }
  return value;
};
function convertNameParts(str, func, removeUnderscore = false) {
  if (removeUnderscore) {
    return func(str);
  }
  return str.split("_").map((s) => func(s)).join("_");
}
function buildScalarsFromConfig(schema, config, defaultScalarsMapping = DEFAULT_SCALARS, defaultScalarType = "any") {
  return buildScalars(schema, config.scalars, defaultScalarsMapping, config.strictScalars ? null : config.defaultScalarType || defaultScalarType);
}
function buildScalars(schema, scalarsMapping, defaultScalarsMapping = DEFAULT_SCALARS, defaultScalarType = "any") {
  const result = {};
  Object.keys(defaultScalarsMapping).forEach((name) => {
    result[name] = parseMapper(defaultScalarsMapping[name]);
  });
  if (schema) {
    const typeMap = schema.getTypeMap();
    Object.keys(typeMap).map((typeName) => typeMap[typeName]).filter((type) => (0, import_graphql4.isScalarType)(type)).map((scalarType) => {
      var _a;
      const name = scalarType.name;
      if (typeof scalarsMapping === "string") {
        const value = parseMapper(scalarsMapping + "#" + name, name);
        result[name] = value;
      } else if (scalarsMapping && typeof scalarsMapping[name] === "string") {
        const value = parseMapper(scalarsMapping[name], name);
        result[name] = value;
      } else if (scalarsMapping && scalarsMapping[name]) {
        result[name] = {
          isExternal: false,
          type: JSON.stringify(scalarsMapping[name])
        };
      } else if ((_a = scalarType.extensions) === null || _a === void 0 ? void 0 : _a.codegenScalarType) {
        result[name] = {
          isExternal: false,
          type: scalarType.extensions.codegenScalarType
        };
      } else if (!defaultScalarsMapping[name]) {
        if (defaultScalarType === null) {
          throw new Error(`Unknown scalar type ${name}. Please override it using the "scalars" configuration field!`);
        }
        result[name] = {
          isExternal: false,
          type: defaultScalarType
        };
      }
    });
  } else if (scalarsMapping) {
    if (typeof scalarsMapping === "string") {
      throw new Error("Cannot use string scalars mapping when building without a schema");
    }
    Object.keys(scalarsMapping).forEach((name) => {
      if (typeof scalarsMapping[name] === "string") {
        const value = parseMapper(scalarsMapping[name], name);
        result[name] = value;
      } else {
        result[name] = {
          isExternal: false,
          type: JSON.stringify(scalarsMapping[name])
        };
      }
    });
  }
  return result;
}
function getKind(node) {
  if (typeof node === "string") {
    return "typeNames";
  }
  if (["EnumValueDefinition", "EnumValue"].includes(node.kind)) {
    return "enumValues";
  }
  return "typeNames";
}
function getName(node) {
  if (node == null) {
    return void 0;
  }
  if (typeof node === "string") {
    return node;
  }
  switch (node.kind) {
    case "OperationDefinition":
    case "Variable":
    case "Argument":
    case "FragmentSpread":
    case "FragmentDefinition":
    case "ObjectField":
    case "Directive":
    case "NamedType":
    case "ScalarTypeDefinition":
    case "ObjectTypeDefinition":
    case "FieldDefinition":
    case "InputValueDefinition":
    case "InterfaceTypeDefinition":
    case "UnionTypeDefinition":
    case "EnumTypeDefinition":
    case "EnumValueDefinition":
    case "InputObjectTypeDefinition":
    case "DirectiveDefinition": {
      return getName(node.name);
    }
    case "Name": {
      return node.value;
    }
    case "Field": {
      return getName(node.alias || node.name);
    }
    case "VariableDefinition": {
      return getName(node.variable);
    }
  }
  return void 0;
}
function convertFactory(config) {
  function resolveConventionName(type) {
    if (!config.namingConvention) {
      return (str, opts = {}) => {
        return convertNameParts(str, import_change_case_all.pascalCase, getConfigValue((opts || {}).transformUnderscore, false));
      };
    }
    if (typeof config.namingConvention === "string") {
      if (config.namingConvention === "keep") {
        return (str) => str;
      }
      return (str, opts = {}) => {
        return convertNameParts(str, resolveExternalModuleAndFn(config.namingConvention), getConfigValue((opts || {}).transformUnderscore, false));
      };
    }
    if (typeof config.namingConvention === "function") {
      return (str, opts = {}) => {
        return convertNameParts(str, config.namingConvention, getConfigValue((opts || {}).transformUnderscore, false));
      };
    }
    if (typeof config.namingConvention === "object" && config.namingConvention[type] === "keep") {
      return (str) => str;
    }
    if (typeof config.namingConvention === "object") {
      if (!config.namingConvention[type]) {
        return (str, opts = {}) => {
          const transformUnderscore = config.namingConvention.transformUnderscore || (opts || {}).transformUnderscore;
          return convertNameParts(str, import_change_case_all.pascalCase, getConfigValue(transformUnderscore, false));
        };
      }
      return (str, opts = {}) => {
        return convertNameParts(str, resolveExternalModuleAndFn(config.namingConvention[type]), getConfigValue((opts || {}).transformUnderscore, true));
      };
    }
    return config.namingConvention[type];
  }
  return (node, opts) => {
    const prefix = opts && opts.prefix;
    const suffix = opts && opts.suffix;
    const kind = getKind(node);
    const str = [prefix || "", getName(node), suffix || ""].join("");
    return resolveConventionName(kind)(str, opts);
  };
}
function generateFragmentImportStatement(statement, kind) {
  const _a = statement, { importSource: fragmentImportSource } = _a, rest = __objRest(_a, ["importSource"]);
  const { identifiers, path, namespace } = fragmentImportSource;
  const importSource = {
    identifiers: identifiers.filter((fragmentImport) => kind === "both" || kind === fragmentImport.kind).map(({ name }) => name),
    path,
    namespace
  };
  return generateImportStatement(__spreadProps(__spreadValues({
    importSource
  }, rest), {
    typesImport: kind === "type" ? statement.typesImport : false
  }));
}
function generateImportStatement(statement) {
  const { baseDir, importSource, outputPath, typesImport } = statement;
  const importPath = resolveImportPath(baseDir, outputPath, importSource.path);
  const importNames = importSource.identifiers && importSource.identifiers.length ? `{ ${Array.from(new Set(importSource.identifiers)).join(", ")} }` : "*";
  const importAlias = importSource.namespace ? ` as ${importSource.namespace}` : "";
  const importStatement = typesImport ? "import type" : "import";
  return `${importStatement} ${importNames}${importAlias} from '${importPath}';${importAlias ? "\n" : ""}`;
}
function resolveImportPath(baseDir, outputPath, sourcePath) {
  const shouldAbsolute = !sourcePath.startsWith("~");
  if (shouldAbsolute) {
    const absGeneratedFilePath = (0, import_path.resolve)(baseDir, outputPath);
    const absImportFilePath = (0, import_path.resolve)(baseDir, sourcePath);
    return resolveRelativeImport(absGeneratedFilePath, absImportFilePath);
  } else {
    return sourcePath.replace(`~`, "");
  }
}
function resolveRelativeImport(from, to) {
  if (!(0, import_path.isAbsolute)(from)) {
    throw new Error(`Argument 'from' must be an absolute path, '${from}' given.`);
  }
  if (!(0, import_path.isAbsolute)(to)) {
    throw new Error(`Argument 'to' must be an absolute path, '${to}' given.`);
  }
  return fixLocalFilePath(clearExtension((0, import_path.relative)((0, import_path.dirname)(from), to)));
}
function clearExtension(path) {
  const parsedPath = (0, import_parse_filepath.default)(path);
  return (0, import_path.join)(parsedPath.dir, parsedPath.name).replace(/\\/g, "/");
}
function fixLocalFilePath(path) {
  return !path.startsWith("..") ? `./${path}` : path;
}
var BaseVisitor = class {
  constructor(rawConfig, additionalConfig) {
    var _a;
    this._declarationBlockConfig = {};
    this._parsedConfig = __spreadValues({
      convert: convertFactory(rawConfig),
      typesPrefix: rawConfig.typesPrefix || "",
      typesSuffix: rawConfig.typesSuffix || "",
      externalFragments: rawConfig.externalFragments || [],
      fragmentImports: rawConfig.fragmentImports || [],
      addTypename: !rawConfig.skipTypename,
      nonOptionalTypename: !!rawConfig.nonOptionalTypename,
      useTypeImports: !!rawConfig.useTypeImports,
      dedupeFragments: !!rawConfig.dedupeFragments,
      allowEnumStringTypes: !!rawConfig.allowEnumStringTypes,
      inlineFragmentTypes: (_a = rawConfig.inlineFragmentTypes) !== null && _a !== void 0 ? _a : "inline"
    }, additionalConfig || {});
    this.scalars = {};
    Object.keys(this.config.scalars || {}).forEach((key) => {
      this.scalars[key] = this.config.scalars[key].type;
    });
    (0, import_auto_bind.default)(this);
  }
  getVisitorKindContextFromAncestors(ancestors) {
    if (!ancestors) {
      return [];
    }
    return ancestors.map((t) => t.kind).filter(Boolean);
  }
  get config() {
    return this._parsedConfig;
  }
  convertName(node, options) {
    const useTypesPrefix = typeof (options && options.useTypesPrefix) === "boolean" ? options.useTypesPrefix : true;
    const useTypesSuffix = typeof (options && options.useTypesSuffix) === "boolean" ? options.useTypesSuffix : true;
    let convertedName = "";
    if (useTypesPrefix) {
      convertedName += this.config.typesPrefix;
    }
    convertedName += this.config.convert(node, options);
    if (useTypesSuffix) {
      convertedName += this.config.typesSuffix;
    }
    return convertedName;
  }
  getOperationSuffix(node, operationType) {
    const { omitOperationSuffix = false, dedupeOperationSuffix = false } = this.config;
    const operationName = typeof node === "string" ? node : node.name ? node.name.value : "";
    return omitOperationSuffix ? "" : dedupeOperationSuffix && operationName.toLowerCase().endsWith(operationType.toLowerCase()) ? "" : operationType;
  }
  getFragmentSuffix(node) {
    return this.getOperationSuffix(node, "Fragment");
  }
  getFragmentName(node) {
    return this.convertName(node, {
      suffix: this.getFragmentSuffix(node),
      useTypesPrefix: false
    });
  }
  getFragmentVariableName(node) {
    const { omitOperationSuffix = false, dedupeOperationSuffix = false, fragmentVariableSuffix = "FragmentDoc", fragmentVariablePrefix = "" } = this.config;
    const fragmentName = typeof node === "string" ? node : node.name.value;
    const suffix = omitOperationSuffix ? "" : dedupeOperationSuffix && fragmentName.toLowerCase().endsWith("fragment") && fragmentVariableSuffix.toLowerCase().startsWith("fragment") ? fragmentVariableSuffix.substring("fragment".length) : fragmentVariableSuffix;
    return this.convertName(node, {
      prefix: fragmentVariablePrefix,
      suffix,
      useTypesPrefix: false
    });
  }
  getPunctuation(_declarationKind) {
    return "";
  }
};
import_graphql_tag.default.enableExperimentalFragmentVariables();
var DocumentMode;
(function(DocumentMode2) {
  DocumentMode2["graphQLTag"] = "graphQLTag";
  DocumentMode2["documentNode"] = "documentNode";
  DocumentMode2["documentNodeImportFragments"] = "documentNodeImportFragments";
  DocumentMode2["external"] = "external";
  DocumentMode2["string"] = "string";
})(DocumentMode || (DocumentMode = {}));
var EXTENSIONS_TO_REMOVE = [".ts", ".tsx", ".js", ".jsx"];
var ClientSideBaseVisitor = class extends BaseVisitor {
  constructor(_schema, _fragments, rawConfig, additionalConfig, documents) {
    super(rawConfig, __spreadValues({
      scalars: buildScalarsFromConfig(_schema, rawConfig),
      dedupeOperationSuffix: getConfigValue(rawConfig.dedupeOperationSuffix, false),
      optimizeDocumentNode: getConfigValue(rawConfig.optimizeDocumentNode, true),
      omitOperationSuffix: getConfigValue(rawConfig.omitOperationSuffix, false),
      gqlImport: rawConfig.gqlImport || null,
      documentNodeImport: rawConfig.documentNodeImport || null,
      noExport: !!rawConfig.noExport,
      importOperationTypesFrom: getConfigValue(rawConfig.importOperationTypesFrom, null),
      operationResultSuffix: getConfigValue(rawConfig.operationResultSuffix, ""),
      documentVariablePrefix: getConfigValue(rawConfig.documentVariablePrefix, ""),
      documentVariableSuffix: getConfigValue(rawConfig.documentVariableSuffix, "Document"),
      fragmentVariablePrefix: getConfigValue(rawConfig.fragmentVariablePrefix, ""),
      fragmentVariableSuffix: getConfigValue(rawConfig.fragmentVariableSuffix, "FragmentDoc"),
      documentMode: ((rawConfig2) => {
        if (typeof rawConfig2.noGraphQLTag === "boolean") {
          return rawConfig2.noGraphQLTag ? DocumentMode.documentNode : DocumentMode.graphQLTag;
        }
        return getConfigValue(rawConfig2.documentMode, DocumentMode.graphQLTag);
      })(rawConfig),
      importDocumentNodeExternallyFrom: getConfigValue(rawConfig.importDocumentNodeExternallyFrom, ""),
      pureMagicComment: getConfigValue(rawConfig.pureMagicComment, false),
      experimentalFragmentVariables: getConfigValue(rawConfig.experimentalFragmentVariables, false)
    }, additionalConfig));
    this._schema = _schema;
    this._fragments = _fragments;
    this._collectedOperations = [];
    this._documents = [];
    this._additionalImports = [];
    this._imports = new Set();
    this._documents = documents;
    (0, import_auto_bind.default)(this);
  }
  _extractFragments(document2, withNested = false) {
    if (!document2) {
      return [];
    }
    const names = new Set();
    (0, import_graphql4.visit)(document2, {
      enter: {
        FragmentSpread: (node) => {
          names.add(node.name.value);
          if (withNested) {
            const foundFragment = this._fragments.find((f) => f.name === node.name.value);
            if (foundFragment) {
              const childItems = this._extractFragments(foundFragment.node, true);
              if (childItems && childItems.length > 0) {
                for (const item of childItems) {
                  names.add(item);
                }
              }
            }
          }
        }
      }
    });
    return Array.from(names);
  }
  _transformFragments(document2) {
    const includeNestedFragments = this.config.documentMode === DocumentMode.documentNode || this.config.dedupeFragments && document2.kind === "OperationDefinition";
    return this._extractFragments(document2, includeNestedFragments).map((document3) => this.getFragmentVariableName(document3));
  }
  _includeFragments(fragments, nodeKind) {
    if (fragments && fragments.length > 0) {
      if (this.config.documentMode === DocumentMode.documentNode) {
        return this._fragments.filter((f) => fragments.includes(this.getFragmentVariableName(f.name))).map((fragment) => (0, import_graphql4.print)(fragment.node)).join("\n");
      } else if (this.config.documentMode === DocumentMode.documentNodeImportFragments) {
        return "";
      } else {
        if (this.config.dedupeFragments && nodeKind !== "OperationDefinition") {
          return "";
        }
        return `${fragments.map((name) => "${" + name + "}").join("\n")}`;
      }
    }
    return "";
  }
  _prepareDocument(documentStr) {
    return documentStr;
  }
  _gql(node) {
    const fragments = this._transformFragments(node);
    const doc = this._prepareDocument(`
    ${(0, import_graphql4.print)(node).split("\\").join("\\\\")}
    ${this._includeFragments(fragments, node.kind)}`);
    if (this.config.documentMode === DocumentMode.documentNode) {
      let gqlObj = (0, import_graphql_tag.default)([doc]);
      if (this.config.optimizeDocumentNode) {
        gqlObj = optimizeDocumentNode(gqlObj);
      }
      return JSON.stringify(gqlObj);
    } else if (this.config.documentMode === DocumentMode.documentNodeImportFragments) {
      let gqlObj = (0, import_graphql_tag.default)([doc]);
      if (this.config.optimizeDocumentNode) {
        gqlObj = optimizeDocumentNode(gqlObj);
      }
      if (fragments.length > 0 && (!this.config.dedupeFragments || node.kind === "OperationDefinition")) {
        const definitions = [
          ...gqlObj.definitions.map((t) => JSON.stringify(t)),
          ...fragments.map((name) => `...${name}.definitions`)
        ].join();
        return `{"kind":"${import_graphql4.Kind.DOCUMENT}","definitions":[${definitions}]}`;
      }
      return JSON.stringify(gqlObj);
    } else if (this.config.documentMode === DocumentMode.string) {
      return "`" + doc + "`";
    }
    const gqlImport = this._parseImport(this.config.gqlImport || "graphql-tag");
    return (gqlImport.propName || "gql") + "`" + doc + "`";
  }
  _generateFragment(fragmentDocument) {
    const name = this.getFragmentVariableName(fragmentDocument);
    const fragmentTypeSuffix = this.getFragmentSuffix(fragmentDocument);
    return `export const ${name} =${this.config.pureMagicComment ? " /*#__PURE__*/" : ""} ${this._gql(fragmentDocument)}${this.getDocumentNodeSignature(this.convertName(fragmentDocument.name.value, {
      useTypesPrefix: true,
      suffix: fragmentTypeSuffix
    }), this.config.experimentalFragmentVariables ? this.convertName(fragmentDocument.name.value, {
      suffix: fragmentTypeSuffix + "Variables"
    }) : "unknown", fragmentDocument)};`;
  }
  get fragmentsGraph() {
    const graph = new import_dependency_graph.DepGraph({ circular: true });
    for (const fragment of this._fragments) {
      if (graph.hasNode(fragment.name)) {
        const cachedAsString = (0, import_graphql4.print)(graph.getNodeData(fragment.name).node);
        const asString = (0, import_graphql4.print)(fragment.node);
        if (cachedAsString !== asString) {
          throw new Error(`Duplicated fragment called '${fragment.name}'!`);
        }
      }
      graph.addNode(fragment.name, fragment);
    }
    this._fragments.forEach((fragment) => {
      const depends = this._extractFragments(fragment.node);
      if (depends && depends.length > 0) {
        depends.forEach((name) => {
          graph.addDependency(fragment.name, name);
        });
      }
    });
    return graph;
  }
  get fragments() {
    if (this._fragments.length === 0 || this.config.documentMode === DocumentMode.external) {
      return "";
    }
    const graph = this.fragmentsGraph;
    const orderedDeps = graph.overallOrder();
    const localFragments = orderedDeps.filter((name) => !graph.getNodeData(name).isExternal).map((name) => this._generateFragment(graph.getNodeData(name).node));
    return localFragments.join("\n");
  }
  _parseImport(importStr) {
    if (importStr === "gql") {
      return {
        moduleName: null,
        propName: "gql"
      };
    }
    if (importStr.includes(".gql")) {
      return {
        moduleName: null,
        propName: importStr
      };
    }
    const [moduleName, propName] = importStr.split("#");
    return {
      moduleName,
      propName
    };
  }
  _generateImport({ moduleName, propName }, varName, isTypeImport) {
    const typeImport = isTypeImport && this.config.useTypeImports ? "import type" : "import";
    const propAlias = propName === varName ? "" : ` as ${varName}`;
    if (moduleName) {
      return `${typeImport} ${propName ? `{ ${propName}${propAlias} }` : varName} from '${moduleName}';`;
    }
    return null;
  }
  clearExtension(path) {
    const extension = (0, import_path.extname)(path);
    if (EXTENSIONS_TO_REMOVE.includes(extension)) {
      return path.replace(/\.[^/.]+$/, "");
    }
    return path;
  }
  getImports(options = {}) {
    (this._additionalImports || []).forEach((i) => this._imports.add(i));
    switch (this.config.documentMode) {
      case DocumentMode.documentNode:
      case DocumentMode.documentNodeImportFragments: {
        const documentNodeImport = this._parseImport(this.config.documentNodeImport || "graphql#DocumentNode");
        const tagImport = this._generateImport(documentNodeImport, "DocumentNode", true);
        if (tagImport) {
          this._imports.add(tagImport);
        }
        break;
      }
      case DocumentMode.graphQLTag: {
        const gqlImport = this._parseImport(this.config.gqlImport || "graphql-tag");
        const tagImport = this._generateImport(gqlImport, "gql", false);
        if (tagImport) {
          this._imports.add(tagImport);
        }
        break;
      }
      case DocumentMode.external: {
        if (this._collectedOperations.length > 0) {
          if (this.config.importDocumentNodeExternallyFrom === "near-operation-file" && this._documents.length === 1) {
            this._imports.add(`import * as Operations from './${this.clearExtension((0, import_path.basename)(this._documents[0].location))}';`);
          } else {
            if (!this.config.importDocumentNodeExternallyFrom) {
              console.warn("importDocumentNodeExternallyFrom must be provided if documentMode=external");
            }
            this._imports.add(`import * as Operations from '${this.clearExtension(this.config.importDocumentNodeExternallyFrom)}';`);
          }
        }
        break;
      }
    }
    if (!options.excludeFragments && !this.config.globalNamespace) {
      const { documentMode, fragmentImports } = this.config;
      if (documentMode === DocumentMode.graphQLTag || documentMode === DocumentMode.string || documentMode === DocumentMode.documentNodeImportFragments) {
        const alreadyImported = new Map();
        const deduplicatedImports = fragmentImports.map((fragmentImport) => {
          const { path, identifiers } = fragmentImport.importSource;
          if (!alreadyImported.has(path)) {
            alreadyImported.set(path, new Set());
          }
          const alreadyImportedForPath = alreadyImported.get(path);
          const newIdentifiers = identifiers.filter((identifier) => !alreadyImportedForPath.has(identifier.name));
          newIdentifiers.forEach((newIdentifier) => alreadyImportedForPath.add(newIdentifier.name));
          return __spreadProps(__spreadValues({}, fragmentImport), {
            importSource: __spreadProps(__spreadValues({}, fragmentImport.importSource), {
              identifiers: newIdentifiers
            })
          });
        }).filter((fragmentImport) => fragmentImport.importSource.identifiers.length > 0);
        deduplicatedImports.forEach((fragmentImport) => {
          if (fragmentImport.outputPath !== fragmentImport.importSource.path) {
            this._imports.add(generateFragmentImportStatement(fragmentImport, "document"));
          }
        });
      }
    }
    return Array.from(this._imports);
  }
  buildOperation(_node, _documentVariableName, _operationType, _operationResultType, _operationVariablesTypes, _hasRequiredVariables) {
    return null;
  }
  getDocumentNodeSignature(_resultType, _variablesTypes, _node) {
    if (this.config.documentMode === DocumentMode.documentNode || this.config.documentMode === DocumentMode.documentNodeImportFragments) {
      return ` as unknown as DocumentNode`;
    }
    return "";
  }
  checkVariablesRequirements(node) {
    const variables = node.variableDefinitions || [];
    if (variables.length === 0) {
      return false;
    }
    return variables.some((variableDef) => variableDef.type.kind === import_graphql4.Kind.NON_NULL_TYPE && !variableDef.defaultValue);
  }
  getOperationVariableName(node) {
    return this.convertName(node, {
      suffix: this.config.documentVariableSuffix,
      prefix: this.config.documentVariablePrefix,
      useTypesPrefix: false
    });
  }
  OperationDefinition(node) {
    this._collectedOperations.push(node);
    const documentVariableName = this.getOperationVariableName(node);
    const operationType = (0, import_change_case_all.pascalCase)(node.operation);
    const operationTypeSuffix = this.getOperationSuffix(node, operationType);
    const operationResultType = this.convertName(node, {
      suffix: operationTypeSuffix + this._parsedConfig.operationResultSuffix
    });
    const operationVariablesTypes = this.convertName(node, {
      suffix: operationTypeSuffix + "Variables"
    });
    let documentString = "";
    if (this.config.documentMode !== DocumentMode.external) {
      if (documentVariableName !== "") {
        documentString = `${this.config.noExport ? "" : "export"} const ${documentVariableName} =${this.config.pureMagicComment ? " /*#__PURE__*/" : ""} ${this._gql(node)}${this.getDocumentNodeSignature(operationResultType, operationVariablesTypes, node)};`;
      }
    }
    const hasRequiredVariables = this.checkVariablesRequirements(node);
    const additional = this.buildOperation(node, documentVariableName, operationType, operationResultType, operationVariablesTypes, hasRequiredVariables);
    return [documentString, additional].filter((a) => a).join("\n");
  }
};

// codegen.ts
var import_pascal_case = __toModule(require_dist3());
console.log("codegen.ts");
var plugin = (schema, documents, config) => {
  console.log("config", config);
  const allAst = (0, import_graphql5.concatAST)(documents.map((d) => d.document));
  const allFragments = [
    ...allAst.definitions.filter((d) => d.kind === import_graphql5.Kind.FRAGMENT_DEFINITION).map((fragmentDef) => ({
      node: fragmentDef,
      name: fragmentDef.name.value,
      onType: fragmentDef.typeCondition.name.value,
      isExternal: false
    })),
    ...config.externalFragments || []
  ];
  const visitor = new ClientSideBaseVisitor(schema, allFragments, {}, { documentVariableSuffix: "Doc" }, documents);
  const visitorResult = (0, import_graphql5.visit)(allAst, { leave: visitor });
  const operations = allAst.definitions.filter((d) => d.kind === import_graphql5.Kind.OPERATION_DEFINITION);
  const defaultTypes = `

type FetchWrapperArgs<T> = {
	fetch: typeof fetch,
	variables?: T,
}

type SubscribeWrapperArgs<T> = {
	variables?: T,
}

interface CacheFunctionOptions {
	update?: boolean
}

`;
  const ops = operations.map((o) => {
    var _a;
    if (o) {
      const name = ((_a = o == null ? void 0 : o.name) == null ? void 0 : _a.value) || "";
      const op = `${(0, import_pascal_case.pascalCase)(name)}${(0, import_pascal_case.pascalCase)(o.operation)}`;
      const opv = `${op}Variables`;
      let operations2 = "";
      if (o.operation === "query") {
        operations2 += `
export const ${name} = ({ variables, fetch}: FetchWrapperArgs<${opv}>):
	Promise<GFetchReturnWithErrors<${op}>> =>
		g.fetch<${op}>({
			queries: [{ query: ${(0, import_pascal_case.pascalCase)(name)}Doc, variables }],
			fetch
		})


		// Cached
		export async function get${(0, import_pascal_case.pascalCase)(name)}(variables, options?: CacheFunctionOptions) {
	await gQuery('user', { query: ${name}, variables }, options)
}

`;
        if (config.subscriptionQuery) {
          operations2 += `
export const ${name}Subscribe = ({ variables }: SubscribeWrapperArgs<${opv}>):
Readable<GFetchReturnWithErrors<${op}>> =>
		g.oFetch<${op}>({
			queries: [{ query: ${(0, import_pascal_case.pascalCase)(name)}Doc, variables }]
		})
	`;
        }
      } else if (o.operation === "mutation") {
        operations2 += `
export const ${name} = ({ variables }: SubscribeWrapperArgs<${opv}>):
Promise<GFetchReturnWithErrors<${op}>> =>
	g.fetch<${op}>({
		queries: [{ query: ${(0, import_pascal_case.pascalCase)(name)}Doc, variables }],
		fetch,
	})
`;
      }
      return operations2;
    }
  }).join("\n");
  const imports = [
    `import type { Readable } from "svelte/store"`,
    `import { g } from '${config.gPath}'`,
    `import type { GFetchReturnWithErrors } from '@leveluptuts/g-query'`,
    `import { gQuery } from '@leveluptuts/g-query'`,
    `import gql from "graphql-tag"`
  ];
  return {
    prepend: imports,
    content: [
      defaultTypes,
      visitor.fragments,
      ...visitorResult.definitions.filter((t) => typeof t == "string"),
      ops
    ].join("\n")
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  plugin
});
/*!
 * is-windows <https://github.com/jonschlinkert/is-windows>
 *
 * Copyright © 2015-2018, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * map-cache <https://github.com/jonschlinkert/map-cache>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*!
 * path-root <https://github.com/jonschlinkert/path-root>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*!
 * path-root-regex <https://github.com/jonschlinkert/path-root-regex>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
