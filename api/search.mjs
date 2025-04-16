import { OramaClient } from '@oramacloud/client';

export default async function handler(req, res) {
  const client = new OramaClient({
    endpoint: 'https://cloud.orama.run/v1/indexes/hacking-course-vercel-app-i4zm97',
    api_key: 'RaKUIgzeVyR8mt1w0nKiMSsvR3tRxMPi'
  });

  const { term } = req.query;

  try {
    const results = await client.search({
      term: term || '',
      limit: 5,
      mode: 'fulltext'
    });

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la recherche' });
  }
}