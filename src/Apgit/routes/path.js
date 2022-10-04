const ROOT_DASHBOARD = '/apgit';
const ROOT_AUTH = '/apgit/auth';

function path(path, param) {
  return `${path}${param}`;
}

export const DASHBOARD = {
  root: ROOT_DASHBOARD,
  dashboard: path(ROOT_DASHBOARD, '/dashboard'),
  users: path(ROOT_DASHBOARD, '/users'),
  designation: path(ROOT_DASHBOARD, '/users/designation'),
  departments: path(ROOT_DASHBOARD, '/users/departments'),
  user: path(ROOT_DASHBOARD, '/users/user'),
  roles: path(ROOT_DASHBOARD, '/users/roles'),

  // leave
  type: path(ROOT_DASHBOARD, '/leave/type'),
  assign: path(ROOT_DASHBOARD, '/leave/assign-leave'),
  leave: path(ROOT_DASHBOARD, '/leave/leave-request'),
  // attendance
  weekend: path(ROOT_DASHBOARD, '/attendance/weekend-setup'),
  holiday: path(ROOT_DASHBOARD, '/attendance/holiday-setup'),
  duty: path(ROOT_DASHBOARD, '/attendance/duty-schedule'),
  attendance: path(ROOT_DASHBOARD, '/attendance/attendance-history'),
  shift: path(ROOT_DASHBOARD, '/attendance/shift-setup'),
  // payroll
  setup: path(ROOT_DASHBOARD, '/payroll/setup'),
  advance: path(ROOT_DASHBOARD, '/payroll/advance'),
  salary: path(ROOT_DASHBOARD, '/payroll/salary'),
  // accounts
  accountlist: path(ROOT_DASHBOARD, '/accounts/accounts-list'),
  deposit: path(ROOT_DASHBOARD, '/accounts/deposit'),
  expense: path(ROOT_DASHBOARD, '/accounts/expense'),
  transaction: path(ROOT_DASHBOARD, '/accounts/transaction-history'),
  accountsetting: path(ROOT_DASHBOARD, '/accounts/account-settings'),
  // clients
  list: path(ROOT_DASHBOARD, '/clients/list'),
  create: path(ROOT_DASHBOARD, '/clients/create'),
  // task
  taskcreate: path(ROOT_DASHBOARD, '/task/task-create'),
  tasklist: path(ROOT_DASHBOARD, '/task/task-list'),
  // project
  projectcreate: path(ROOT_DASHBOARD, '/project/project-create'),
  projectlist: path(ROOT_DASHBOARD, '/project/project-list'),
  // awards
  awardstype: path(ROOT_DASHBOARD, '/awards/award-type-list'),
  awardslist: path(ROOT_DASHBOARD, '/awards/award-list'),
  // travels
  traveltype: path(ROOT_DASHBOARD, '/travels/type'),
  travellist: path(ROOT_DASHBOARD, '/travels/travel-list'),
  // performance
  indicator: path(ROOT_DASHBOARD, '/performance/indicator'),
  appraisal: path(ROOT_DASHBOARD, '/performance/appraisal'),
  goal: path(ROOT_DASHBOARD, '/performance/goal'),
  settings: path(ROOT_DASHBOARD, '/performance/settings'),
  competencetype: path(ROOT_DASHBOARD, '/performance/settings/competencetype'),
  competencies: path(ROOT_DASHBOARD, '/performance/settings/competencies'),
  goaltype: path(ROOT_DASHBOARD, '/performance/settings/goaltype'),
  // appointment
  appointmentlist: path(ROOT_DASHBOARD, '/appointment/appointment-list'),
  // visit
  managelist: path(ROOT_DASHBOARD, '/visit/manage-list'),
  // support
  supportticket: path(ROOT_DASHBOARD, '/support/tickets'),
  // announcement
  notice: path(ROOT_DASHBOARD, '/announcement/notice'),
  notif: path(ROOT_DASHBOARD, '/announcement/push-notification'),
  // setup n config
  config: path(ROOT_DASHBOARD, '/setup&configuration/config'),
  weekendsetup: path(ROOT_DASHBOARD, '/setup&configuration/weekendsetup'),
  holidaysetup: path(ROOT_DASHBOARD, '/setup&configuration/holidaysetup'),
  shiftsetup: path(ROOT_DASHBOARD, '/setup&configuration/shiftsetup'),
  dutyschedule: path(ROOT_DASHBOARD, '/setup&configuration/dutyschedule'),
  whitelist: path(ROOT_DASHBOARD, '/setup&configuration/ip-whitelist'),
  location: path(ROOT_DASHBOARD, '/setup&configuration/location'),
  activation: path(ROOT_DASHBOARD, '/setup&configuration/activation'),
  // settings
  generalsettings: path(ROOT_DASHBOARD, '/settings/general-settings'),
  appsettings: path(ROOT_DASHBOARD, '/settings/app-settings'),
  contents: path(ROOT_DASHBOARD, '/settings/contents'),
  language: path(ROOT_DASHBOARD, '/settings/language'),
};

export const AUTH = {
  root: ROOT_AUTH,
  app: path(ROOT_AUTH, '/app'),
  login: path(ROOT_AUTH, '/login'),
  register: path(ROOT_AUTH, '/register'),
  loginUnprotected: path(ROOT_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOT_AUTH, '/register-unprotected'),
  verify: path(ROOT_AUTH, '/verify'),
  resetPassword: path(ROOT_AUTH, '/reset-password'),
  newPassword: path(ROOT_AUTH, '/new-password'),
};
