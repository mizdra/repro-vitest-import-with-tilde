// @ts-check

import { expect, test } from 'vitest';
import url from 'node:url';
import path from 'node:path';

const modulePath = './~.mjs'; // failed
// const modulePath = './a.mjs'; // passed

test('import test 1', async () => {
  const module = (await import(modulePath));
  expect(module.default).toBe(1);
});
test('import test 2', async () => {
  // .e.g. file:///Users/bob/repro-vitest-import-with-tilde/%7E.mjs
  const fileURL = url.pathToFileURL(path.resolve(modulePath)).href;
  const module = await import(fileURL);
  expect(module.default).toBe(1);
});
