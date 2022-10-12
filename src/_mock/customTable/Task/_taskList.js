import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _task = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  employeeName: _leave.name.fullName(index),
  status: _leave.status(),
  startDate: _leave.startDate(),
  endDate: _leave.startDate(),
  assign: _leave.assign(index),
  priority: _leave.priority(),
  img: _leave.image.avatar(index),
}));
