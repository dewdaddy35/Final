

const temp_data = [
    {
        title: "Pulled Pork",
        steps: "steps",
        ingredients: ["1 (7 Pound) Bone Out Pork Butt", "2 (12oz) Bottles Root Beer", "Hawaiian Sweet Rolls", "Jim Beams's Red Stag Buorbon", "John Henry's Wild Cherry Chipotle Rub", "Apple and Cherry Wood Chips", "Apple Juice", "Freezer Bags", "Roasting Tins"],
        cookTime: "3 - 4 Hours",
        level: "Beginner",
        image: "http://rb.gy/73vodl",
        method: "Smoked",
        creator: "Eric and Neil",
        id:"1"


    },
    {
        title: "Griddled Smashed Mini Cheeseburger Sliders",
        steps: "steps",
        ingredients: ["2 Pounds 80/20 Ground Beef", "9inch X 13inch Aluminum Pan", "American Cheese Slices", "Dill Pickle Chops", "Hawaiian Buns (1 Pack)", "Mayo", "Black Pepper (To Taste)", "2 Eggs (Beaten)", "2 Tablespoons Garlic Powder", "2 Tablespoons Hot Sauce", "Kosher Salt (To Taste)", "2 Tablespoons Mild Steak Sauce", "2 Tablespoons Onion Powder"],
        cookTime: "0 - 30 Minutes",
        level: "Beginner",
        image: "https://rb.gy/862hav",
        method: "Grilled | Seared",
        creator: "Eric and Neil",
        id:"2"

    },
    {
        title: "Beer Can Chicken",
        steps: "steps",
        ingredients: [],
        cookTime: "2 hours",
        level: "Intermediate",
        image: "https://rb.gy/dnice2",
        method: "Grilled",
        creator: "Eric and Neil",
        id: "3"
    },
    {
        title: "Smoked Shrimp and Grits Recipe",
        steps: "steps",
        ingredients: ["2 Pounds Medium Shrimp (Peeled, Deveined, & Washed", "1 Tablespoon Worcestershire Sauce", "1 Cup Uncooked Grits", "1 Egg (Well-Beaten", "1 Teaspoon Cajun Seasoning", "1 Teaspoon Dijon Mustard", "1 Teaspoon Garlic Powder", "1 Teaspoon Onion Powder", "1 Teaspoon Salt", "1 Teaspoon Smooked Paprika",
        "3 Cloves Garlic (Minced)", "4 Ounces Velveeta Cheese (Cubed)", "6 Ounces Cream Cheese (Cubed)", "1/4 Teaspoon Black Peeper", "1/2 Cup Butter (Melted)"],
        cookTime: "30 - 60 Minutes",
        level: "Beginner",
        image: "https://rb.gy/ms7inx",
        method: "Smoked",
        creator: "Eric and Neil",
        id: "4"
    }


];

class DataService {

        getPosts() {

            //TODO: call the API here


            //in the meantime return local data
            return temp_data;
        }

}

export default new DataService();