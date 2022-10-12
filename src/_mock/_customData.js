import _leave from './_leave';
// import { randomStatus } from './funcs';

export const _customData = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  status: _leave.status(),
  role: _leave.role(index),
}));
