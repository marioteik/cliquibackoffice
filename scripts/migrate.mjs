import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import pg from "pg";

dotenv.config({ path: './.env.local' });

import { seed } from "./seed.mjs";
import {log} from "./terminalColors.mjs";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

(async () => {
  const db = drizzle(pool);

  log.blue("Migrating database\n");

  await migrate(db, { migrationsFolder: "./migrations" });

  console.log("Seeding database:");

  await seed(db);

  log.green("\nDone!");
})();
