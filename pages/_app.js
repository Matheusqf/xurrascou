import { NotificationContextProvider } from "@/store/notification-context";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
