'use client'

import { Drawer, List, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const drawerWidth = 240;

const categories = [
  { label: 'Главная', path: '/' },
  { label: 'Технологии', path: '/technologies' },
  { label: 'Инструменты', path: '/tools' },
];

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <List>
        {categories.map(({label, path}) => (
          <ListItemButton
            key={path}
            component={Link}
            href={path}
            selected={pathname === path}
            sx={{
              color: pathname === path ? 'primary.main' : 'text.primary',
              '&.Mui-selected': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              },
            }}
          >
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
