import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false, // Set to true in production for better performance
})

// Helper function to fetch data with graceful error handling
export async function sanityFetch<T>({
  query,
  tags,
}: {
  query: string
  tags?: string[]
}): Promise<T> {
  try {
    return await client.fetch<T>(query, {}, { next: { tags } })
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return [] as unknown as T
  }
}
