import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'cgkyjx27',
  dataset: 'production',
  title: 'My Portfolio Website',
  apiVersion: '2023-04-20',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas }
});

export default config;
