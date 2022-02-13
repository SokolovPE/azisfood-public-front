/* eslint-disable class-methods-use-this */
import { plainToInstance } from 'class-transformer';
import Category from '@/modules/catalog/models/Category';
import Product from '@/modules/catalog/models/Product';

/** Service to communicate with catalog */
interface ICatalogService {
  /** Retrieve all categories from server */
  getCategories(): Promise<Category[]>;

  /**
   * Retrieve products from server
   * @param {string} categoryId Id of desired category
   * @returns {Product[]}
   * */
  getProducts(categoryId: string): Promise<Product[]>;

  /**
   * Retrieve single product from server by id
   * @param {string} productId Id of desired product
   * @returns {Product}
   * */
  getProduct(productId: string): Promise<Product>;
}

class CatalogService implements ICatalogService {
  /** {@inheritDoc ICatalogService.getCategories} */
  public getCategories(): Promise<Category[]> {
    return fetch(`${process.env.VUE_APP_API_URL}/api/v1/Category`).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return response.json().then((data) => plainToInstance(Category, data) as Category[]);
    });
  }

  /** {@inheritDoc ICatalogService.getProducts} */
  public getProducts(categoryId = ''): Promise<Product[]> {
    let url = `${process.env.VUE_APP_API_URL}/api/v1/Product`;
    if (categoryId !== undefined && categoryId !== '') {
      url += `/Category/${categoryId}`;
    }

    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return response.json().then((data) => plainToInstance(Product, data) as Product[]);
    });
  }

  /** {@inheritDoc ICatalogService.getProduct} */
  public getProduct(productId: string): Promise<Product> {
    if (productId === undefined || productId === '') {
      throw new Error('Product id must be provided to use this function');
    }
    const url = `${process.env.VUE_APP_API_URL}/api/v1/Product/${productId}`;
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json().then((data) => plainToInstance(Product, data) as Product);
    });
  }
}

export default new CatalogService();
