import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _salary = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  empName: _leave.name.fullName(index),
  empImg: _leave.image.avatar(index),
  salaryType: `Type ${index}`,
  calculation: `Calculation ${index}`,
  salary: _leave.salary(),
  month: _leave.getMonth(),
  status: _leave.status(),
}));
