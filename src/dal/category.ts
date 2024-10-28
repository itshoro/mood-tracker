import "server-only";

import { db } from "@/drizzle";
import * as schema from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function getOne(id: typeof schema.tagCategories.$inferSelect.id) {
    const result = await db
        .select()
        .from(schema.tagCategories)
        .where(eq(schema.tagCategories.id, id));

    const tag = result.pop();
    return tag;
}

export async function getAll() {
    const result = await db.select().from(schema.tagCategories);

    return result;
}
