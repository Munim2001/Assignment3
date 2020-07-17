
// Feet to mile conversion code starts

function feetToMile(feet){

    var mile = feet / 5280;

    return mile;

}

// Output test example

var first = feetToMile(500);

console.log(first);

var second = feetToMile(1000);

console.log(second);

// Feet to mile conversion code ends

// Wood calculator code starts

function woodCalculator (chair , table , bed) {

    var woodChair = chair * 1;

    var woodTable = table * 3;

    var woodBed = bed * 5;

    var totalWood = woodChair + woodTable + woodBed;
    
    return totalWood;

}

// Output test example

var first = woodCalculator (14 , 5 , 12);

console.log(first);

// Wood calculator code ends here

// Brick calculator code starts here

function brickCalculator (storied) {
    
    if (storied <= 10){

        var feet1 = storied *  15;
        
        var brick = feet1 * 1000;

        return brick;
        
    }

    else if (storied >10 && storied <= 20){

        var brick = (10 * 15 * 1000) + (storied - 10) * 12 * 1000;

        return brick;

    }

    else if (storied > 20) { 

        var brick = (10 * 15 * 1000) + (10 * 12 * 1000) + (storied - 20) * 10 * 1000;

        return brick;

    }


}

// Output test exapmle

var first = brickCalculator(25);

console.log(first);

// Brick calculator code ends here

// Tiny friend code starts here

function tinyFriend (name) {

    var friendName = name[0];
    
    for (var i = 0; i < name.length; i++) {
        
        var list = name[i];

        if (list.length < friendName.length) {

            friendName = list;
            
        }
        
    }

    return friendName;
    
}

// Output test example

var first = tinyFriend(['Labib' , 'Zabir' , 'Luna' , 'Dewan' , 'Eti']);

console.log(first);

//Tiny friend code ends here  




