import {addUser, deleteUser, findUsers, updateUser} from "@/services/along/userService";
import {RequestData} from "@ant-design/pro-components";
import {message} from "antd";
import {FormValueType} from "@/pages/TableList/components/UpdateForm";

export interface ISearchProps {
  current?: number,
  pageSize?: number,
  options?: { [key: string]: any }
}


export default () => {

  const handleList = async (searchProps: ISearchProps): Promise<Partial<RequestData<API.user>>> => {

    const {current, pageSize, ...rest} = searchProps
    const params: API.findUsersParams = {
      'page.pageNum': current,
      'page.pageSize': pageSize,
      ...rest
    };

    const result: API.ResultOfPagesOfuser = await findUsers(params);
    return {
      data: result.data?.elements,
      success: true,
      total: result.data?.page?.count
    };
  }

  const handleAdd = async (fields: API.addUserParams) => {
    const hide = message.loading('正在添加');
    try {
      await addUser(fields);
      hide();
      message.success('Added successfully');
      return true;
    } catch (error) {
      hide();
      message.error('Adding failed, please try again!');
      return false;
    }
  };

  const handleUpdate = async (fields: FormValueType) => {
    const hide = message.loading('Configuring');
    try {
      // @ts-ignore
      await updateUser({...fields});
      hide();

      message.success('Configuration is successful');
      return true;
    } catch (error) {
      hide();
      message.error('Configuration failed, please try again!');
      return false;
    }
  };

  const handleRemove = async (ids: number[]) => {
    const hide = message.loading('正在删除');
    if (!ids) return true;
    try {
      for (const id of ids) {
        await deleteUser({
          id
        });
      }

      hide();
      message.success('Deleted successfully and will refresh soon');
      return true;
    } catch (error) {
      hide();
      message.error('Delete failed, please try again');
      return false;
    }
  };

  return {
    handleList, handleRemove, handleAdd, handleUpdate
  }
}
;
