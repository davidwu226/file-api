//
// HTML5 File API
// http://www.w3.org/TR/FileAPI
(function () {
  "use strict";

  var FileApi = module.exports = {
        File: require('@davidwu226/file')
      , FileList: require('FileList')
    //, FileError: require('file-error')
      , FileReader: require('filereader')
      , FormData: require('@davidwu226/formdata')
  };

  FileApi.isFile = function (obj) {
    if (obj instanceof FileApi.File) {
      return true;
    }
    if ('string' === typeof obj.name
          && (obj.path || obj.stream || obj.buffer)) {
      return true;
    }
    return false;
  };

  FileApi.isFormData = function (obj) {
    if (obj instanceof FileApi.FormData) {
      return true;
    }
    if ('function' === typeof obj.append
          && 'function' === typeof obj.serialize) {
      return true;
    }
    return false;
  };
}());
