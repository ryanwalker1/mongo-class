const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbadmin:admin@cluster0.gvdt7.mongodb.net/testdb', {useNewUrlParser: true, useUnifiedTopology: true});
//mongodb+srv://dbadmin:<password>@cluster0.gvdt7.mongodb.net/<dbname>
//?retryWrites=true&w=majority
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('db open we are listening');

  const kittySchema = new mongoose.Schema({
    name: String
  });

 


  //add method to schema
  kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }

 
  const Kitten = mongoose.model('Kitten', kittySchema);
  const fluffy = new Kitten({ name: 'fluffy' });
  fluffy.speak(); 

//all kitens
/*   Kitten.find(function (err, kittens) {
    if (err) return handleError(err);
    if (kittens) {
      console.log(kittens);
      // doc may be null if no document matched
    }
  }); */

/*   const silence = new Kitten({ name: 'Fluffy' });
  console.log(silence.name); // 'Silence
  silence.speak(); */

  //specific Kitty
  const query  = Kitten.where({ name: 'monoKitty'});
  query.findOne(function (err, kittens) {
    if (err) return handleError(err);
    if (kittens) {
      console.log(kittens);
      // doc may be null if no document matched
    }
  });

  //const query  = Kitten.where({ color: 'white' });






 

  const FatKitty = new Kitten({ name: 'Obese Kat' });
  FatKitty.speak(); 

  const mongoKitty = new Kitten({ name: 'mongoKitty' });
  mongoKitty.speak(); 

  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });


  FatKitty.save(function (err, fluffy) {
    if (err) return console.error(err);
    FatKitty.speak();
  });

  mongoKitty.save(function (err, fluffy) {
    if (err) return console.error(err);
    mongoKitty.speak();
  });



});

