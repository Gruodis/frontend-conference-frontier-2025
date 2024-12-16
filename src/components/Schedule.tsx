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
      {
        id: "event6",
        from: "16:30",
        to: "17:30",
        title:
          "Fireside Chat with Industry Leaders: Innovation and Collaboration",
      },
      {
        id: "event7",
        from: "18:00",
        to: "19:00",
        title: "Evening Reception and Networking Event",
      },
    ],
  },
  {
    id: "day2",
    dayDate: "2024-12-15",
    dayTitle: "Day 2 - Workshops and Networking",
    events: [
      {
        id: "event21",
        from: "09:00",
        to: "10:00",
        title:
          "Keynote Address: Strengthening Cybersecurity in the Modern Digital Age",
      },
      {
        id: "event22",
        from: "10:30",
        to: "11:30",
        title:
          "Expert Panel: Exploring the Ethical Implications of Artificial Intelligence Development",
      },
      {
        id: "event23",
        from: "12:00",
        to: "13:00",
        title: "Lunch Break and Informal Discussions",
      },
      {
        id: "event24",
        from: "13:00",
        to: "14:30",
        title:
          "Hands-on Workshop: Practical Strategies for Building Scalable Cloud Solutions",
      },
      {
        id: "event25",
        from: "15:00",
        to: "16:00",
        title:
          "Dedicated Networking Session: Connecting with Industry Professionals",
      },
      {
        id: "event26",
        from: "16:30",
        to: "17:30",
        title:
          "Fireside Chat: The Future of Tech - Trends and Predictions for 2025",
      },
      {
        id: "event27",
        from: "18:00",
        to: "19:00",
        title: "Evening Reception and Social Event",
      },
    ],
  },
  {
    id: "day3",
    dayDate: "2024-12-16",
    dayTitle: "Day 3 - Closing Ceremony and Awards",
    events: [
      {
        id: "event31",
        from: "08:30",
        to: "09:00",
        title: "Morning Coffee and Networking",
      },
      {
        id: "event32",
        from: "09:00",
        to: "10:00",
        title:
          "Keynote Speech: Analyzing the Evolving Landscape of the Future of Work",
      },
      {
        id: "event33",
        from: "10:30",
        to: "11:30",
        title:
          "Panel Discussion: Investing in Sustainable Technology for a Greener Future",
      },
      {
        id: "event34",
        from: "12:00",
        to: "13:00",
        title: "Lunch Break and Open Networking",
      },
      {
        id: "event45",
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

function areAllEventsEnded(dayDate: string, events: Event[]): boolean {
  return events.every((event) => parseDate(dayDate, event.to) < new Date());
}

function areAllEventsNotStarted(dayDate: string, events: Event[]): boolean {
  return events.every((event) => parseDate(dayDate, event.from) > new Date());
}

function hasOngoingEvents(dayDate: string, events: Event[]): boolean {
  return events.some((event) => {
    const now = new Date();
    const from = parseDate(dayDate, event.from);
    const to = parseDate(dayDate, event.to);
    return now >= from && now <= to;
  });
}

export function getValidDays(): string[] {
  return schedule
    .filter(
      (day) =>
        !areAllEventsEnded(day.dayDate, day.events) &&
        (hasOngoingEvents(day.dayDate, day.events) ||
          areAllEventsNotStarted(day.dayDate, day.events))
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
              className={`bg-gray-950 border rounded-lg p-6 ${
                areAllEventsEnded(day.dayDate, day.events)
                  ? "border-[#9b72cb]/30"
                  : "border-[rgba(66_133_244/.6)]"
              }`}
            >
              {areAllEventsEnded(day.dayDate, day.events) ? (
                <div className="text-red-900">This event has ended</div>
              ) : hasOngoingEvents(day.dayDate, day.events) ? (
                <div className="text-[rgb(66_133_244)]">
                  This event is happening
                </div>
              ) : (
                <div className="text-[rgb(66_133_244)]">
                  This event is pending
                </div>
              )}
              <h3 className="heading-secondary-alt font-bold mb-4">
                Day {index + 1} - {new Date(day.dayDate).toDateString()}
              </h3>
              <ul className="space-y-4">
                {day.events.map((event: Event) => (
                  <li
                    key={event.id}
                    className={`flex gap-4 ${
                      areAllEventsEnded(day.dayDate, day.events)
                        ? "opacity-50"
                        : hasOngoingEvents(day.dayDate, day.events)
                        ? "text-[rgb(66_133_244)]"
                        : ""
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
