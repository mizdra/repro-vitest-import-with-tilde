// @ts-check

import { test } from 'node:test';
import url from 'node:url';
import path from 'node:path';
import assert from 'node:assert';

const modulePath = './~.mjs'; // passed
// const modulePath = './a.mjs'; // passed

test('import test 1', async () => {
  const module = (await import(modulePath));
  assert(module.default === 1);
});
test('import test 2', async () => {
  // .e.g. file:///Users/bob/repro-vitest-import-with-tilde/%7E.mjs
  const fileURL = url.pathToFileURL(path.resolve(modulePath)).href;
  const module = await import(fileURL);
  assert(module.default === 1);
});
