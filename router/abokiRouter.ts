import { Router } from "express";
import { createProduct, getProducts } from "../controller/abokiController.";


const router:Router = Router()

router.route("/create-product").post(createProduct)
router.route("/get-products").get(getProducts)

export default router;