import { Result, RequestState } from "./RequestState";

export const fetchAndUpdateState = async (
  url: string,
  callback: (data: any) => void
): Promise<void> => {
  const response = await fetchData(url);
  if (callback) {
    callback(response);
  }
};

export const fetchData = async (url: string): Promise<any> => {
  let response: Result = {
    response: null,
    state: RequestState.LOADING,
  };

  try {
    const data = await fetch(url);
    let jsonData = await data.json();
    response = jsonData.results;
    response = {
      response,
      state: RequestState.SUCCESS,
    };
  } catch (error) {
    response = {
      response: error,
      state: RequestState.FAILED,
    };
  }
  return response;
};
