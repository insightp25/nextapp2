"use client"
import { useRouter } from "next/navigation";
export default function Create() {
  const router = useRouter();
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      const title = e.target.title.value; // target은 <form>
      const body = e.target.body.value;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({title, body})
      }
      fetch(`http://localhost:9999/topics`, options)
        .then(resp=>resp.json())
        .then(result=>{
          console.log(result);
          const lastId = result.id;
          router.push(`/read/${lastId}`);
          router.refresh();
        })
    }}>
      <h2>create - src/app/create/page.js</h2>
      <p>
          <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  )
}
