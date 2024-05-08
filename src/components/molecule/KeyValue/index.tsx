import { Paragraph } from "../../atom/Paragraph";
import { Span } from "../../atom/Span";

export interface ITax {
	name: string;
	value: string;
}

export const KeyValue = ({ name, value }: ITax) => {
	return (
		<div>
			<Span>{name}</Span>
			<Paragraph>{value}</Paragraph>
		</div>
	);
};
