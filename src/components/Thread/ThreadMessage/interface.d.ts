export interface ThreadMessageProps {
  content: string;
  sources?: ThreadSource[];
  id: number;
  author: any;
  date: string;
}
type ThreadSource = {
  name: string;
  url: string;
}