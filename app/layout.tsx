"use client";
import { Nunito } from "@next/font/google";
import FavoritableImage from "../components/FavoritableImage";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { Provider as FavoriteProvider, useFavorites } from "../state/favorite";

import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

function RootLayout({ children }: Props) {
  const [favorites] = useFavorites();

  return (
    <html className={nunito.className}>
      <head />
      <body className="max-w-screen-md m-auto p-4">
        <main className="flex flex-col gap-6">
          <Header />

          <Navigation />

          <article>{children}</article>
          <hr />

          <article>
            <h1 className="font-bold text-3xl">Favorites</h1>
            {favorites.length === 0 ? (
              <p className="text-gray-500">You have no favorites yet.</p>
            ) : (
              <section
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))",
                }}
                className="grid gap-4"
              >
                {favorites.map((image) => (
                  <FavoritableImage key={image} src={image} />
                ))}
              </section>
            )}
          </article>
        </main>
      </body>
    </html>
  );
}

export default function RootLayoutContainer(props: Props) {
  return (
    <FavoriteProvider>
      <RootLayout {...props} />
    </FavoriteProvider>
  );
}
