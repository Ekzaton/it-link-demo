import Link from "next/link";

import List from "@/components/List/List";
import { Item } from "@/types/common";

export default async function Home() {
    const response = await fetch('https://my-json-server.typicode.com/ekzaton/it-link-fake-api/items');
    const items: Item[] = await response.json();

    return (
        <>
            <List items={items} />
            <Link href={"/add"} className="btn btn-primary">Добавить</Link>
        </>
    )
}
