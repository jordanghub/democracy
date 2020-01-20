import { DummyActionType } from "store/actions/app/interface";

import { DUMMY_ACTION } from "store/actionTypes";

export const dummyAction = (): DummyActionType => ({
  type: DUMMY_ACTION
});