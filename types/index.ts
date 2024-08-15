// User interfeysi
export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  avatarUrl: string;
  role: string;
  provider: string;
  createdAt: string;
  lastModifiedAt: string;
  blocked: boolean;
}
