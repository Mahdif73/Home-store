import { useEffect } from "react";
import { useAddress } from "../components/Addresses/useAddress";
import AddAddress from "../components/Addresses/AddAddress";
import Address from "../components/Addresses/Address";
import NoProduct from "../components/main/NoProduct";
import AddressesSkeleton from "../components/Loading/AddressesSkeleton";

function Addresses() {
  const { address, isLoading } = useAddress();

  useEffect(function () {
    document.title = " آدرس ها";

    return () => {
      document.title = "فروشگاه هوم استور";
    };
  }, []);

  if (isLoading) return <AddressesSkeleton />;

  return (
    <div className="rounded-2xl">
      <div>
        <div className="block border border-(--border-color) bg-(--body-color) rounded-t-2xl py-4 px-8 mb-4">
          <AddAddress />
        </div>
        {address?.length ? (
          address.map((add) => <Address key={add.id} address={add} />)
        ) : (
          <NoProduct>هیچ آدرسی ثبت نشده است</NoProduct>
        )}
      </div>
    </div>
  );
}

export default Addresses;
