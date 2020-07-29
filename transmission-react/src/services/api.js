const BACKEND_DOMAIN = process.env.TRANSMISSION_APP_BACKEND_DOMAIN;
// const key = () => localStorage.getItem("key");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: token()
  };
};

const createPage = (key, content) => {
    const page = { page: { key, content } }
    return fetch(`${BACKEND_DOMAIN}/pages`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(page)
    }).then(resp => resp.json());
};

// const getPage = () => {
//   return fetch(`${BACKEND_DOMAIN}/current_user`, {
//     headers: headers()
//   }).then(resp => resp.json());
// };

const updatePage = (key, content) => {
  return fetch(`${BACKEND_DOMAIN}/k/${key}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(content)
  }).then(resp => resp.json());
};

const deletePage = page_id => {
  return fetch(`${BACKEND_DOMAIN}/pages/${page_id}`, {
    method: "DELETE",
    headers: headers(),
  }).then(resp => resp.json());
};


export const api = {
    createPage,
    // getPage,
    updatePage,
    deletePage,
};