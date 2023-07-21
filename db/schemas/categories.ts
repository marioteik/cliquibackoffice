import { InferModel, sql } from "drizzle-orm";
import {
  AnyPgColumn,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const categories = pgTable(
  "categories",
  {
    id: serial("id").primaryKey(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at"),
    deletedAt: timestamp("deleted_at"),
    title: varchar("title", { length: 255 }).notNull(),
    type: varchar("type", {
      enum: [
        "HOME",
        "RESTAURANT",
        "GROCERIES",
        "DRUGSTORE",
        "PETSTORE",
        "LIQUORSTORE",
        "SHOPPING",
        "EXPRESS",
      ],
    }).notNull(),
    parentId: integer("parent_id").references((): AnyPgColumn => categories.id),
    parentTitle: varchar("parent_title", { length: 256 }),
    imageUrl: varchar("image_url", { length: 255 }).notNull(),
    weight: integer("weight"),
  }
  // (categories) => ({
  //   parentIdNameFk: foreignKey({
  //     columns: [categories.parentId, categories.parentTitle],
  //     foreignColumns: [categories.id, categories.title],
  //   }),
  //   titleIdx: uniqueIndex("title_idx").on(categories.title),
  // })
);

export type Category = InferModel<typeof categories>;
export type NewCategory = InferModel<typeof categories, "insert">;
