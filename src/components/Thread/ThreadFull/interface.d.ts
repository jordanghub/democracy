export interface ThreadFullProps {
  title: string;
  categories: ThreadCategory[];
  messages: ThreadMessage[]; 
  id: number ;
  date: string;
  author: any
}

type ThreadMessage = {
  id: number;
  content: string;
  scoring: ThreadMessageScoring[];
  sources?: ThreadSource[];
  author: any
  createdAt: string;
}

type ThreadMessageScoring = {
  name: string;
  value: number;
}
type ThreadCategory = {
  name: string;
}
type ThreadSource = {
  id: number;
  label: string;
  url: string;
}