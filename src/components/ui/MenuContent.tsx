import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { useNavigate } from 'react-router-dom';

const mainListItems = [
  { text: 'Home', url: '/', icon: <HomeRoundedIcon /> },
  { text: 'Analytics', url: '/', icon: <AnalyticsRoundedIcon /> },
  { text: 'Clients', url: '/', icon: <PeopleRoundedIcon /> },
  { text: 'Tasks', url: '/', icon: <AssignmentRoundedIcon /> },
];

const secondaryListItems = [
  { text: 'Settings', url: '/', icon: <SettingsRoundedIcon /> },
  { text: 'About', url: '/', icon: <InfoRoundedIcon /> },
  { text: 'Feedback', url: '/', icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  const navigate = useNavigate();

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton selected={index === 0} onClick={() => navigate(item.url)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={() => navigate(item.url)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
