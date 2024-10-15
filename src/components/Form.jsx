"use client";

import { useState } from "react";

import { FormEmail } from "./FormEmail";
import { FormMessage } from "./FormMessage";

export const Form = () => {
  const [isDone, setIsDone] = useState();
  const [emailList, setEmailList] = useState([]);

  return (
    <>
      {/* Email List */}
      <FormEmail
        isDone={isDone}
        setIsDone={setIsDone}
        emailList={emailList}
        setEmailList={setEmailList}
      />
      {/* Subject and Message */}
      <FormMessage
        isDone={isDone}
        setIsDone={setIsDone}
        emailList={emailList}
        setEmailList={setEmailList}
      />
    </>
  );
};
