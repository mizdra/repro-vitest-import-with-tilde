## How to reproduce

```console
$ npm i
$ npm run test:node-test

> repro-vitest-import-with-tilde@1.0.0 test:node-test
> node --test node-test.test.mjs

✔ import test 1 (2.104084ms)
✔ import test 2 (0.176542ms)
ℹ tests 2
ℹ suites 0
ℹ pass 2
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 61.934917

$ npm run test:vitest -- --run

> repro-vitest-import-with-tilde@1.0.0 test:vitest
> vitest vitest.test.mjs --run


 RUN  v2.1.8 /Users/mizdra/src/localhost/gomi/repro-node-path-to-file-url-with-tilda

 ❯ vitest.test.mjs (2)
   ✓ import test 1
   × import test 2

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  vitest.test.mjs > import test 2
Error: Failed to load url /Users/mizdra/src/localhost/gomi/repro-node-path-to-file-url-with-tilda/%7E.mjs (resolved id: /Users/mizdra/src/localhost/gomi/repro-node-path-to-file-url-with-tilda/%7E.mjs). Does the file exist?
 ❯ loadAndTransform node_modules/vite/dist/node/chunks/dep-CB_7IfJ-.js:51920:17

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  1 failed | 1 passed (2)
   Start at  00:36:25
   Duration  230ms (transform 20ms, setup 0ms, collect 9ms, tests 7ms, environment 0ms, prepare 48ms)
```
