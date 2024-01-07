// Explore What You Can Do With JavaScript Object

const actress = {
    name: 'Halima',
    id: 11,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salam', 'Aamir'],
    movies: [{name: 'No.1', year: 2015}, {name: 'King Khan', year: 2018}],
    act: function(){
      console.log('Acting like Halima');
    },
    car: {
        brand: 'tesla',
        price: 500000000,
        made: 2025,
        manufacturer:{
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }

}

// console.log(actress);
// console.log(actress.friends);
// console.log(actress.car);
console.log(actress.act);
actress.act();