const books = [
  {
    id: '001',
    title: 'JSConf USLearning Spark: Lightning-Fast Big Data Analysis',
    authors: 'Holden Karau, Matei Zaharia, Andy Konwinski, Patrick Wendell',
    published: '2015'
  },
  {
    id: '002',
    title: 'Web Scraping with Python: Collecting Data from the Modern Web',
    authors: ' Ryan Mitchell',
    published: 'April 25, 2015'
  },
  {
    id: '003',
    title: 'Hadoop: The Definitive Guide',
    authors: 'Tom White',
    published: 'May 29, 2009'
  },
  {
    id: '004',
    title: 'Building Microservices: Designing Fine-Grained Systems',
    authors: ' Sam Newman',
    published: 'December 25, 2014'
  }
]

async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    return books
  })

  fastify.get('/book/:id', async ({ params: { id } }, reply) => {
    return books.find(book => book.id === id)
  })
}

export default routes
