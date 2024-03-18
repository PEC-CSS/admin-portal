import { fetchWrapper } from '@/util/fetchWrapper';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import { TableCell, TableRow } from "@mui/material";
import getCookieData from '@/lib/getCookieData';
import { useSession } from 'next-auth/react';
import { getMatchingUsersApi } from '@/repository/searchUsers/getMatchingUsersApi';

function getDateString(startDateString) {
  return new Date(startDateString).toLocaleDateString("en-GB");
}

function getEventDataFromJson(items) {
  let tableData = [];

  items.forEach((item, index) => {
    const currentRow = [
      String(index + 1),
      item['name'],
      item['role'],
      getDateString(item["timestamp"])
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

  return tableData;ƒ
}

function Index({ email }) {
  const {data: session} = useSession();
  const token = getCookieData(session).data?.token;
  const itemsPerPage = 100;
  const columns = ["S. No.", "Event Name", "Capacity", "Event Date"];

  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  const options = {
    filter: false,
    responsive: "simple",
    viewColumns: false,
    download: true,
    downloadOptions: {
      filename: `${userName}.csv`
    },
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
    async function getUserData(email, token) {
      const name = email.substr(0, email.indexOf('.'))
      const res = await getMatchingUsersApi(name, token);
      setUserData(res);
    }

    getUserData(email, token);
  }, [userName, email, token]);

  useEffect(() => {
    const fetchData = () => {
      try {
        fetchWrapper
          .get({
            url: `v1/user/${encodeURIComponent(email)}/events?offset=${page}&pageSize=${itemsPerPage}`,
            token: token
          })
          .then((items) => {
            setUserName(email.substr(0, email.indexOf('.')));
            setData(getEventDataFromJson(items));
          });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [page, email, session, token])

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

export default Index

export async function getServerSideProps({ query }) {
  const email = query.email;

  return {
      props: {
        email: email
      },
  };
}