import { Router } from 'express';
import { getProducts } from '../controllers/products.controller.js';

const ProductsRouter = Router();

ProductsRouter.get('/', getProducts);


export default ProductsRouter;