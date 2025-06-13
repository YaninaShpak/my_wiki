'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

export default function CreateArticlePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    subcategory: '',
    slug: '',
    content: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push(`/technologies/${formData.subcategory}/${formData.slug || encodeURIComponent(formData.title.toLowerCase().replace(/\s+/g, '-'))}`);
    } else {
      alert('Ошибка при сохранении статьи');
    }
  };

  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Typography variant="h4" gutterBottom>
          Создание статьи
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Box display="flex" flexDirection="column" gap={3}>

            <TextField
              name="title"
              label="Заголовок"
              required
              fullWidth
              onChange={handleChange}
            />

            <TextField
              name="slug"
              label="Slug (необязательно)"
              fullWidth
              onChange={handleChange}
            />

            <FormControl fullWidth required>
              <InputLabel>Категория</InputLabel>
              <Select
                name="category"
                defaultValue=""
                label="Категория"
                onChange={handleChange}
              >
                <MenuItem value="">Выберите категорию</MenuItem>
                <MenuItem value="technologies">Technologies</MenuItem>
                <MenuItem value="tools">Tools</MenuItem>
              </Select>
            </FormControl>

            <TextField
              name="subcategory"
              label="Подкатегория (например javascript)"
              required
              fullWidth
              onChange={handleChange}
            />

            <TextField
              name="content"
              label="Markdown-содержимое статьи"
              multiline
              minRows={10}
              required
              fullWidth
              onChange={handleChange}
            />

            <Button variant="contained" type="submit" color="primary">
              Сохранить
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}