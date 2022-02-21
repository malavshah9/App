import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
});

export const ProductModel = mongoose.model("product", productSchema);
