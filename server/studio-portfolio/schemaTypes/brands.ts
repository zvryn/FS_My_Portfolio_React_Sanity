import {SchemaTypeDefinition} from 'sanity'

const brands: SchemaTypeDefinition = {
  name: 'brands',
  title: 'Brands',
  type: 'document',
  fields: [
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
}

export default brands
