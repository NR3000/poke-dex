// SSG app/page.js
import { revalidatePath } from "next/cache";

export default async function Page() {
    // Fetch data from an external API using SSG
    const res = await fetch(`https://example.com/data`, {
        next: { mode: "static" },
    });
    const data = await res.json();
    // Return the data as props
    return {
        props: {
            data,
        },
        // Enable ISR with a 10-second interval
        revalidate: 10,
    };
}

// app/api/revalidate/route.js
export async function GET(request) {
    // Get the path to revalidate from the query string
    const path = request.nextUrl.searchParams.get("path") || "/";
    // Trigger revalidation for the given path
    revalidatePath(path);
    // Return a JSON response
    return new Response(JSON.stringify({ revalidated: true }), {
        headers: { "Content-Type": "application/json" },
    });
}