import { seedCategories } from "./data/categories.mjs";
import { seedRoles } from "./data/roles.mjs";
import { seedUsers } from "./data/users.mjs";

export async function seed(db) {
  await seedCategories(db);
  await seedUsers(db);
  await seedRoles(db);
}
