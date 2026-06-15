import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    technologies: z.array(z.string()),
    thumbnail: z.string().optional(),
    images: z.array(z.string()).optional(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.date(),
    client: z.string().optional(),
    rating: z.number().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    category: z.string(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    readingTime: z.string().optional(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string().optional(),
    content: z.string(),
    rating: z.number().min(1).max(5),
    avatar: z.string().optional(),
  }),
});

export const collections = { projects, blog, testimonials };
