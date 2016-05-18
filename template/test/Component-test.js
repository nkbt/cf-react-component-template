import test from 'tape';
import {{curly.left}}{{package.global}}{{curly.right}} from '../src/Component';


test('{{package.global}}', t => {
  t.ok({{package.global}} instanceof Function, 'should be function');
  t.end();
});
