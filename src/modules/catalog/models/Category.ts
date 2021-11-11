export default class Category {
  id: string;

  title: string;

  subCategories: string[];

  constructor(id = '', title = '', subCategories = []) {
    this.id = id;
    this.title = title;
    this.subCategories = subCategories;
  }
}
