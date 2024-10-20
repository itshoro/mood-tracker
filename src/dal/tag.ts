import "server-only";

import { db } from "@/drizzle";
import * as schema from "@/drizzle/schema";
import { eq } from "drizzle-orm";

type TagId = typeof schema.moodTags.$inferSelect.id;

export async function create(name: string) {
    const id = await db
        .insert(schema.moodTags)
        .values({ name })
        .returning({ id: schema.moodTags.id });

    return id;
}

export async function getOne(id: TagId) {
    const result = await db
        .select()
        .from(schema.moodTags)
        .where(eq(schema.moodTags.id, id));

    const tag = result.pop();
    return tag;
}

export async function getAll() {
    const result = await db.select().from(schema.moodTags);

    return result;
}
