export interface ThreadHomepage {
  id: number;
  title: string;
  author?: {
    username: string;
    id: number;
  };
  createdAt?: string;
  categories?: ThreadCategory[]
}

type ThreadCategory = {
  id: number;
  name: string;
}