type Event = {
  id: string;
  from: string; // Event start time as string
  to: string; // Event end time as string
  title: string;
};

type Schedule = {
  id: string;
  dayDate: string; // Day of the schedule as string
  dayTitle: string; // Optional title for the day
  events: Event[];
};

export const schedule: Schedule[] = [
  {
    id: "day1",
    dayDate: "2024-12-13",
    dayTitle: "Day 1 - Opening Ceremony and Keynote Presentations",
    events: [
      {
        id: "event1",
        from: "09:00",
        to: "10:00",
        title: "Official Opening Ceremony: Welcome and Introductions",
      },
      {
        id: "event2",
        from: "10:30",
        to: "11:30",
        title:
          "Keynote Presentation: Envisioning the Future of Artificial Intelligence",
      },
      {
        id: "event3",
        from: "12:00",
        to: "13:00",
        title: "Lunch Break and Networking",
      },
      {
        id: "event4",
        from: "13:30",
        to: "14:30",
        title:
          "Panel Discussion: The Transformative Impact of Blockchain in the Financial Sector",
      },
      {
        id: "event5",
        from: "15:00",
        to: "16:00",
        title:
          "Interactive Workshop: A Practical Introduction to Quantum Computing Basics",
      },
    ],
  },
  {
    id: "day2",
    dayDate: "2024-12-15",
    dayTitle: "Day 2 - Workshops and Networking",
    events: [
      {
        id: "event6",
        from: "09:00",
        to: "10:00",
        title:
          "Keynote Address: Strengthening Cybersecurity in the Modern Digital Age",
      },
      {
        id: "event7",
        from: "10:30",
        to: "11:30",
        title:
          "Expert Panel: Exploring the Ethical Implications of Artificial Intelligence Development",
      },
      {
        id: "event8",
        from: "12:00",
        to: "13:00",
        title: "Lunch Break and Informal Discussions",
      },
      {
        id: "event9",
        from: "13:00",
        to: "14:30",
        title:
          "Hands-on Workshop: Practical Strategies for Building Scalable Cloud Solutions",
      },
      {
        id: "event10",
        from: "15:00",
        to: "16:00",
        title:
          "Dedicated Networking Session: Connecting with Industry Professionals",
      },
    ],
  },
  {
    id: "day3",
    dayDate: "2024-12-17",
    dayTitle: "Day 3 - Closing Ceremony and Awards",
    events: [
      {
        id: "event11",
        from: "09:00",
        to: "10:00",
        title:
          "Keynote Speech: Analyzing the Evolving Landscape of the Future of Work",
      },
      {
        id: "event12",
        from: "10:30",
        to: "11:30",
        title:
          "Panel Discussion: Investing in Sustainable Technology for a Greener Future",
      },
      {
        id: "event13",
        from: "12:00",
        to: "13:00",
        title: "Lunch Break and Open Networking",
      },
      {
        id: "event14",
        from: "13:30",
        to: "14:30",
        title:
          "Closing Ceremony and Awards Presentation: Recognizing Outstanding Achievements",
      },
    ],
  },
];

function parseDate(dayDate: string, time: string): Date {
  return new Date(`${dayDate}T${time}:00`);
}

function hasDayPassed(dayDate: string, events: Event[]): boolean {
  const now = new Date();
  const lastEventEndTime: Date = parseDate(
    dayDate,
    events[events.length - 1].to
  );
  return now > lastEventEndTime;
}

function isEventOngoing(dayDate: string, event: Event): boolean {
  const now = new Date();
  const from = parseDate(dayDate, event.from);
  const to = parseDate(dayDate, event.to);
  return now >= from && now <= to;
}

function isEventPending(dayDate: string, event: Event): boolean {
  const now = new Date();
  const from = parseDate(dayDate, event.from);
  return now < from;
}

export function getValidDays(): string[] {
  return schedule
    .filter(
      (day) =>
        !hasDayPassed(day.dayDate, day.events) &&
        day.events.some(
          (event) =>
            isEventOngoing(day.dayDate, event) ||
            isEventPending(day.dayDate, event)
        )
    )
    .map((day) => day.dayTitle);
}

export default function Schedule() {
  return (
    <section className="py-16 w-full grid">
      <div className="container mx-auto px-4">
        <h2 className="heading-secondary font-medium mb-8 text-center">
          Conference Schedule
        </h2>
        <div className="space-y-8">
          {schedule.map((day: Schedule, index: number) => (
            <div
              key={day.id}
              className={`bg-gray-950 border border-[#9b72cb]/30 rounded-lg p-6 ${
                hasDayPassed(day.dayDate, day.events) ? "saturate-0" : ""
              }`}
            >
              {hasDayPassed(day.dayDate, day.events) && (
                <div>This day has passed</div>
              )}
              <h3 className="text-2xl font-bold mb-4">
                Day {index + 1} - {new Date(day.dayDate).toDateString()}
              </h3>
              <ul className="space-y-4">
                {day.events.map((event: Event) => (
                  <li
                    key={event.id}
                    className={`flex gap-4 ${
                      isEventOngoing(day.dayDate, event)
                        ? "text-green-500"
                        : isEventPending(day.dayDate, event)
                        ? ""
                        : "opacity-30"
                    }`}
                  >
                    <div className="self-center">
                      <img src="/check.svg" className="w-4" alt="" />
                    </div>
                    <div className="w-24 font-bold whitespace-nowrap">
                      {event.from} - {event.to}
                    </div>
                    <div>{event.title}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
