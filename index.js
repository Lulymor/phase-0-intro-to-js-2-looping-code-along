// Code your solutions in this file
function writeCards(friends , event) {
    const messages = [];
  let i = 0; 
  while (i < friends.length) {
   messages.push(`Thank you, ${friends[i]}, for the wonderful ${event} gift!`);
    i++;
  }
  return messages;
};
    


function countDown() {
    let count = 10 
    while (count >= 0)
        console.log(count--);

}