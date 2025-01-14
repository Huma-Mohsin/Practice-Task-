import Fetch_Data_By_Sanity from "@/sanity/lib/fetch";
import { Fetch_All_Products } from "@/sanity/lib/query";
import Image from "next/image";

// Define the product type
type ProductsType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  sizes: string[];
  imageUrl: string;
};

// Main component
export default async function Home() {
  // Fetch products using the Sanity query
  const products: ProductsType[] = await Fetch_Data_By_Sanity({
    query: Fetch_All_Products,
  });

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-200 ">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-green-600">
          Learning to Import External API Data to Sanity.io
        </h1>
        <h2 className="text-xl font-semibold text-purple-600 mt-4">
          Practice Ecommerce API for Frontend Hackathon 3
        </h2>
        <h3 className="text-lg text-orange-500 mt-2 font-semibold">
          Mock API Provided By Sir Ali Jawwad
        </h3>
      </header>

      {/* Products Grid Section */}
      <section>
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-12">
          Our Featured Products
        </h2>

        {/* Grid for Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((productItem) => (
            <div
              key={productItem._id}
              className="bg-gray-50 shadow-lg rounded-lg overflow-hidden group flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Product Image */}
              <div className="relative w-full h-56">
                <Image
                  src={productItem.imageUrl}
                  alt={productItem.name}
                  layout="fill"
                  className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300 mt-4"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow mt-8">
                <h3 className="text-2xl font-bold text-gray-800">
                  {productItem.name}
                </h3>
                <p className="text-gray-600 text-[18px] my-2">
                  {productItem.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-2xl font-bold text-purple-600">
                    ${productItem.price}
                  </span>
                  {productItem.discountPercentage > 0 && (
                    <span className="text-sm line-through text-gray-500">
                      ${productItem.priceWithoutDiscount}
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 text-lg">
                    {"★".repeat(Math.floor(productItem.rating))}
                  </span>
                  <span className="ml-2 text-lg text-gray-500">
                    ({productItem.ratingCount} reviews)
                  </span>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {productItem.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 text-sm font-bold px-3 py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Available Sizes */}
                <div className="mt-4 flex flex-row">
                  <span className="text-lg font-semibold text-gray-600">
                    Available Sizes - 
                  </span>
                  {productItem.sizes && productItem.sizes.length > 0 ? (
                    <div className="flex flex-wrap gap-4 mt-2">
                      {productItem.sizes.map((size, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-800 text-lg px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-200 transition-colors"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[16px] text-red-500 px-2">
                      No sizes available
                    </p>
                  )}
                </div>

                {/* Add to Cart Button */}
                <div className="p-4 text-center mt-auto">
                  <button className="bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-600 transition-colors text-lg mx-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
