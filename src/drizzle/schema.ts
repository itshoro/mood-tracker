import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const moodRatings = sqliteTable("mood_ratings", {
    id: int().primaryKey(),
    targetDate: int({ mode: "timestamp" }).notNull(),
    rating: text({
        enum: [
            "in-love",
            "excited",
            "happy",
            "neutral",
            "angry",
            "depressed",
            "sad",
        ],
    }),
    note: text(),
    createdAt: int({ mode: "timestamp" }).default(sql`CURRENT_TIMESTAMP`),
});

export const moodTags = sqliteTable("mood_tags", {
    id: int().primaryKey(),
    name: text().notNull(),
});

export const moodRatingTags = sqliteTable("mood_rating_tags", {
    ratingId: int().references(() => moodRatings.id),
    tagId: int().references(() => moodTags.id),
});
