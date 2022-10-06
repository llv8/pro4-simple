// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/addCompany */
export async function addCompany(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addCompanyParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/addCompany', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/companies/${param0} */
export async function deleteCompany(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteCompanyParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/companies/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/company */
export async function findCompany(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findCompanyParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultOfPagesOfCompany>('/api/company', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/company/${param0} */
export async function getCompany(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCompanyParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultOfCompany>(`/api/company/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/updateCompany */
export async function updateCompany(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateCompanyParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/updateCompany', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
