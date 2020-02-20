export interface ThreadHomepageProps {
  id: number;
  title: string;
  author: {
    username: string;
    id: number;
    avatarFileName?: string;
  };
  withoutLink?: boolean;
  date: string;
  categories?: ThreadCategory[];
  messageType?: string;
  withAvatar?: boolean;
}

type ThreadCategory = {
  id: number;
  name: string;
};
