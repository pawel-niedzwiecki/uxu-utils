import type { ComponentWithProps } from "../../../utils";
import type { Tab } from "../../organisms/tabs/component.tabs.types";
import type { CallBack, Query, ResData } from "../../organisms/form/search/component.search.types";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace HeaderDataTypes {
  export type Tabs = { tabs: Tab[] };
  export type CallBackSearch = { callBack: CallBack };
  export type Res = {
    res: {
      data: ResData;
      query: Query;
    };
  };
  export type Alert = {
    alert?: {
      tel?: string;
      title?: string;
    };
  };
}

type OtherProps = HeaderDataTypes.Alert & HeaderDataTypes.Res & HeaderDataTypes.CallBackSearch & HeaderDataTypes.Tabs;

export type ComponentType = ComponentWithProps<OtherProps>;
