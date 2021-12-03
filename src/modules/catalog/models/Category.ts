export default class Category {
  id: string;

  title: string;

  subCategories: string[];

  order: number;

  constructor(id = '', title = '', subCategories = [], order = 0) {
    this.id = id;
    this.title = title;
    this.subCategories = subCategories;
    this.order = order;
  }
}
