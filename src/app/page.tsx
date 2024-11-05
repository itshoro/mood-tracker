import { DatePicker } from "./components/date-picker";
import { EventSelection } from "./components/event-selection";
import { FooterNav } from "./components/footer-nav";
import { SaveButton } from "./components/save-button";
import { MoodSelector } from "./mood-input";

export default function Home() {
    return (
        <main>
            <div className="flex flex-col p-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Welcome,
                    </h1>
                    <h1 className="text-3xl font-bold text-slate-800">
                        Melanie
                    </h1>
                </div>

                <form>
                    <section className="mt-16">
                        <h2 className="text-2xl font-medium text-slate-800">
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
                        <div className="flex flex-col gap-4">
                            <EventSelection />
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
                    <DatePicker />
                </form>
            </div>
            <div className="sticky bottom-0">
                <SaveButton />
                <FooterNav />
            </div>
        </main>
    );
}
