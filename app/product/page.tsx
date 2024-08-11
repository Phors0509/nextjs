"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ProductType } from "@/src/constant/typeProduct";

const Page = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const router = useRouter();

    useEffect(() => {
        let ignore = false;
        const fetchPosts = async () => {
            try {
                const res = await fetch(
                    `https://dummyjson.com/products?limit=12&skip=${
                        (currentPage - 1) * 12
                    }`
                );
                if (!res.ok) {
                    throw new Error(
                        "An error occurred while fetching the data"
                    );
                }
                const data = await res.json();
                if (!ignore) {
                    setProducts((prevPosts) => [
                        ...prevPosts,
                        ...data.products,
                    ]);
                    setTotalPages(Math.ceil(data.total / 12));
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchPosts();

        return () => {
            ignore = true;
        };
    }, [currentPage]);

    const handleLoadMore = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handleOnClick = (id: string) => {
        router.push(`/product/${id}`);
    };

    return (
        <>
            <div className="grid grid-cols-4 gap-3">
                {products.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="w-[370px] rounded-md border bg-white shadow-lg transition-colors duration-500"
                        >
                            <Image
                                src={item.thumbnail}
                                alt="Laptop"
                                className="h-[300px] w-full rounded-t-md object-cover"
                                width={300}
                                height={300}
                            />
                            <div className="p-4">
                                <div className="flex justify-between">
                                    <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 ">
                                        {item.title}
                                    </h1>
                                    <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 ">
                                        {item.title}
                                    </h1>
                                </div>
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
                                    onClick={() => handleOnClick(item.id)}
                                    className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition-all duration-300"
                                >
                                    Read
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            {currentPage < totalPages && (
                <div className="flex justify-center mt-4">
                    <button
                        type="button"
                        onClick={() => handleLoadMore()}
                        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white transition-all duration-300"
                    >
                        Load More
                    </button>
                </div>
            )}
        </>
    );
};

export default Page;
