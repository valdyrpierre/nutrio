// Parent class
class Food {
    constructor(name, tags, caloriesPerServing, ingredients) {
        this.name = name;
        this.tags = tags;
        this.caloriesPerServing = caloriesPerServing; // Replace price with caloriesPerServing
        this.ingredients = ingredients;
    }

    // Method to display food details
    displayDetails() {
        return `${this.name} - ${this.caloriesPerServing} calories per serving, Tags: ${this.tags.join(", ")}`;
    }
}

// Subclass for Vegetarian foods
class VegetarianFood extends Food {
    constructor(name, caloriesPerServing, ingredients) {
        super(name, ["vegetarian"], caloriesPerServing, ingredients); // Add "vegetarian" tag by default
    }
}

// Subclass for Seafood
class SeafoodFood extends Food {
    constructor(name, caloriesPerServing, ingredients) {
        super(name, ["seafood"], caloriesPerServing, ingredients); // Add "seafood" tag by default
    }
}

// Subclass for Pasta
class PastaFood extends Food {
    constructor(name, caloriesPerServing, ingredients) {
        super(name, ["pasta"], caloriesPerServing, ingredients); // Add "pasta" tag by default
    }
}

// Subclass for Dairy-based foods
class DairyFood extends Food {
    constructor(name, caloriesPerServing, ingredients) {
        super(name, ["dairy"], caloriesPerServing, ingredients); // Add "dairy" tag by default
    }
}

// Example food items
const foodData = [
    // Vegetarian food items
    new VegetarianFood("Vegetable Salad", 150, ["lettuce", "tomatoes", "cucumbers"]),
    new VegetarianFood("Vegetable Soup", 120, ["carrots", "potatoes", "onions"]),
    new VegetarianFood("Vegetable Stir Fry", 200, ["broccoli", "carrots", "soy sauce", "tofu"]),
    new VegetarianFood("Grilled Veggie Wrap", 250, ["tortilla", "zucchini", "bell peppers", "hummus"]),
    new VegetarianFood("Caprese Salad", 300, ["tomatoes", "mozzarella", "basil", "balsamic vinegar"]),
    new VegetarianFood("Vegetable Curry", 350, ["potatoes", "carrots", "peas", "coconut milk", "curry spices"]),
    new VegetarianFood("Avocado Toast", 180, ["bread", "avocado", "olive oil", "salt"]),
    new VegetarianFood("Stuffed Bell Peppers", 400, ["bell peppers", "rice", "black beans", "cheese"]),
    new VegetarianFood("Minestrone Soup", 220, ["vegetables", "beans", "pasta", "tomato broth"]),
    new VegetarianFood("Falafel Wrap", 300, ["falafel", "tortilla", "lettuce", "tahini"]),

    // Seafood food items
    new SeafoodFood("Grilled Salmon", 350, ["salmon", "lemon", "olive oil", "fish"]),
    new SeafoodFood("Shrimp Scampi", 400, ["shrimp", "garlic", "butter", "pasta"]),
    new SeafoodFood("Tuna Poke Bowl", 450, ["tuna", "rice", "seaweed", "soy sauce"]),
    new SeafoodFood("Shrimp Tacos", 300, ["shrimp", "tortilla", "avocado", "lime"]),
    new SeafoodFood("Fish and Chips", 600, ["cod", "potatoes", "flour", "oil"]),
    new SeafoodFood("Lobster Bisque", 500, ["lobster", "cream", "spices"]),
    new SeafoodFood("Sushi Roll", 250, ["rice", "nori", "salmon", "avocado"]),
    new SeafoodFood("Crab Cakes", 400, ["crab meat", "breadcrumbs", "mayonnaise", "mustard"]),
    new SeafoodFood("Clam Chowder", 350, ["clams", "potatoes", "cream", "celery"]),
    new SeafoodFood("Grilled Shrimp Skewers", 300, ["shrimp", "lemon", "garlic", "olive oil"]),

    // Pasta food items
    new PastaFood("Pasta Alfredo", 600, ["pasta", "cream", "parmesan"]),
    new PastaFood("Spaghetti Carbonara", 700, ["spaghetti", "egg", "parmesan", "bacon"]),
    new PastaFood("Mac and Cheese", 500, ["macaroni", "cheddar", "milk", "butter"]),
    new PastaFood("Penne Arrabbiata", 450, ["penne", "tomato sauce", "chili flakes", "garlic"]),
    new PastaFood("Fettuccine Alfredo", 650, ["fettuccine", "cream", "parmesan", "butter"]),
    new PastaFood("Ravioli", 550, ["ravioli", "ricotta", "tomato sauce", "parmesan"]),
    new PastaFood("Baked Ziti", 600, ["ziti", "ricotta", "tomato sauce", "mozzarella"]),

    // Dairy-based food items
    new DairyFood("Chicken Salad", 300, ["chicken", "lettuce", "tomatoes", "olive oil"]),
    new DairyFood("Cheese Pizza", 700, ["pizza dough", "mozzarella", "tomato sauce", "basil"]),
    new DairyFood("Greek Yogurt Parfait", 200, ["greek yogurt", "granola", "berries"]),
    new DairyFood("Ice Cream Sundae", 300, ["ice cream", "chocolate syrup", "whipped cream", "cherry"]),
    new DairyFood("Milkshake", 400, ["milk", "ice cream", "syrup"]),
    new DairyFood("Cheesecake", 500, ["cream cheese", "sugar", "graham crackers", "butter"]),
    new DairyFood("Chocolate Fondue", 600, ["chocolate", "cream", "strawberries", "marshmallows"]),
    new DairyFood("Butter Croissant", 250, ["flour", "butter", "sugar", "yeast"])
];

// Example: Display details of all foods
foodData.forEach(food => {
    console.log(food.displayDetails());
});