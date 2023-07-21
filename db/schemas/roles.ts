import { InferModel, relations } from "drizzle-orm";
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

import { users } from "./users";

export const roles = pgTable("roles", {
  id: serial("id").primaryKey(),
  role: text("role", {
    enum: ["user", "admin", "backoffice", "restaurant", "delivery"],
  })
    .default("user")
    .notNull(),
  userId: integer("user_id").notNull(),
});

export const rolesRelations = relations(roles, ({ one }) => ({
  user: one(users, { fields: [roles.userId], references: [users.id] }),
}));

export type Role = InferModel<typeof roles>;
export type NewRole = InferModel<typeof roles, "insert">;
