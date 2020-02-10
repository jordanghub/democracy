export interface ThreadHomepageProps {
  id: number;
  title: string;
  author: {
    username: string;
    id: number;
  };
  withoutLink?: boolean;
  date: string;
  categories?: ThreadCategory[];
  messageType?: string;
}

type ThreadCategory = {
  id: number;
  name: string;
};
