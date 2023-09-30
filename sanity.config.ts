import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'Sanity Blog',

  projectId: 'bhrmsum1',
  dataset: 'production',
  basePath: '/admin',

  plugins: [deskTool()],
  
  schema: {
    types: schemas,
  },

})
