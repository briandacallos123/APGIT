import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _list = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  title: `Title ${index}`,
  appointmentWith: _leave.name.fullName(index),
  appointmentWithImg: _leave.image.avatar(index),
  date: _leave.startDate(),
  startDate: _leave.startDate(),
  endDate: _leave.startDate(),
  location: `Location ${index}`,
  file: `File ${index}`,
  status: _leave.status(),
}));
