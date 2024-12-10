import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearAuth } from "@/redux/Slices/AuthSlice";
import { toast } from "react-toastify";

const useLogout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const path = usePathname();
  const authPaths = [
    "/",
    "/register",
    "/reset-password",
    "/forgot-password",
    "/otp",
  ];

  const logOut = (showToast = false) => {
    if (!authPaths.includes(path)) {
      router.push("/");
      dispatch(clearAuth());

      toast("Logged out!");
    }
  };

  return { logOut };
};

export default useLogout;
