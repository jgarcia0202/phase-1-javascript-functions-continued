// Your code here
function saturdayFun(event = "roller-skate") {
  return `This Saturday, I want to ${event}!`
}
function mondayWork(event = 'go to the office') {
  return `This Monday, I will ${event}.`
}
function wrapAdjective(emph = "*") {
  const result = function(sent){
    return `You are ${emph}${sent}${emph}!`
  }
  return result

}