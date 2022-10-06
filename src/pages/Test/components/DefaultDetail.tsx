import {ProDescriptions, ProDescriptionsItemProps} from "@ant-design/pro-components";
import {Drawer} from "antd";

interface IDetailProps<T extends { id: number }> {
  entity: T,
  isDetail: boolean,
  hideDetail: () => void,
  columns: ProDescriptionsItemProps<T>[]
}

const DefaultDetail: React.FC<IDetailProps<any>> = <T extends { id: number }>(props: IDetailProps<T>) =>
  (!props.entity ? <></> : <Drawer width={800} visible={props.isDetail} onClose={props.hideDetail} closable={false}>

      <ProDescriptions<T>
        column={2}
        //title={props.entity?.firstName}
        request={async () => ({
          data: props.entity || {},
        })}
        params={{
          id: props.entity.id,
        }}
        columns={props.columns as []}
      />

    </Drawer>
  )

export default DefaultDetail;
