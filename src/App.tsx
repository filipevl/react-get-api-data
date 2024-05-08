import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TaxPage } from "./components/pages/Tax";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<TaxPage />
		</QueryClientProvider>
	);
}

export default App;
