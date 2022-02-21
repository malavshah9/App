import { ProductModel } from "../models/product.model";

export class Product {
  async addProduct(productName: string, productDescription: string) {
    try {
      const response = new ProductModel({
        name: productName,
        description: productDescription,
      });
      return response;
    } catch (err) {
      return err;
    }
  }
}
