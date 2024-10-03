"use client";
import Slider from "./components/Slider";
// import CategoryList from "./components/CategoryList";
// import ProductList from "./components/ProductList";
// import Skeleton from "./components/Skeleton";

// import { WixClientContext } from "./context/wixContext";
// import { useWixClient } from "./hooks/useWixClient";
// import { wixClientServer } from "./lib/wixClientServer";
// import { Suspense, useContext, useEffect } from "react";

export default function Home() {
  //find All Product

  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl text-[#4B5563]">Produit vedette</h1>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl mb-10 text-[#4B5563]">catégories</h1>
      </div>
    </div>
  );
}
