import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _type = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  name: _leave.name.fullName(index),
  status: _leave.status(),
  img: _leave.image.avatar(index),
}));
