interface IPublic {
	children: React.ReactNode;
}

export const PublicTemplate = ({ children }: IPublic) => {
	return <div>{children}</div>;
};
