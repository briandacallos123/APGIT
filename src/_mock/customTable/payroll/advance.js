import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const advance = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  employee: _leave.image.avatar(index),
  empName: _leave.name.fullName(index),
  dept: _leave.dept(index),
  shift: _leave.shift(),
  salary: _leave.salary(),
  status: 'Active',
  role: _leave.role(index),
  department: `Department ${index}`,
}));
