import { fetchWrapper } from "@/util/fetchWrapper";
import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { TableCell, TableRow } from "@mui/material";

function getDateString(startDateString) {
  return new Date(startDateString).toLocaleDateString("en-GB");
}

function getEventDataFromJson(items) {
  let tableData = [];

  items.forEach((item) => {
    const currentRow = [
      String(item["id"]),
      item["title"],
      getDateString(item["startDate"]),
      item["venue"],
      String(item["ended"]),
    ];
    tableData.push(currentRow);
  });

  tableData = tableData.sort((item1, item2) => {
    const x = Number(item1[0]);
    const y = Number(item2[0]);
    if (x < y) {
      return -1;
    } else if (x > y) {
      return 1;
    } else {
      return 0;
    }
  });

  return tableData;
}

function EventDataTable() {
  const itemsPerPage = 100;
  const columns = ["Event Id", "Name", "Date", "Venue", "Event Ended"];

  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [eventDesc, setEventDesc] = useState({});

  const options = {
    filter: false,
    responsive: "simple",
    viewColumns: false,
    download: true,
    textLabels: {
      body: {
        noMatch: "No such record found.",
      },
    },
    selectableRowsHideCheckboxes: true,
    rowsPerPage: 100,
    onChangePage: () => {
      setPage(page + 1);
    },
    expandableRows: true,
    expandableRowsHeader: false,
    isRowExpandable: () => {
      return true;
    },
    fixedHeader: true,
    renderExpandableRow: (rowData) => {
      const colSpan = rowData.length + 1;
      return (
        <TableRow>
          <TableCell colSpan={colSpan}>
            <b>Description: </b>
            {eventDesc[rowData[0]]}
          </TableCell>
        </TableRow>
      );
    },
  };

  useEffect(() => {
    const fetchData = () => {
      try {
        fetchWrapper
          .get({
            url: `v1/events?offset=${page}&pageSize=${itemsPerPage}`,
          })
          .then((items) => {
            let descriptions = {}
            items.forEach((item) => {
              descriptions[item['id']] = item['description']
            })
            setData(getEventDataFromJson(items));
            setEventDesc(descriptions);
          });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div>
      {columns && (
        <MUIDataTable
          title={"Events Information"}
          data={data}
          columns={columns}
          options={options}
        />
      )}
    </div>
  );
}

export default EventDataTable;
