import { Button } from "../../atom/Button";
import { Paragraph } from "../../atom/Paragraph";

interface IError {
	msg?: string;
	retryFn?: Function;
}

export const Error = ({ msg = "Houve um erro inesperado", retryFn }: IError) => {
	return (
		<div>
			<Paragraph>{msg}</Paragraph>
			{retryFn ? <Button onClick={() => retryFn()}>Tentar novamente</Button> : null}
		</div>
	);
};
