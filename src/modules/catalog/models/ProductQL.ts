import NutritionFact from '@/modules/catalog/models/NutritionFact';
import IngredientUsage from '@/modules/catalog/models/IngredientUsage';
import HelperService from '@/modules/common/services/Helper.service';
import Option from '@/modules/catalog/models/Option';

export default class ProductQL {
  id: string;

  title: string;

  description: string;

  imageUrl: string;

  price: number;

  categoryId: string[];

  nutritionFact: NutritionFact;

  servingSize: number;

  ingredients: IngredientUsage[];

  optionId: Option[];

  public get fullUrl(): string {
    return HelperService.makeUrl(this.imageUrl || '/public/goods/placeholder.png');
  }
}
