import { Request, Response } from "express";
import abokiModel from "../model/abokiModel";


export const createProduct = async(req:Request, res:Response) =>{
    try {
        const {product, price, quantity} = req.body

        const createAproduct = await abokiModel.create({product, price, quantity})

        return res.status(201).json({
            message:"Creatied product succesfully!",
            data:createAproduct
        })
    } catch (error) {
        return res.status(404).json({
            message:"Error in creating product"
        })
    }
}

export const getProducts = async(req:Request, res:Response) =>{
    try {

        const createAproduct = await abokiModel.find()

        return res.status(201).json({
            message:"Creatied product succesfully!",
            data:createAproduct
        })
    } catch (error) {
        return res.status(404).json({
            message:"Error in creating product"
        })
    }
}