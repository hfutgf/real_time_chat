import  { FC } from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const Chat: FC<any> = ({ user }) => {
  return (
    <div className="container mx-auto text-white bg-purple-900 h-screen">
      <PrettyChatWindow
        projectId="c9688592-bf05-4814-bf12-54f936777e2e"
        username={user.username}
        secret={user.secret}
        style={{ height: "100vh", fontFamily:'sans-serif' }}
      />
    </div>
  );
};

export default Chat;
