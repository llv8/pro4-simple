import {FormattedMessage} from "@@/exports";

export interface IDeleteProps<T> {
  entity: T,
  handler: (ids: number[]) => Promise<boolean>
}

const DefaultDelete: React.FC<IDeleteProps<any>> = <T extends { id: number }>(props: IDeleteProps<T>) => (<a
  key="config"
  onClick={() => {
    props.handler([props.entity.id as number])
  }}
> <FormattedMessage id="pages.searchTable.config22" defaultMessage="delete"/>
</a>)

export default DefaultDelete;

