'use strict';

exports.__esModule = true;
exports.mapToTheme = undefined;

var _dotProp = require('dot-prop');

var styledMap = function styledMap() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (props) {
    var mapOfStyles = args[args.length - 1];
    var styleKeys = Object.keys(mapOfStyles);
    // If the first argument is a string, styled-map works differently:
    if (typeof args[0] === 'string') {
      // We use the value of a prop, rather than the key
      var val = props[args[0]];
      if (mapOfStyles[val]) return mapOfStyles[val];
    } else {
      // Otherwise we do things the normal way:
      var matchingKeys = styleKeys.filter(function (key) {
        return props[key];
      });
      // If we have a matching key, return it (or the last if we have multiple):
      if (matchingKeys.length) return mapOfStyles[matchingKeys.pop()];
    }
    // If nothing has matched so far, look for a "default" item in our map:
    if (Object.prototype.hasOwnProperty.call(mapOfStyles, 'default')) {
      return mapOfStyles.default;
    }
    // Else just return the last item, whatever it is:
    return mapOfStyles[styleKeys.pop()];
  };
};

var mapToTheme = exports.mapToTheme = function mapToTheme(key) {
  return function (props) {
    return styledMap((0, _dotProp.get)(props.theme, key));
  };
};

exports.default = styledMap;