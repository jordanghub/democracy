export interface ThreadMessageProps {
  content: string;
  sources?: ThreadSource[];
}
type ThreadSource = {
  name: string;
  url: string;
}