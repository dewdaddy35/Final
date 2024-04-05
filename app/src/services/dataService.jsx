import axios from "axios";

const temp_data = [
  {
    title: "Pulled Pork",
    steps: [
      "Start the preperation roughly 36 hours before smoking the pork!",
      "Take your pork butt and double bag it in freezer bags.",
      "Pour in your root beers. Seal them up and place them in a tin in the fridge over night.",
      "After 24 hours in root beer, pull out the pork butt and let them drain, but DON'T pat dry.",
      "Start rubbing with John Henry's Cherry Chipotle and don't be shy! Wrap in plastic and set in the fridge for another 12 hours.",
      "After 12 hours, it's time to get the smoker going at around 225-240°F. For this recipe, I don't use anything but water in the water pan.",
      "Once the fire is ready and the pan is full, pull out the pork butt and add a bit more rub where necessary. Place onto the smoker.",
      "The fun part starts at 140°F (internal temperature). Take 3 parts apple juice and 1 part Jim Bean's Red Stag Bourbon.",
      "Don't mess around here. Spritz until the pork is dripping wet. Do this as often as possible to keep the outside looking moist.",
      "This will slow down the cooking time but every 30 minutes is a good rule but I just like to keep it moist looking.",
      "I keep spritzing this until I hit 165°F(internal temperature). I then wrap the pork butt in heavy aluminum foil, making sure to wrap it so no drippings get out. I also give it one last spritz.",
      "Cook the pork butt until it reaches 200°F. Remove the pork butt from the heat and let rest in a towel and cooler for as long as possible.",
      "Once the pork butt has cooled, start pulling the meat in its own juices. No finishing sauce needed. It's ready to eat as is. I prefer using Hawaiian sweet rolls.",
    ],
    ingredients: [
      "1 (7 Pound) Bone Out Pork Butt",
      "2 (12oz) Bottles Root Beer",
      "Hawaiian Sweet Rolls",
      "Jim Beams's Red Stag Buorbon",
      "John Henry's Wild Cherry Chipotle Rub",
      "Apple and Cherry Wood Chips",
      "Apple Juice",
      "Freezer Bags",
      "Roasting Tins",
    ],
    cookTime: "3 - 4 Hours",
    level: "Beginner",
    image: "http://rb.gy/73vodl",
    method: "Smoked",
    creator: "Eric and Neil",
    id: "1",
  },
  {
    title: "Griddled Smashed Mini Cheeseburger Sliders",
    steps: [
      "Combine 2 beaten eggs with all spices.",
      "Pour over ground beef and thoroughly mix.",
      "For best flavor, cover and let sit in refrigerator for 4 to 6 hours (optional).",
      "When ready to cook, set Griddle to 400˚F.",
      "Spread ground beef mixture flat in aluminum pan. Cut into 12 burgers in pan and make into individual balls (1/6 pound each).",
      "Season griddle with extra virgin olive oil and kosher salt.",
      "Prepare sauce for burgers. Mix hot sauce and steak sauce together. Brush this on the burgers while griddling.",
      "Smash burger balls into ½” thick burgers on griddle and sear for total of 6-8 minutes, flip every 2 minutes and brush with sauce mix.",
      "Add thick layer of cheese and close grill lid until melted.",
      "Pull burgers off the griddle and build on Hawaiian bun with mayo and pickles.",
    ],
    ingredients: [
      "2 Pounds 80/20 Ground Beef",
      "9inch X 13inch Aluminum Pan",
      "American Cheese Slices",
      "Dill Pickle Chops",
      "Hawaiian Buns (1 Pack)",
      "Mayo",
      "Black Pepper (To Taste)",
      "2 Eggs (Beaten)",
      "2 Tablespoons Garlic Powder",
      "2 Tablespoons Hot Sauce",
      "Kosher Salt (To Taste)",
      "2 Tablespoons Mild Steak Sauce",
      "2 Tablespoons Onion Powder",
    ],
    cookTime: "0 - 30 Minutes",
    level: "Beginner",
    image: "https://rb.gy/862hav",
    method: "Grilled | Seared",
    creator: "Eric and Neil",
    id: "2",
  },
  {
    title: "Beer Can Chicken",
    steps: [
      "In a small bowl, combine salt, brown sugar, paprika, dry mustard, pepper, thyme, and garlic powder.",
      "Discard about half of the beer from the can. Add 1 tsp of the rub to the half-empty can (beer will foam up).",
      "Remove neck and giblets from chicken. Sprinkle 1 teaspoon of the rub inside the body cavity.",
      "Rub the outside of the chicken with butter and sprinkle with the remaining rub.",
      "Hold the chicken upright with the opening of the body cavity at the bottom and lower it onto the beer can so that the can fits into the cavity. ",
      "Pull the chicken legs forward so the bird rests on its legs and the can.",
      "Twist wing tips behind back. Stuff the lemon quarter in the neck cavity to seal in steam.",
      "For a charcoal grill, arrange medium-hot coals around a drip pan. (For a gas grill, preheat grill. Reduce heat to medium. Adjust for indirect cooking. If necessary, remove upper grill rack so chicken will stand upright).",
      "Test for medium heat above pan. Stand chicken upright on grill rack over drip pan.",
      "Cover and grill for 1¼ to 1¾ hours or until chicken is no longer pink (180°F in thigh muscle).",
      "For a gas grill, preheat grill. Reduce heat to medium. Adjust for indirect cooking. If necessary, remove upper grill rack so chicken will stand upright. Grill as above.",
      "If necessary, tent chicken with foil to prevent over-browning.",
      "Holding chicken by the can, carefully remove it from grill. Cover with foil; let stand for 10 minutes.",
      "To pull the can from the chicken, use a hot pad to grasp the can and heavy tongs to grasp the chicken.",
    ],
    ingredients: [
      "1 (12oz) Can Beer",
      "1 Lemon Quarter",
      "1 Teaspoon Dry Mustard",
      "1 Whole Chicken (3 1/2 To 4 LBS)",
      "2 Tablespoons Butter or Margarinen (Softened)",
      "2 Teaspoons Packed Brown Sugar",
      "2 Teaspoons Paprika",
      "2 Teaspoons Salt",
      "1/4 Teaspoon Garlic Powder",
      "Teaspoon Black Pepper",
      "1/2 Teaspoon Dried Thyme",
    ],
    cookTime: "2 hours",
    level: "Intermediate",
    image: "https://rb.gy/dnice2",
    method: "Grilled",
    creator: "Eric and Neil",
    id: "3",
  },
  {
    title: "Smoked Shrimp and Grits Recipe",
    steps: [
      "Preheat smoker to 225°F. Fill water bowl half way with orange juice and add Alder wood chips to wood chip loader or tray.",
      "Cook grits according to package instructions. While still hot, stir in cream cheese, Velveeta, minced garlic, worcestershire sauce, paprika, mustard, pepper and salt into grits then add egg and stir. Place grits in a disposable aluminum pan and cover tightly with aluminum foil.",
      "In a small heated pot, mix butter, Cajun seasoning, onion powder, and garlic powder. Stir well. Place shrimp in an aluminum pan then pour mixture on top of shrimp.",
      "Smoke both pans for 45 minutes. Remove pans from smoker and drain off all excess butter from the shrimp pan. Note: It is important to drain off excess butter to keep the dish from being overwhelmed by the butter and smoke flavor.",
      "Top grits with shrimp and enjoy!",
    ],
    ingredients: [
      "2 Pounds Medium Shrimp (Peeled, Deveined, & Washed",
      "1 Tablespoon Worcestershire Sauce",
      "1 Cup Uncooked Grits",
      "1 Egg (Well-Beaten",
      "1 Teaspoon Cajun Seasoning",
      "1 Teaspoon Dijon Mustard",
      "1 Teaspoon Garlic Powder",
      "1 Teaspoon Onion Powder",
      "1 Teaspoon Salt",
      "1 Teaspoon Smooked Paprika",
      "3 Cloves Garlic (Minced)",
      "4 Ounces Velveeta Cheese (Cubed)",
      "6 Ounces Cream Cheese (Cubed)",
      "1/4 Teaspoon Black Peeper",
      "1/2 Cup Butter (Melted)",
    ],
    cookTime: "30 - 60 Minutes",
    level: "Beginner",
    image: "https://rb.gy/ms7inx",
    method: "Smoked",
    creator: "Eric and Neil",
    id: "4",
  },
];

class DataService {
  serverURL = "http://127.0.0.1:8000/";

  async getPosts() {
    //TODO: call the API here
    let response = await axios.get(this.serverURL + "/api/recipe/");
    return response.data;

    //in the meantime return local data
    //return temp_data;
  }

  async getRecipe(id) {
    let response = await axios.get(this.serverURL + "/api/recipe/" + id + "/");
    return response.data;
  }
}

export default new DataService();
