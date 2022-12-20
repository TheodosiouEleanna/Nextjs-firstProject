import EventsList from "../components/events/events-list";
import { getFeaturedEvents } from "./data/dummyData";

function HomePage(props) {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventsList items={featuredEvents} />
    </div>
  );
}
export default HomePage;
