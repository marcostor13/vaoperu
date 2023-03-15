import { CProduct, ICategoryProduct } from './../../modules/provider/modules/product/models/product';

export interface IFormatProduct extends ICategoryProduct {
  products: CProduct[]
}
