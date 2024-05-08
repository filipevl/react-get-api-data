export interface ISpan {
	children: React.ReactNode;
}

export const Span = ({ children }: ISpan) => {
	return <span>{children}</span>;
};
