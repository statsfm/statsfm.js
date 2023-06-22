import { UserPublic } from './user';

export interface GiftCode extends Object {
  id: number;
  purchasedAt: Date;
  claimedAt: Date | null;
  claimedById: string | null;
  claimedBy: UserPublic | null;
  boughtById: string;
  boughtBy: UserPublic;
  productId: string;
  code: string;
  message: string | null;
}
