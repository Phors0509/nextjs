import React, {Suspense} from "react";
import Image from "next/image";
import Loading from "../loading";
import PagePagination from "@/src/components/pagePagination/PagePagination";
import {ProductType} from "@/src/constant/typeProduct";

interface ProductsType {
  products: ProductType[];
  totalPage: number;
}

const fetchProducts = async ({ page }: { page: string }): Promise<ProductsType> => {
  const pageSize = 24; // Number of products per page
  const pageNumber = parseInt(page, 10) || 1; // Ensure page is an integer, default to 1
  const skip = (pageNumber - 1) * pageSize; // Calculate the correct skip value
  const res = await fetch(`https://dummyjson.com/products?limit=${pageSize}&skip=${skip}`,{
    cache: "no-store"
  });
  const data = await res.json();
  const totalPage = Math.ceil(data.total / pageSize);
  return { products: data.products, totalPage };
};

const ProductList = async ({searchParams}: { searchParams: any  }) => {
  const {products ,totalPage} = await fetchProducts({page : searchParams.page});
  return (
    <>
      <div className="container">
        
        <div className="grid grid-cols-4">
          {products.map((item) => (
            <Suspense fallback={<Loading/>} key={item.id}>
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
                <span
                  className="mb-2 mr-2 inline-block rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-[10px] font-semibold text-gray-900 dark:text-gray-300">
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
            </Suspense>
          ))}
        </div>
      </div>
      
      <PagePagination totalPages={totalPage} currentPage={searchParams.page}/>
    </>
  
  );
};

export default ProductList;