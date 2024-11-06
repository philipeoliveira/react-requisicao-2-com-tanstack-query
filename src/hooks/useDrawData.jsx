import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
   const response = await axios.get(
      'https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/'
   );
   return response.data;
};

export function useDrawData() {
   const query = useQuery({
      queryKey: ['lotofacil-draw-results'],
      queryFn: fetchData,
      retry: 1, // nova solicitação automática quando há falha na query
   });

   return query;
}
