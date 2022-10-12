import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const setup = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  date: _leave.date(),
  employee: _leave.image.avatar(index),
  empName: _leave.name.fullName(index),
  dept: _leave.dept(index),
  breakTime: _leave.breakTime(),
  breakDuration: _leave.breakDuration,
  checkIn: _leave.num(index),
  checkOut: _leave.num(index + 3),
  hours: 8,
  overtime: _leave.num(index + 2),
  shift: _leave.shift(),
  salary: _leave.salary(),
  status: 'Active',
  role: _leave.role(index),
}));
