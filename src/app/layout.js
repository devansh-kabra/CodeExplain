import "./globals.css";
import SessionProviderWrapper from "./sessionprovider.js";

export const metadata = {
	title: "CodeExplain",
	description: "Learn to explain your code!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<SessionProviderWrapper>{children}</SessionProviderWrapper>
			</body>
		</html>
	);
}
