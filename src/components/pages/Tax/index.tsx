import { useQuery } from "@tanstack/react-query";
import { PublicTemplate } from "../../templates/Public";
import { Tax } from "../../organism/Tax";
import { getTaxs } from "../../../server/requests";
import { Error } from "../../organism/Error";
import { Loading } from "../../organism/Loading";

export const TaxPage = () => {
	const {
		data: taxs,
		refetch,
		isLoading,
		isError
	} = useQuery({
		queryKey: ["taxs"],
		queryFn: getTaxs
	});

	return (
		<PublicTemplate>
			{isLoading ? <Loading /> : null}
			{isError ? <Error msg="Erro ao recuperar os juros" retryFn={() => refetch()} /> : null}
			{taxs ? taxs.map((tax) => <Tax name={tax.nome} value={tax.valor} />) : null}
		</PublicTemplate>
	);
};
