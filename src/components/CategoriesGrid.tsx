'use client';

import { Box, Grid, Paper, Typography } from '@mui/material';
import Link from 'next/link';

type Category = {
  label: string;
  path: string;
};

type Props = {
  title?: string;
  categories: Category[];
};

export default function CategoriesGrid({title, categories}: Props ) {
  return (
    <Box p={3}>
      {title && (<Typography variant="h6" gutterBottom>
        {title}
      </Typography>)}
      <Grid container spacing={2}>
        {categories.map(({path, label}) => (
          <Grid key={path}>
            <Paper
              elevation={3}
              component={Link}
              href={path}
              sx={{
                p: 2,
                width: 150,
                height: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                color: 'text.primary',
                '&:hover': {
                  boxShadow: 6,
                },
              }}
            >
              <Typography>{label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}