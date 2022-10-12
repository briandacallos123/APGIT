import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _transaction = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  account: _leave.account.accountNumber(),
  name: _leave.name.fullName(index),
  amount: _leave.account.accountBalance(),
  date: _leave.startDate(),
  status: _leave.status(),
  img: _leave.image.avatar(index),
  type: 'Type 1',
}));
