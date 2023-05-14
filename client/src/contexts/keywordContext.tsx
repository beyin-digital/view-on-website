import { createContext, useState } from "react";

// create a context for the keyword
export const KeywordContext = createContext<{
	keyword: string;
	setKeyword: React.Dispatch<React.SetStateAction<string>>;
}>({
	keyword: "",
	setKeyword: () => {},
});

export const KeywordProvider = ({ children }: any) => {
	const [keyword, setKeyword] = useState("");

	return (
		<KeywordContext.Provider value={{ keyword, setKeyword }}>
			{children}
		</KeywordContext.Provider>
	);
};
