import { usePagination } from "@/hooks/usePagination";
import Pagination from "../pagination/pagination";
import EventItem from "./event-item";
import classes from './event-list.module.css'

function EventList(props) {
  const { items } = props;
  const ITEMS_PER_PAGE = 3;
  const { currentData, next, prev, currentPage, maxPage } = usePagination(items, ITEMS_PER_PAGE);

  return (
    <div>
      <ul className={classes.list}>
        {currentData().map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </ul>
      <Pagination 
        next={next} 
        prev={prev} 
        currentPage={currentPage} 
        maxPage={maxPage}
      />
    </div>
  );
}

export default EventList;
