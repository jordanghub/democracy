export interface RatingShowProps {
  criterias: Criteria[]
  disabled?: boolean;
  votes?: any
};

type Criteria = {
  name: string;
  value: number;
}