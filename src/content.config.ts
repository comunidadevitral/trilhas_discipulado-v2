import { defineCollection, z } from 'astro:content';

const materiaisCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.enum([
      'Livros Recomendados',
      'Podcasts',
      'Músicas',
      'Guias e Recursos',
      'Ferramentas para o Caminho'
    ]).optional(),
    publishDate: z.date().optional(),
    downloadUrl: z.string().url().optional(),
  }),
});

const rciCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    section: z.number().min(1).max(14),
    publishDate: z.date().optional(),
  }),
});

export const collections = {
  materiais: materiaisCollection,
  rci: rciCollection,
};
