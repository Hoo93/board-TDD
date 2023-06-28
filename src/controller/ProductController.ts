import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entity/Product";

export class ProductController {
    
    private productRepository = AppDataSource.getRepository(Product);

    
    async createProduct(request:Request, response:Response) {
        return
    }
}