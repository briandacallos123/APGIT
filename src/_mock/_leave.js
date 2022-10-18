import { role } from './role';
import { email } from './email';
import { boolean } from './boolean';
import { company } from './company';
import { phoneNumber } from './phoneNumber';
import { fullAddress, country } from './address';
import { firstName, lastName, fullName } from './name';
import { title, sentence, description } from './text';
import { price, rating, age, percent, days, hour } from './number';
import { departments } from './department';
import { approved, leaveType } from './leave';
import { breakTime, breakDuration } from './break';
import { shift } from './shift';
import { salary } from './salary';
import { balance, accountNumber, branchName, category, paymentMethod, reference } from './account';
import { status } from './status';
import { website } from './website';
import { startDate, month } from './date';
import { assignedTo } from './assigned';
import { priority } from './priority';

const _leave = {
  id: (index) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
  type: (index) => leaveType[index],
  days: (index) => days[index],
  availableDays: (index) => days[index],
  dept: (index) => departments[index],
  num: (index) => hour[index],
  role: (index) => role[index],
  email: (index) => email[index],
  phoneNumber: (index) => phoneNumber[index],
  website: (index) => website[index],
  assign: (index) => assignedTo[index],
  boolean: (index) => boolean[index],
  company: (index) => company[index],
  priority: () => {
    const rand = Math.floor(Math.random() * 9);
    return priority[rand];
  },
  getMonth: () => {
    const rand = Math.floor(Math.random() * 12);

    return month[rand];
  },
  startDate: () => {
    const rand = Math.floor(Math.random() * 7);
    return startDate[rand];
  },
  reference: () => {
    const rand = Math.floor(Math.random() * 6);
    return reference[rand];
  },
  paymentMethod: () => {
    const rand = Math.floor(Math.random() * 2);
    return paymentMethod[rand];
  },
  category: () => {
    const rand = Math.floor(Math.random() * 6);
    return category[rand];
  },
  status: () => {
    const rand = Math.floor(Math.random() * 2);
    return status[rand];
  },
  salary: () => {
    const rand = Math.floor(Math.random() * 4);
    return salary[rand];
  },
  shift: () => {
    const rand = Math.floor(Math.random() * 2);
    return shift[rand];
  },
  breakTime: () => {
    const rand = Math.floor(Math.random() * 2);
    return breakTime[rand];
  },
  breakDuration,
  date: () => {
    const date = new Date().getFullYear();
    return date;
  },
  approve: () => {
    const rand = Math.floor(Math.random() * 3);
    return approved[rand];
  },
  // account
  account: {
    accountBalance: () => {
      const rand = Math.floor(Math.random() * 7);
      return balance[rand];
    },
    accountNumber: () => {
      const rand = Math.floor(Math.random() * 5);
      return accountNumber[rand];
    },
    branchName: () => {
      const rand = Math.floor(Math.random() * 5);
      return branchName[rand];
    },
  },

  name: {
    firstName: (index) => firstName[index],
    lastName: (index) => lastName[index],
    fullName: (index) => fullName[index],
  },
  image: {
    cover: (index) => `https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_${index + 1}.jpg`,
    feed: (index) => `https://minimal-assets-api-dev.vercel.app/assets/images/feeds/feed_${index + 1}.jpg`,
    product: (index) => `https://minimal-assets-api-dev.vercel.app/assets/images/products/product_${index + 1}.jpg`,
    avatar: (index) => `https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
};

export default _leave;
