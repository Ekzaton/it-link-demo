import { NextResponse } from "next/server";

import { Item } from "@/types/common";

type Chars = Exclude<Item['technical_characteristics'], undefined>;

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    const type = searchParams.get("type") as keyof Chars;

    const response = await fetch('https://my-json-server.typicode.com/ekzaton/it-link-fake-api/items');
    const items: Item[] = await response.json();

    const searchItems = items.filter((item) => {
        const chars = item['technical_characteristics'] as Chars;
        return chars[type].toString().toLowerCase().includes(query?.toLowerCase() ?? "")
    });

    return NextResponse.json(searchItems);
}
