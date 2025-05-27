import SimpleAppointmentCard from '../components/SimpleAppointmentCard';
import {
  Home,
  Calendar,
  Clock as History,
  UserCheck as Appointments,
  FileText as Tests,
  MessageCircle as Chat,
  HelpCircle as Support,
  Settings as Setting
} from 'lucide-react';

const navigationLinks = [
  { label: 'Dashboard', path: '/dashboard', icon: Home },
  { label: 'History', path: '/history', icon: History },
  { label: 'Calendar', path: '/calendar', icon: Calendar },
  {
    label: 'Appointments', path: '/simpleAppointmentCard', icon: Appointments,
  },
  { label: 'Tests', path: '/tests', icon: Tests },
  { label: 'Chat', path: '/chat', icon: Chat },
  { label: 'Support', path: '/support', icon: Support },
];

export default navigationLinks;