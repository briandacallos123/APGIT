import _leave from '../../_leave';
// import { randomStatus } from './funcs';

export const _attendance = [...Array(10)].map((_, index) => ({
  id: _leave.id(index),
  date: _leave.date(),
  employee: _leave.image.avatar(index),
  dept: _leave.dept(index),
  breakTime: _leave.breakTime(),
  breakDuration: _leave.breakDuration,
  checkIn: _leave.num(index),
  checkOut: _leave.num(index + 3),
  hours: 8,
  overtime: _leave.num(index + 2),
  employeeName: _leave.name.fullName(index),
}));

export const _accountList = [...Array(10)].map((_, index) => ({
  name: _leave.name.fullName(index),
  balance: _leave.account.accountBalance(),
  accNumber: _leave.account.accountNumber(),
  branch: _leave.account.branchName(),
  status: _leave.status(),
}));

export const _deposit = [...Array(10)].map((_, index) => ({
  name: _leave.name.fullName(index),
  balance: _leave.account.accountBalance(),
  accNumber: _leave.account.accountNumber(),
  branch: _leave.account.branchName(),
  status: _leave.status(),
  category: _leave.category(),
  amount: _leave.salary(),
  date: _leave.date(),
  payment: _leave.paymentMethod(),
  reference: _leave.reference(),
  img: _leave.image.avatar(index),
}));

export const _expense = [...Array(10)].map((_, index) => ({
  name: _leave.name.fullName(index),
  status: _leave.status(),
  category: _leave.category(),
  amount: _leave.salary(),
  date: _leave.date(),
  payment: _leave.paymentMethod(),
  img: _leave.image.avatar(index),
}));
