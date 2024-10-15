import { Form } from "@/components/Form";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-3 h-screen">
      <h1 className="text-3xl font-bold">Email Bot Sender</h1>
      <Form />
    </main>
  );
}
