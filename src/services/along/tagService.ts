// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/addTag */
export async function addTag(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addTagParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/addTag', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/tag */
export async function findTags(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findTagsParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultOfListOfTag>('/api/tag', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/tag/${param0} */
export async function getTag(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTagParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultOfTag>(`/api/tag/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /api/tags/${param0} */
export async function deleteTag(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteTagParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/tags/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /api/updateTag */
export async function updateTag(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTagParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/updateTag', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
