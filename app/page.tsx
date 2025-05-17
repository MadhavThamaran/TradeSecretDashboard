// app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  // send everyone who hits “/” over to /login
  return redirect("/login");
}
