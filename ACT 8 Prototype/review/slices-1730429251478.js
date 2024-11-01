(function(window, undefined) {
  var dictionary = {
    "s-d12245cc-1680-458d-89dd-4f0d7fb22724 s-Slice_1": [ ["Slice 1@1x.png", ""] ]
  };

  window.jimDevelopers.lookUpSlice = function(name) {
    var imageName;
    if(dictionary.hasOwnProperty(name)) { /* search by name */
      imageName = dictionary[name];
    }
    return imageName;
  };
})(window);