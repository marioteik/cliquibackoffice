import { db } from "@/db";
import { NewUser, User, users as usersTable } from "@/db/schemas/users";
import { eq, ExtractTablesWithRelations } from "drizzle-orm";
import { NodePgQueryResultHKT } from "drizzle-orm/node-postgres";
import { PgTransaction } from "drizzle-orm/pg-core";

export const findUser = async (id: number) => {
  return db.select().from(usersTable).where(eq(usersTable.id, id));
};

export const findUserByPhone = async (
  phone: string,
  transaction?: PgTransaction<
    NodePgQueryResultHKT,
    Record<string, never>,
    ExtractTablesWithRelations<Record<string, never>>
  >
) => {
  const user = await (transaction || db)
    .select()
    .from(usersTable)
    .where(eq(usersTable.phone, phone));

  return (user && user[0]) ?? null;
};

export const insertUserByPhone = async (
  phone: string,
  transaction?: PgTransaction<
    NodePgQueryResultHKT,
    Record<string, never>,
    ExtractTablesWithRelations<Record<string, never>>
  >
) => {
  const user: NewUser = {
    phone: phone,
  };

  const insertedUser = await (transaction || db)
    .insert(usersTable)
    .values(user)
    .returning();

  return (insertedUser && insertedUser[0]) ?? null;
};

export const activeUserByPhone = async (
  phone: string,
  transaction?: PgTransaction<
    NodePgQueryResultHKT,
    Record<string, never>,
    ExtractTablesWithRelations<Record<string, never>>
  >
) => {
  const updatedUser = await (transaction || db)
    .update(usersTable)
    .set({ isActive: true })
    .where(eq(usersTable.phone, phone))
    .returning({ updatedId: usersTable.id });

  return (updatedUser && updatedUser[0]) ?? null;
};

export const activeAndLogInUserByPhone = async (
  phone: string,
  transaction?: PgTransaction<
    NodePgQueryResultHKT,
    Record<string, never>,
    ExtractTablesWithRelations<Record<string, never>>
  >
) => {
  const updatedUser = await (transaction || db)
    .update(usersTable)
    .set({ isActive: true, isLoggedIn: true })
    .where(eq(usersTable.phone, phone))
    .returning({ updatedId: usersTable.id });

  return (updatedUser && updatedUser[0]) ?? null;
};

export const logOutUserById = async (
  id: number,
  transaction?: PgTransaction<
    NodePgQueryResultHKT,
    Record<string, never>,
    ExtractTablesWithRelations<Record<string, never>>
  >
) => {
  const updatedUser = await (transaction || db)
    .update(usersTable)
    .set({ isLoggedIn: false })
    .where(eq(usersTable.id, id))
    .returning({ updatedId: usersTable.id });

  return (updatedUser && updatedUser[0]) ?? null;
};
