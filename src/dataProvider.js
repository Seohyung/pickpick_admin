import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import { selectOptions } from '@testing-library/user-event/dist/select-options';

const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000/api/admin/data'
    : 'LATER TODO';

const httpClient = (url, options = {}) => {
  const { token } = JSON.parse(localStorage.auth);
  // console.log(token);
  if (token) {
    options.user = {
      authenticated: true,
      token: token,
    };
    return fetchUtils.fetchJson(url, options);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getList: async (resource, params) => {
    // console.log('🎃 resource :', resource);
    // console.log('🎃 params :', params);
    // console.log('🎃 params.filter :', params.filter);
    // console.log('🎃 query :', query);

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

  delete: async (resource, params) => {
    console.log(params.id);
    const response = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE',
    });
    return { data: response };
  },

  deleteMany: async (resource, params) => {
    const ids = params.ids;
    const query = {
      filter: JSON.stringify(ids),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url, { method: 'DELETE' });

    if (json.modifiedCount === ids.length) {
      let response = {
        data: ids.map((id) => ({ resource, id: id })),
      };
      return response;
    } else {
      return { resource, message: 'Not modified' };
    }
  },

  getMany: async (resource, params) => {
    const { ids } = params;

    const query = {
      filter: JSON.stringify({ ids: ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    const { json } = await httpClient(url);

    const response = {
      data: json.data.map((resource) => ({ ...resource, id: resource._id })),
    };
    return response;
  },

  // getManyReference: (resource, params) => {
  //   const { page, perPage } = params.pagination;
  //   const { field, order } = params.sort;
  //   const query = {
  //     sort: JSON.stringify([field, order]),
  //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
  //     filter: JSON.stringify({
  //       ...params.filter,
  //       [params.target]: params.id,
  //     }),
  //   };
  //   const url = `${apiUrl}/${resource}?${stringify(query)}`;

  //   return httpClient(url).then(({ headers, json }) => ({
  //     data: json,
  //     total: parseInt(headers.get('content-range').split('/').pop(), 10),
  //   }));
  // },

  //   update: (resource, params) => Promise,

  //   updateMany: (resource, params) => Promise,

  //   create: (resource, params) => Promise,
};
