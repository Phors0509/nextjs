import Image from "next/image";
import React, {Suspense} from "react";
import Loading from "../loading";

interface Post {
    userId: number;
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    category: string;
    description: string;
}

interface ProductsType {
    products: Post[];
}

const fetchProducts = async (): Promise<ProductsType> => {
    const res = await fetch("https://dummyjson.com/products", {
        cache: "no-store",
    });
    return await res.json();
};

const ProductList = async () => {
    const { products } = await fetchProducts();

    return (
        <div className="grid grid-cols-4">
            <Suspense fallback={<Loading />}>
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="w-[365px] rounded-md border bg-white shadow-lg transition-colors duration-500"
                    >
                        <Image
                            src={item.thumbnail}
                            alt={item.title}
                            className="h-[300px] w-full rounded-t-md object-cover"
                            width={300}
                            height={300}
                        />
                        <div className="p-4">
                            <h1 className="inline-flex items-center text-lg font-semibold text-gray-900">
                                {item.title}
                            </h1>
                            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                                {item.description}
                            </p>
                            <div className="mt-4">
                                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-[10px] font-semibold text-gray-900 dark:text-gray-300">
                                    {item.category}
                                </span>
                            </div>
                            <button
                                type="button"
                                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition-all duration-300"
                            >
                                Read
                            </button>
                        </div>
                    </div>
                ))}
            </Suspense>
        </div>
    );
};

export default ProductList;
