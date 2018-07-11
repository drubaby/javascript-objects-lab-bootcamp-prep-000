var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value });
  }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key){
  var cloneObj = Object.assign({}, object);
  delete cloneObj[key];
  return cloneObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}
=======
>>>>>>> 5769166adabb0d0845e52d3cb3cd10e7ec5366df
