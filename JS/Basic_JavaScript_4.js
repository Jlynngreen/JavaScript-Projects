function my_Dictionary() {
    var Animal = {
        Species: "Horse",
        Color: "Brown",
        Breed: "Buckskin",
        Age: "2",
        Sound: "Neigh",
    }
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function my_Dictionary() {
    var Automobile = {
        Model: "Camry",
        Make: "Toyota",
        Color: "Red",
        Year: "2020",
        Sound: "roar",
    }
    document.getElementById("Dictionary").innerHTML = Automobile.Sound;
}


function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: "5",
        Sound: "Bark",
 };
 delete Animal.Sound;
 document.getElementById("Dictionary").innerHTML = Animal.Sound;
}