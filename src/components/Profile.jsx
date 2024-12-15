import * as React from "react";
import { AuthenticationContext, SessionContext } from "@toolpad/core/AppProvider";
import { Account } from "@toolpad/core/Account";

const demoSession = {
  user: {
    name: "Bharat Kashyap",
    email: "bharatkashyap@outlook.com",
    image: "https://avatars.githubusercontent.com/u/19550456",
  },
};

export default function AccountDemoSignedIn() {
  const [session, setSession] = React.useState(demoSession);
  const [isAccountVisible, setIsAccountVisible] = React.useState(true); // State to toggle visibility
  const accountRef = React.useRef<HTMLDivElement | null>(null);

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoSession);
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
      console.log("Clicked outside");
      setIsAccountVisible(false); // Close the Account component
    } else {
      console.log("Clicked inside");
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AuthenticationContext.Provider value={authentication}>
      <SessionContext.Provider value={session}>
        {isAccountVisible && (
          <div
            ref={accountRef}
            style={{
              position: "relative",
              background: "white",
              padding: "1rem",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* preview-start */}
            <Account />
            {/* preview-end */}
          </div>
        )}
      </SessionContext.Provider>
    </AuthenticationContext.Provider>
  );
}
