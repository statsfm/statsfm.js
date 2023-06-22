import { InternalRequest, RawFile } from '../../interfaces';

export interface RequestBody {
  files: RawFile[] | undefined;
  json: string | undefined;
}

export type StatsFMErrorData = { message: string; path: string; code: string } | string;

export class StatsFMAPIError extends Error {
  public requestBody: RequestBody;

  public constructor(
    public rawError: StatsFMErrorData,
    public status: number,
    public method: string,
    public url: string,
    bodyData: Pick<InternalRequest, 'body' | 'files'>
  ) {
    super(typeof rawError === 'string' ? rawError : rawError.message);
    this.requestBody = { files: bodyData.files, json: bodyData.body?.toString() };
  }

  public override get name(): string {
    return `${StatsFMAPIError.name}[${this.status}]`;
  }
}
