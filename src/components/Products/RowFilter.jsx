import { useState } from "react";
import { useParams } from "react-router-dom";
import RowSort from "./RowSort";
import Modal from "../main/Modal";
import SideContainer from "../main/SideContainer";

function RowFilter() {
  const [showFilters, setShowFilters] = useState(false);

  const { category } = useParams();

  const hideFiltersHandler = (e) => {
    if (e.target === e.currentTarget) {
      setShowFilters(false);
    }
  };
  return (
    <div className="flex justify-start gap-2 overflow-x-hidden mb-4 xs:w-100 sm:w-137.5 md:w-182.5 lg:hidden">
      {category && (
        <Modal>
          <Modal.Open opens="filter-modal">
            <p className="text-center rounded-2xl p-1 mb-4 cursor-pointer bg-(--back-color-alt) xs:text-sm xs:max-w-25.5 hover:bg-(--back-color) hover:text-(--border-color-alt)">
              فیلترها
            </p>
          </Modal.Open>
          <Modal.Window name="filter-modal">
            <SideContainer
              className="block! border-0! w-100! "
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              hideFiltersHandler={hideFiltersHandler}
            />
          </Modal.Window>
        </Modal>
      )}
      <RowSort />
    </div>
  );
}

export default RowFilter;
