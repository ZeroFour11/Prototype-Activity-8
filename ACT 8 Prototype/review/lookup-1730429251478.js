(function(window, undefined) {
  var dictionary = {
    "02a452d1-4a97-4c32-a99a-afb049cd606b": "Appliances",
    "7ed61f38-83f3-4da0-bd6b-240cbe6e8f7d": "Lights",
    "81d254f9-2412-4e52-a9d3-dea59b02a691": "Lights 2",
    "202dfd9b-f1eb-416e-bf11-dddfe31aa571": "Reminders",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "61b35872-2aa7-47c2-98af-a1dbe4b43953": "Weather",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);