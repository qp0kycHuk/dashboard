import GridViewIcon from '@mui/icons-material/GridViewRounded'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsIcon from '@mui/icons-material/Settings'
import PeopleIcon from '@mui/icons-material/People'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonthRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import { homeRoute } from '@/pages/home/home-route'
import { usersRoute } from '@/pages/users/users-route'
import { chatRoute } from '@/pages/chat/chat-route'
import { notificationsRoute } from '@/pages/notifications/notifications-route'
import { calendarRoute } from '@/pages/calendar/calendar-route'
import { settingsRoute } from '@/pages/settings/settings-route'

export const navigation = [
  {
    name: 'Dashboard',
    icon: GridViewIcon,
    url: homeRoute.path,
  },
  {
    name: 'Users',
    icon: PeopleIcon,
    url: usersRoute.path,
  },
  {
    name: 'Chat',
    icon: EmailRoundedIcon,
    url: chatRoute.path,
  },
  {
    name: 'Notifications',
    icon: NotificationsIcon,
    url: notificationsRoute.path,
  },
  {
    name: 'Calendar',
    icon: CalendarMonthIcon,
    url: calendarRoute.path,
  },
  {
    name: 'Settings',
    icon: SettingsIcon,
    url: settingsRoute.path,
  },
]