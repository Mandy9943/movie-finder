export const generatePageResultsInfo = (
  page: number,
  total_results: number,
  results_length: number
) => {
  // Calculating the range of results displayed (X-Y)
  const startResult = (page - 1) * results_length + 1;
  const endResult = Math.min(startResult + results_length - 1, total_results);

  // Generating the final information string
  const infoString = `Mostrando ${startResult}-${endResult} de ${total_results} resultados`;

  return infoString;
};
