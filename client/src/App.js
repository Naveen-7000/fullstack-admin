import { ThemeProvider } from "@mui/material";
import CssBaseLine from "@mui/material/CssBaseline"
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import {BrowserRouter as Router ,Routes,Route,Navigate} from "react-router-dom";
import Dashboard from "./scence/dashboard";
import Layout from "./scence/layout/index";
import Products from "./scence/products";
import Customers from "./scence/customers";
import Transactions from "./scence/transactions";
import Geography from "./scence/geography";
import Overview from "./scence/overview";
import Daily from "./scence/daily";
import Monthly from "./scence/monthly";
import Breakdown from "./scence/breakdown";
import Admin from "./scence/admin";
import Performance from "./scence/performance";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <Router>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <Routes>
          <Route element={<Layout />}>
             <Route path="/" element={<Navigate to="/dashboard" replace />} />
             <Route path="/dashboard" element={<Dashboard/>} />
             <Route path="/products" element={<Products />} />
             <Route path="/customers" element={<Customers />} />
             <Route path="/transactions" element={<Transactions />} />
             <Route path="/geography" element={<Geography />} />
             <Route path="/overview" element={<Overview />} />
             <Route path="/daily" element={<Daily />} />
             <Route path="/monthly" element={<Monthly />} />
             <Route path="/breakdown" element={<Breakdown />} />
             <Route path="/admin" element={<Admin />} />
             <Route path="/performance" element={<Performance />} />

          </Route>
        </Routes>
      </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
