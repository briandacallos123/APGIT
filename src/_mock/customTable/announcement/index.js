import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _Notice = [...Array(10)].map((_, index) => ({
  date: _leave.startDate(),
  subject: `Subject ${index}`,
  dept: _leave.dept(index),
  description: `Description ${index}`,
  file: `File ${index}`,
}));

export const _pushNotif = [...Array(10)].map((_, index) => ({
  date: _leave.startDate(),
  subject: `Subject ${index}`,
  dept: _leave.dept(index),
  description: `Description ${index}`,
  file: `File ${index}`,
}));
