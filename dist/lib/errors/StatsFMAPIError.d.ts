import { InternalRequest, RawFile } from '../../interfaces';
export interface RequestBody {
    files: RawFile[] | undefined;
    json: string | undefined;
}
export type StatsFMErrorData = {
    message: string;
    path: string;
    code: string;
} | string;
export declare class StatsFMAPIError extends Error {
    rawError: StatsFMErrorData;
    status: number;
    method: string;
    url: string;
    requestBody: RequestBody;
    constructor(rawError: StatsFMErrorData, status: number, method: string, url: string, bodyData: Pick<InternalRequest, 'body' | 'files'>);
    get name(): string;
}
