import { IoChevronForwardOutline } from "react-icons/io5";
import { decodeUrlSearchParams } from "../url";

function getChecksHeaderTitle() {
  const { groupBy } = decodeUrlSearchParams(window.location.search);
  return `Checks ${groupBy !== "no-group" ? `(Grouped by ${groupBy})` : ""}`;
}

function ExpandArrow({ row }) {
  return row.canExpand ? (
    <div className="ml-4 flex">
      <div
        className={`transform duration-200 ${
          row.isExpanded ? "rotate-90" : ""
        }`}
      >
        <IoChevronForwardOutline />
      </div>
    </div>
  ) : null;
}

export const firstColumns = {
  expander: {
    id: "expander",
    Cell: ExpandArrow,
    cellClass: ""
  },
  name: {
    Header: getChecksHeaderTitle,
    accessor: "name",
    cellClass: `px-4 py-2 w-full max-w-0 overflow-hidden overflow-ellipsis relative`
  }
};

export const columnObject = {
  ...firstColumns,
  health: {
    Header: "Health",
    accessor: "checkStatuses"
  },
  uptime: {
    Header: "Uptime",
    accessor: "uptime"
  },
  latency: {
    Header: "Latency",
    accessor: "latency"
  }
};
