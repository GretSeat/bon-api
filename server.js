const express = require("express");
const app = express();

const PORT = 1480;

const menuData = {
  foodMenu: {
    specials: {
      daily: [
        {
          name: "",
          description: "",
          price: 0,
        },
      ],
      biweekly: [
        {
          name: "",
          description: "",
          price: 0,
        },
      ],
      seasonal: [
        {
          name: "Lobsterfest",
          description:
            "Indulge in a feast of succulent lobster dishes, a celebration of the sea's finest offerings.",
          appetizers: [
            {
              name: "Lobster Bisque",
              description:
                "Rich and creamy lobster soup with hints of sherry and aromatic spices.",
              price: 12,
            },
            {
              name: "Lobster Cocktail",
              description:
                "A Martini Glass Full of Lobster Meat, Served with Cognac Sauce",
              price: 30,
            },
          ],
          entrees: [
            {
              name: "Lobster Wedget Salad",
              description:
                "A Refreshing Seasonal Salad with Succulent Lobster Meat, Crispy Bacon, and Smoked Bleu Cheese Crumbles",
              price: 36,
            },
            {
              name: "Lazy Man's Lobster Pasta",
              description:
                "Lobster Meat, De-shelled, with Truffle Butter, Asparagus, and Served over a bed of Angel Hair Pasta",
              price: 38,
            },
            {
              name: "Baked Shrimp Stuffed Lobster",
              description:
                "Pound and a Quarter Lobster, Baked, Stuffed with Shrimp, served with Grilled Corn on the Cob, and Red-Skin Potato",
              price: 58,
            },
          ],
        },
        {
          name: "Summer Specials",
          description: "Specials that Rotate Daily",
          items: [
            {
              name: "Monday Special",
            },
            {
              name: "Tuesday Special",
            },
            {
              name: "Wednesday Special",
            },
            {
              name: "Thursday Special",
            },
            {
              name: "Friday Special",
            },
            {
              name: "Saturday Special",
            },
            {
              name: "Sunday Special",
            },
          ],
        },
      ],
    },
    appetizers: [
      {
        name: "French Onion Soup",
        description: "Caramelized Onions, Rich Broth, Swiss Cheese, Crouton",
        price: 10,
      },
      {
        name: "Classic Escargot",
        description:
          "Sweet Garlic, Butter, Herbs, Hint of Curry, Grilled Baguette. 6 to an order.",
        price: 16,
      },
      {
        name: "Steamed Mussels",
        description: "In White Wine Butter, Shallots, and Garlic Broth",
        price: 16,
      },
      {
        name: "Bon Appetit Charcuterie",
        description:
          "An Assortment of Cheeses, Meats, Condiments, Fruits - Minimum of 2 People",
        price: "14 Per Person",
      },
      {
        name: "Seared Crab Cake",
        description:
          "Handmade, Seared in Butter, Mango Remoulade, Pistachio Crumb",
        price: 24,
      },
      {
        name: "New Orleans Style BBQ Shrimp",
        description: "Pan Seared, Cajun BBQ Butter, Scallions",
        price: 17,
      },
      {
        name: "Lobster & Avocado Stack",
        description:
          "Fresh Mango, Toasted Pistachio, Cilantro, Chive Oil, Cognac Sauce",
        price: 30,
      },
      {
        name: "Sesame Crusted Ahi Tuna",
        description: "Yuzu Ponzo, Wasabi Avocado Cream, Wonton Crisp",
        price: 17,
      },
      {
        name: "Grilled Spanish Octopus",
        description:
          "Pickled & Grilled, Served Chilledd Horiatiki Style Salad, Lemon Honey Vinaigrette",
        price: 19,
      },
      {
        name: "Classic Cold Smoked Salmon",
        description:
          "On Potato Pancakes with Apple Celery Slaw, Capers, Red Onion & Mustard Dill Dressing",
        price: 18,
      },
      {
        name: "Jumbo Shrimp Cocktail",
        description: "Gin Coktail Sauce, Lemon, 6 to an Order",
        price: 18,
      },
      {
        name: "Half Shell Oysters",
        description:
          "Daily Selection, Gin Cocktail Sauce, Cucumber and Apple Mignonette",
        options: [
          {
            name: "Half Dozen Oysters",
            description: "6 Oysters",
            price: "Market Price",
          },
          {
            name: "Dozen Oysters",
            description: "12 Oysters",
            price: "Market Price",
          },
        ],
      },
      {
        name: "Grand Seafood Tower",
        description:
          "Seasonal Inspiration by Our Chefs, but usually Lobster Tail, Oysters, Shrimp, Mussels, and Stone Crab Legs",
        price: "Market Price",
      },
    ],
    entrees: [
      {
        steaksAndChops: [
          {
            name: "Kona Crusted Ribeye (16oz)",
            description: "Kona Coffee Rubbed, Congac Green Peppercorn Sauce",
            sides: ["Vegetable of the Day", "Potato of the Day"],
            price: 52,
          },
          {
            name: "New York Strip (Oscar Style) (12oz)",
            description:
              "12oz Strip Steak, Lump Blue Crab, Asparagus, Bearnaise",
            sides: ["Vegetable of the Day", "Potato of the Day"],
            price: 54,
          },
          {
            name: "Filet Mignon",
            options: [
              {
                name: "5oz Filet Mignon",
                description:
                  "A 5oz cut of our tender filet mignon, perfectly cooked.",
                price: 42,
                sides: ["Vegetable of the Day", "Potato of the Day"],
              },
              {
                name: "8oz Filet Mignon",
                description:
                  "An 8oz cut of our tender filet mignon, cooked to perfection.",
                price: 55,
                sides: ["Vegetable of the Day", "Potato of the Day"],
              },
            ],
          },
          {
            name: "Pistachio Crusted Rack of Lamb",
            description:
              "Herb Marinated, Pistachio Crust, Lamb Demi Glaze, Homemade Mint Jelly",
            sides: ["Fingerling Potatoes", "Vegetable of the Day"],
            options: [
              {
                name: "Half Rack",
                description: "4 Pieces of Lamb",
                price: 38,
              },
              {
                name: "Full Rack",
                description: "8 Pieces of Lamb",
                price: 54,
              },
            ],
          },
        ],
      },
      {
        bonAppetitClassics: [
          {
            name: "Grouper Bon Appetit",
            description:
              "Sauteed, Heirloom Tomatoes, Caper Berries, Feta, Lemon Butter Sauce",
            price: 47,
            sides: ["Fingerling Potatoes", "Cucumber Salad"],
          },
          {
            name: "Dover Sole",
            description:
              "Lightly Sauteed in Lemon Butter, Toasted Almonds, Charred Lemon, Deboned Tableside",
            price: 49,
            sides: ["Fingerling Potatoes", "Vegetable of the Day"],
          },
          {
            name: "Maple Sage Roasted Half Duckling",
            description: "Half Duckling, All Dark Meat, Maple Sage Glaze",
            price: 36,
            sides: ["Fingerling Potatoes", "Sauteed Spinach"],
          },
          {
            name: "Bouillabaisse",
            description:
              "Shrimp, Mussels, Scallops, Grouper in a Saffron Fumet, Grilled Baguette",
            price: 42,
          },
        ],
      },
      {
        composedSeasonalEntrees: [
          {
            name: "Chicken with Red Wine Demi",
            description:
              "Peal Onions, Exotic Mushrooms, Red Wine Demi Glaze, Herbs",
            sides: ["Vegetable of the Day", "Potato of the Day"],
            price: 29,
          },
          {
            name: "Pan Seared Scallops",
            desription:
              "Bronzed, Sweet Corn Broth, Crispy Panchetta, Fingerling Potatoes, Sauteed Spinach",
            price: 48,
          },
          {
            name: "Snapper and Crab Stirfry",
            description:
              "Stir Fried Mixed Asian Vegetables, with Lump Blue Crab, and Ginger Sake Glaze",
            price: 42,
          },
          {
            name: "Salmon Escabeche",
            description: "Grilled Salmon, Topped with Olive Escabeche",
            sides: ["Avocado Salsa", "Fingerling Potatoes"],
            price: 36,
          },
          {
            name: "Fettuccine Shrimp Pasta",
            description:
              "Fettuccine Pasta, Sherry Wine Cream Sauce, Asparagus Points, Heirloom Tomatoes",
            price: 32,
          },
          {
            name: "Grilled Cauliflower Picatta",
            description:
              "Steamed and Grilled Cauliflower, Caper Berries, Lemon Wine Sauce, Fingerling Potatoes, and Potato of the Day",
            price: 28,
          },
          {
            name: "Caribbean Lobster Tail",
            description:
              "Warm Water Tail, Broiled, Fluffed Out of the Shell, Served with Melted Butter and Lemon",
            sides: ["Vegetable of the Day", "Potato of the Day"],
            price: 55,
          },
        ],
      },
    ],
    salads: [
      {
        name: "Cobb Salad",
        description:
          "Chopped Lettuce, Smoked Blue Cheese, Avocado, Egg, Tomato, Scallion, Crisp Pancetta, Roasted Turkey, Classic Vinaigrette Dressing",
        price: 22,
        options: [
          {
            name: "Add Grilled Chicken",
            price: 8,
          },
          {
            name: "Add Grilled Salmon",
            price: 8,
          },
          {
            name: "Add Grilled Shrimp",
            price: 12,
          },
          {
            name: "Add Grouper",
            price: 20,
          },
        ],
      },
      {
        name: "1976 Salad",
        description: "Swiss, Smoked Ham, Salami, Parmesan, House Dressing",
        price: 17,
        options: [
          {
            name: "Add Grilled Chicken",
            price: 8,
          },
          {
            name: "Add Grilled Salmon",
            price: 8,
          },
          {
            name: "Add Grilled Shrimp",
            price: 12,
          },
          {
            name: "Add Grouper",
            price: 20,
          },
        ],
      },
      {
        name: "Burrata and Georgia Peach Salad",
        description: "",
        price: 18,
        options: [
          {
            name: "Add Grilled Chicken",
            price: 8,
          },
          {
            name: "Add Grilled Salmon",
            price: 8,
          },
          {
            name: "Add Grilled Shrimp",
            price: 12,
          },
          {
            name: "Add Grouper",
            price: 20,
          },
        ],
      },
      {
        name: "Classic Caesar Salad",
        description:
          "Croutons, White Anchovy, Parmesan Crisp, Housemade Dressing",
        price: 15,
        options: [
          {
            name: "Add Grilled Chicken",
            price: 8,
          },
          {
            name: "Add Grilled Salmon",
            price: 8,
          },
          {
            name: "Add Grilled Shrimp",
            price: 12,
          },
          {
            name: "Add Grouper",
            price: 20,
          },
        ],
      },
      {
        name: "Greek Salad",
        description:
          "Traditional Preparation, Onion, Housemade Potato Salad, Feta, White Anchovy",
        price: 16,
        options: [
          {
            name: "Add Grilled Chicken",
            price: 8,
          },
          {
            name: "Add Grilled Salmon",
            price: 8,
          },
          {
            name: "Add Grilled Shrimp",
            price: 12,
          },
          {
            name: "Add Grouper",
            price: 20,
          },
        ],
      },
      {
        name: "Small Classic Caesar Salad",
        description:
          "Croutons, White Anchovy, Parmesan Crisp, Housemade Dressing",
        price: 8,
        options: [
          {
            name: "Add Grilled Chicken",
            price: 8,
          },
          {
            name: "Add Grilled Salmon",
            price: 8,
          },
          {
            name: "Add Grilled Shrimp",
            price: 12,
          },
          {
            name: "Add Grouper",
            price: 20,
          },
        ],
      },
      {
        name: "House Salad",
        description:
          "Mixed Greens, Sunflower Seeds, Heirloom Tomatoes, Green Olives, Shaved Parmesan, Citrus Vinaigrette",
        price: 6,
        options: [
          {
            name: "Add Grilled Chicken",
            price: 8,
          },
          {
            name: "Add Grilled Salmon",
            price: 8,
          },
          {
            name: "Add Grilled Shrimp",
            price: 12,
          },
          {
            name: "Add Grouper",
            price: 20,
          },
        ],
      },
    ],
    lighterSelections: [
      {
        name: "Local Grouper Sandwich",
        description:
          "Lightly Dusted Grouper, Housemade Tartar, Lettuce, Tomato, Onion",
        price: 25,
      },
      {
        name: "The Cure Sandwich",
        description: "Capicola, Sopressata, Swiss, Arugula, Garlic Aoili",
        price: 19,
      },
      {
        name: "Bistro Burger",
        description:
          "Red Wine Caramelized Onions, Bri Cheese, Garlic Aioli, Arugula",
        price: 18,
      },
      {
        name: "Maine Lobster Roll",
        description:
          "Open Faced Sourdough, Lettuce, Topped with Maine Lobster, and a Side of Fresh Seasonal Fruits and Berries",
        price: 36,
      },
    ],
    sides: [
      {
        name: "Truffle Pasta",
        description: "Fettuccine Pasta Topped in Truffle Butter",
        price: 12,
      },
      {
        name: "Roasted Brussel Sprouts",
        description: "Candied Bacon and Balsamic Glaze",
        price: 9,
      },
      {
        name: "Rockefeller Creamed Spinach",
        description: "Sauteed Spinach, Cream, Parmesan, and Anise",
        price: 12,
      },
      {
        name: "Crab Stirfry",
        description: "Blue Crab Meat, and Asian Veggies",
        price: 18,
      },
      {
        name: "Vegetable of the Day",
        description: "A Daily Selection of Mixed Vegetables",
        price: 8,
      },
      {
        name: "Potato of the Day",
        description: "Chef Selection",
        price: 8,
      },
    ],
    desserts: [
      {
        name: "Key Lime Pie",
        description: "",
        price: 8,
      },
      {
        name: "Creme Brulee",
        description: "It's like a custard",
        price: 8,
      },
      {
        name: "Tiramisu",
        description: "Tiramisu",
        price: 8,
      },
      {
        name: "Coconut Cream Pie",
        description: "Coconut Cream Pie",
        price: 8,
      },
      {
        name: "Chocolate Mousse",
        description: "Chocolate Sauce and Whipped Cream",
        price: 8,
      },
    ],
  },
  drinkMenu: {
    specials: {
      name: "",
      description: "",
      price: 0,
    },
  },
};

// apply express.json middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  res.json(menuData);
});

app.get("/api/foodMenu", (req, res) => {
  res.json(menuData.foodMenu);
});

app.get("/api/foodMenu/:courseType", (req, res) => {
  const courseTypes = req.params.courseType.toLowerCase();
  menuData.foodMenu[courseTypes]
    ? res.json(menuData.foodMenu[courseTypes])
    : res.json(menuData.foodMenu);
});

app.get("/api/drinkMenu", (req, res) => {
  res.json(menuData.drinkMenu);
});

const port = process.env.PORT || 1480;

app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});
