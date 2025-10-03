import {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Button from "./Button";
import { useAuth } from "react-oidc-context";
import { MdLogout } from "react-icons/md";
import MyAvatar from "./Avatar";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user, isAuthenticated, signoutRedirect } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 text-white px-[5%] py-3 flex justify-between items-center border-b border-b-gray-700">
      <div className="text-lg font-bold">Event Ticket Platform</div>
      {!isAuthenticated && (
        <div className="rounded-lg border border-gray-700">
          <Button
            type="button"
            onClick={() => navigate("/login", { replace: true })}
          >
            Log In
          </Button>
        </div>
      )}
      {isAuthenticated && (
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none focus-visible:ring focus-visible:ring-gray-500 rounded-full">
            <MyAvatar>
              {user?.profile?.preferred_username?.slice(0, 2).toUpperCase()}
            </MyAvatar>
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent
              className="z-50 min-w-[8rem] w-56 rounded-md border border-gray-700 bg-gray-900 text-white shadow-lg"
              align="end"
            >
              <DropdownMenuLabel className="px-3 py-2 text-sm font-normal">
                <p className="text-sm font-medium">
                  {user?.profile?.preferred_username}
                </p>
                <p className="text-sm text-gray-400">{user?.profile?.email}</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-800 h-px" />
              <DropdownMenuItem
                className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm cursor-default select-none outline-none hover:bg-gray-800"
                onClick={() => signoutRedirect()}
              >
                <MdLogout />
                <span>Log Out</span>
              </DropdownMenuItem>
              <DropdownMenuArrow className="fill-gray-500 mt-0.5 mb-0.5" />
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>
      )}
    </div>
  );
};

export default NavBar;
