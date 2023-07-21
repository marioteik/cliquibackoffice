import { InferModel } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const codes = pgTable("codes", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  code: varchar("code", { length: 6 }).notNull(),
  userId: integer("user_id").notNull(),
});

export type Code = InferModel<typeof codes>;
export type NewCode = InferModel<typeof codes, "insert">;
