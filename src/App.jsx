import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import ProtectedRoute from "./components/Authentication/ProtectedRoute";
import Reset from "./pages/Reset";
import Loader from "./components/Loading/Loader";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } },
});

const Layout = lazy(() => import("./components/main/mainLayout/Layout"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Forgot = lazy(() => import("./pages/Forgot"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Brands = lazy(() => import("./pages/Brands"));
const Brand = lazy(() => import("./components/Brand/Brand"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Products = lazy(() => import("./pages/Products"));
const Details = lazy(() => import("./pages/Details"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ProfileLayout = lazy(() => import("./pages/ProfileLayout"));
const Dashboard = lazy(() => import("./components/Profile/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Addresses = lazy(() => import("./pages/Addresses"));
const Favorites = lazy(() => import("./pages/Favorites"));
const Comment = lazy(() => import("./pages/Comment"));
const Order = lazy(() => import("./components/Order/Order"));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "50px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "var(--large-font-size)",
            padding: "10px 15px",
            maxWidth: "500px",
            height: "60px",
            textAlign: "center",
            backgroundColor: "var(--back-color)",
            color: "var(--body-color)",
          },
        }}
      />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="reset-password" element={<Reset />} />
            <Route element={<Layout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="forgot-password" element={<Forgot />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/brands/:brand" element={<Brand />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="/products">
                <Route path=":group" element={<Products />} />
                <Route path=":group/:category" element={<Products />} />
                <Route path="details/:id" element={<Details />} />
              </Route>
              <Route path="/search" element={<SearchPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="profile" element={<ProfileLayout />}>
                  <Route index element={<Navigate replace to="dashboard" />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="addresses" element={<Addresses />} />
                  <Route path="favorites" element={<Favorites />} />
                  <Route path="comments" element={<Comment />} />
                </Route>
                <Route path="order/:id" element={<Order />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
