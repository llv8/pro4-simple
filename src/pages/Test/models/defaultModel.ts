import {useState} from "react";

export interface ISearchProps {
  current?: number,
  pageSize?: number,
  options?: { [key: string]: any }
}


export default () => {
  const [isDetail, setDetailBool] = useState<boolean>(false);
  const [isAdd, setAddBool] = useState<boolean>(false);
  const [isUpdate, setUpdateBool] = useState<boolean>(false);
  const [entity, setEntity] = useState<API.user>();
  const [selectedRows, setSelectedRows] = useState<API.user[]>([]);


  const hideDetail = () => {
    setDetailBool(false);
    setEntity(undefined);
  }

  const displayDetail = (e: API.user): void => {
    setDetailBool(true);
    setEntity(e);
  }

  const addSelectedRows = (es: API.user[]): void => {
    setSelectedRows(es)
  }

  const displayAdd = (): void => {
    setAddBool(true)
  }

  const hideAdd = (): void => {
    setAddBool(false)
  }

  const displayUpdate = (e: API.user): void => {
    setUpdateBool(true);
    setEntity(e);
  }

  const hideUpdate = (): void => {
    setUpdateBool(false);
    setEntity(undefined);
  }


  return {
    list: {
      selectedRows, addSelectedRows
    },
    detail: {
      displayDetail, hideDetail, isDetail
    },
    add: {
      isAdd, displayAdd, hideAdd
    },
    update: {
      isUpdate, displayUpdate, hideUpdate, entity
    },

  }
}
;
