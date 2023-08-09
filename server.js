const express = require("express");
const app = express();

const PORT = 3002;

const menuData = {
  menu: {
    specials: {
      daily: [
        {
          name: "Daily Pasta Delight",
          description:
            "Delicious pasta dish crafted by our chef using seasonal ingredients.",
          price: 14.99,
        },
        {
          name: "Catch of the Day",
          description:
            "Freshly caught seafood, grilled to perfection, and served with steamed vegetables.",
          price: 17.99,
        },
      ],
      biweekly: [
        {
          name: "Farm-to-Table Feast",
          description:
            "A rotating selection of dishes featuring locally sourced ingredients.",
          price: 19.99,
        },
        {
          name: "Savory Steak Sampler",
          description:
            "A trio of steak cuts, each prepared with a unique marinade and served with your choice of sides.",
          price: 22.99,
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
              price: 9.99,
            },
          ],
          entrees: [
            {
              name: "Lobster Tail Entree",
              description:
                "A hearty lobster tail served with garlic butter, accompanied by roasted vegetables.",
              price: 32.99,
            },
          ],
        },
        {
          name: "Summer Specials",
          description: "Specials that rotate daily",
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
        description: "It's French Onion Soup",
        price: 10,
      },
      {
        name: "Classic Escargot",
        description: "6 Snails, Dead",
        price: 16,
      },
      {
        name: "Grilled Spanish Octopus",
        description: "",
        price: 19,
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
    ],
    entrees: [
      {
        steaksAndChops: [
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
        composedSeasonalEntrees: [{}, {}, {}, {}, {}, {}, {}],
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
    ],
    sides: [
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
      {},
      {},
      {},
      {},
    ],
    desserts: [
      {
        name: "Creme Brulee",
        description: "It's like a custard",
        price: 8,
      },
      {
        name: "Chocolate Mousse",
        description: "Chocolate Sauce and Whipped Cream",
        price: 5,
      },
    ],
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  res.json(menuData);
});

app.get("/api/menu", (req, res) => {
  res.json(menuData.menu);
});

app.get("/api/menu/:courseType", (req, res) => {
  const courseTypes = req.params.courseType.toLowerCase();
  if (menuData.menu[courseTypes]) {
    res.json(menuData.menu[courseTypes]);
  }
});

app.listen(PORT, () => {
  console.log(`Server is Running on Port:${PORT}!`);
});
