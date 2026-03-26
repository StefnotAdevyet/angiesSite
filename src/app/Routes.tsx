import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ProtectedRoute } from "../features/paywall/ProtectedRoute";
import { AboutPage } from "../pages/AboutPage";
import { AccountPage } from "../pages/AccountPage";
import { HomePage } from "../pages/HomePage";
import { IntakePage } from "../pages/IntakePage";
import { LoginPage } from "../pages/LoginPage";
import { PremiumPage } from "../pages/PremiumPage";
import { PricingPage } from "../pages/PricingPage";
import { ServicesPage } from "../pages/ServicesPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "services",
                element: <ServicesPage />,
            },
            {
                path: "intake",
                element: <IntakePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "pricing",
                element: <PricingPage />,
            },
            {
                path: "account",
                element: (
                    <ProtectedRoute requireAuth>
                        <AccountPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "premium",
                element: (
                    <ProtectedRoute requiredTier="premium">
                        <PremiumPage />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);