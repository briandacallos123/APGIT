import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _visit = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  name: _leave.name.fullName(index),
  status: _leave.status(),
  img: _leave.image.avatar(index),
  date: _leave.startDate(),
  title: `Title ${index}`,
  description: `Description ${index}`,
  cancellationNote: `Note ${index}`,
  file: `File ${index}`,
}));
