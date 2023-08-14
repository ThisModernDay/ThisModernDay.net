import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const BlogPosts = ({ slice }) => (
  <section>
    <PrismicRichText field={slice.primary.title} />
  </section>
)

export default BlogPosts