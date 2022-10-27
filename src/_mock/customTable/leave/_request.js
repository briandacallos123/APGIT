import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _request = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  name: _leave.name.fullName(index),
  leaveType: _leave.type(index),
  img: _leave.image.avatar(index),
  days: _leave.days(index),
  date: _leave.date(),
  available: _leave.days(index + 2),
  subtitute: _leave.name.fullName(index + 5),
  managerApprove: 'mnapprove',
  hrApprove: 'hrapprove',
  file: 'no file',
  status: _leave.status(),
}));
