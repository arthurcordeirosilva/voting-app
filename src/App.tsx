import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterOptionPage } from "./pages/register-option";
import { Vote } from "./pages/vote";
import { VotingResultPage } from "./pages/voting-result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Vote />
  },
  {
    path: "/registrar-opcao",
    element: <RegisterOptionPage />
  },
  {
    path: "/voting-result",
    element: <VotingResultPage />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
