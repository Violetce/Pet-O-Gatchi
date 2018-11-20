var inquirer = require("inquirer");

function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function () {
        if (this.hungry) {
            console.log("That was yummy");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks! I'm full.");
        }
    }
    this.sleep = function () {
        if (this.sleepy) {
            console.log("Zzzzzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired.")
        }
    }
    this.play = function () {
        if (this.bored) {
            console.log("Yay! Let's play!");
            this.hungry = true;
            this.bored = false;
        } else {
            console.log("Not right now. Later?");
        }
    }
    this.increaseAge = function () {
        this.age = this.age + 1;
        console.log("Happy Birthday to me! I am " + this.age + " old!");
    }
}

var dog = new DigitalPal();
//console.log(dog);
dog.outside = false;
dog.bark = function () {
    console.log("Woof! Woof!");
};
dog.goOutside = function () {
    if (dog.outside) {
        console.log("We're already outside though...");
    } else {
        console.log("Yay! I love the outdoors!");
        dog.outside = true;
        dog.bark();
    }
};
dog.goInside = function () {
    if (dog.outside) {
        console.log("Do we have to? Fine...");
        dog.outside = false;
    } else {
        console.log("I'm already inside...");
    }
};


var cat = new DigitalPal();

cat.houseCondition = 100;
cat.meow = function () {
    console.log("Meow! Meow!");
};
cat.destroyFurniture = function () {
    if (cat.houseCondition === 0) {

    } else {
        cat.houseCondition = cat.houseCondition - 10;
        console.log("MUHAHAHAHAHA! TAKE THAT, FURNITURE!")
        cat.bored = false;
        cat.sleepy = true;
    }
};
cat.buyNewFurniture = function () {
    cat.houseCondition = cat.houseCondition + 50;
    console.log("Are you sure about that?");
};


//console.log(dog);
//console.log(cat);

function updateCat() {
    console.log("Hungry: " + cat.hungry);
    console.log("Sleepy: " + cat.sleepy);
    console.log("Bored: " + cat.bored);
    console.log("Age: " + cat.age);
    console.log("House: " + cat.houseCondition);
}

function updateDog() {
    console.log("Hungry: " + dog.hungry);
    console.log("Sleepy: " + dog.sleepy);
    console.log("Bored: " + dog.bored);
    console.log("Age: " + dog.age);
    console.log("Outside: " + dog.outside);
}


function catPrompt() {
    inquirer.prompt([
        {
            type: "list",
            name: "catAction",
            message: "Select an action.",
            choices: ["Feed", "Sleep", "Play", "Destroy Furniture", "Buy New Furniture"]
        }
    ]).then(function (user) {
        if (user.catAction === "Feed") {
            cat.feed();
            updateCat();
            catPrompt();
        } else if (user.catAction === "Sleep") {
            cat.sleep();
            updateCat();
            catPrompt();
        } else if (user.catAction === "Play") {
            cat.play();
            updateCat();
            catPrompt();
        } else if (user.catAction === "Destroy Furniture") {
            cat.destroyFurniture();
            updateCat();
            catPrompt();
        } else if (user.catAction === "Buy New Furniture") {
            cat.buyNewFurniture();
            updateCat();
            catPrompt();
        }
    })

}

function dogPrompt() {
    inquirer.prompt([
        {
            type: "list",
            name: "dogAction",
            message: "Select an action.",
            choices: ["Feed", "Sleep", "Play", "Go Outside", "Go Inside"]
        }
    ]).then(function (user) {
        if (user.dogAction === "Feed") {
            dog.feed();
            updateDog();
            dogPrompt();
        } else if (user.dogAction === "Sleep") {
            dog.sleep();
            updateDog();
            dogPrompt();
        } else if (user.dogAction === "Play") {
            dog.play();
            updateDog();
            dogPrompt();
        } else if (user.dogAction === "Go Outside") {
            dog.goOutside();
            updateDog();
            dogPrompt();
        } else if (user.dogAction === "Go Inside") {
            dog.goInside();
            updateDog();
            dogPrompt();
        }
    })

}

inquirer.prompt([
    {
        type: "list",
        name: "pickPet",
        message: "Select a pet.",
        choices: ["Cat", "Dog"]
    }
]).then(function (user) {
    if (user.pickPet === "Cat") {
        updateCat();
        catPrompt();
    } else if (user.pickPet === "Dog") {
        updateDog();
        dogPrompt();
    } 
})