import NutritionFact from '@/modules/catalog/models/NutritionFact';
import IngredientUsage from '@/modules/catalog/models/IngredientUsage';

export default class Product {
  id: string;

  title: string;

  description: string;

  imageUrl: string;

  price: number;

  categoryId: string[];

  nutritionFact: NutritionFact;

  servingSize: number;

  ingredients: IngredientUsage[];

  optionId: string[];

  constructor(
    id = '',
    title = '',
    description = '',
    imageUrl = '',
    price = 0,
    categoryId = [],
    nutritionFact = new NutritionFact(),
    servingSize = 0,
    ingredients = [],
    optionId = [],
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
    this.categoryId = categoryId;
    this.nutritionFact = nutritionFact;
    this.servingSize = servingSize;
    this.ingredients = ingredients;
    this.optionId = optionId;
  }
}
