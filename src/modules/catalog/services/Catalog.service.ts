import Category from '@/modules/catalog/models/Category';
import Product from '@/modules/catalog/models/Product';

interface ICatalogService {
  getCategories(): Promise<Category[]>;

  getProducts(categoryId: string): Promise<Product[]>;
}

class CatalogService implements ICatalogService {
  private API_URL = 'https://localhost:5001';

  public getCategories(): Promise<Category[]> {
    return fetch(`${this.API_URL}/api/v1/Category`).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json().then((data) => data as Category[]);
    });
  }

  public getProducts(categoryId = ''): Promise<Product[]> {
    let url = `${this.API_URL}/api/v1/Product`;
    if (categoryId !== undefined && categoryId !== '') {
      url += `/Category/${categoryId}`;
    }

    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json().then((data) => data as Product[]);
    });
  }
}

export default new CatalogService();
