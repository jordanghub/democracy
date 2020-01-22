export interface RatingShowProps {
  criterias: Criteria[]
  disabled?: boolean;
};

type Criteria = {
  name: string;
  value: number;
}