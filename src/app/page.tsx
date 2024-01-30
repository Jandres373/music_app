import React from "react";
import Navbar from "@/components/julian/navbar/Navbar";
import TrendingSongs from "../components/julian/trending_songs/Trending_songs";
const page = () => {
  return (
    <div>
      <Navbar />
      <div id="grid_container" className="grid grid-cols-12 grid-rows-8 gap-2 p-5">
        <section className="col-span-8 row-span-8">
          <div className="grid grid-cols-12 grid-rows-12 gap-2 border border-red-500 border-dashed">
            <div className="col-span-12 row-span-6">
              <TrendingSongs />
            </div>
            <div className="col-span-5 row-span-6 bg-red-50">a</div>
            <div className="col-span-7 row-span-6 bg-green-50">b</div>
          </div>
        </section>
        <section className="col-span-4 row-span-8 bg-blue-50">e</section>
      </div>
    </div>
  );
};

export default page;
