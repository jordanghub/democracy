export interface ThreadMessageProps {
  content: string;
  sources?: ThreadSource[];
  id: number;
  author: any;
  date: string;
}
type ThreadSource = {
  id: number;
  label: string;
  url: string;
}