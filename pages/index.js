import EventList from "../components/events/event-list";
import { useEvents } from "../store/events-context";

function HomePage() {
  const { getFeaturedEvents } = useEvents();
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1 className="center">Principais eventos</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
