import React from "react";
import PropTypes from "prop-types";
const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ path: item, order: "asc" });
    }
  };

  const switchUpDown = (columnPath) => {
    if (selectedSort.path !== columnPath) return "";

    if (selectedSort.order === "asc") {
      return <i className="bi bi-caret-up-fill"></i>;
    }

    if (selectedSort.order === "desc") {
      return <i className="bi bi-caret-down-fill"></i>;
    }
  };

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{ role: columns[column].path && "button" }}
            scope="col"
          >
            {columns[column].name}
            {switchUpDown(columns[column].path)}
          </th>
        ))}
        {/* <th scope="col">Качества</th>
        <th onClick={() => handleSort("profession.name")} scope="col">
          Профессия
        </th>
        <th onClick={() => handleSort("comletedMeetings")} scope="col">
          Встретился, раз
        </th>
        <th onClick={() => handleSort("rate")} scope="col">
          Оценка
        </th>
        <th onClick={() => handleSort("bookmark")} scope="col">
          Избранное
        </th>
        <th /> */}
      </tr>
    </thead>
  );
};
TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
};

export default TableHeader;
