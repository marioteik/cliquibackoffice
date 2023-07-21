import * as bcrypt from "bcrypt";
import dotenv from "dotenv";
import { sql } from "drizzle-orm";

dotenv.config({ path: "./.env.local" });

const newUsers = [
  {
    id: 1,
    email: "mario.teik@gmail.com",
    phone: "+5517991449166",
    username: "marioteik",
    imageUrl: "https://avatars.githubusercontent.com/u/100001?v=4",
    password: process.env.ADMIN_PASSWORD,
  },
];

export async function seedUsers(db) {
  const userHashes = [];
  const saltRounds = 10;

  await Promise.all(
    newUsers.map(async (user) => {
      userHashes.push(await bcrypt.hash(user.password, saltRounds));
    })
  );

  const insertedUsers = await db.execute(
    sql.raw(`INSERT INTO
            users (id, email, phone, username, image_url, password)
        VALUES 
            ${newUsers
              .map(
                (c, index) =>
                  `(${c.id}, '${c.email}', '${c.phone}', '${c.username}', ${
                    c.imageUrl ? "'" + c.imageUrl + "'" : null
                  }, '${userHashes[index]}')`
              )
              .join(", ")}
        ON CONFLICT DO NOTHING
        RETURNING *`)
  );

  console.log(`Seeded ${insertedUsers.rowCount} users.`);

  return {
    insertedUsers,
  };
}
