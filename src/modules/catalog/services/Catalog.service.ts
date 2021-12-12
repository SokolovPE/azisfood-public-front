/* eslint-disable class-methods-use-this */
import { plainToInstance } from 'class-transformer';
import Category from '@/modules/catalog/models/Category';
import Product from '@/modules/catalog/models/Product';

interface ICatalogService {
  getCategories(): Promise<Category[]>;

  getProducts(categoryId: string): Promise<Product[]>;
}

class CatalogService implements ICatalogService {
  public getCategories(): Promise<Category[]> {
    return fetch(`${process.env.VUE_APP_API_URL}/api/v1/Category`).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json().then((data) => plainToInstance(Category, data));
    });
  }

  public getProducts(categoryId = ''): Promise<Product[]> {
    let url = `${process.env.VUE_APP_API_URL}/api/v1/Product`;
    if (categoryId !== undefined && categoryId !== '') {
      url += `/Category/${categoryId}`;
    }

    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json().then((data) => plainToInstance(Product, data));
    });
  }
}

export default new CatalogService();
