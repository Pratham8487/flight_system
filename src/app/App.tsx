import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Spin } from "antd";
import PageLayout from "@components/layout/PageLayout";

const HomePage = lazy(() => import("@features/home/pages/HomePage"));
const ItineraryListPage = lazy(() => import("@features/itineraries/pages/ItineraryListPage"));
const ItineraryDetailPage = lazy(() => import("@features/itineraries/pages/ItineraryDetailPage"));
const AboutPage = lazy(() => import("@features/about/pages/AboutPage"));
const ContactPage = lazy(() => import("@features/contact/pages/ContactPage"));

const App = () => {
  return (
    <PageLayout>
      <Suspense
        fallback={
          <div className="flex min-h-[60vh] items-center justify-center">
            <Spin size="large" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/itineraries" element={<ItineraryListPage />} />
          <Route path="/itineraries/:slug" element={<ItineraryDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </PageLayout>
  );
};

export default App;
