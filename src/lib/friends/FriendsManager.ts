import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class FriendsManager extends Manager {
  async get(): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>('/friends', { authRequired: true });

    return res;
  }

  async getIncomingRequests(): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>('/friends/requests/incoming', {
      authRequired: true
    });

    return res;
  }

  async getOutgoingRequests(): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>('/friends/requests/outgoing', {
      authRequired: true
    });

    return res;
  }

  async sendRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/send/${encodeURIComponent(id)}`, {
        authRequired: true
      });
    } catch (e) {
      return false;
    }

    return true;
  }

  async cancelRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/cancel/${encodeURIComponent(id)}`, {
        authRequired: true
      });
    } catch (e) {
      return false;
    }
    return true;
  }

  async acceptRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/accept/${encodeURIComponent(id)}`, {
        authRequired: true
      });
    } catch (e) {
      return false;
    }
    return true;
  }

  async denyRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/deny/${encodeURIComponent(id)}`, {
        authRequired: true
      });
    } catch (e) {
      return false;
    }
    return true;
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/remove/${encodeURIComponent(id)}`, { authRequired: true });
    } catch (e) {
      return false;
    }
    return true;
  }

  async block(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/block/${encodeURIComponent(id)}`, { authRequired: true });
    } catch (e) {
      return false;
    }
    return true;
  }

  async blockStatus(id: string): Promise<boolean> {
    try {
      await this.http.get(`/friends/block-status/${encodeURIComponent(id)}`, {
        authRequired: true
      });
    } catch (e) {
      return false;
    }
    return true;
  }

  async status(id: string): Promise<statsfm.FriendStatus> {
    const res = await this.http.get<{ data: statsfm.FriendStatus }>(
      `/friends/status/${encodeURIComponent(id)}`,
      { authRequired: true }
    );

    return statsfm.FriendStatus[res.data] ?? statsfm.FriendStatus.NONE;
  }
}
