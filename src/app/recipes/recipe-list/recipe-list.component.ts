import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'Pizza de Calabresa', 'http://okdelivery.com.br/img/pizzas/salgada/calabresa.jpg'),
    new Recipe('Macarronada de Carne Moida', 'Macarronada de Carne Moida', 'https://s-media-cache-ak0.pinimg.com/736x/02/34/49/0234495720854991ec93539f3798cf10.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
