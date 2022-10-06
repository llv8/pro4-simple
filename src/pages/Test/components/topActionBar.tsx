import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {FormattedMessage} from "@@/exports";

interface ITopActionBarProps {
  displayAdd: () => void
}

const createTopActionBar =
  (props: ITopActionBarProps) => {
    return [
      <Button
        type="primary"
        key="primary"
        onClick={() => {
          props.displayAdd();
        }}
      >
        <PlusOutlined/> <FormattedMessage id="pages.searchTable.new"
                                          defaultMessage="New"/>
      </Button>,
    ]
  }
export default createTopActionBar;
