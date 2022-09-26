export const fetchData = async (url: string): Promise<any> => {
  let response = null;
  try {
    const data = await fetch(url);
    let jsonData = await data.json();
    response = jsonData.results;
  } catch (error) {
    console.log(error);
    //TODO: handle error gracefully
  }
  return response;
};

export const fetchAndUpdateState = async (
  url: string,
  callback: (data: any) => void
): Promise<void> => {
  const response = await fetchData(url);
  if (callback) {
    callback(response);
  }
};
