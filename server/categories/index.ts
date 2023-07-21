import { cache } from "react";
import { db } from "@/db";
import { categories as categoriesTable } from "@/db/schemas/categories";

export const preloadCategories = () => {
  void getCategories();
};

export const getCategories = cache(async () => {
  return db.select().from(categoriesTable);
});
