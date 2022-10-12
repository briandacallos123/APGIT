import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _awardType = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  name: _leave.name.fullName(index),
  status: _leave.status(),
}));

export const _awardList = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  name: _leave.name.fullName(index),
  img: _leave.image.avatar(index),
  awardType: 'Type 1',
  gift: 'Gift 1',
  amount: _leave.salary(),
  date: _leave.startDate(),
  status: _leave.status(),
}));
