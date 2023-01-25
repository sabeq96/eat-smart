import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import { apiUrl } from './config';

export function createApolloClient(authToken: string, secret?: string) {
	const link = new HttpLink({
		uri: apiUrl,
		headers: {
			Authorization: `Bearer ${authToken}`,
			'x-hasura-admin-secret': secret || ''
		}
	});
	const cache = new InMemoryCache();
	const client = new ApolloClient({
		link,
		cache
	});

	return client;
}
