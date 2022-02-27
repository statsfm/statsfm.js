import { Config } from '../../interfaces/Config';
import { Response, RequestInitWithQuery } from '../../interfaces/Request';
import 'isomorphic-unfetch';

export class HttpClient {
  constructor(public config: Config) {}

  /**
   * @param {string} slug
   * @param {string} query
   * @returns {string} Returns the full url.
   */
  getURL(slug: string, query?: Record<string, string>): string {
    const url = new URL(this.config.baseUrl);
    url.pathname += slug;
    url.search = new URLSearchParams(query).toString();

    return url.toString();
  }

  /**
   * @param  {string} slug
   * @param  {RequestInitWithQuery} init
   * @returns {Promise<Response>} Returns a promise with the {@link Response response}.
   */
  async request<T>(slug: string, init?: RequestInitWithQuery): Promise<Response> {
    const options = {
      ...init,
      headers: {
        Authorization: this.config?.accessToken,
        'Content-Type': 'application/json',
        ...init?.headers
      }
    };

    if (options.headers['Content-Type'] == null) {
      delete options.headers['Content-Type'];
    }

    const url = this.getURL(slug, options?.query);

    const res = await fetch(url, options as unknown as RequestInit);
    const parsed: Response = {
      success: res.ok,
      status: res.status,
      statusText: res.statusText,
      url: res.url,
      headers: res.headers,
      data: res.headers?.get('Content-Type')?.includes('application/json')
        ? await res.json()
        : await res.text()
    };

    if (!parsed.success) {
      throw parsed;
    }

    return parsed as Response;
  }

  /**
   * @param  {string} slug
   * @param  {RequestInitWithQuery} options
   * @returns {Promise<Response>} Returns a promise with the {@link Response response}.
   */
  async get<T>(slug: string, options?: RequestInitWithQuery): Promise<Response> {
    return await this.request<T>(slug, {
      ...options,
      method: 'GET'
    });
  }

  /**
   * @param  {string} slug
   * @param  {RequestInitWithQuery} options
   * @returns {Promise<Response>} Returns a promise with the {@link Response response}.
   */
  async post<T>(slug: string, options?: RequestInitWithQuery): Promise<Response> {
    return await this.request<T>(slug, {
      ...options,
      method: 'POST'
    });
  }

  /**
   * @param  {string} slug
   * @param  {RequestInitWithQuery} options
   * @returns {Promise<Response>} Returns a promise with the {@link Response response}.
   */
  async put<T>(slug: string, options?: RequestInitWithQuery): Promise<Response> {
    return await this.request<T>(slug, {
      ...options,
      method: 'PUT'
    });
  }

  /**
   * @param  {string} slug
   * @param  {RequestInitWithQuery} options
   * @returns {Promise<Response>} Returns a promise with the {@link Response response}.
   */
  async delete<T>(slug: string, options?: RequestInitWithQuery): Promise<Response> {
    return await this.request<T>(slug, {
      ...options,
      method: 'DELETE'
    });
  }
}
