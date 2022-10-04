import React, { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';

// component
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
import MainLayout from '../../layouts/main';
import LoadingScreen from '../../components/LoadingScreen';

import DashboardLayout from '../../layouts/dashboard';
// guards
import GuestGuard from '../../guards/GuestGuard';
import AuthGuard from '../../guards/AuthGuard';

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/apgit/auth',
      children: [
        {
          path: 'login',
          element: (
            <AuthGuard>
              <Login />
            </AuthGuard>
          ),
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'new-password', element: <NewPassword /> },
        { path: 'verify', element: <VerifyCode /> },
      ],
    },
    {
      path: '/apgit',
      element: <DashboardLayout />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: 'users',
          // element: <h1>Hello ulit</h1>,
          children: [
            {
              path: 'designation',
              element: <Designation />,
            },
            {
              path: 'departments',
              element: <Departments />,
            },
            {
              path: 'user',
              element: <Userlist />,
            },
            {
              path: 'roles',
              element: <Roles />,
            },
          ],
        },

        {
          path: 'leave',
          // element: <h1>Hello ulit</h1>,
          children: [
            {
              path: 'type',
              element: <Leave />,
            },
            {
              path: 'assign-leave',
              element: <AssignLeave />,
            },
            {
              path: 'leave-request',
              element: <LeaveRequest />,
            },
          ],
        },

        {
          path: 'attendance',
          children: [
            {
              path: 'weekend-setup',
              element: <Attendance />,
            },
            // {
            //   path: 'holiday-setup',
            //   element: <h1>holiday-setup</h1>,
            // },
            // {
            //   path: 'duty-schedule',
            //   element: <h1>duty-schedule</h1>,
            // },
            // {
            //   path: 'attendance-history',
            //   element: <h1>attendance-history</h1>,
            // },
            // {
            //   path: 'shift-setup',
            //   element: <h1>shift-setup</h1>,
            // },
          ],
        },

        {
          path: 'payroll',
          children: [
            {
              path: 'setup',
              element: <Setup />,
            },
            {
              path: 'advance',
              element: <Advance />,
            },
            {
              path: 'salary',
              element: <Salary />,
            },
          ],
        },
        // const AccountList = Loadable(lazy(() => import('../pages/accounts/AccountList')));
        // const AccountSetting = Loadable(lazy(() => import('../pages/accounts/AccountSetting')));
        // const Deposit = Loadable(lazy(() => import('../pages/accounts/Deposit')));
        // const Expense = Loadable(lazy(() => import('../pages/accounts/Expense')));
        // const TransactionHistory = Loadable(lazy(() => import('../pages/accounts/TransactionHistory')));
        {
          path: 'accounts',
          children: [
            {
              path: 'accounts-list',
              element: <AccountList />,
            },
            {
              path: 'deposit',
              element: <Deposit />,
            },
            {
              path: 'expense',
              element: <Expense />,
            },
            {
              path: 'transaction-history',
              element: <TransactionHistory />,
            },
            {
              path: 'account-settings',
              element: <AccountSetting />,
            },
          ],
        },
        {
          path: 'clients',
          children: [
            {
              path: 'list',
              element: <ClientList />,
            },
            {
              path: 'create',
              element: <CreateClient />,
            },
          ],
        },

        {
          path: 'task',
          children: [
            {
              path: 'task-create',
              element: <TaskCreate />,
            },
            {
              path: 'task-list',
              element: <TaskList />,
            },
          ],
        },

        {
          path: 'project',
          children: [
            {
              path: 'project-create',
              element: <ProjectCreate />,
            },
            {
              path: 'project-list',
              element: <ProjectList />,
            },
          ],
        },

        {
          path: 'awards',
          children: [
            {
              path: 'award-type-list',
              element: <AwardType />,
            },
            {
              path: 'award-list',
              element: <AwardList />,
            },
          ],
        },

        {
          path: 'travels',
          children: [
            {
              path: 'type',
              element: <TravelType />,
            },
            {
              path: 'travel-list',
              element: <TravelList />,
            },
          ],
        },

        {
          path: 'performance',
          children: [
            {
              path: 'indicator',
              element: <Indicator />,
            },
            {
              path: 'appraisal',
              element: <Appraisal />,
            },
            {
              path: 'goal',
              element: <Goal />,
            },
            {
              path: 'settings',
              element: <Settings />,
              children: [
                {
                  path: 'competencetype',
                  element: <CompetenceType />,
                },
                {
                  path: 'competencies',
                  element: <Competencies />,
                },
                {
                  path: 'goaltype',
                  element: <GoalType />,
                },
              ],
            },
          ],
        },

        {
          path: 'appointment',
          children: [
            {
              path: 'appointment-list',
              element: <Appointment />,
            },
          ],
        },

        {
          path: 'visit',
          children: [
            {
              path: 'manage-list',
              element: <Visit />,
            },
          ],
        },

        {
          path: 'support',
          children: [
            {
              path: 'tickets',
              element: <Ticket />,
            },
          ],
        },

        {
          path: 'announcement',
          children: [
            {
              path: 'notice',
              element: <Notice />,
            },
            {
              path: 'push-notification',
              element: <PushNotification />,
            },
          ],
        },

        {
          path: 'setup&configuration',
          children: [
            {
              path: 'config',
              element: <Configuration />,
            },
            {
              path: 'weekendsetup',
              element: <h1>weekendsetup</h1>,
            },
            {
              path: 'holidaysetup',
              element: <h1>holidaysetup</h1>,
            },
            {
              path: 'shiftsetup',
              element: <h1>shiftsetup</h1>,
            },
            {
              path: 'dutyschedule',
              element: <h1>dutyschedule</h1>,
            },
            {
              path: 'ip-whitelist',
              element: <h1>ip-whitelist</h1>,
            },
            {
              path: 'location',
              element: <h1>location</h1>,
            },
            {
              path: 'activation',
              element: <h1>activation</h1>,
            },
          ],
        },

        {
          path: 'settings',
          children: [
            {
              path: 'general-settings',
              element: <h1>'settings</h1>,
            },
            {
              path: 'app-settings',
              element: <h1>settings</h1>,
            },
            {
              path: 'contents',
              element: <h1>contents</h1>,
            },
            {
              path: 'language',
              element: <h1>language</h1>,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'payment', element: <Payment /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
      ],
    },
  ]);
}

