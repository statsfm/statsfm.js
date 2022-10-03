import { UserPublic } from './user';

export interface GiftCode extends Object {
  id: number;
  purchasedAt: Date;
  claimedAt: Date | null;
  productId: string;
  code: string | null;
  message: string | null;
  boughtById: string;
  boughtBy: UserPublic | null;
  claimedById: string | null;
  claimedBy: UserPublic | null;
}
