import { ButtonHTMLAttributes } from "react";

type IButton = {
	children: string;
} & ButtonHTMLAttributes<any>;

export const Button = ({ children, ...rest }: IButton) => {
	return <button {...rest}>{children}</button>;
};
