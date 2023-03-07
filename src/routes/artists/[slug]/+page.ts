import type { PageLoad } from '../../$types';

export const load = (async ({ fetch, params }) => {
	const url = `https://damp-garden-56906.herokuapp.com/gql`;
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: `
      {
        artists (filters: { slug: {contains: "${params.slug}" }} ){
          data {
          id
          attributes
            {
            fullName
            description
            email
            website
            facebook
            twitter
            instagram
            pinterest
            behance
            dribbble
            slug
            profilePhoto {
              data {
                attributes {
                  name
                  alternativeText
                  caption
                  url
                }
              }
            }
            artwork {
              data {
                attributes {
                  name
                  alternativeText
                  caption
                  url
                }
              }
            }
          }
        }
      }
    }
      `
		})
	});

	const { data } = await response.json();

	if (response.ok) {
		return {
			props: {
				...data
			}
		};
	} else {
		return {
			status: response.status,
			error: new Error('Unable to get data')
		};
	}
}) satisfies PageLoad;
