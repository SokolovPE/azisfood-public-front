export default class IngredientUsage {
  ingredientId: string;

  amount: number;

  toggleable: boolean;

  constructor(ingredientId = '', amount = 0, toggleable = false) {
    this.ingredientId = ingredientId;
    this.amount = amount;
    this.toggleable = toggleable;
  }
}
