import { Card } from "@/components/Card";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-3 h-screen">
      <h1 className="text-3xl font-bold">Email Bot Sender</h1>
      {/* Email List */}
      {/* <form
        autoComplete="off"
        className="flex flex-col mx-auto w-full max-w-xs gap-1"
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="rounded-md focus:outline-none text-slate-900 p-1"
        />
        <section className="flex flex-col gap-3 mt-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </form> */}
      {/* Subject and Message */}
      {/* <form
        autoComplete="off"
        className="flex flex-col mx-auto w-full max-w-xs gap-1"
      >
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="rounded-md focus:outline-none text-slate-900 p-1"
        />
        <label htmlFor="Message">Message</label>
        <textarea
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
      </form> */}
    </main>
  );
}
