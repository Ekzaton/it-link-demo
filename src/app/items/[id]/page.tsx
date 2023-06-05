import Card from "@/components/Card/Card";
import { Item } from "@/types/common";

type ItemPageProps = {
    params: {
        id: number
    }
}

export default async function ItemPage({ params: { id } }: ItemPageProps) {
    const response = await fetch(`https://my-json-server.typicode.com/ekzaton/it-link-fake-api/items/${id}`);
    const item: Item = await response.json();

    return (
        <Card item={item} />
    );
}
