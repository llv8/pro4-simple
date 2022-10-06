import {ProForm} from "@ant-design/pro-components";
import {Drawer} from "antd";
import React from "react";

interface IUpdateDetailProps {
  isUpdate: boolean,
  handleUpdate: (fields: any) => Promise<boolean>,
  entity: API.user,
  hideUpdate: () => void,
  element: JSX.Element
}


const UpdateDetail: React.FC<IUpdateDetailProps> = (props: IUpdateDetailProps) =>
  (
    <Drawer width={800} visible={props.isUpdate} onClose={props.hideUpdate} closable={false}>
      <ProForm

        onFinish={async (value) => {
          await props.handleUpdate(value);
          return true;
        }}>
        {props.element}
      </ProForm>
    </Drawer>
  )

export default UpdateDetail;
