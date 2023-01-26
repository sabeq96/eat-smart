import { gql } from '@apollo/client/core';

export type GetRecipesResult = {
	recipe: {
		id: number;
		name: string;
		image: string;
	}[];
};

export type GetRecipesQuery = {
	search?: string;
};

export const getRecipes = gql`
	query GetRecipes($search: String!) {
		recipe(where: { name: { _ilike: $search } }) {
			id
			name
			image
		}
	}
`;
