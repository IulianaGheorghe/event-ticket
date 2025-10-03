import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MyAvatar = ({ children }: Props) => {
  return (
    <Avatar className="flex size-8 shrink-0 overflow-hidden rounded-full">
      <AvatarFallback className="bg-gray-700 flex size-full items-center justify-center rounded-full">
        {children}
      </AvatarFallback>
    </Avatar>
  );
};

export default MyAvatar;
