import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  //  To get a copy of ingredients array
  getIngredients() {
    return this.ingredients.slice();
  }

  // To get a ingredient of particular index
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  //Adds one new ingredient into ingredients array and displays updated copy of ingredients array
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }


  //Adds more than one new ingredients into ingredients array and displays updated copy of ingredients array
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  // editing existing ingredient and displays updated copy of ingredients array
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  // deleting existing ingredient and displays updated copy of ingredients array
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
