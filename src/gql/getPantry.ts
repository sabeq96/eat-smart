import { gql } from '@apollo/client/core';

type Ingredient = {
	id: number;
	name: string;
	image: string;
	unit: string;
	gram_per_unit: number;
};

export type Pantry = {
	id: number;
	exp: string;
	qt: number;
	ingredient: Ingredient;
};

export type GetPantryResult = {
	parents: Ingredient[];
	pantry: Pantry[];
};

export type GetPantryQuery = {
	parent: number;
};

export const getPantry = gql`
	query GetPantry($parent: Int!) {
		parents: ingredients(limit: 10, where: { parent: { _is_null: true } }) {
			id
			name
		}
		pantry(where: { user_id: { _eq: 1 }, ingredient: { parent: { _eq: $parent } } }) {
			id
			exp
			qt
			ingredient {
				id
				name
				image
				unit
				gram_per_unit
			}
		}
	}
`;
