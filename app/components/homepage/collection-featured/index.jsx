// @flow strict
import { collections } from "@/utils/data/collections";
import Collection from "./collection";

function CollectionFeatured() {
  return (
    <section className="bg-[#D9E0EC33]">
      <div className="section-container py-16">
        <h2 className="text-[20px] sm:text-[28px] font-bold text-black mb-12 font-integralcf">
          Collection Featured NFTs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-8">
          {
            collections.map(product => (
              <Collection product={product} key={product.id} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default CollectionFeatured;