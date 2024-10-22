import { MoodAngry } from "./icons/mood-angry";
import { MoodDepressed } from "./icons/mood-depressed";
import { MoodExcited } from "./icons/mood-excited";
import { MoodHappy } from "./icons/mood-happy";
import { MoodInLove } from "./icons/mood-in-love";
import { MoodNeutral } from "./icons/mood-neutral";
import { MoodProud } from "./icons/mood-proud";
import { MoodSad } from "./icons/mood-sad";
import { MoodThinking } from "./icons/mood-thinking";
import { MoodWorried } from "./icons/mood-worried";

const moodMap = {
    sad: { icon: <MoodSad />, label: "Sad" },
    happy: { icon: <MoodHappy />, label: "Happy" },
    angry: { icon: <MoodAngry />, label: "Angry" },
    excited: { icon: <MoodExcited />, label: "Excited" },
    "in-love": { icon: <MoodInLove />, label: "In Love" },
    neutral: { icon: <MoodNeutral />, label: "Neutral" },
    depressed: { icon: <MoodDepressed />, label: "Depressed" },
    proud: { icon: <MoodProud />, label: "Proud" },
    worried: { icon: <MoodWorried />, label: "Worried" },
};

const availableMoods = Object.keys(
    moodMap,
) as readonly (keyof typeof moodMap)[];

type MoodSelectionProps = {
    mood: keyof typeof moodMap;
};

const MoodSelection = ({ mood }: MoodSelectionProps) => {
    return (
        <div>
            <input
                type="radio"
                className="peer hidden"
                id={`mood-${mood}`}
                value={mood}
                name="mood"
            />
            <label
                htmlFor={`mood-${mood}`}
                className="flex items-center rounded-lg bg-gray-50 p-2 transition-all duration-[50ms] peer-checked:bg-amber-100 peer-checked:ring-2 peer-checked:ring-amber-300 peer-checked:ring-offset-4"
            >
                <div className="flex-shrink-0">{moodMap[mood].icon}</div>

                <span className="ml-2 font-semibold text-slate-800">
                    {moodMap[mood].label}
                </span>
            </label>
        </div>
    );
};

export { MoodSelection, availableMoods };
