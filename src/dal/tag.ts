import "server-only";

import { db } from "@/drizzle";
import * as schema from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function create(
    values: Omit<typeof schema.tags.$inferInsert, "id">,
) {
    const id = await db
        .insert(schema.tags)
        .values(values)
        .returning({ id: schema.tags.id });

    return id;
}

export async function getOne(id: typeof schema.tags.$inferSelect.id) {
    const result = await db
        .select()
        .from(schema.tags)
        .where(eq(schema.tags.id, id));

    const tag = result.pop();
    return tag;
}

export async function getAll() {
    const result = await db.select().from(schema.tags);

    return result;
}
