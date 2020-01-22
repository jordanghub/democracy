import { DummyActionType, FetchLatestThreadsActionType, ChangeLatestThreadsActionType, ChangeLatestThreadsActionPayloadType } from "store/actions/app/interface";

import { DUMMY_ACTION, FETCH_LATEST_THREADS, CHANGE_LATEST_THREADS } from "store/actionTypes";

export const dummyAction = (): DummyActionType => ({
  type: DUMMY_ACTION
});

export const fetchLatestThreads = (): FetchLatestThreadsActionType => ({
  type: FETCH_LATEST_THREADS
});
export const changeLatestThreads = (payload: ChangeLatestThreadsActionPayloadType): ChangeLatestThreadsActionType => ({
  type: CHANGE_LATEST_THREADS,
  payload,
});