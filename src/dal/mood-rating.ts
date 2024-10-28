import "server-only";

import { db } from "@/drizzle";
import * as schema from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function create(
    values: Omit<typeof schema.moodRatings.$inferInsert, "id">,
    tagIds: number[],
) {
    const id = await db.transaction(async (tx) => {
        const result = await tx
            .insert(schema.moodRatings)
            .values(values)
            .returning({ id: schema.moodRatings.id });

        const rating = result.pop()!;
        await tx
            .insert(schema.ratingTags)
            .values(tagIds.map((id) => ({ ratingId: rating.id, tagId: id })));

        return rating.id;
    });

    return id;
}

export async function getOne(id: typeof schema.moodRatings.$inferSelect.id) {
    const result = await db
        .select()
        .from(schema.moodRatings)
        .where(eq(schema.moodRatings.id, id));

    const tag = result.pop();
    return tag;
}

export async function getAll() {
    const result = await db.select().from(schema.moodRatings);

    return result;
}
