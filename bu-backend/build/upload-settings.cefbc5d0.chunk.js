(self["webpackChunkbu_backend_v_2"] = self["webpackChunkbu_backend_v_2"] || []).push([[695],{

/***/ 62031:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(59525);
  } else {}
  

/***/ }),

/***/ 59525:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(67294),__webpack_require__(16384)):0}(this,(function(n,e){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=113)}({0:function(n,e,t){n.exports=t(22)()},1:function(e,t){e.exports=n},11:function(n,e,t){var r=t(27),o=t(28),i=t(25),a=t(29);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},113:function(n,e,t){"use strict";t.r(e),t.d(e,"Main",(function(){return v})),t.d(e,"SkipToContent",(function(){return _}));var r,o=t(6),i=t.n(o),a=t(5),u=t.n(a),s=t(3),c=t.n(s),f=t(1),p=t.n(f),d=t(0),l=t.n(d),m=t(2),b=t.n(m),h=["labelledBy"],y=b.a.main(r||(r=c()(["\n  // To prevent global outline on focus visible to force an outline when Main is focused\n  &:focus-visible {\n    outline: none;\n  }\n"]))),v=function(n){var e=n.labelledBy,t=u()(n,h),r=e||"main-content-title";return p.a.createElement(y,i()({"aria-labelledby":r,id:"main-content",tabIndex:-1},t))};v.defaultProps={labelledBy:void 0},v.propTypes={labelledBy:l.a.string};var x,g=t(4),O=b()(g.Box)(x||(x=c()(["\n  text-decoration: none;\n  position: absolute;\n  z-index: 9999;\n  left: -100%;\n  top: -100%;\n\n  &:focus {\n    left: ",";\n    top: ",";\n  }\n"])),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.spaces[3]})),_=function(n){var e=n.children;return p.a.createElement(O,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},e)};_.propTypes={children:l.a.node.isRequired}},15:function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=t=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),t(e)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},2:function(n,t){n.exports=e},22:function(n,e,t){"use strict";var r=t(23);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},23:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},24:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,e,t){var r=t(24);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},28:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},29:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},30:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return y}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),s=t(7),c=t(1),f=t.n(c),p=t(0),d=t.n(p),l=function(n){return f.a.createElement("div",n)},m={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},b={_hover:d.a.func,background:d.a.string,basis:d.a.oneOfType([d.a.string,d.a.string]),borderColor:d.a.string,children:d.a.oneOfType([d.a.node,d.a.string]),color:d.a.string,flex:d.a.oneOfType([d.a.string,d.a.string]),grow:d.a.oneOfType([d.a.string,d.a.string]),hasRadius:d.a.bool,hiddenS:d.a.bool,hiddenXS:d.a.bool,padding:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingBottom:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingLeft:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingRight:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingTop:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),shadow:d.a.string,shrink:d.a.oneOfType([d.a.string,d.a.string])};l.defaultProps=m,l.propTypes=b;var h={color:!0},y=u.a.div.withConfig({shouldForwardProp:function(n,e){return!h[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(s.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(s.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(s.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(s.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(s.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(s.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(s.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(s.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(s.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));y.defaultProps=m,y.propTypes=b},5:function(n,e,t){var r=t(30);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},7:function(n,e,t){"use strict";var r=t(11),o=t.n(r),i=t(15),a=t.n(i);e.a=function(n,e,t){var r=e;if(Array.isArray(e)||"object"!==a()(e)||(r=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,u=o()(i,3),s=u[0],c=u[1],f=u[2],p="".concat(n,": ").concat(t.spaces[s],";");return void 0!==c&&(p+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[c],";\n        }")),void 0!==f&&(p+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[f],";\n        }")),p}var d=t.spaces[r]||r;return"".concat(n,": ").concat(d,";")}}}})}));

/***/ }),

/***/ 85078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SettingsPage": () => (/* binding */ SettingsPage),
  "default": () => (/* binding */ pages_SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Check.js
var Check = __webpack_require__(84734);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(5493);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(67826);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/ToggleInput.js
var ToggleInput = __webpack_require__(47857);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(49425);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(19408);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(62031);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(34626);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(78862);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/index.js + 7 modules
var utils = __webpack_require__(39844);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/init.js
const init = (initialState) => {
  return initialState;
};
/* harmony default export */ const SettingsPage_init = (init);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.cjs.production.min.js
var immer_cjs_production_min = __webpack_require__(8041);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/reducer.js


const initialState = {
  isLoading: true,
  isSubmiting: false,
  initialData: {
    responsiveDimensions: true,
    sizeOptimization: true,
    autoOrientation: false,
    videoPreview: false
  },
  modifiedData: {
    responsiveDimensions: true,
    sizeOptimization: true,
    autoOrientation: false,
    videoPreview: false
  }
};
const reducer = (state, action) => (0,immer_cjs_production_min["default"])(state, (drafState) => {
  switch (action.type) {
    case "CANCEL_CHANGES": {
      drafState.modifiedData = state.initialData;
      break;
    }
    case "GET_DATA_SUCCEEDED": {
      drafState.isLoading = false;
      drafState.initialData = action.data;
      drafState.modifiedData = action.data;
      break;
    }
    case "ON_CHANGE": {
      set_default()(drafState, ["modifiedData", ...action.keys.split(".")], action.value);
      break;
    }
    case "ON_SUBMIT": {
      drafState.isSubmiting = true;
      break;
    }
    case "SUBMIT_SUCCEEDED": {
      drafState.initialData = state.modifiedData;
      drafState.isSubmiting = false;
      break;
    }
    case "ON_SUBMIT_ERROR": {
      drafState.isSubmiting = false;
      break;
    }
    default:
      return state;
  }
});
/* harmony default export */ const SettingsPage_reducer = (reducer);


// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/permissions.js
var permissions = __webpack_require__(16838);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/index.js
/* provided dependency */ var console = __webpack_require__(25108);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};




















const SettingsPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const toggleNotification = (0,build.useNotification)();
  (0,build.useFocusWhenNavigate)();
  const [{ initialData, isLoading, isSubmiting, modifiedData }, dispatch] = (0,react.useReducer)(
    SettingsPage_reducer,
    initialState,
    SettingsPage_init
  );
  const isMounted = (0,react.useRef)(true);
  (0,react.useEffect)(() => {
    const CancelToken = (axios_default()).CancelToken;
    const source = CancelToken.source();
    const getData = () => __async(void 0, null, function* () {
      try {
        const {
          data: { data }
        } = yield utils/* axiosInstance.get */.be.get((0,utils/* getRequestUrl */.IF)("settings"), {
          cancelToken: source.token
        });
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data
        });
      } catch (err) {
        console.error(err);
      }
    });
    if (isMounted.current) {
      getData();
    }
    return () => {
      source.cancel("Operation canceled by the user.");
      isMounted.current = false;
    };
  }, []);
  const isSaveButtonDisabled = isEqual_default()(initialData, modifiedData);
  const handleSubmit = (e) => __async(void 0, null, function* () {
    e.preventDefault();
    if (isSaveButtonDisabled) {
      return;
    }
    lockApp();
    dispatch({ type: "ON_SUBMIT" });
    try {
      yield utils/* axiosInstance.put */.be.put((0,utils/* getRequestUrl */.IF)("settings"), modifiedData);
      dispatch({
        type: "SUBMIT_SUCCEEDED"
      });
      toggleNotification({
        type: "success",
        message: { id: "notification.form.success.fields" }
      });
    } catch (err) {
      console.error(err);
      dispatch({ type: "ON_SUBMIT_ERROR" });
    }
    unlockApp();
  });
  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE",
      keys: name,
      value
    });
  };
  return /* @__PURE__ */ react.createElement(Main.Main, {
    tabIndex: -1
  }, /* @__PURE__ */ react.createElement(Helmet.Helmet, {
    title: formatMessage({
      id: (0,utils/* getTrad */.OB)("page.title"),
      defaultMessage: "Settings - Media Libray"
    })
  }), /* @__PURE__ */ react.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    title: formatMessage({
      id: (0,utils/* getTrad */.OB)("settings.header.label"),
      defaultMessage: "Media Library"
    }),
    primaryAction: /* @__PURE__ */ react.createElement(Button.Button, {
      disabled: isSaveButtonDisabled,
      "data-testid": "save-button",
      loading: isSubmiting,
      type: "submit",
      startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
      size: "S"
    }, formatMessage({
      id: "global.save",
      defaultMessage: "Save"
    })),
    subtitle: formatMessage({
      id: (0,utils/* getTrad */.OB)("settings.sub-header.label"),
      defaultMessage: "Configure the settings for the Media Library"
    })
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, isLoading ? /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null) : /* @__PURE__ */ react.createElement(Layout.Layout, null, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 12
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    background: "neutral0",
    padding: 6,
    shadow: "filterShadow",
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 4
  }, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "delta",
    as: "h2"
  }, formatMessage({
    id: (0,utils/* getTrad */.OB)("settings.blockTitle"),
    defaultMessage: "Asset management"
  }))), /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 6
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(ToggleInput.ToggleInput, {
    "aria-label": "responsiveDimensions",
    "data-testid": "responsiveDimensions",
    checked: modifiedData.responsiveDimensions,
    hint: formatMessage({
      id: (0,utils/* getTrad */.OB)("settings.form.responsiveDimensions.description"),
      defaultMessage: "Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."
    }),
    label: formatMessage({
      id: (0,utils/* getTrad */.OB)("settings.form.responsiveDimensions.label"),
      defaultMessage: "Responsive friendly upload"
    }),
    name: "responsiveDimensions",
    offLabel: formatMessage({
      id: "app.components.ToggleCheckbox.off-label",
      defaultMessage: "Off"
    }),
    onLabel: formatMessage({
      id: "app.components.ToggleCheckbox.on-label",
      defaultMessage: "On"
    }),
    onChange: (e) => {
      handleChange({
        target: { name: "responsiveDimensions", value: e.target.checked }
      });
    }
  })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(ToggleInput.ToggleInput, {
    "aria-label": "sizeOptimization",
    "data-testid": "sizeOptimization",
    checked: modifiedData.sizeOptimization,
    hint: formatMessage({
      id: (0,utils/* getTrad */.OB)("settings.form.sizeOptimization.description"),
      defaultMessage: "Enabling this option will reduce the image size and slightly reduce its quality."
    }),
    label: formatMessage({
      id: (0,utils/* getTrad */.OB)("settings.form.sizeOptimization.label"),
      defaultMessage: "Size optimization"
    }),
    name: "sizeOptimization",
    offLabel: formatMessage({
      id: "app.components.ToggleCheckbox.off-label",
      defaultMessage: "Off"
    }),
    onLabel: formatMessage({
      id: "app.components.ToggleCheckbox.on-label",
      defaultMessage: "On"
    }),
    onChange: (e) => {
      handleChange({
        target: { name: "sizeOptimization", value: e.target.checked }
      });
    }
  })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(ToggleInput.ToggleInput, {
    "aria-label": "autoOrientation",
    "data-testid": "autoOrientation",
    checked: modifiedData.autoOrientation,
    hint: formatMessage({
      id: (0,utils/* getTrad */.OB)("settings.form.autoOrientation.description"),
      defaultMessage: "Enabling this option will automatically rotate the image according to EXIF orientation tag."
    }),
    label: formatMessage({
      id: (0,utils/* getTrad */.OB)("settings.form.autoOrientation.label"),
      defaultMessage: "Auto orientation"
    }),
    name: "autoOrientation",
    offLabel: formatMessage({
      id: "app.components.ToggleCheckbox.off-label",
      defaultMessage: "Off"
    }),
    onLabel: formatMessage({
      id: "app.components.ToggleCheckbox.on-label",
      defaultMessage: "On"
    }),
    onChange: (e) => {
      handleChange({
        target: { name: "autoOrientation", value: e.target.checked }
      });
    }
  }))))))))));
};
const ProtectedSettingsPage = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, {
  permissions: permissions/* default.settings */.Z.settings
}, /* @__PURE__ */ react.createElement(SettingsPage, null));
/* harmony default export */ const pages_SettingsPage = (ProtectedSettingsPage);


/***/ })

}]);