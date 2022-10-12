import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _travelType = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  name: _leave.name.fullName(index),
  status: _leave.status(),
  img: _leave.image.avatar(index),
}));

export const _travelList = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  name: _leave.name.fullName(index),
  img: _leave.image.avatar(index),
  awardType: 'Type 1',
  place: 'Place 1',
  amount: _leave.salary(),
  date: _leave.startDate(),
  status: _leave.status(),
}));
