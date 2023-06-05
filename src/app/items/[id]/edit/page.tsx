import AppForm from "@/components/AppForm/AppForm";
import { Item } from "@/types/common";

type ItemEditProps = {
    params: {
        id: number
    }
}

export default async function ItemEdit({ params: { id }  }: ItemEditProps) {
    const response = await fetch(`https://my-json-server.typicode.com/ekzaton/it-link-fake-api/items/${id}`);
    const item: Item = await response.json();

    return <AppForm item={item} />
}
