// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/addBusinessConst */
export async function addBusinessConst(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addBusinessConstParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/addBusinessConst', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/businessConst */
export async function findBusinessConst(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findBusinessConstParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultOfListOfBusinessConst>('/api/businessConst', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/businessConst/${param0} */
export async function getBusinessConst(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBusinessConstParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultOfBusinessConst>(`/api/businessConst/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/businessConst/${param0} */
export async function deleteBusinessConst(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteBusinessConstParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/businessConst/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/updateBusinessConst */
export async function updateBusinessConst(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateBusinessConstParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/updateBusinessConst', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
