"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface Post {
    userId: number;
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    category: string;
    description: string;
}
const Page = () => {
    const [products, setProducts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const res = await fetch(
                    `https://dummyjson.com/products?limit=12&skip=${
                        (currentPage - 1) * 12
                    }`
                );
                const data = await res.json();
                setProducts((prevPosts) => [...prevPosts, ...data.products]);
                setTotalPages(Math.ceil(data.total / 12)); // Assuming the API returns a 'total' field
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchPosts();
    }, [currentPage]);

    const handleLoadMore = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    return (
        <>
            <div className="grid grid-cols-4 gap-3">
                {loading && currentPage === 1 ? (
                    <h1 className="text-5xl text-white">Loading.....</h1>
                ) : (
                    products.map((item) => {
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
                                    <h1 className="inline-flex items-center text-lg font-semibold text-gray-900 ">
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
                        );
                    })
                )}
            </div>
            {currentPage < totalPages && (
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handleLoadMore}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Load More
                    </button>
                </div>
            )}
        </>
    );
};

export default Page;
