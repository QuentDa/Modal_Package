"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;
var _react = _interopRequireWildcard(require("react"));
require("./Modal.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Modal(_ref) {
  let {
    show,
    onClose,
    title,
    children
  } = _ref;
  const modalRef = (0, _react.useRef)(null);
  const handleOutsideClick = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };
  const modalStyle = {
    display: show ? 'block' : 'none'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    style: modalStyle,
    onClick: handleOutsideClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    ref: modalRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title-wrapper"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "title"
  }, title), /*#__PURE__*/_react.default.createElement("span", {
    className: "close-button",
    onClick: onClose
  }, "\xD7")), children));
}