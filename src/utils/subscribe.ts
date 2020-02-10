import { Store } from 'redux';

const doesValueExists = (state, params, stopBeforeLast = false) => {
  let currentValue = state;

  params.forEach((value: string, index: number) => {
    if (currentValue !== 'undefined') {
      if (stopBeforeLast) {
        if (!(index + 1 === params.length)) {
          currentValue = currentValue[value];
        }
      } else {
        currentValue = currentValue[value];
      }
    }
  });
  return typeof currentValue !== 'undefined';
};

export const awaitStateValue = (
  params: string[],
  store: Store,
  timeoutValue: number = 2000,
) => {
  return new Promise((resolve, reject) => {
    const valueExists = doesValueExists(store.getState(), params, true);

    if (valueExists) {
      const timeout = setTimeout(() => {
        resolve();
      }, timeoutValue);
      const unsubscribe = store.subscribe(() => {
        const state = store.getState();
        const valueExists = doesValueExists(state, params);

        if (valueExists) {
          clearTimeout(timeout);
          unsubscribe();
          resolve();
        }
      });
    } else {
      reject();
    }
  });
};
