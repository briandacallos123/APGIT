import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _project = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  projectName: 'Project Name1',
  client: _leave.name.fullName(index),
  clientImg: _leave.image.avatar(index),
  priority: _leave.priority(),
  startDate: _leave.startDate(),
  deadLine: _leave.startDate(),
  members: _leave.name.fullName(index + 1),
  membersImg: _leave.image.avatar(index + 1),
  status: _leave.status(),
}));
