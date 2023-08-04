// # ***Suppose Your Friends’ names are**

// **[ Sakib, Abir, Klinton, Afnan, Polash, Rafi, Sadiya, Mim, Emon,]***

// **(a) Declare your friend's name using Array and find the list length.**

// **(b) Find the index of  “Rafi”, Add ‘Sajjad’ to the end of the index, and replace ‘Abir’ with “Rabbi”.**
// **(c) Give a loop break at the ‘index-4’  and continue from Rafi, Add ‘Tawhid’ to the first of the index**
 

                                      //   ***Answer/Output****
// (a)
let Friends= [ 'Sakib', 'Abir', 'Klinton', 'Afnan', 'Polash', 'Rafi', 'Sadiya', 'Mim', 'Emon',] ;

  
//   console.log(Friends.length);

// (b)
const positionIndex = Friends.indexOf('Rafi');  
// console.log(positionIndex);
Friends.push('Sajjad')

// console.log(Friends);
Friends[1] = 'Rabbi'
// console.log(Friends);

// (c)
for (var i=0; i<4; i++) {
    var friend = Friends[i];
console.log(friend)
}