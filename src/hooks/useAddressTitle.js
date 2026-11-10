import { useState } from "react";
import { useTitleAddress } from "../components/Cart/useTitleAddress";
export function useAddressTitle() {
  const [selectTitle, setSelectTitle] = useState([]);

  const { titleAddress, isPending } = useTitleAddress();

  function handleSelectOrg(id) {
    titleAddress({ resetAll: true, isTitle: true, id });

    const updated = selectTitle.map((addr) => ({
      ...addr,
      isTitle: addr.id === id,
    }));
    setSelectTitle(updated);
  }

  return { handleSelectOrg, isPending };
}
