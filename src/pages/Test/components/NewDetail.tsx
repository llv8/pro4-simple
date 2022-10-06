import {ProForm} from "@ant-design/pro-components";
import {Drawer} from "antd";

interface INewDetailProps {
  isAdd: boolean,
  handleAdd: (fields: any) => Promise<boolean>,
  hideAdd: () => void,
  render: () => JSX.Element
}

const NewDetail: React.FC<INewDetailProps> = (props: INewDetailProps) =>
  (
    <Drawer width={800} visible={props.isAdd} onClose={props.hideAdd} closable={false}>
      <ProForm onFinish={async (value) => {
        await props.handleAdd(value);
        return true;
      }}>
        {props.render()}
      </ProForm>
    </Drawer>
  )

export default NewDetail;
