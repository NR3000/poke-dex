// SSR app/page.js
export default async function Page() {
    // Fetch data from an external API using SSR
    const res = await fetch(`https://example.com/data`, {
        next: { mode: "server" },
    });
    const data = await res.json();
    // Return the data as props
    return {
        props: {
            data,
        },
    };
}



// ISR app/page.js
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

