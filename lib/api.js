  
async function fetchAPI(query, { variables } = {}) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
  
    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
  
    return json
  }

  export async function getCategories() {
    const categories = await fetchAPI(`query Categories {
        categories {
          title
        }
      }`);
    return categories.data;
  }

  export async function getPosts() {
    const posts = await fetchAPI(`query Posts {
        posts {
          title,
          url,
          categories {
            title
          }
        }
      }`);

    return posts.data;
  }