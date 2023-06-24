import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class FriendsManager extends Manager {
  async get(): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>('/friends', { auth: true });

    return res;
  }

  async getIncomingRequests(): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>('/friends/requests/incoming', {
      auth: true
    });

    return res;
  }

  async getOutgoingRequests(): Promise<statsfm.UserPublic[]> {
    const res = await this.http.get<statsfm.UserPublic[]>('/friends/requests/outgoing', {
      auth: true
    });

    return res;
  }

  async sendRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/send/${encodeURIComponent(id)}`, { auth: true });
    } catch (e) {
      return false;
    }

    return true;
  }

  async cancelRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/cancel/${encodeURIComponent(id)}`, { auth: true });
    } catch (e) {
      return false;
    }
    return true;
  }

  async acceptRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/accept/${encodeURIComponent(id)}`, { auth: true });
    } catch (e) {
      return false;
    }
    return true;
  }

  async denyRequest(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/requests/deny/${encodeURIComponent(id)}`, { auth: true });
    } catch (e) {
      return false;
    }
    return true;
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/remove/${encodeURIComponent(id)}`, { auth: true });
    } catch (e) {
      return false;
    }
    return true;
  }

  async block(id: string): Promise<boolean> {
    try {
      await this.http.post(`/friends/block/${encodeURIComponent(id)}`, { auth: true });
    } catch (e) {
      return false;
    }
    return true;
  }

  async blockStatus(id: string): Promise<boolean> {
    try {
      await this.http.get(`/friends/block-status/${encodeURIComponent(id)}`, {
        auth: true
      });
    } catch (e) {
      return false;
    }
    return true;
  }

  async status(id: string): Promise<statsfm.FriendStatus> {
    const res = await this.http.get<statsfm.FriendStatus>(
      `/friends/status/${encodeURIComponent(id)}`,
      { auth: true }
    );

    return statsfm.FriendStatus[res] ?? statsfm.FriendStatus.NONE;
  }
}
