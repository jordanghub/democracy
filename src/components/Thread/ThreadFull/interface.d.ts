export interface ThreadFullProps {
  title: string;
  categories: ThreadCategory[];
  messages: ThreadMessage[];
}

type ThreadMessage = {
  id: number;
  content: string;
  scoring: ThreadMessageScoring[];
}

type ThreadMessageScoring = {
  name: string;
  value: number;
}
type ThreadCategory = {
  name: string;
}