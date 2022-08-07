import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '3fg3j2vm',
  dataset: 'production',
  apiVersion: '2022-08-07',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});
