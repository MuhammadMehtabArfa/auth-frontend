import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store"; // Import store and persistor
import { Store } from "../store";

export default function StateSlice({ Component, pageProps }: any) {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
