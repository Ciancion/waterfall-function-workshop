function asyncAddOne(x, callBack) {
  setTimeout(function() {
    if (typeof x !== 'number'){ return callBack(new Error('need a number!')) }
    else { return callBack(null, x + 1) }
  }, 200)
}

function asyncDouble(x, callBack) {
  setTimeout(function() {
    if (typeof x !== 'number') { return callBack(new Error('need a number!')) }
    else { return callBack(null, x * 2) }
  }, 200)
}

function asyncTimesTen(x, callBack) {
  setTimeout(function() {
    if (typeof x !== 'number') { return callBack(new Error('need a number!')) }
    else { return callBack(null, x * 10) }
  }, 200)
}

// Create this function!
function waterfall(arg, tasks, cb) {
  var cb3 = function(error, arg){
    tasks[2](arg,cb)
  }
  var cb2 = function(error, arg){
    tasks[1](arg,cb3)
  }
  tasks[0](arg, cb2)
}




waterfall(3,

[
  asyncAddOne,
  asyncDouble,
  asyncTimesTen
]
, function(error, result) {
  console.log('Test 1');
  if (error) {
    console.log('test failed, ' + error)
  }
  else if (result !== 80) {
    console.log('test failed, expected 80 but got', result)
  }
  else {
    console.log('Test 1 passed!')
  }
})
