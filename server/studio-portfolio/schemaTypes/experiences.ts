import {SchemaTypeDefinition} from 'sanity'

const experiences: SchemaTypeDefinition = {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [{type: 'workExperience'}],
    },
  ],
}

export default experiences
