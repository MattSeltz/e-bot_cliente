"use client";

import { useState } from "react";

import { Card } from "./Card";
import { Button } from "./Button";

export const FormEmail = ({ isDone, setIsDone, emailList, setEmailList }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      setEmailList((prev) => [...prev, { name: email.split("@")[0], email }]);
      setEmail("");
    } else {
      alert("Error");
    }
  };

  const removeEmail = (email) => {
    const cp = [...emailList];
    const newEmailList = cp.filter((item) => item !== email);
    setEmailList(newEmailList);
  };

  return (
    !isDone && (
      <form
        autoComplete="off"
        className="flex flex-col mx-auto w-full max-w-xs gap-1 h-1/2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          className="rounded-md focus:outline-none text-slate-900 p-1"
        />
        <section className="flex flex-col gap-3 my-2 overflow-y-auto">
          {emailList.map((item, index) => (
            <Card key={index} item={item} removeEmail={removeEmail} />
          ))}
        </section>
        {emailList.length > 0 && (
          <Button evt={() => setIsDone(true)}>Next</Button>
        )}
      </form>
    )
  );
};
