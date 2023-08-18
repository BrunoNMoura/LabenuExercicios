import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError";
import { CreateProductSchema } from "../dtos/createdProduct.dto";
import { ZodError } from "zod";
import { EditProductSchema } from "../dtos/editProduct.dto";
import { DeleteProductSchema } from "../dtos/deleteProduct.dto";

export class ProductController {
  constructor(private productBusiness: ProductBusiness) {}

  public createProduct = async (req: Request, res: Response) => {
    try {
      const input = CreateProductSchema.parse({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
      });

      // const productBusiness = new ProductBusiness()
      const output = await this.productBusiness.createProduct(input);

      res.status(201).send(output);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public getProducts = async (req: Request, res: Response) => {
    try {
      const input = {
        q: req.query.q,
      };

      //const productBusiness = new ProductBusiness()
      const output = await this.productBusiness.getProducts(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public editProduct = async (req: Request, res: Response) => {
    try {
      const input = EditProductSchema.parse({
        idToEdit: req.params.id,
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
      });

      //const productBusiness = new ProductBusiness()
      const output = await this.productBusiness.editProduct(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public deleteProduct = async (req: Request, res: Response) => {
    try {
      const input = DeleteProductSchema.parse({
        idToDelete: req.params.id,
      });

      //const productBusiness = new ProductBusiness()
      const output = await this.productBusiness.deleteProduct(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
}