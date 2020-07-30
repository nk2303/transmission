const BACKEND_DOMAIN = process.env.REACT_APP_TRANSMISSION_BACKEND_DOMAIN;

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
};

const createPage = (url_key, content) => {
    const page = { page: { url_key, content } }
    return fetch(`${BACKEND_DOMAIN}/pages`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(page)
    }).then(resp => resp.json());
};

const getPage = () => {
  return fetch(`${BACKEND_DOMAIN}/pages`, {
    headers: headers()
  }).then(resp => resp.json());
};

const updatePage = (url_key, content) => {
  const page = { page: { content } }
  return fetch(`${BACKEND_DOMAIN}/k/${url_key}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(page)
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
    getPage,
    updatePage,
    deletePage,
};