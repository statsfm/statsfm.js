import { AuthConnections } from '../../interfaces';
import Manager from '../Manager';

export default class ChartsManager extends Manager {
  getConnections(): Promise<AuthConnections> {
    return this.http.get<AuthConnections>('/auth/connections', { authRequired: true });
  }
}
