import { store } from "@/store";
import { Provider as StateProvider } from "react-redux";

function StoreProvider({ children }: React.PropsWithChildren) {
  return <StateProvider {...{ store }}>{children}</StateProvider>;
}

export default StoreProvider;
