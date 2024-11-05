"use client";

import React, { useState } from "react";
import { MoodThinking } from "./components/icons/mood-thinking";
import {
    availableMoods,
    Mood,
    MoodInput,
    moodMap,
} from "./components/mood-selection";

const MoodSelector = () => {
    const [selectedMood, setSelectedMood] = useState<Mood>();

    return (
        <>
            <MoodPreview mood={selectedMood} />
            <div className="mt-12 grid grid-cols-1 gap-6 xs:grid-cols-2">
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

export { MoodSelector };
