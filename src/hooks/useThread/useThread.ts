import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TState } from 'types/state';
import { addNewThreadMessage, clearThreadSingle } from 'store/actions';

export const useThread = () => {
  const dispatch = useDispatch();

  const thread = useSelector((state: TState) => state.thread);

  const addMessageAction = useCallback(
    (payload) => dispatch(addNewThreadMessage(payload)),
    [dispatch],
  );

  const clearThreadAction = useCallback(() => dispatch(clearThreadSingle()), [
    dispatch,
  ]);

  return useMemo(
    () => ({
      thread,
      addNewThreadMessage: addMessageAction,
      clearThreadSingle: clearThreadAction,
    }),
    [thread, addMessageAction, clearThreadAction],
  );
};
