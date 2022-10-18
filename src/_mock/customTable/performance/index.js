import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _indicator = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  dept: _leave.dept(index),
  designation: _leave.role(index),
  shift: _leave.shift(),
  rating: `0.${index}`,
  addedBy: _leave.name.fullName(index),
  addebByImg: _leave.image.avatar(index),
  createdAt: `Created At ${index}`,
  title: `Title ${index}`,
}));

export const _appraisal = [...Array(10)].map((_, index) => ({
  title: `Title ${index}`,
  addedBy: _leave.name.fullName(index),
  addebByImg: _leave.image.avatar(index),
  employeeCount: `${index + 5}`,
  dept: _leave.dept(index),
  designation: _leave.role(index),
  rating: `0.${index}`,
  createdAt: `Created At ${index}`,
}));

export const _goal = [...Array(10)].map((_, index) => ({
  goalType: `Goal ${index}`,
  subject: `Subject ${index}`,
  target: `Target ${index}`,
  rating: `0.${index}`,
  progress: `Progress ${index}`,
  startDate: _leave.startDate(),
  endDate: _leave.startDate(),
}));

export const _competenceTypesData = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  name: _leave.name.fullName(index),
  status: _leave.status(),
  img: _leave.image.avatar(index),
}));

export const _competencies = [...Array(10)].map((_, index) => ({
  name: _leave.name.fullName(index),
  company: _leave.company(index),
  role: _leave.role(index),
  status: _leave.status(),
  isVerified: _leave.boolean(index),
}));
