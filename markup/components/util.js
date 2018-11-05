'use strict';

(function () {
  window.util = {
    // add spaces from numbers
    addSpaceNumbers: function (num) {
      let newNum = num + '';

      return newNum.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    },
    // remove spaces from numbers
    removeSpaceNumbers: function (num) {
      let newNum = num + '';

      return newNum.replace(/\s/g, '');
    }
  };
})();