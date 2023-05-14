import { EventsProvider } from "@/store/events-context";
import { NotificationContextProvider } from "@/store/notification-context";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <EventsProvider>
      <NotificationContextProvider>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </NotificationContextProvider>
    </EventsProvider>
  );
}

export default MyApp;
