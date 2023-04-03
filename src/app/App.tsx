import { EverythingNews } from "../features/everything-news/EverythingNews";
import { TopHeadlines } from "../features/top-headlines-news/TopHeadlines";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <Button>
          <Link to={"/"}>Top Headlines</Link>
        </Button>
        <Button>
          <Link to={"/everything-news"}>Everything News</Link>
        </Button>
      </Box>
      <Routes>
        <Route path="/" element={<TopHeadlines />} />
        <Route path="/everything-news" element={<EverythingNews />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Box>
  );
}

export default App;
