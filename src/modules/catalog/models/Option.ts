import HelperService from '@/modules/common/services/Helper.service';

export default class Option {
  id: string;

  title: string;

  imageUrl: string;

  price: number;

  public get fullUrl(): string {
    return HelperService.makeUrl(this.imageUrl || '/public/goods/placeholder.png');
  }

  constructor(
    id = '',
    title = '',
    imageUrl = '',
    price = 0,
  ) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}
