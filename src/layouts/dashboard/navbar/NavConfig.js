// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
import { DASHBOARD } from '../../../Apgit/routes/path';
import { CustomIcon } from '../../../Apgit/icons';

// components
import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  menuItem: getIcon('ic_menu_item'),
  // my icon
  dashboard2: CustomIcon.dashboard,
  usernroles: CustomIcon.RecentActorsOutlinedIcon,
  leave: CustomIcon.EventBusyOutlinedIcon,
  attendance: CustomIcon.InventoryOutlinedIcon,
  payroll: CustomIcon.MoneyOutlinedIcon,
  accounts: CustomIcon.ManageAccountsOutlinedIcon,
  clients: CustomIcon.PeopleOutlinedIcon,
  task: CustomIcon.TaskOutlinedIcon,
  project: CustomIcon.AccountTreeOutlinedIcon,
  awards: CustomIcon.MilitaryTechOutlinedIcon,
  travels: CustomIcon.FlightOutlinedIcon,
  performance: CustomIcon.SpeedOutlinedIcon,
  appointment: CustomIcon.CalendarMonthOutlinedIcon,
  visit: CustomIcon.LocationOnOutlinedIcon,
  support: CustomIcon.SupportAgentOutlinedIcon,
  announcement: CustomIcon.NotificationsOutlinedIcon,
  setup: CustomIcon.PermDataSettingOutlinedIcon,
  settings: CustomIcon.SettingsOutlinedIcon,
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      { title: 'Dashboard', path: DASHBOARD.dashboard, icon: ICONS.dashboard2 },
      {
        title: 'User & Roles',
        path: DASHBOARD.users,
        icon: ICONS.usernroles,
        children: [
          {
            title: 'Designatons',
            path: DASHBOARD.designation,
          },
          {
            title: 'Departments',
            path: DASHBOARD.departments,
          },
          {
            title: 'User',
            path: DASHBOARD.user,
          },
          {
            title: 'Roles',
            path: DASHBOARD.roles,
          },
        ],
      },
      {
        title: 'Leave',
        path: DASHBOARD.leave,
        icon: ICONS.leave,
        children: [
          {
            title: 'Type',
            path: DASHBOARD.type,
          },
          {
            title: 'Assign Leave',
            path: DASHBOARD.assign,
          },
          {
            title: 'Leave Request',
            path: DASHBOARD.leave,
          },
        ],
      },
      {
        title: 'Attendance',
        path: DASHBOARD.weekend,
        icon: ICONS.attendance,
        children: [
          {
            title: 'Attendance',
            path: DASHBOARD.weekend,
          },
        ],
      },
      {
        title: 'Payroll',
        path: DASHBOARD.setup,
        icon: ICONS.payroll,
        children: [
          {
            title: 'Setup',
            path: DASHBOARD.setup,
          },
          {
            title: 'Advance',
            path: DASHBOARD.advance,
          },
          {
            title: 'Salary',
            path: DASHBOARD.salary,
          },
        ],
      },
      {
        title: 'Accounts',
        path: DASHBOARD.accountlist,
        icon: ICONS.accounts,
        children: [
          {
            title: 'Account List',
            path: DASHBOARD.accountlist,
          },
          {
            title: 'Deposit',
            path: DASHBOARD.deposit,
          },
          {
            title: 'Expense',
            path: DASHBOARD.expense,
          },
          {
            title: 'Transaction History',
            path: DASHBOARD.transaction,
          },
          {
            title: 'Account Settings',
            path: DASHBOARD.accountsetting,
          },
        ],
      },
      {
        title: 'Clients',
        path: DASHBOARD.list,
        icon: ICONS.clients,
        children: [
          {
            title: 'List',
            path: DASHBOARD.list,
          },
          {
            title: 'Create',
            path: DASHBOARD.create,
          },
        ],
      },
      {
        title: 'Task',
        path: DASHBOARD.taskcreate,
        icon: ICONS.task,
        children: [
          {
            title: 'Task Create',
            path: DASHBOARD.taskcreate,
          },
          {
            title: 'List',
            path: DASHBOARD.tasklist,
          },
        ],
      },
      {
        title: 'Project',
        path: DASHBOARD.projectcreate,
        icon: ICONS.project,
        children: [
          {
            title: 'Project Create',
            path: DASHBOARD.projectcreate,
          },
          {
            title: 'Project List',
            path: DASHBOARD.projectlist,
          },
        ],
      },
      {
        title: 'Awards',
        path: DASHBOARD.awardstype,
        icon: ICONS.awards,
        children: [
          {
            title: 'Award Type',
            path: DASHBOARD.awardstype,
          },
          {
            title: 'Award List',
            path: DASHBOARD.awardslist,
          },
        ],
      },
      {
        title: 'Travels',
        path: DASHBOARD.traveltype,
        icon: ICONS.travels,
        children: [
          {
            title: 'Type',
            path: DASHBOARD.traveltype,
          },
          {
            title: 'Travel List',
            path: DASHBOARD.travellist,
          },
        ],
      },
      {
        title: 'Performance',
        path: DASHBOARD.indicator,
        icon: ICONS.performance,
        children: [
          {
            title: 'Indicator',
            path: DASHBOARD.indicator,
          },
          {
            title: 'Appraisal',
            path: DASHBOARD.appraisal,
          },
          {
            title: 'Goal',
            path: DASHBOARD.goal,
          },
          {
            title: 'Settings',
            path: DASHBOARD.settings,
            children: [
              {
                title: 'Competence Type',
                path: DASHBOARD.competencetype,
              },
              {
                title: 'Competencies',
                path: DASHBOARD.competencies,
              },
              {
                title: 'Goal Type',
                path: DASHBOARD.goaltype,
              },
            ],
          },
        ],
      },
      {
        title: 'Appointment',
        path: DASHBOARD.appointmentlist,
        icon: ICONS.appointment,
        children: [
          {
            title: 'List',
            path: DASHBOARD.appointmentlist,
          },
        ],
      },
      {
        title: 'Visit',
        path: DASHBOARD.managelist,
        icon: ICONS.visit,
        children: [
          {
            title: 'Manage List',
            path: DASHBOARD.managelist,
          },
        ],
      },
      {
        title: 'Support',
        path: DASHBOARD.supportticket,
        icon: ICONS.support,
        children: [
          {
            title: 'Tickets',
            path: DASHBOARD.supportticket,
          },
        ],
      },
      {
        title: 'Announcement',
        path: DASHBOARD.notice,
        icon: ICONS.announcement,
        children: [
          {
            title: 'Notice',
            path: DASHBOARD.notice,
          },
          {
            title: 'Push Notification',
            path: DASHBOARD.notif,
          },
        ],
      },
      // {
      //   title: 'Setup & Configuration',
      //   path: DASHBOARD.config,
      //   icon: ICONS.setup,
      //   children: [
      //     {
      //       title: 'Configurations',
      //       path: DASHBOARD.config,
      //     },
      //     {
      //       title: 'Weekend setup',
      //       path: DASHBOARD.weekendsetup,
      //     },
      //     {
      //       title: 'Holiday setup',
      //       path: DASHBOARD.holidaysetup,
      //     },
      //     {
      //       title: 'Shift setup',
      //       path: DASHBOARD.shiftsetup,
      //     },
      //     {
      //       title: 'Duty Schedule',
      //       path: DASHBOARD.dutyschedule,
      //     },
      //     {
      //       title: 'IP Whitelist',
      //       path: DASHBOARD.whitelist,
      //     },
      //     {
      //       title: 'Locations',
      //       path: DASHBOARD.location,
      //     },
      //     {
      //       title: 'Activation',
      //       path: DASHBOARD.activation,
      //     },
      //   ],
      // },
      // {
      //   title: 'Settings',
      //   path: DASHBOARD.generalsettings,
      //   icon: ICONS.settings,
      //   children: [
      //     {
      //       title: 'General Settings',
      //       path: DASHBOARD.generalsettings,
      //     },
      //     {
      //       title: 'App Setting',
      //       path: DASHBOARD.appsettings,
      //     },
      //     {
      //       title: 'Contents',
      //       path: DASHBOARD.contents,
      //     },
      //     {
      //       title: 'Language',
      //       path: DASHBOARD.language,
      //     },
      //   ],
      // },
    ],
  },
];

export default navConfig;
