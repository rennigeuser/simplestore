import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { store } from "./store";
import { Provider } from "react-redux";
import { Suspense } from "react";
import { Loader } from "@shared/ui/loader";
import Layout from "@shared/ui/layout";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<Loader />}>
              <AppRoutes />
            </Suspense>
          </Layout>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
