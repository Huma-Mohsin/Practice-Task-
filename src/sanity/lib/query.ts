import { defineQuery } from "next-sanity";

export const Fetch_All_Products = defineQuery(`*[_type=="product"]{
    _id, 
    name, 
    description, 
    price, 
    discountPercentage, 
    priceWithoutDiscount, 
    rating, 
    ratingCount, 
    tags, 
    sizes, 
    "imageUrl": image.asset->url
  }`);
  