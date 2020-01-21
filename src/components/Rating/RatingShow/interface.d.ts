export interface RatingShowProps {
  criterias: Criteria[]
};

type Criteria = {
  name: string;
  value: number;
}