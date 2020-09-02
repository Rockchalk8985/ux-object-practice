/*
    Object Practice

    Gardening!

    You were hired to work as a landscaper for a large estate.

    See garden.jpg

    The owner wants you to help them organize their gardens.

    They have decided there will be three gardens: the rose arbor, 
    the perennial garden, and the slope planters.

    You want to use your newly learned programming skills to make
    this job easier.  

    Complete the following exercises to make your work on the garden easier.
*/

/*
    Note, To run the tests for an exercise run the entire file!
    Do not just highlight a section and try to run it, because the tests will
    throw an exception 
    ReferenceError: createdPopulatedEstate is not defined

    If you see that exception, make sure you deselect any text and then click Run Code again

    Remember to Save the file before you click Run Code!
*/

/* ---------------------------------------------------------------------------
    Exercise One

    Creating a plant

    In order to keep track of your plants, you need to store them in your program.
    Complete the createPlant() function, which returns an object representing a plant.
    It should include all of the properties listed in the comment above the function.
*/
/**
 * createPlant - Produces an object respresenting a plant.  It should have the following properties:
 * @param {string} type - The Type of plant.  Possible values are [ "rose", "orchid", "lily", "lavender", "poppy", "begonia", "snapdragon", "marigold"]
 * @param {boolean} isPerennial - A boolean showing if the plant is a perennial or not
 * @param {string} leafDescription - A visual description of the leaves
 * @param {string} leafColor - A string representing the leaf color
 * @param {string} flowerColor - A string representing the color of the flower
 * @param {string} flowerDescription - A visual description of the flower
 * @param {number} gallonsWaterPerWeek - 0.0 to 3.0, representing the number of gallons of water needed per week for the plant
 * @param {number} amountOfSunNeeded - 0 to 10, representing the amount of sun needed
 */


class Plant {
  constructor(type, isPerennial, leafDescription,leafColor,flowerColor,flowerDescription,
    gallonsWaterPerWeek, amountOfSunNeeded) {
    this.type = type;
    this.isPerennial = isPerennial;
    this.leafDescription = leafDescription;
    this.leafColor = leafColor;
    this.flowerColor = flowerColor;
    this.flowerDescription = flowerDescription;
    this.gallonsWaterPerWeek = gallonsWaterPerWeek;
    this.amountOfSunNeeded = amountOfSunNeeded;
  }
 
   describe() {
    let description = `A ${this.type} which has ${this.leafColor} leaves ${this.leafDescription}.  The flowers are ${this.flowerColor} ${this.flowerDescription} `;
    return description;
  }
  clone(){
    return new plant (
      this.type = type,
    this.isPerennial = isPerennial,
    this.leafDescription = leafDescription,
    this.leafColor = leafColor,
    this.flowerColor = flowerColor,
    this.flowerDescription = flowerDescription,
    this.gallonsWaterPerWeek = gallonsWaterPerWeek,
    this.amountOfSunNeeded = amountOfSunNeeded,
    );
  }

}



class Garden {
  constructor(listOfPlants, name) {
    this.listofplants = listOfPlants;
    this.name = name;
  }
}

describe();{gardenName, listOfPlants 
  let descriptionOfGarden =
    "In my " + this.gardenName + " garden, there are many types of" + this.listOfPlants + "plant types" ;


  for (let i = 0; i < listOfPlants.length; i++) {
    let plant = listOfPlants[i];
    descriptionOfGarden = descriptionOfGarden + describePlant(plant);
  }

  return descriptionOfGarden;
}

class estate {
  constructor() {
    this.roseArbor = new Garden("Rose Arbor", [])
    this.perennialGarden = new Garden("Perennial Garden", [])
    this.slopePlanters = new Garden("Slope Planters", [])
  }
}
 
 
  addPlant(plant) {
  if (plant.type === "rose") {
    this.roseArbor.listOfPlants.push(plant);
  } else if (plant.isPerennial && plant.amountOfSunNeeded <= 5) {
    this.perennialGarden.listOfPlants.push(plant);
  } else {
    this.slopePlanters.listOfPlants.push(plant);
  }
  }



/* ------------------------------------------------
    Exercise Three

    The owner wants to have an easy way to hear about the plants in their garden.

    So you decide to write some functions which describe the plants.

    Complete the describePlant(), describeEstate(), and describeGarden() functions below.

    They should each return a string, which is a readible english paragraph that nicely describes
    the visual features of the plant or a list of plants, or the entire estate.

    Feel free to be as elaborate as you wish!

    If you want examples of different plants, set a breakpoint and run the test. 
    It will go through several example plants.
    
    Try to have as little redundent code as possible! 
    
    Hint: describeEstate can call describeGarden which can call describePlant

    Hint2: YOu can use Template literals here to make this easy! If you have not used those yet,
    read up on them here: https://flaviocopes.com/javascript-template-literals/  
    `A ${plant.name} which has ....`
    But you can just use string concatenation too   "A " + plant.name + " which has ..."
*/

