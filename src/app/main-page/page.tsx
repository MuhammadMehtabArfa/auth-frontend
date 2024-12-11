"use client";
import useLogout from "@/hooks/auth/useLogout";
import { selectUserDetail } from "@/redux/Selectors/AuthSelectors";
import { Button } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";
import WithAuth from "../../../utils/withAuth";
const page = () => {
  const userrDetails = useSelector(selectUserDetail);
  const { logOut } = useLogout();
  return (
    <div>
      <p>
        Welcome User with username {userrDetails?.username} and email{" "}
        {userrDetails?.email}
      </p>
      <Button onClick={() => logOut()}>Logout</Button>
    </div>
  );
};

export default WithAuth(page);
