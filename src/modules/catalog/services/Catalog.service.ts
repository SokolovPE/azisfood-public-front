import Category from '@/modules/catalog/models/Category';

interface ICatalogService {
  getCategories() : Promise<Category[]>;
}

class CatalogService implements ICatalogService {
  private API_URL = 'https://localhost:5001';

  public getCategories() : Promise<Category[]> {
    return fetch(`${this.API_URL}/api/v1/Category`).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json().then((data) => data as Category[]);
    });
  }
}

export default new CatalogService();
