import { OramaClient } from '@oramacloud/client'

const client = new OramaClient({
  endpoint: 'https://cloud.orama.run/v1/indexes/hacking-course-vercel-app-i4zm97',
  api_key: 'RaKUIgzeVyR8mt1w0nKiMSsvR3tRxMPi'
})

const results = await client.search({
  term: 'red leather shoes',
  limit: 5,
  mode: 'fulltext' // can be 'fulltext', 'vector' or 'hybrid'
})