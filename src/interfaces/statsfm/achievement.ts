enum AchievementCategory {
  'STREAK',

  'ONE-TIME',

  'CUSTOM'
}

export interface Achievement extends Object {
  id: number;
  image: string;
  category: AchievementCategory;
  userId: string;
  title: string;
  description: string;
  metadata: JSON;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
