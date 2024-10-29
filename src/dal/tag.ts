import "server-only";

import { db } from "@/drizzle";
import * as schema from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function getOne(id: typeof schema.tags.$inferSelect.id) {
    const result = await db
        .select()
        .from(schema.tags)
        .where(eq(schema.tags.id, id));

    const tag = result.pop();
    return tag;
}

export async function getByCategories(
    categoryIds: (typeof schema.tagCategories.$inferSelect.id)[],
) {
    return Object.fromEntries(
        await Promise.all(
            categoryIds.map(async (id) => [id, await getByCategory(id)]),
        ),
    );
}

export async function getByCategory(
    categoryId: typeof schema.tagCategories.$inferSelect.id,
) {
    const result = await db
        .select()
        .from(schema.tags)
        .where(eq(schema.tags.categoryId, categoryId));

    return result;
}

export async function getAll() {
    const result = await db.select().from(schema.tags);

    return result;
}
