import {useModel} from 'umi';
import {PageContainer, ProDescriptionsItemProps, ProTable} from "@ant-design/pro-components";
import React from "react";
import DefaultBatchAction from "@/pages/Test/components/DefaultBatchAction";
import {createColumns, createFields, createUpdateFields} from "@/pages/Test/config";
import NewDetail from "@/pages/Test/components/NewDetail";
import createTopActionBar from "@/pages/Test/components/topActionBar";
import {ISearchProps} from "@/pages/Test/models/actionModel";
import UpdateDetail from "@/pages/Test/components/UpdateDetail";
import DefaultDetail from "@/pages/Test/components/DefaultDetail";

const Test: React.FC = () => {
  const {
    list: {selectedRows, addSelectedRows},
    detail: {displayDetail, hideDetail, isDetail},
    add: {isAdd, displayAdd, hideAdd},
    update: {isUpdate, displayUpdate, hideUpdate, entity}
  } = useModel('Test.defaultModel');

  const {handleList, handleAdd, handleUpdate, handleRemove} = useModel('Test.actionModel');


  const columns = createColumns({displayDetail, displayUpdate, handleRemove});

  return (
    <PageContainer>
      <ProTable<API.user, ISearchProps> rowKey="id" columns={columns} request={handleList}
                                        rowSelection={{
                                          onChange: (_, rows) => {
                                            addSelectedRows(rows)
                                          },
                                        }}
                                        toolBarRender={() => createTopActionBar({displayAdd})}></ProTable>


      <DefaultBatchAction ids={selectedRows.map((r: any) => r.id) as number[]}
                          actions={[{key: 'pages.searchTable.batchDeletion', handler: handleRemove}]}
      />

      <DefaultDetail isDetail={isDetail} hideDetail={hideDetail} entity={entity}
                     columns={columns as ProDescriptionsItemProps<API.user>[]}/>

      <NewDetail isAdd={isAdd} handleAdd={handleAdd} hideAdd={hideAdd} render={createFields}/>

      <UpdateDetail isUpdate={isUpdate} handleUpdate={handleUpdate} hideUpdate={hideUpdate}
                    entity={entity as API.user} element={createUpdateFields(entity as API.user)}/>
    </PageContainer>

  )
    ;
}

export default Test;
