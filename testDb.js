const db = require('./models');

const errorHandler = error => {
  console.log('🔥🔥🔥🔥🔥🔥');
  console.log(error)
}

// CREATE
// db.user.create({
//   firstName: 'Steve',
//   lastName: 'Peters',
//   age: 44,
//   email: 'stpets@bigdaddybezos.com'
// }).then(userData => {
//   // Now access new user via userData variable
//   console.log(`🌴 Welcome to the jungle`);
//   console.log(userData);
// }).catch(errorHandler);

// console.log('🎢 Adding that user was exhausting');

// READ
// db.user.findByPk(10).then...

// db.user.findOne({
//   where: {
//     id: 10
//   }
// }).then(foundUser => {
//   // We have a user! Let's console.log about it
//   console.log(`🍋 Hey there ${foundUser.firstName}! You are ${foundUser.age} years old`);
// }).catch(errorHandler);

// Find or Create
// db.user.findOrCreate({
//   where: {
//     email: 'b.hague@ga.co'
//   },
//   defaults: {
//     firstName: 'Brian',
//     lastName: 'Hague',
//     age: 99
//   }
// }).then(([user, created]) => {
//   console.log(`🌏 ${user.firstName} was ${created ? 'created' : 'found'}!`);
// }).catch(errorHandler);

// Sick spread functionality bro
// const [hello, there] = ['hey hey', 'Spain'];
// console.log(hello)
// db.user.findAll().then(users => {
//   users.forEach(user => console.log(`💅 Hey there ${user.firstName}!`));
// }).catch(errorHandler);


// UPDATE
// UPDATE users SET age = 99 WHERE email = 'b.hague@ga.co`;
db.user.update({ 
  age: 99 
}, { 
  where: { 
    email: 'b.hague@ga.co' 
  } 
}).then(updated => {
  console.log('💇‍♂️');
  // updated is an array of one value which is the number of items updated
  console.log(updated);
}).catch(errorHandler);

// DESTROY
// db.user.destroy({
//   where: {
//     firstName: 'Brian'
//   }
// }).then(deleted => {
//   console.log('⛑');
//   // deleted is a Number of items deleted
//   console.log(deleted);
// }).catch(errorHandler).finally(() => {
//   // any kind of cleanup or other things
//   console.log('Donskies')
// })