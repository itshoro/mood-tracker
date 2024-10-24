"use client";

import {
    availableMoods,
    type Mood,
    MoodInput,
} from "./components/mood-selection";
import { MoodThinking } from "./components/icons/mood-thinking";
import React, { useState } from "react";
import { EventSelection } from "./components/event-selection";
import { availableEvents } from "./components/event-selection";
import { moodMap } from "./components/mood-selection";

export default function Home() {
    return (
        <main className="p-4">
            <div className="flex flex-col">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Welcome,
                    </h1>
                    <h1 className="text-3xl font-bold text-slate-800">
                        Melanie
                    </h1>
                </div>

                <p className="mt-8 text-sm font-semibold text-slate-600">
                    Saturday, October 19
                </p>
                <form>
                    <section>
                        <h2 className="mb-6 text-2xl font-medium text-slate-800">
                            How are you feeling today?
                        </h2>
                        <div className="rounded-lg p-4 font-semibold">
                            <MoodSelector />
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-6 mt-12 text-2xl font-medium text-slate-800">
                            Today's events
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {availableEvents.map((event) => (
                                <EventSelection
                                    key={event}
                                    event={event}
                                ></EventSelection>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-6 mt-12 text-2xl font-medium text-slate-800">
                            My diary
                        </h2>
                        <div>
                            <label htmlFor="notice"></label>
                            <textarea
                                id="notice"
                                name="notice"
                                className="h-48 w-full rounded-lg border border-gray-200 p-4 font-semibold text-slate-800 outline-none focus:border-transparent focus:ring-2 focus:ring-black focus:ring-offset-4"
                                placeholder="Lorem Ipsum..."
                            ></textarea>
                        </div>
                    </section>

                    <div className="sticky bottom-2 mt-8 flex justify-center">
                        <button
                            className="text-skate-800 bg w-full rounded-lg bg-amber-300 py-4 text-lg font-semibold text-slate-900 focus:ring-2 focus:ring-amber-300 focus:ring-offset-4"
                            type="submit"
                        >
                            Save your feelings!
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

const MoodSelector = () => {
    const [selectedMood, setSelectedMood] = useState<Mood>();

    return (
        <>
            <MoodPreview mood={selectedMood} />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {availableMoods.map((mood) => (
                    <MoodInput
                        key={mood}
                        mood={mood}
                        moodChecked={selectedMood}
                        onChange={(event) => {
                            setSelectedMood(event.target.value as Mood);
                        }}
                    />
                ))}
            </div>
        </>
    );
};

type MoodPreviewProps = {
    mood?: Mood;
};

const MoodPreview = ({ mood }: MoodPreviewProps) => {
    if (mood === undefined) {
        return (
            <div className="flex flex-col items-center text-slate-800">
                <MoodThinking size="size-24" />
                <p className="mt-4">You haven't selected a mood yet.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center text-slate-800">
            {React.cloneElement(moodMap[mood].icon, { size: "size-24" })}
            <p className="mt-4">{moodMap[mood].label}</p>
        </div>
    );
};
