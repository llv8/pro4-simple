import {ProColumns, ProFormText} from "@ant-design/pro-components";
import React from "react";
import DefaultDelete from "@/pages/Test/components/DefaultDelete";
import DefaultUpdate from "@/pages/Test/components/DefaultUpdate";

interface IColumnProps {
  displayDetail: (entity: API.user) => void,
  displayUpdate: (entity: API.user) => void,
  handleRemove: (ids: number[]) => Promise<boolean>,
}

const createColumns = (props: IColumnProps): ProColumns<API.user> [] => {
    return [
      {
        title: 'id',
        dataIndex: 'id',
        render: (dom, entity) => {
          return (
            <a
              onClick={() => {
                props.displayDetail(entity);
              }}
            >
              {dom}
            </a>
          );
        },
      },
      {
        title: 'firstName',
        dataIndex: 'firstName',
        valueType: 'textarea'
      }
      ,
      {
        title: 'lastName',
        dataIndex: 'lastName',
        valueType: 'textarea'
      }
      ,
      {
        title: 'age',
        dataIndex: 'age',
        valueType: 'textarea'
      }
      ,
      {
        title: 'gender',
        dataIndex: 'gender',
        valueType: 'textarea'
      },
      {
        title: 'date of birth',
        dataIndex: 'dateOfBirth',
        valueType: 'textarea'
      },
      {
        title: 'operation',
        dataIndex: 'option',
        valueType: 'option',
        render: (_, record) => {
          return (<React.Fragment>
            <DefaultUpdate entity={record} displayUpdate={props.displayUpdate}/>
            <DefaultDelete entity={record} handler={props.handleRemove}/>
          </React.Fragment>)
        }
      }
    ]
  }
;


const createFields = (): JSX.Element => {
    return (<React.Fragment>
      <ProFormText
        label={'login name'}
        width="md"
        name="name"

      />
      <ProFormText
        label={'password'}
        width="md"
        name="password"
      />
      <ProFormText
        label={'first name'}
        width="md"
        name="user.firstName"
      />
      <ProFormText
        label={'last name'}
        width="md"
        name="user.lastName"
      />
      <ProFormText
        label={'age'}
        width="md"
        name="user.age"
      />
      <ProFormText
        label={'gender'}
        width="md"
        name="user.gender"
      />
      <ProFormText
        label={'date of birth'}
        width="md"
        name="user.dateOfBirth"
      />

    </React.Fragment>)
  }
;


const createUpdateFields = (entity: API.user): JSX.Element => {
  return (!entity ? <></> : <React.Fragment>
    <ProFormText
      label={'first name'}
      width="md"
      initialValue={entity.firstName}
      name="firstName"
    />
    <ProFormText
      label={'last name'}
      width="md"
      initialValue={entity.lastName}
      name="lastName"
    />
    <ProFormText
      label={'age'}
      width="md"
      initialValue={entity.age}
      name="age"
    />
    <ProFormText
      label={'gender'}
      width="md"
      initialValue={entity.gender}
      name="gender"
    />
    <ProFormText
      label={'date of birth'}
      width="md"
      initialValue={entity.dateOfBirth}
      name="dateOfBirth"
    />

  </React.Fragment>)
};
export {createFields, createUpdateFields, createColumns} ;
