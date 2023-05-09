import type { ComponentWithProps } from "../../../utils";
import type { Tab } from "../../organisms/tabs/component.tabs.types";
import type { CallBack, Query, ResData } from "../../organisms/form/search/component.search.types";
import { ReactElement } from "react";


export type HeaderDataTypes = {
  tabs: Tab[];
  res: {
    data: ResData;
    query: Query;
  }
  callBack: CallBack;
  ComponentAaboveHeader?: ReactElement;
}

type OtherProps = HeaderDataTypes;

export type ComponentType = ComponentWithProps<OtherProps>;
