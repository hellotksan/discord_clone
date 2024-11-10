import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import { AddCircleOutline } from "@mui/icons-material";
import Message from "./Message";
import { useAppSelector } from "../app/hooks";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  DocumentData,
  DocumentReference,
  serverTimestamp,
} from "firebase/firestore";
import useSubCollection from "../hooks/useSubCollection";
import "./Chat.css";

const Chat = () => {
  const user = useAppSelector((state) => state.user.user);
  const channelId = useAppSelector((state) => state.app.channelId);
  const channelName = useAppSelector((state) => state.app.channelName);

  const [inputText, setInputText] = useState<string>("");
  const { subDocuments: messages } = useSubCollection("channels", "messages");

  const sendMessage = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    //channlesの中のmessageコレクションの中に新しくデータを入れる。
    const collectionRef = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );
    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef,
      {
        timestamp: serverTimestamp(),
        message: inputText,
        user: user,
      }
    );
    console.log(docRef);

    setInputText("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chatMessages">
        {messages.map((message, index) => (
          <Message
            key={index}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
          />
        ))}
      </div>

      <div className="chatInput">
        <AddCircleOutline fontSize="large" />
        <form>
          <input
            type="text"
            placeholder={`#${channelName}へメッセージを送信`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
            value={inputText}
            disabled={Boolean(!channelId)}
          />
          <button
            type="submit"
            className="chatInputButton"
            disabled={Boolean(!channelId)}
            onClick={(e: React.MouseEvent<HTMLElement>) => sendMessage(e)}
          >
            送信
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
