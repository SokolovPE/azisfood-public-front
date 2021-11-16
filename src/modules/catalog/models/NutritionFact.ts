export default class NutritionFact {
  energy: number;

  calories: number;

  totalFat: number;

  carbohydrates: number;

  proteins: number;

  totalSugar: number;

  constructor(
    energy = 0,
    calories = 0,
    totalFat = 0,
    carbohydrates = 0,
    proteins = 0,
    totalSugar = 0,
  ) {
    this.energy = energy;
    this.calories = calories;
    this.totalFat = totalFat;
    this.carbohydrates = carbohydrates;
    this.proteins = proteins;
    this.totalSugar = totalSugar;
  }
}
