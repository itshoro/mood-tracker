import { getByCategories } from "@/dal/tag";
import { getAll as getAllCategories } from "@/dal/category";

const EventSelection = async () => {
    const categories = await getAllCategories();
    const events = await getByCategories(
        categories.map((category) => category.id),
    );
    return (
        <div>
            {categories.map((category) => {
                return (
                    <details
                        className="mb-4 rounded-lg border border-gray-200 p-4"
                        key={category.id}
                    >
                        <summary className="font-semibold text-slate-800">
                            {category.name}
                        </summary>
                        {events[category.id].map((event) => {
                            return (
                                <div key={event.id} className="mt-5">
                                    <input
                                        type="checkbox"
                                        className="peer hidden"
                                        id={`event-${event.name}`}
                                        value={event.name}
                                        name="mood"
                                    />
                                    <label
                                        htmlFor={`event-${event.name}`}
                                        className="flex items-center rounded-lg bg-gray-50 p-2 transition-all duration-[50ms] peer-checked:bg-amber-100 peer-checked:ring-2 peer-checked:ring-amber-300 peer-checked:ring-offset-4"
                                    >
                                        <span className="ml-2 font-semibold text-slate-800">
                                            {event.name}
                                        </span>
                                    </label>
                                </div>
                            );
                        })}
                    </details>
                );
            })}
        </div>
    );
};

export { EventSelection };
