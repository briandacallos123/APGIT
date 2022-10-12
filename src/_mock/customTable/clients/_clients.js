import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _clients = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  employeeName: _leave.name.fullName(index),
  email: _leave.email(index),
  phone: _leave.phoneNumber(index),
  website: _leave.website(index),
  status: _leave.status(),
  img: _leave.image.avatar(index),
}));
