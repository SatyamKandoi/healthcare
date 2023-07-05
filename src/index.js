import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
	"https://nhqwkvawhndqcmzkdfam.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ocXdrdmF3aG5kcWNtemtkZmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI1Njg4MTcsImV4cCI6MTk5ODE0NDgxN30.DNFSWocWcp8Uq2rBQF2leMR-sqY56LnUUUNXro7qL7c"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<SessionContextProvider supabaseClient={supabase}>
		<AuthContextProvider>
	
		<App />
		
		</AuthContextProvider>
		</SessionContextProvider>
		;
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
