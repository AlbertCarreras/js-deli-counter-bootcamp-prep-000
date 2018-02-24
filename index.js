
var katzDeliLine = [];

function takeANumber(array, name){
  array.push(name)
  return (`Welcome, ${name}. You are number ${array.length} in line.`)
}
 
function nowServing(array) {
  var empty = "There is nobody waiting to be served!"
  var message = []
    if (array.length > 0) {
    message =  `Currently serving ${array[0]}.`
    array.shift()
  } else {
    message = empty
  }
  return message
}
function currentLine(array) {
  var message2 = []
  if (array.length > 0) {
    var line = new Array()
    for (var i = 0; i < array.length; i++) {
      line.push(` ${i+1}. ${array[i]}`)
    }
    message2 = `The line is currently:${line}`
  } else {
    message2 = "The line is currently empty."
  }
  return message2
}

