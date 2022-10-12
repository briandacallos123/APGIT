import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _userRole = [...Array(20)].map((_, index) => ({
  id: _leave.id(index),
  designation: _leave.company(index),
  status: _leave.status(),
  action: 'Restricted',
  permission: '111',
  name: _leave.name.fullName(index),
  img: _leave.image.avatar(index),
}));
