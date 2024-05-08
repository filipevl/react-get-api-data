import { KeyValue } from "../../molecule/KeyValue";

interface ITax {
	name: string;
	value: string;
}

export const Tax = ({ name, value }: ITax) => {
	return (
		<div>
			<KeyValue name={name} value={value} />
		</div>
	);
};
