"use client";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectAccessToken } from "@/redux/Selectors/AuthSelectors";
import { usePathname, useRouter } from "next/navigation";

const WithAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const ComponentWithAuth = (props: P) => {
    const tokenInState = useSelector(selectAccessToken);
    const router = useRouter();
    const currentPathname = usePathname();

    const publicPaths = useMemo(() => ["/"], []);

    useEffect(() => {
      if (!publicPaths.includes(currentPathname) && !tokenInState) {
        router.push("/");
      }
    }, [tokenInState, router, publicPaths]);

    if (!publicPaths.includes(currentPathname) && !tokenInState) {
      <div className="flex items-center justify-center h-screen">
        <span>Loading...</span>
      </div>; // Or a loading indicator
    }

    return <WrappedComponent {...props} />;
  };

  ComponentWithAuth.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return ComponentWithAuth;
};

export default WithAuth;
