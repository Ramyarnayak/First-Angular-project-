import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // To access parameter passed on URL 
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];   // '+' indicates id is a number
          this.recipe = this.recipeService.getRecipe(this.id);    //To fetch recipe of that id
        }
      );
  }

  // Adds entered ingredient of particular recipe to shopping list
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  //Navigates to edit page from current page
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  // Deletes recipe of particular id and naviagate to recipe page
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
