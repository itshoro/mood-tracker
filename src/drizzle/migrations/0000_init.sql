CREATE TABLE IF NOT EXISTS `mood_ratings` (
	`id` integer PRIMARY KEY NOT NULL,
	`targetDate` integer NOT NULL,
	`rating` text,
	`note` text,
	`createdAt` integer DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `mood_rating_tags` (
	`ratingId` integer,
	`tagId` integer,
	FOREIGN KEY (`ratingId`) REFERENCES `mood_ratings`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`tagId`) REFERENCES `mood_tags`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `tag_categories` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `mood_tags` (
	`id` integer PRIMARY KEY NOT NULL,
	`categoryId` integer NOT NULL,
	`name` text NOT NULL,
	FOREIGN KEY (`categoryId`) REFERENCES `tag_categories`(`id`) ON UPDATE no action ON DELETE no action
);
