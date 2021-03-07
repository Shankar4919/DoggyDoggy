//preloader

window.addEventListener('load',()=> document.querySelector('.preloader')
.classList.add('hidePreloader'))

// reveal pattern
const CreateDogs = (()=>{
    // dog data
    const dogs = [];

    // dog class
    class Dog {
        constructor(name, breed, img,special, price,type, gender, age){
            this.name = name;
            this.breed = breed;
            this.img = img;
            this.special = special;
            this.price = price;
            this.type = type;
            this.gender = gender;
            this.age = age;
        }
    }
    // dog creation
    function makeDog(name, breed, img='Img/husky_1.jpg',special=true, price=10000,type='new', gender='male', age='2'){
        const dog = new Dog(name, breed, img,special=true, price,type, gender, age);
        dogs.push(dog)
    }
    //produce dogs
    function produceDogs(){
        makeDog('tommy','german shaperd','Img/shepard_3.jpg')
        makeDog('lucy', 'husky','Img/husky_1.jpg',true);
        makeDog('pintu','bull dog', 'Img/bull_dog_1.jpg',false);
        makeDog('pintu','bull dog', 'Img/bull_dog_1.jpg',false);
        makeDog('pintu','bull dog', 'Img/bull_dog_1.jpg',false);
        makeDog('pintu','bull dog', 'Img/bull_dog_1.jpg',false);
    }
    produceDogs();
    console.log(dogs);

    //special dogs
    const specialDogs = dogs.filter(dog => dog.special === true)
    console.log(specialDogs);


})();