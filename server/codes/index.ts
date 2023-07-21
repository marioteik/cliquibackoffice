import { db } from "@/db";
import { codes as codesTable, NewCode } from "@/db/schemas/codes";
import { and, eq, ExtractTablesWithRelations } from "drizzle-orm";
import { NodePgQueryResultHKT } from "drizzle-orm/node-postgres";
import { PgTransaction } from "drizzle-orm/pg-core";

export const createCode = async (
  userId: number,
  transaction?: PgTransaction<
    NodePgQueryResultHKT,
    Record<string, never>,
    ExtractTablesWithRelations<Record<string, never>>
  >
) => {
  const code: NewCode = {
    userId: userId,
    code: String(Math.floor(100000 + Math.random() * 900000)),
  };

  const insertedCode = await (transaction || db)
    .insert(codesTable)
    .values(code)
    .returning();

  return (insertedCode && insertedCode[0]) ?? null;
};

export const verifyCode = async (
  userId: number,
  code: string,
  transaction?: PgTransaction<
    NodePgQueryResultHKT,
    Record<string, never>,
    ExtractTablesWithRelations<Record<string, never>>
  >
) => {
  const codes = await (transaction || db)
    .select()
    .from(codesTable)
    .where(and(eq(codesTable.userId, userId), eq(codesTable.code, code)));

  const verifiedCode = codes.length > 0;

  if (verifiedCode) {
    await (transaction || db)
      .delete(codesTable)
      .where(and(eq(codesTable.userId, userId), eq(codesTable.code, code)));
  }

  return verifiedCode;
};
