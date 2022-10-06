import {FooterToolbar} from "@ant-design/pro-components";
import {FormattedMessage} from "@@/exports";
import {Button} from "antd";

interface IBatchActionProps {
  ids: number[],
  actions: {
    key: string,
    handler: (ids: number[]) => Promise<boolean>
  }[]
}

const DefaultBatchAction: React.FC<IBatchActionProps> = (props: IBatchActionProps) => (props.ids.length == 0 ? <></> :
  <FooterToolbar
    extra={
      <div>
        <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen"/>
        <a style={{fontWeight: 600}}>{props.ids?.length}</a>
        <FormattedMessage id="pages.searchTable.item" defaultMessage="项"/>
      </div>
    }
  >
    {
      props.actions.map(a => (<Button
        onClick={async () => {
          if (props.ids)
            await a.handler(props.ids);
        }}
      >
        <FormattedMessage
          id={a.key}
        />
      </Button>))
    }

  </FooterToolbar>)

export default DefaultBatchAction;
