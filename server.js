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
    ],
    entrees: [
      {
        name: "Grilled Salmon",
        description:
          "Fresh salmon fillet grilled to perfection, served with steamed vegetables.",
        price: 18.99,
        sides: ["Fingerling Potatoes", "Avocado Salsa"],
      },
      {
        name: "Filet Mignon",
        description:
          "Tender filet mignon steak cooked to your preference, accompanied by garlic mashed potatoes.",
        price: 24.99,
        options: [
          {
            name: "5oz Filet Mignon",
            description:
              "A 5oz cut of our tender filet mignon, perfectly cooked.",
            price: 28.99,
            sides: ["Garlic Mashed Potatoes", "Grilled Asparagus"],
          },
          {
            name: "8oz Filet Mignon",
            description:
              "An 8oz cut of our tender filet mignon, cooked to perfection.",
            price: 34.99,
            sides: ["Garlic Mashed Potatoes", "Grilled Asparagus"],
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
      },
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
