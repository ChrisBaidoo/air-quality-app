export interface State {
  LOADING: string;
  SUCCESS: string;
  FAILED: string;
}

export interface Result {
  response: any;
  state: string;
}

export const RequestState: State = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
};
