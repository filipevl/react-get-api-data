import { axiosInstance } from ".";

export interface ITax {
	nome: string;
	valor: string;
}

export const getTaxs = async () => {
	const taxs = await axiosInstance.get<ITax[]>("https://brasilapi.com.br/api/taxas/v1");
	return taxs.data;
};
