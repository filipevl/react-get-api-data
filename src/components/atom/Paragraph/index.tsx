export interface IParagraph {
	children: React.ReactNode;
}

export const Paragraph = ({ children }: IParagraph) => {
	return <p>{children}</p>;
};
