import MainPage from "./Pages/MainPage";
import DetailPage from "./Pages/DetailPage";
import { Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "./APIs/CountriesApi";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: () => getAllCountries(),
  });
  return (
    <div>
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="/:name" element={<DetailPage data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
