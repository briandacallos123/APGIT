import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _userData = [...Array(20)].map((_, index) => ({
  id: _leave.id(index),
  name: _leave.name.fullName(index),
  email: _leave.email(index),
  phone: _leave.phoneNumber(index),
  designation: _leave.role(index),
  department: _leave.company(index),
  role: _leave.role(index),
  shift: 'Day',
  status: _leave.status(),
  img: _leave.image.avatar(index),
}));
