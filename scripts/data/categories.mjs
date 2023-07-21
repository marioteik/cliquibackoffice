import { sql } from "drizzle-orm";

const newCategories = [
  {
    id: 1,
    title: "Home",
    type: "HOME",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg",
    weight: 1,
  },
  {
    id: 2,
    title: "Restaurante",
    type: "RESTAURANT",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg",
    weight: 2,
    parentId: 1,
  },
  {
    id: 3,
    title: "Mercado",
    type: "GROCERIES",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg",
    parentId: 1,
    weight: 3,
  },
  {
    id: 4,
    title: "Farmácia",
    type: "DRUGSTORE",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg",
    parentId: 1,
    weight: 4,
  },
  {
    id: 5,
    title: "Pet",
    type: "PETSTORE",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg",
    parentId: 1,
    weight: 5,
  },
  {
    id: 6,
    title: "Bebidas",
    type: "LIQUORSTORE",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg",
    parentId: 1,
    weight: 6,
  },
  {
    id: 7,
    title: "Shopping",
    type: "SHOPPING",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg",
    parentId: 1,
    weight: 7,
  },
  {
    id: 8,
    title: "Express",
    type: "EXPRESS",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg",
    parentId: 1,
    weight: 8,
  },
];

export async function seedCategories(db) {
  const insertedCategories = await db.execute(
    sql.raw(`INSERT INTO
            categories (id, title, type, image_url, weight, parent_id)
        VALUES 
            ${newCategories
              .map(
                (c) =>
                  `(${c.id}, '${c.title}', '${c.type}', '${c.imageUrl}', ${
                    c.weight ?? null
                  }, ${c.parentId ?? null})`
              )
              .join(", ")}
        ON CONFLICT DO NOTHING
        RETURNING *`)
  );

  console.log(`Seeded ${insertedCategories.rowCount} categories.`);

  return {
    insertedCategories,
  };
}
