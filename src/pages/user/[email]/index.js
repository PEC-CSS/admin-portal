import { fetchWrapper } from "@/util/fetchWrapper";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { TableCell, TableRow } from "@mui/material";
import getCookieData from "@/lib/getCookieData";
import { useSession } from "next-auth/react";
import { getMatchingUsersApi } from "@/repository/searchUsers/getMatchingUsersApi";
import Head from "next/head";

function getDateString(startDateString) {
  return new Date(startDateString).toLocaleDateString("en-GB");
}

function getEventDataFromJson(items) {
  let tableData = [];

  items.forEach((item, index) => {
    const currentRow = [
      String(index + 1),
      item["name"],
      item["role"],
      getDateString(item["timestamp"]),
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
  ƒ;
}

function Index({ email }) {
  const { data: session } = useSession();
  const token = getCookieData(session).data?.token;
  const itemsPerPage = 100;
  const columns = ["S.No.", "Event Name", "Capacity", "Date"];

  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);

  const options = {
    filter: false,
    responsive: "simple",
    viewColumns: false,
    download: true,
    downloadOptions: {
      filename: `${userName}.csv`,
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
    expandableRows: false,
    expandableRowsHeader: false,
    isRowExpandable: () => {
      return false;
    },
    fixedHeader: true,
    sortThirdClickReset: true,
    elevation: 0,
  };

  useEffect(() => {
    async function getUserData(email, token) {
      const name = email.substr(0, email.indexOf("."));
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
            url: `v1/user/${encodeURIComponent(
              email
            )}/events?offset=${page}&pageSize=${itemsPerPage}`,
            token: token,
          })
          .then((items) => {
            setUserName(email.substr(0, email.indexOf(".")));
            setData(getEventDataFromJson(items));
          });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [page, email, session, token]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="py-[20px] px-[5%] font-sans">
      <Head>
        <title>User Event Details</title>
      </Head>
      <h1 className="underline uppercase text-[20px] font-bold text-center">
        To whomsoever it may concern
      </h1>
      <br />
      <p>
        This is to certify that{" "}
        <span className="underline">{`${userData[0]?.name} ${userData[0]?.sid}`}</span>{" "}
        has participated in the following events organized by <b>PEC ACM CSS</b>{" "}
        in college and in <b>PECFEST</b>, in the mentioned capacities:
      </p>
      <br />
      <b>1) 2024 - 2025</b>

      <div className="border-2">
        {columns && (
          <MUIDataTable
            title={"Events Information"}
            data={data}
            columns={columns}
            options={options}
          />
        )}
      </div>

      <p className="my-10">Approved By:</p>

      <div className="flex w-full justify-between my-5">
        <p>
           Ankur Gupta, <br />
          (Secretary, PEC ACM CSS)
        </p>
        <p>
          Dr. Satnam Kaur, <br />
          (P/I PEC ACM CSS)
        </p>
      </div>
    </div>
  );
}

export default Index;

export async function getServerSideProps({ query }) {
  const email = query.email;

  return {
    props: {
      email: email,
    },
  };
}
