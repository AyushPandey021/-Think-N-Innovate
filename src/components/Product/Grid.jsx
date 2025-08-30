import React from "react";
import ChromaGrid from "./ChromaGrid";

const CardsPage = () => {
  return (
    <div className="min-h-screen  bg-gray-900 flex items-center justify-center p-8">
      <ChromaGrid columns={4} rows={3} radius={300} />
    </div>
  );
};

export default CardsPage;
