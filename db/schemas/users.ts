import { InferModel, relations } from "drizzle-orm";
import {
  boolean,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { roles } from "./roles";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at"),
  deletedAt: timestamp("deleted_at"),
  email: varchar("email", { length: 255 }),
  phone: varchar("phone", { length: 14 }).notNull(),
  avatarUrl: varchar("image_url", { length: 255 }),
  username: varchar("username", { length: 255 }),
  password: varchar("password", { length: 255 }),
  role: varchar("role", { length: 255 }).default("user").notNull(),
  isActive: boolean("is_active").default(false).notNull(),
  isLoggedIn: boolean("is_logged_in").default(false).notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  roles: many(roles),
}));

export type User = InferModel<typeof users>;
export type NewUser = InferModel<typeof users, "insert">;
