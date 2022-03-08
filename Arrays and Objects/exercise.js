const doggo = {
    name:'jack',
    breed:'chiwawa',
    favoriteFood: ['bones','snacks'],
    printName(){
        this.favoriteFood.forEach(foodItem => console.log(foodItem))
    }
}
console.log(doggo.favoriteFood[1]);
doggo.printName();

const recipes = {
    ingredients: {
        butter:'2og',
        sugar: '50g',
        flour: '200g'
    }
  }
recipes.ingredients.ginger = 'ginger';
console.log(recipes.ingredients);
console.log(recipes);
console.log(recipes.ingredients);

recipes.ingredients.sugar = 'brown sugar';
console.log(recipes.ingredients);

