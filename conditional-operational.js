console.log("hello conditional operator");

var isYouCome = true;

if (isYouCome == true){
    console.log("i will come");
}
else{
    // console.log("i will not come");
}

var money = 500;
var burger = 200;
var pizza = 550;
var coldCoffe = 150;
var friedRice = 400;
var coldDrinks = 50;

if (money >= burger + pizza){
    console.log("burger and pizza khabo")
}
else if(money >= burger + coldCoffe){
    console.log("burger and cold coffe khabo")
}
else if(money >= burger + coldDrinks){
    console.log("burger and coldDrinks coffe khabo")
}
else if(money >= burger + friedRice){
    console.log("burger and fried rice khabo")
}
else{
    console.log("khabo na kissui")
}

// 
var isGraduage = true;
var salary =700000;
var car = 0;
var house = true;
var land = 3; 
var washingMechine = true;

// if (isGraduage == true && salary == 50000 && car == 0 && house == true){
//     console.log("ami raji");
// }
// else{
//     console.log("ami vebe dekhi pore janabo");
// }

// if ((car >= 2 && house == true ) || (isGraduage == true &&  salary >= 50000)){
//     console.log("date fixed koro")
// }
// else{
//     console.log("ata bad")
// }

if (isGraduage == true){
    if(salary >= 50000){
        if(car <=1){
            if(house == true){
                if (land >= 4){
                    console.log("😍💕❤️😘")
                }
                else(console.log("😍🤗💕"));
            }
            else(console.log("😍😍"));
        }
        else(console.log("😊😊"));
    }
    else(console.log("vabi 😎😎"));

}
else(console.log("😒😒😒😒"));