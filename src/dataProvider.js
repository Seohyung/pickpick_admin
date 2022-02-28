import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl =
  process.env.NODE_ENV === 'development'
<<<<<<< HEAD
    ? 'http://localhost:4000/api/admin/data'
=======
    ? 'http://localhost:4000/api/admin'
>>>>>>> 1954b6d12d4571548283ebdc10f1725f19ecb278
    : 'LATER TODO';
const httpClient = fetchUtils.fetchJson;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
<<<<<<< HEAD
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;

    const query = {
      range: JSON.stringify([(page - 1) * perPage, perPage]),
      sort: JSON.stringify({ [`${params.sort.field}`]: params.sort.order }),
      filter: JSON.stringify(params.filter),
    };

    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url);
    const response = {
      data: json.data.map((resource) => ({ ...resource, id: resource._id })),
      total: json.total,
    };

    return response;
  },

  getOne: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`);
    const response = {
      data: json.data.map((resource) => ({ ...resource, id: resource._id })),
    };
    return response;
  },

  // getMany: async (resource, params) => {
  //   const { ids } = params.ids;
  //   const query = {
  //     filter: JSON.stringify({ ids: ids }),
  //   };
  //   const url = `${apiUrl}/${resource}?${stringify(query)}`;

  //   const { json } = await httpClient(url);

  //   const response = {
  //     data: json.data.map((resource) => ({ ...resource, id: resource._id })),
  //   };
  //   return response;
  // },

  //   getManyReference: (resource, params) => {
  //     const { page, perPage } = params.pagination;
  //     const { field, order } = params.sort;
  //     const query = {
  //       sort: JSON.stringify([field, order]),
  //       range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
  //       filter: JSON.stringify({
  //         ...params.filter,
  //         [params.target]: params.id,
  //       }),
  //     };
  //     const url = `${apiUrl}/${resource}?${stringify(query)}`;

  //     return httpClient(url).then(({ headers, json }) => ({
  //       data: json,
  //       total: parseInt(headers.get('content-range').split('/').pop(), 10),
  //     }));
  //   },

  //   update: (resource, params) => Promise,

  //   updateMany: (resource, params) => Promise,

  //   create: (resource, params) => Promise,

  delete: async (resource, params) => {
    console.log(params.id);
    const response = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE',
    });
    return { data: response };
  },

  deleteMany: async (resource, params) => {
    const ids = params.ids;
    console.log(ids);
    const query = {
      filter: JSON.stringify(ids),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    const { json } = await httpClient(url, { method: 'DELETE' });

    const response = {
      data: json.data.map((resource) => ({ ...resource, id: resource._id })),
    };
    return response;
  },
=======
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(headers.get('content-range').split('/').pop(), 10),
    }));
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json,
    })),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ ids: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(headers.get('content-range').split('/').pop(), 10),
    }));
  },

  update: (resource, params) => Promise,

  updateMany: (resource, params) => Promise,

  create: (resource, params) => Promise,

  delete: (resource, params) => Promise,

  deleteMany: (resource, params) => Promise,
>>>>>>> 1954b6d12d4571548283ebdc10f1725f19ecb278
};
