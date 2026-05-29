import test from 'node:test';import assert from 'node:assert/strict';import {createPayLink,parsePayLink} from '../src/index.js';
test('creates paylink',()=>{const link=createPayLink({to:'0x1111111111111111111111111111111111111111',amount:123000000n,memo:'demo'});const p=parsePayLink(link);assert.equal(p.chainId,'5042002');assert.equal(p.amount,'123000000');});
