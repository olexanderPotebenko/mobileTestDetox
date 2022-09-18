import '@testing-library/jest-native/extend-expect';
import talkbackStart from '../talkback/talkback';

let talkback;
// eslint-disable-next-line no-undef
beforeAll(() => {
  talkback = talkbackStart();
});

// eslint-disable-next-line no-undef
afterAll(async () => {
  talkback.close();
});
