const eventMap = {
    bath: { label: "took a bath" },
    game: { label: "played games" },
    friend: { label: "met a friend" },
    housework: { label: "did housework" },
    illness: { label: "not feeling well" },
    disput: { label: "argued with someone" },
    sad: { label: "something sad happened" },
};

const availableEvents = Object.keys(
    eventMap,
) as readonly (keyof typeof eventMap)[];

type EventSelectionProps = {
    event: keyof typeof eventMap;
};

const EventSelection = ({ event }: EventSelectionProps) => {
    return (
        <div>
            <input
                type="checkbox"
                className="peer hidden"
                id={`event-${event}`}
                value={event}
                name="event"
            />
            <label
                htmlFor={`event-${event}`}
                className="inline-block select-none rounded-full border border-gray-200 px-5 py-3 font-semibold text-slate-800 transition-all duration-[50ms] peer-checked:border-transparent peer-checked:bg-stone-50 peer-checked:outline peer-checked:outline-2 peer-checked:outline-black"
            >
                {eventMap[event].label}
            </label>
        </div>
    );
};

export { EventSelection, availableEvents };
