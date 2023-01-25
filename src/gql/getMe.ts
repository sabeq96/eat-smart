import { gql } from '@apollo/client/core';

export type GetMeResult = {
	users_by_pk: {
		id: number;
		name: string;
		avatar: string;
	};
};

export type GetMeQuery = {
	id: number;
};

export const getMe = gql`
	query GetMe($id: Int!) {
		users_by_pk(id: $id) {
			id
			name
			avatar
		}
	}
`;