const Faqs = Loadable(lazy(() => import('../../pages/Faqs')));
const Contact = Loadable(lazy(() => import('../../pages/Contact')));
const About = Loadable(lazy(() => import('../../pages/About')));
const ComingSoon = Loadable(lazy(() => import('../../pages/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('../../pages/Maintenance')));
const Pricing = Loadable(lazy(() => import('../../pages/Pricing')));
const Payment = Loadable(lazy(() => import('../../pages/Payment')));
const Page500 = Loadable(lazy(() => import('../../pages/Page500')));
const Page404 = Loadable(lazy(() => import('../../pages/Page404')));
const Page403 = Loadable(lazy(() => import('../../pages/Page403')));
const HomePage = Loadable(lazy(() => import('../../pages/Home')));

// authentication
const Login = Loadable(lazy(() => import('../../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../../pages/auth/Register')));
const ResetPassword = Loadable(lazy(() => import('../../pages/auth/ResetPassword')));
const NewPassword = Loadable(lazy(() => import('../../pages/auth/NewPassword')));
const VerifyCode = Loadable(lazy(() => import('../../pages/auth/VerifyCode')));

// my components
const Dashboard = Loadable(lazy(() => import('../pages/dashboard/Dashboard')));
const Departments = Loadable(lazy(() => import('../pages/usersroles/Departments')));
const Userlist = Loadable(lazy(() => import('../pages/usersroles/List')));
const Designation = Loadable(lazy(() => import('../pages/usersroles/Designation')));
const Roles = Loadable(lazy(() => import('../pages/usersroles/Roles')));
// leave
const Leave = Loadable(lazy(() => import('../pages/Leave/Leave')));
const AssignLeave = Loadable(lazy(() => import('../pages/Leave/AssignLeave')));
const LeaveRequest = Loadable(lazy(() => import('../pages/Leave/LeaveRequest')));
// attendace
const Attendance = Loadable(lazy(() => import('../pages/attendance/Attendance')));
// payroll
const Advance = Loadable(lazy(() => import('../pages/payroll/Advance')));
const Salary = Loadable(lazy(() => import('../pages/payroll/Salary')));
const Setup = Loadable(lazy(() => import('../pages/payroll/Setup')));
// accounts
const AccountList = Loadable(lazy(() => import('../pages/accounts/AccountList')));
const AccountSetting = Loadable(lazy(() => import('../pages/accounts/AccountSettings')));
const Deposit = Loadable(lazy(() => import('../pages/accounts/Deposit')));
const Expense = Loadable(lazy(() => import('../pages/accounts/Expense')));
const TransactionHistory = Loadable(lazy(() => import('../pages/accounts/TransactionHistory')));
// clients
const ClientList = Loadable(lazy(() => import('../pages/clients/List')));
const CreateClient = Loadable(lazy(() => import('../pages/clients/Create')));
// task
const TaskCreate = Loadable(lazy(() => import('../pages/task/TaskCreate')));
const TaskList = Loadable(lazy(() => import('../pages/task/TaskList')));
// project
const ProjectList = Loadable(lazy(() => import('../pages/project/ProjectList')));
const ProjectCreate = Loadable(lazy(() => import('../pages/project/Create')));
// awrds
const AwardList = Loadable(lazy(() => import('../pages/awards/AwardList')));
const AwardType = Loadable(lazy(() => import('../pages/awards/AwardType')));
// travel
const TravelList = Loadable(lazy(() => import('../pages/travel/TravelList')));
const TravelType = Loadable(lazy(() => import('../pages/travel/Type')));
// performance
const Appraisal = Loadable(lazy(() => import('../pages/performance/Appraisal')));
const CompetenceType = Loadable(lazy(() => import('../pages/performance/CompetenceType')));
const Competencies = Loadable(lazy(() => import('../pages/performance/Competencies')));
const Goal = Loadable(lazy(() => import('../pages/performance/Goal')));
const GoalType = Loadable(lazy(() => import('../pages/performance/GoalType')));
const Indicator = Loadable(lazy(() => import('../pages/performance/Indicator')));
const Settings = Loadable(lazy(() => import('../pages/performance/Settings')));
// appointsment
const Appointment = Loadable(lazy(() => import('../pages/appointment/List')));
// visit
const Visit = Loadable(lazy(() => import('../pages/Visit')));
// list
const Ticket = Loadable(lazy(() => import('../pages/tickets')));
// announcement
const Notice = Loadable(lazy(() => import('../pages/announcement/Notice')));
const PushNotification = Loadable(lazy(() => import('../pages/announcement/PushNotification')));
// configuration
const Configuration = Loadable(lazy(() => import('../pages/setupnconfig/Configuration')));
