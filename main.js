

// Criteria:

// Finish the flip method so that it randomly sets your coin object's "state" property to be either 0 or 1

// Finish the toString method so that it returns the string "Heads" or "Tails", depending on whether "this.state" is 0 or 1.

// Finish the toHtml method so that it sets the properties of the image element to show either face-up or face-down, depending on whether this.state is 0 or 1.

// Write a function called display20Flips that uses a loop to flip the coin 20 times. Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method)

// Write a function called display20Images, again using a loop to flip the coin 20 times…but this time instead of displaying the result as a string, display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).



// Test and Demonstrate the following:

// Write a function called display20Flips that uses a loop to flip the coin 20 times. Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method)

// Write a function called display20Images, again using a loop to flip the coin 20 times…but this time instead of displaying the result as a string, display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).




let coin = {
    state: 0,
    flip: function () {

        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/

        return this.state = Math.round(Math.random())



    },
    
    /* 2. Return the string "Heads" or "Tails", depending on whether
    "this.state" is 0 or 1. */


            toString: function () {

        if (this.state === 0) {
            return "Heads"
        }
        else {
            return "Tails"
        }



        /* 3. Set the properties of this image element to show either face-up
           console.log(image)
           or face-down, depending on whether this.state is 0 or 1.*/

    },
    toHTML: function () {
        let image = document.createElement('img');
        


        if (this.state === 0) {

             image.src = 'http://typesets.wdfiles.com/local--files/ireland:halfpenny-1928-1967/53REV.JPG'
        }
        
        else  {
            image.src = 'http://typesets.wdfiles.com/local--files/ireland:halfpenny-1971-1986/71REV.JPG'
        }


        return image;
    }

};


function display20flips() {

    

    for (let index = 0; index < 20; index ++){
coin.flip()
let displayFlips= document.createElement('p')
displayFlips.append(coin.toString())
document.body.append(displayFlips)

    }






}



function display20Images() {

    

    
    for (let index = 0; index <20; index ++) {
        coin.flip()
      document.body.append (coin.toHTML())
        
        
        
        
    };
    


}
