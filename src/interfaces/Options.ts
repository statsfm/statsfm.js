export interface Options {
  http: {
    apiUrl: string;
    userAgentAppendix: string;
    retries: number;
    version: string;
  };
  auth: {
    accessToken?: string;
  };
}