/**
 * describePlant
 * @param {*} plant - A plant object
 *
 * Given a plant, this should return a string that is the description of the plant.
 * The description should use at least a few of the properties on the plant to form a sentence.
 *
 * Example: "A Rose which has green leaves that are rounded with a point.  The flowers are red concentric circles of pedals. "
 */
function describePlant(plant) {
  let description = `A ${plant.type} is ${plant.flowerColor} and has ${plant.flowerDescription}. It needs ${plant.gallonsWaterPerWeek} gallons of water per week and ${plant.amountOfSunNeeded} hours of sun per day.`;
  // Your Code Here!
  // Return a string describing all the visual features of the given plant
  return description;
}

/**
 * describeGarden
 * @param {String} gardenName - The name of the garden to describe
 * @param {Object[]} listOfPlants - The List of plants to be described.
 *
 * // Example: "The Rose Garden has 10 types of plants in it.  It contains: A"
 */
function describeGarden(gardenName, listOfPlants) {
  let descriptionOfGarden =
    "In my " + gardenName + " garden, there are many types of plants: ";
  // Your Code Here!
  // Given a list of plants, describe every plant in the list.
  // return a string which is the description.
  // Hint: You can just call describePlant() for each plant in the list
  // Concatenting the description for each plant together into one big string.

  for (let i = 0; i < listOfPlants.length; i++) {
    let plant = listOfPlants[i];
    descriptionOfGarden = descriptionOfGarden + describePlant(plant);
  }

  return descriptionOfGarden;
}

/**
 * describeEstate
 * @param {Object} estate - An estate object
 * Return a string describing all the different visual features of all the gardens in the estate.
 * This should describe every garden and every plant.
 */
function describeEstate(estate) {
  let description = "";
  for (let gardenName in estate) {
    let listOfPlants = estate[gardenName];
    description += describeGarden(gardenName, listOfPlants);
  }

  // Return a string describing all the different visual features of all the gardens in the estate.
  // Feel free to make up various details.
  // Hint: You can call describeGarden() for each garden of the estate.

  return description;
}

/* ---------------------------------------------------------------------------
    Exercise Four

    The owner wants you to tell them how much water the entire garden is going
    to need per week.

    Complete the calculateWaterUsagePerWeek() function.
*/

/**
 * calculateWaterUsagePerWeek
 * @param {Object} estate - An estate object
 *
 * This should return a number which is the total number of gallons of water
 * needed for the whole estate.
 *
 * Make a loop for each garden to tally the number of gallons needed by all the plants, then
 * add those up to get the total water usage.
 */
function calculateWaterUsagePerWeek(estate) {
  let numGallons = 0;
  //add up each
  for (let gardenName in estate) {
  let listOfPlants = estate[gardenName];
  for (let plant of listOfPlants) {
    numGallons += plant.gallonsWaterPerWeek;
  }
}
  console.log(numGallons);
  return numGallons;
}

/* ---------------------------------------------------------------------------
    Exercise Five

    Clone a plant

    The botanist of the estate wants more colors of roses, so they have devised a way to
    alter the color of a plant.
    They want you to clone each of the roses in the garden giving them more
    elaborate colors.

    First, complete cloneRose().
    Given a plant, this should clone it and return a copy with a new color.

    Complete cloneAllTheRosesAndChangeTheirColors().  
    This function should go attempt to clone all the roses in the garden.  
    Make sure your algorithm does not clone or change the color of flawed plants!
*/

/**
 * cloneRose
 * @param {Object} plant - A plant object
 *
 * This should return a new object, which is a clone of the given plant.
 * The clone should have identitcal properties to the given plant, except for the color.
 *
 * Every clone should run changeColorOfPlant(clone)
 * This will use the botanist's special algorithm to make new colors of roses.
 *
 */
function cloneRose(plant) {
  let clone = { ...plant };

  return clone;
}

/**
 * cloneAllTheRoses
 * @param {Object} estate - An estate object
 *
 * This should clone every rose and add the new plant to the garden.
 */
function cloneAllTheRoses(estate) {
  let clonedRoses = []
  for (let rose of estate.roseArbor) {
    let clonedRose = cloneRose (rose)
    clonedRoses.push(clonedRose);
  }
  estate.roseArbor = estate.roseArbor.concat(clonedRoses);
}

