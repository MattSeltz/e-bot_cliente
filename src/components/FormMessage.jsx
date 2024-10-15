"use client";

import { useState } from "react";

import { Button } from "./Button";

export const FormMessage = ({ isDone, setIsDone, emailList, setEmailList }) => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const reset = () => {
    setIsDone(false);
    setEmailList([]);
    setSubject("");
    setContent("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (subject && content) {
      const body = {
        sender: {
          name: "Matt",
          email: "matiselt@outlook.es",
        },
        subject,
        content,
        to: emailList,
      };

      const res = await fetch("http://localhost:3001/email", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        alert("Done!");
        reset();
      } else {
        alert("Error");
      }
    } else {
      alert("Error");
    }
  };

  return (
    isDone && (
      <form
        autoComplete="off"
        className="flex flex-col mx-auto w-full max-w-xs gap-1"
        onSubmit={handleSubmit}
      >
        <label htmlFor="subject">Subject</label>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          id="subject"
          name="subject"
          className="rounded-md focus:outline-none text-slate-900 p-1"
        />
        <label htmlFor="Message">Message</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="message"
          id="message"
          rows={7}
          className="rounded-md focus:outline-none text-slate-900 p-1 resize-none"
        ></textarea>
        <input
          type="submit"
          value="Send"
          className="bg-slate-800 rounded-md p-1 cursor-pointer transition-colors hover:bg-slate-700 mt-2"
        />
        <Button evt={() => setIsDone(false)}>Back</Button>
      </form>
    )
  );
};
