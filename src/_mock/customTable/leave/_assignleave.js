import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _assign = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  department: _leave.role(index),
  type: 'Leave without pay',
  days: '0',
  status: _leave.status(),
}));
