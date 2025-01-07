import { Routes, Route } from "react-router-dom";
import useFetchArticles from "./hooks/fetchArticles";
import "./App.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Partners from "./components/Partners";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import Topics from "./components/Topics";
//import RegistrationForm from "./components/RegistrationForm";
import FAQ from "./components/FAQ";
import SurveyForm from "./components/Survey";
import ArticlesList from "./components/ArticlesList";
import ArticleDetail from "./components/ArticleDetails";

function App() {
  const { articles, isLoading, error } = useFetchArticles();
  if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Routes>
        {/* Route for the articles list */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ArticlesList />
              <Partners />
              <Speakers />
              <Schedule />
              <Topics />
              <SurveyForm />
              <FAQ />
            </>
          }
        />

        {/* Dynamic route for individual article details */}
        <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />

        {/* Fallback route for unmatched URLs (Optional) */}
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </main>
  );
}

export default App;
