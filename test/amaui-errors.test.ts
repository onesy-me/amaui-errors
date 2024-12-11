/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import { OnesyAmqpError, OnesyAwsError, OnesyError, OnesyMongoError, OnesyTestError, AssertError, AuthenticationError, AuthorizationError, ConnectionError, DeveloperError, NotFoundError, PermissionError, ValidationError } from '../src';

group('@onesy/errors', () => {

  to('name', async () => {
    const values_ = [
      new OnesyError(),
      new OnesyTestError(),
      new AssertError(),
      new AuthenticationError(),
      new AuthorizationError(),
      new ValidationError(),
      new NotFoundError(),
      new PermissionError(),
      new OnesyAmqpError(),
      new OnesyAwsError(),
      new OnesyMongoError(),
      new ConnectionError(),
      new DeveloperError(),
    ];

    const valueBrowsers = await evaluate((window: any) => {
      const values_ = [
        new window.OnesyErrors.OnesyError(),
        new window.OnesyErrors.OnesyTestError(),
        new window.OnesyErrors.AssertError(),
        new window.OnesyErrors.AuthenticationError(),
        new window.OnesyErrors.AuthorizationError(),
        new window.OnesyErrors.ValidationError(),
        new window.OnesyErrors.NotFoundError(),
        new window.OnesyErrors.PermissionError(),
        new window.OnesyErrors.OnesyAmqpError(),
        new window.OnesyErrors.OnesyAwsError(),
        new window.OnesyErrors.OnesyMongoError(),
        new window.OnesyErrors.ConnectionError(),
        new window.OnesyErrors.DeveloperError(),
      ];

      return values_.map((value: any) => value.name);
    });

    const valueNode = values_.map(value => value.name);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([
      'OnesyError',
      'OnesyTestError',
      'AssertError',
      'AuthenticationError',
      'AuthorizationError',
      'ValidationError',
      'NotFoundError',
      'PermissionError',
      'OnesyAmqpError',
      'OnesyAwsError',
      'OnesyMongoError',
      'ConnectionError',
      'DeveloperError',
    ]));
  });

  to('message', async () => {
    const values_ = [
      new OnesyError('a'),
      new AuthorizationError('a'),
    ];

    const valueBrowsers = await evaluate((window: any) => {
      const values_ = [
        new window.OnesyErrors.OnesyError('a'),
        new window.OnesyErrors.AuthorizationError('a'),
      ];

      return values_.map((value: any) => value.message);
    });

    const valueNode = values_.map(value => value.message);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql(new Array(2).fill('a')));
  });

  to('no message', async () => {
    const values_ = [
      new OnesyError(),
      new OnesyTestError(),
      new AssertError(),
      new AuthenticationError(),
      new AuthorizationError(),
      new ValidationError(),
      new NotFoundError(),
      new PermissionError(),
      new OnesyAmqpError(),
      new OnesyAwsError(),
      new OnesyMongoError(),
      new ConnectionError(),
      new DeveloperError(),
    ];

    const valueBrowsers = await evaluate((window: any) => {
      const values_ = [
        new window.OnesyErrors.OnesyError(),
        new window.OnesyErrors.OnesyTestError(),
        new window.OnesyErrors.AssertError(),
        new window.OnesyErrors.AuthenticationError(),
        new window.OnesyErrors.AuthorizationError(),
        new window.OnesyErrors.ValidationError(),
        new window.OnesyErrors.NotFoundError(),
        new window.OnesyErrors.PermissionError(),
        new window.OnesyErrors.OnesyAmqpError(),
        new window.OnesyErrors.OnesyAwsError(),
        new window.OnesyErrors.OnesyMongoError(),
        new window.OnesyErrors.ConnectionError(),
        new window.OnesyErrors.DeveloperError(),
      ];

      return values_.map((value: any) => value.message);
    });

    const valueNode = values_.map(value => value.message);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([
      '',
      '',
      '',
      'Unauthenticated',
      'Unauthorized',
      'Invalid',
      'Not found',
      'No permissions',
      ...new Array(5).fill(''),
    ]));
  });

  group('stack', () => {

    to('message', async () => {
      const values_ = [
        new OnesyError('a'),
        new AuthorizationError('a'),
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const values_ = [
          new window.OnesyErrors.OnesyError('a'),
          new window.OnesyErrors.AuthorizationError('a'),
        ];

        return values_.map((value: any) => value.stack);
      });

      const valueNode = values_.map(value => value.stack);

      const values = [valueNode, ...valueBrowsers];

      assert(values).eql([
        [
          "OnesyError: a\n    at /Users/lazareric/onesy/onesy-errors/test/onesy-errors.test.ts:145:9\n    at /Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:321:34\n    at new Promise (<anonymous>)\n    at OnesyTest.runMethod (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:277:16)\n    at OnesyTest.runTo (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:382:48)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:255:21)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:257:21)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:257:21)\n    at async OnesyTest.run (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:192:13)\n    at async Object.run [as handler] (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/cli.js:59:9)",
          "AuthorizationError: a\n    at /Users/lazareric/onesy/onesy-errors/test/onesy-errors.test.ts:146:9\n    at /Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:321:34\n    at new Promise (<anonymous>)\n    at OnesyTest.runMethod (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:277:16)\n    at OnesyTest.runTo (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:382:48)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:255:21)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:257:21)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:257:21)\n    at async OnesyTest.run (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:192:13)\n    at async Object.run [as handler] (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/cli.js:59:9)"
        ],
        [
          "OnesyError: a\n    at eval (eval at evaluate (:3:2389), <anonymous>:3:21)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)",
          "AuthorizationError: a\n    at eval (eval at evaluate (:3:2389), <anonymous>:4:21)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)"
        ],
        [
          "t@http://localhost:4000/build/umd/onesy-errors.prod.min.js:6:758\n@debugger eval code line 3 > eval:3:21\nevaluate@debugger eval code:3:2412\n@debugger eval code:1:44\nevaluateFunction@chrome://juggler/content/content/Runtime.js:381:60\ncallFunction@chrome://juggler/content/content/Runtime.js:103:41\n_onMessage@chrome://juggler/content/SimpleChannel.js:165:37\nreceiveMessage@chrome://juggler/content/SimpleChannel.js:16:42\n",
          "t@http://localhost:4000/build/umd/onesy-errors.prod.min.js:6:758\na@http://localhost:4000/build/umd/onesy-errors.prod.min.js:6:1726\n@debugger eval code line 3 > eval:4:21\nevaluate@debugger eval code:3:2412\n@debugger eval code:1:44\nevaluateFunction@chrome://juggler/content/content/Runtime.js:381:60\ncallFunction@chrome://juggler/content/content/Runtime.js:103:41\n_onMessage@chrome://juggler/content/SimpleChannel.js:165:37\nreceiveMessage@chrome://juggler/content/SimpleChannel.js:16:42\n"
        ],
        [
          "t@http://localhost:4000/build/umd/onesy-errors.prod.min.js:6:767\n@\nevaluate@\n@\ncallFunctionOn@",
          "t@http://localhost:4000/build/umd/onesy-errors.prod.min.js:6:767\na@http://localhost:4000/build/umd/onesy-errors.prod.min.js:6:1731\n@\nevaluate@\n@\ncallFunctionOn@"
        ]
      ]);
    });

    to('message, with a more methods making a stack pre making an error', async () => {
      const values_ = [];

      function c() {
        values_.push(
          new OnesyError('a'),
          new AuthorizationError('a'),
        );
      }

      function b() {
        c();
      }

      function a() {
        b();
      }

      a();

      const valueBrowsers = await evaluate((window: any) => {
        const values_ = [];

        function c() {
          values_.push(
            new window.OnesyErrors.OnesyError('a'),
            new window.OnesyErrors.AuthorizationError('a'),
          );
        }

        function b() {
          c();
        }

        function a() {
          b();
        }

        a();

        return values_.map((value: any) => value.stack);
      });

      const valueNode = values_.map(value => value.stack);

      const values = [valueNode, ...valueBrowsers];

      assert(values).eql([
        [
          "OnesyError: a\n    at c (/Users/lazareric/onesy/onesy-errors/test/onesy-errors.test.ts:187:11)\n    at b (/Users/lazareric/onesy/onesy-errors/test/onesy-errors.test.ts:193:9)\n    at a (/Users/lazareric/onesy/onesy-errors/test/onesy-errors.test.ts:197:9)\n    at /Users/lazareric/onesy/onesy-errors/test/onesy-errors.test.ts:200:7\n    at /Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:321:34\n    at new Promise (<anonymous>)\n    at OnesyTest.runMethod (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:277:16)\n    at OnesyTest.runTo (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:382:48)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:255:21)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:257:21)",
          "AuthorizationError: a\n    at c (/Users/lazareric/onesy/onesy-errors/test/onesy-errors.test.ts:188:11)\n    at b (/Users/lazareric/onesy/onesy-errors/test/onesy-errors.test.ts:193:9)\n    at a (/Users/lazareric/onesy/onesy-errors/test/onesy-errors.test.ts:197:9)\n    at /Users/lazareric/onesy/onesy-errors/test/onesy-errors.test.ts:200:7\n    at /Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:321:34\n    at new Promise (<anonymous>)\n    at OnesyTest.runMethod (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:277:16)\n    at OnesyTest.runTo (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:382:48)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:255:21)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:257:21)"
        ],
        [
          "OnesyError: a\n    at c (eval at evaluate (:3:2389), <anonymous>:4:34)\n    at b (eval at evaluate (:3:2389), <anonymous>:7:21)\n    at a (eval at evaluate (:3:2389), <anonymous>:10:21)\n    at eval (eval at evaluate (:3:2389), <anonymous>:12:17)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)",
          "AuthorizationError: a\n    at c (eval at evaluate (:3:2389), <anonymous>:4:74)\n    at b (eval at evaluate (:3:2389), <anonymous>:7:21)\n    at a (eval at evaluate (:3:2389), <anonymous>:10:21)\n    at eval (eval at evaluate (:3:2389), <anonymous>:12:17)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)"
        ],
        [
          "t@http://localhost:4000/build/umd/onesy-errors.prod.min.js:6:758\nc@debugger eval code line 3 > eval:4:34\nb@debugger eval code line 3 > eval:7:21\na@debugger eval code line 3 > eval:10:21\n@debugger eval code line 3 > eval:12:17\nevaluate@debugger eval code:3:2412\n@debugger eval code:1:44\nevaluateFunction@chrome://juggler/content/content/Runtime.js:381:60\ncallFunction@chrome://juggler/content/content/Runtime.js:103:41\n_onMessage@chrome://juggler/content/SimpleChannel.js:165:37\nreceiveMessage@chrome://juggler/content/SimpleChannel.js:16:42\n",
          "t@http://localhost:4000/build/umd/onesy-errors.prod.min.js:6:758\na@http://localhost:4000/build/umd/onesy-errors.prod.min.js:6:1726\nc@debugger eval code line 3 > eval:4:74\nb@debugger eval code line 3 > eval:7:21\na@debugger eval code line 3 > eval:10:21\n@debugger eval code line 3 > eval:12:17\nevaluate@debugger eval code:3:2412\n@debugger eval code:1:44\nevaluateFunction@chrome://juggler/content/content/Runtime.js:381:60\ncallFunction@chrome://juggler/content/content/Runtime.js:103:41\n_onMessage@chrome://juggler/content/SimpleChannel.js:165:37\nreceiveMessage@chrome://juggler/content/SimpleChannel.js:16:42\n"
        ],
        [
          "t@http://localhost:4000/build/umd/onesy-errors.prod.min.js:6:767\nc@\nb@\na@\n@\nevaluate@\n@\ncallFunctionOn@",
          "t@http://localhost:4000/build/umd/onesy-errors.prod.min.js:6:767\na@http://localhost:4000/build/umd/onesy-errors.prod.min.js:6:1731\nc@\nb@\na@\n@\nevaluate@\n@\ncallFunctionOn@"
        ]
      ]);
    });

    to('error', async () => {
      const error = new Error('a');

      const values_ = [
        new OnesyError(error),
        new AuthorizationError(error),
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const error = new Error('a');

        const values_ = [
          new window.OnesyErrors.OnesyError(error),
          new window.OnesyErrors.AuthorizationError(error),
        ];

        return values_.map((value: any) => value.stack);
      });

      const valueNode = values_.map(value => value.stack);

      const values = [valueNode, ...valueBrowsers];

      assert(values).eql([
        [
          "Error: a\n    at /Users/lazareric/onesy/onesy-errors/test/onesy-errors.test.ts:250:21\n    at /Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:321:34\n    at new Promise (<anonymous>)\n    at OnesyTest.runMethod (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:277:16)\n    at OnesyTest.runTo (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:382:48)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:255:21)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:257:21)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:257:21)\n    at async OnesyTest.run (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:192:13)\n    at async Object.run [as handler] (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/cli.js:59:9)",
          "Error: a\n    at /Users/lazareric/onesy/onesy-errors/test/onesy-errors.test.ts:250:21\n    at /Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:321:34\n    at new Promise (<anonymous>)\n    at OnesyTest.runMethod (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:277:16)\n    at OnesyTest.runTo (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:382:48)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:255:21)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:257:21)\n    at async OnesyTest.runGroup (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:257:21)\n    at async OnesyTest.run (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/onesy-test.js:192:13)\n    at async Object.run [as handler] (/Users/lazareric/onesy/onesy-errors/node_modules/@onesy/test/cli.js:59:9)"
        ],
        [
          "Error: a\n    at eval (eval at evaluate (:3:2389), <anonymous>:2:31)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)",
          "Error: a\n    at eval (eval at evaluate (:3:2389), <anonymous>:2:31)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)"
        ],
        [
          "@debugger eval code line 3 > eval:2:31\nevaluate@debugger eval code:3:2412\n@debugger eval code:1:44\nevaluateFunction@chrome://juggler/content/content/Runtime.js:381:60\ncallFunction@chrome://juggler/content/content/Runtime.js:103:41\n_onMessage@chrome://juggler/content/SimpleChannel.js:165:37\nreceiveMessage@chrome://juggler/content/SimpleChannel.js:16:42\n",
          "@debugger eval code line 3 > eval:2:31\nevaluate@debugger eval code:3:2412\n@debugger eval code:1:44\nevaluateFunction@chrome://juggler/content/content/Runtime.js:381:60\ncallFunction@chrome://juggler/content/content/Runtime.js:103:41\n_onMessage@chrome://juggler/content/SimpleChannel.js:165:37\nreceiveMessage@chrome://juggler/content/SimpleChannel.js:16:42\n"
        ],
        [
          "@\nevaluate@\n@\ncallFunctionOn@",
          "@\nevaluate@\n@\ncallFunctionOn@"
        ]
      ]);
    });

  });

});
