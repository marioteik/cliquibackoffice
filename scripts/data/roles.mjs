import * as bcrypt from "bcrypt";
import dotenv from "dotenv";
import { sql } from "drizzle-orm";

dotenv.config({ path: "./.env.local" });

const newRoles = [
  {
    id: 1,
    role: "admin",
    userId: 1,
  },
];

export async function seedRoles(db) {
  const insertedRoles = await db.execute(
    sql.raw(`INSERT INTO
            roles (id, role, user_id)
        VALUES 
            ${newRoles
              .map((c, index) => `(${c.id}, '${c.role}', ${c.userId})`)
              .join(", ")}
        ON CONFLICT DO NOTHING
        RETURNING *`)
  );

  console.log(`Seeded ${insertedRoles.rowCount} roles.`);

  return {
    insertedRoles,
  };
}
