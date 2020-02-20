import { all } from 'redux-saga/effects';
import { threadSaga } from './thread';
import { votesSagas } from './votes';
import { userSagas } from './user';

export function* start() {
  yield all([...threadSaga, ...votesSagas, ...userSagas]);
}
