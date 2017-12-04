(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('react-jss'), require('.')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'react-jss', '.'], factory) :
	(factory((global['react-rating-stats'] = {}),global.React,global.PropTypes,global.injectSheet,global._));
}(this, (function (exports,React,PropTypes,injectSheet,_) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
injectSheet = injectSheet && injectSheet.hasOwnProperty('default') ? injectSheet['default'] : injectSheet;

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex'
    }
  };
};

var Rating = function Rating(_ref) {
  var _ref$values = _ref.values,
      values = _ref$values === undefined ? [] : _ref$values,
      classes = _ref.classes;

  return React.createElement(
    'div',
    { className: classes.root },
    React.createElement(_.Score, { values: values }),
    React.createElement(_.Histogram, { values: values })
  );
};

Rating.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number),
  classes: PropTypes.object.isRequired
};

var Rating$1 = injectSheet(styles)(Rating);

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var styles$2 = function styles(theme) {
  return {
    root: {
      display: 'inline-block',
      position: 'relative'
    },
    back: {
      color: theme.palette.shadedStar
    },
    front: {
      color: theme.palette.twinklingStar,
      left: 0,
      overflow: 'hidden',
      position: 'absolute'
    },
    star: {
      fontSize: 18,
      padding: 3,
      '&:before': {
        content: '"★"'
      }
    }
  };
};

var Stars = function Stars(_ref) {
  var value = _ref.value,
      _ref$max = _ref.max,
      max = _ref$max === undefined ? 5 : _ref$max,
      classes = _ref.classes;

  var percent = 100 * value / max;
  var stars = [].concat(toConsumableArray(Array(max))).map(function (dummy, index) {
    return React.createElement('span', { key: index, className: classes.star });
  });
  return React.createElement(
    'div',
    { className: classes.root },
    React.createElement(
      'span',
      { className: classes.back },
      stars
    ),
    React.createElement(
      'span',
      { className: classes.front, style: { maxWidth: percent + '%' } },
      stars
    )
  );
};

Stars.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  classes: PropTypes.object.isRequired
};

var Stars$1 = injectSheet(styles$2)(Stars);

var styles$1 = function styles(theme) {
  return {
    root: {
      display: 'inline-block',
      position: 'relative',
      textAlign: 'center'
    },
    score: {
      color: theme.palette.gray1,
      fontSize: 64,
      fontWeight: 100,
      lineHeight: '64px',
      paddingTop: 3
    },
    stars: {
      marginBottom: 8,
      overflow: 'auto',
      position: 'relative'
    },
    total: {
      color: theme.palette.gray3,
      fontSize: 12,
      fontWeight: 300,
      marginTop: 10
    }
  };
};

var Score$1 = function Score$$1(_ref) {
  var _ref$values = _ref.values,
      values = _ref$values === undefined ? [] : _ref$values,
      classes = _ref.classes;

  var total = values.reduce(function (a, b) {
    return a + b;
  }, 0);
  var average = total ? values.reduce(function (a, b, index) {
    return a + b * (index + 1);
  }, 0) / total : null;
  var score = Math.round(average * 10) / 10;
  return React.createElement(
    'div',
    { className: classes.root },
    React.createElement(
      'div',
      { className: classes.score },
      score.toLocaleString()
    ),
    React.createElement(Stars$1, { value: average, max: values.length }),
    React.createElement(
      'div',
      { className: classes.total },
      total.toLocaleString(),
      ' total'
    )
  );
};

Score$1.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number),
  classes: PropTypes.object.isRequired
};

var Score$2 = injectSheet(styles$1)(Score$1);

var styles$3 = function styles(theme) {
  var styles = {
    root: {
      marginLeft: theme.padding
    },
    label: {
      color: theme.palette.gray2,
      fontSize: 11,
      fontWeight: 400,
      paddingRight: 10,
      '&:before': {
        content: '"★"',
        marginRight: 4
      }
    },
    outer: {
      display: 'inline-block',
      width: 100,
      '@media (min-width: 400px)': {
        width: 355
      }
    },
    inner: {
      background: theme.palette.gray4,
      color: theme.palette.gray1,
      display: 'inline-block',
      fontSize: 11,
      fontWeight: 400,
      lineHeight: '23px',
      marginBottom: 1,
      boxSizing: 'border-box',
      width: 0
    },
    value: {
      marginLeft: 5
    }

    // adding histogram colors
  };Object.keys(theme.palette.histogram).forEach(function (key) {
    styles['bar' + key] = {
      background: theme.palette.histogram[key]
    };
  });

  return styles;
};

var HistogramBar = function HistogramBar(_ref) {
  var name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? null : _ref$value,
      _ref$maxValue = _ref.maxValue,
      maxValue = _ref$maxValue === undefined ? 0 : _ref$maxValue,
      classes = _ref.classes;

  var percent = maxValue ? 100 * value / maxValue : 0;
  return React.createElement(
    'div',
    null,
    React.createElement(
      'span',
      { className: classes.label },
      name
    ),
    React.createElement(
      'span',
      { className: classes.outer },
      React.createElement(
        'span',
        {
          className: classes.inner + ' ' + classes['bar' + name],
          style: { width: percent + '%' }
        },
        React.createElement(
          'span',
          { className: classes.value },
          value.toLocaleString()
        )
      )
    )
  );
};

/*
 @wtf JSS generates faulty css class names for Pseudo-elements if "Histogram" is used
*/
var HistogramWTF = function HistogramWTF(_ref2) {
  var values = _ref2.values,
      classes = _ref2.classes;

  var maxValue = Math.max.apply(Math, toConsumableArray(values));
  return React.createElement(
    'div',
    { className: classes.root },
    values.reverse().map(function (value, index) {
      return React.createElement(HistogramBar, {
        key: index,
        name: values.length - index,
        value: value,
        maxValue: maxValue,
        classes: classes
      });
    })
  );
};

HistogramWTF.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number),
  classes: PropTypes.object.isRequired
};

var Histogram$1 = injectSheet(styles$3)(HistogramWTF);

var theme = {
  palette: {
    histogram: {
      '1': '#fc8c63',
      '2': '#fdb154',
      '3': '#fed759',
      '4': '#b1d553',
      '5': '#a2bf63'
    },
    shadedStar: '#b1b1b1',
    twinklingStar: '#737373',
    gray1: '#333333',
    gray2: '#737373',
    gray3: '#8d8d8d',
    gray4: '#d9d9d9'
  },
  padding: 24
};

exports['default'] = Rating$1;
exports.Score = Score$2;
exports.Histogram = Histogram$1;
exports.Stars = Stars$1;
exports.theme = theme;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
