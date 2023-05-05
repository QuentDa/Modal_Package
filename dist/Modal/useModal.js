"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useModal = useModal;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _Modal = require("./Modal");
function useModal() {
  const [show, setShow] = (0, _react.useState)(false);
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  return {
    show,
    openModal,
    closeModal,
    Modal: _Modal.Modal
  };
}