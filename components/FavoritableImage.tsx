"use client";

import { useFavorites } from "../state/favorite";

const FavoritableImage = ({ src }: { src: string }) => {
  const [favorites, toggleFavorite] = useFavorites();
  const isFavorite = favorites.includes(src);

  return (
    <div className="relative">
      <img className="w-full h-64 object-cover" src={src} alt="dog" />
      <button
        className={`absolute w-8 h-8 bottom-4 right-4 flex items-center justify-center bg-white rounded-full ${
          isFavorite ? "text-yellow-500" : "text-black"
        }`}
        onClick={() => toggleFavorite(src)}
      >
        {isFavorite ? "★" : "☆"}
      </button>
    </div>
  );
};

export default FavoritableImage;
