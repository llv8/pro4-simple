// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/contact */
export async function findContacts(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findContactsParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultOfListOfContact>('/api/contact', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/contact/${param0} */
export async function getContact(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getContactParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultOfContact>(`/api/contact/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/contact/${param0} */
export async function deleteContact(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteContactParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/contact/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/contact/add */
export async function addContact(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addContactParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/contact/add', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/contact/update */
export async function updateContact(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateContactParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/contact/update', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
