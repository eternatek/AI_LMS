import { LogOut, Menu, User2 } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Input } from "./input";
import { Button } from "./button";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const Header = ({ toggleSidebar }) => {
  const user = false;
 
  return (
    <div className="h-20 px-6 flex items-center justify-between border-b">
      {/* Left section: menu + input */}
      <div className="flex items-center ">
        <button onClick={toggleSidebar} className="mr-4">
          <Menu className="h-6 w-6" />
        </button>
       </div>
      {/* Right section: mode toggle + login/signup or avatar/logout */}
      <div className="flex items-center gap-4">
        <ModeToggle />

        {!user ? (
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button >
                Signup
              </Button>
            </Link>
          </div>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="">
                <div className="flex gap-2 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                     <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Pallavi Singh</h4>
                    <p className="text-sm text-muted-foreground">
                    I am a full stack developer with a passion for creating dynamic and responsive web applications.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  {/* {user && user.role === "student" && ( */}
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">
                        {" "}
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  {/* )} */}

                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};
export default Header;
