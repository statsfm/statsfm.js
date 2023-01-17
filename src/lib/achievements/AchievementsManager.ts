import * as statsfm from '../../interfaces/statsfm';
import Manager from '../Manager';

export default class AchievementsManager extends Manager {
  /**
   * @description Get a achievement by ID.
   * @param {number} id The ID of the achievement.
   * @returns {Promise<Achievement>} Returns a promise with a single {@link Achievement}.
   */
  async get(id: number): Promise<statsfm.Achievement> {
    const res = await this.http.get(`/achievements/${id}`);

    return res.data.item as statsfm.Achievement;
  }

  /**
   * @description Get a list of achievements by IDs.
   * @param {string} ids The IDs of the achievements
   * * @returns {Promise<Achievement[]>} Returns a promise with a {@link Achievement}s.
   */
  async list(ids: number[]): Promise<statsfm.Achievement[]> {
    const res = await this.http.get<statsfm.Achievement[]>(`/achievements/list`, {
      query: {
        ids: ids.join(',')
      }
    });

    return res.data.items;
  }

  /**
   * @description Get a list of achievements of the user.
   * @param {number} userId The ID of the user.
   * @returns {Promise<Achievement[]>} Returns a promise with a {@link Achievement[]}s.
   */
  async getUserAchievements(userId: number): Promise<statsfm.Achievement[]> {
    const res = await this.http.get<statsfm.Achievement[]>(`/achievements/list`, {
      query: {
        userId
      }
    });

    return res.data.items;
  }
}
