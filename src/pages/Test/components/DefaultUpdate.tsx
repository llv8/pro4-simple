import {FormattedMessage} from "@@/exports";

interface IUpdateProps<T> {
  entity: T,
  displayUpdate: (entity: API.user) => void,
}

const DefaultUpdate: React.FC<IUpdateProps<any>> = <T extends object>(props: IUpdateProps<T>) => (<a
  key="config"
  onClick={() => {
    props.displayUpdate(props.entity);
  }}
> <FormattedMessage id="pages.searchTable.config22" defaultMessage="update"/>
</a>)

export default DefaultUpdate;
