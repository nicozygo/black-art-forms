import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const url = `https://damp-garden-56906.herokuapp.com/gql`;
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: `{
        homepage {
            data {
              id
              attributes {
                introduction
                about
                partnersTitle
                submitYourWorkTitle
                submitYourWork
                criteriaButton
              }
          }
        }
        artists(sort: "fullName") {
            data {
            id
            attributes
              {
              fullName
              excerpt
              slug
              genre
              featured
              featuredImage {
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
        partners {
            data {
              id
              attributes {
                orderID
                name
                description
                logo {
                  data {
                    attributes {
                      name
                      caption
                      alternativeText
                      url
                    }
                  }
                }
            }
          }
        }
      }`
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
			error: new Error('Unable to get homepage data')
		};
	}
}) satisfies PageLoad;
