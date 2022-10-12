import _mock from '../../_mock';
// import { randomStatus } from './funcs';

export const _assign = [...Array(10)].map((_, index) => ({
  id: _mock.id(index),
  department: _mock.role(index),
  type: 'Leave without pay',
  days: '0',
  status: 'Active',
}));
