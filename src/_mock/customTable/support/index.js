import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _ticket = [...Array(10)].map((_, index) => ({
  date: _leave.startDate(),
  code: `Code ${index}`,
  employee: _leave.name.fullName(index),
  img: _leave.image.avatar(index),
  type: `Type ${index}`,
  priority: `Priority ${index}`,
  subject: `Subject ${index}`,
}));
