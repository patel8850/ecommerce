import React from "react";

export const DescriptionBox = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      {/* Tabs Section */}
      <div className="flex flex-wrap sm:flex-nowrap gap-4 font-bold text-base sm:text-lg">
        <div className="flex-1 text-center border-2 border-gray-300 py-3 sm:py-5 rounded-lg cursor-pointer hover:bg-gray-50 transition">
          Description
        </div>
        <div className="flex-1 text-center border-2 border-gray-300 py-3 sm:py-5 rounded-lg text-gray-700 bg-gray-100 cursor-pointer">
          Reviews (122)
        </div>
      </div>

      {/* Description Content */}
      <div className="border-2 border-gray-300 mt-6 rounded-lg p-5 sm:p-10 bg-white text-gray-700 leading-relaxed">
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero esse
          aliquid mollitia nam dicta error tempora, fugit animi asperiores,
          tenetur dignissimos pariatur architecto perspiciatis minima hic maxime
          corporis aut maiores. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam quaerat nisi, earum recusandae adipisci repellat
          numquam sed eaque modi animi natus, id deleniti ducimus sint quas
          mollitia dolor sunt harum!
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad non quia
          ea, placeat aliquid praesentium labore nostrum soluta veritatis porro
          ipsam doloremque maxime eligendi dolores atque libero! Facere, adipisci
          dicta?
        </p>
      </div>
    </div>
  );
};
