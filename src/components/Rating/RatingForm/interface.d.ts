export interface RatingFormProps {
  criterias: Criteria[]
  disabled?: boolean;
  votes?: any
  messageId: number;
};

type Criteria = {
  name: string;
  value: number;
}