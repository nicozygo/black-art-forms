import type { PageLoad } from '../$types';

export const load = (async ({ fetch }) => {
	const url = `https://damp-garden-56906.herokuapp.com/gql`;
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: `
      {
        criterion {
           data {
               attributes {
                 pageTitle
                 criteriaInfo
                 judgesTitle
               }
             }
           }
        testimonials {
            data {
              id
              attributes {
                summary
                fullName
                jobTitle
                profilePhoto {
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
          judges(sort: "fullName") {
            data {
              id
              attributes {
                fullName
                judgeBio
                judgePhoto {
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
      }
      `
		})
	});

	const { data } = await response.json();

	if (response.ok) {
		return {
			props: {
				data
			}
		};
	} else {
		return {
			status: response.status,
			error: new Error('Unable to get data')
		};
	}
}) satisfies PageLoad;
