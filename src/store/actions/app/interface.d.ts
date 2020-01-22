import { DUMMY_ACTION, FETCH_LATEST_THREADS, CHANGE_LATEST_THREADS } from "store/actionTypes";

import { ThreadHomepage } from "types/thread";

export interface DummyActionType {
  type: typeof DUMMY_ACTION;
}
export interface FetchLatestThreadsActionType {
  type: typeof FETCH_LATEST_THREADS;
}
export interface ChangeLatestThreadsActionType {
  type: typeof CHANGE_LATEST_THREADS;
  payload: ChangeLatestThreadsActionPayloadType;
}

export interface ChangeLatestThreadsActionPayloadType {
  threads: ThreadHomepage[];
}
