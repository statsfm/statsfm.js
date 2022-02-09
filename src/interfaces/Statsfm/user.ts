export interface UserImport {
  hash: string;
  id: number;
  userId: string;
  path: string;
  count: number;
  status: number;
  updatedAt: Date;
  createdAt: Date;
  serverId: number;
  error: string | null;
  name: string | null;
}
