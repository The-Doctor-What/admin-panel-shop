import Link from "@/components/Link";
import Icon from "@/components/Icon";

export type ProductProps = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    count: number;
    ordersProcessed: number;
    category: string;
}

export default function Product({product}: { product: ProductProps }) {
    return (<section className="w-[710px] h-[280px] flex flex-row shadow-md rounded-xl bg-gray-50">
        <section className="w-[710px] h-[280px] flex flex-row shadow-md rounded-xl bg-gray-50">
            <div className="w-2/3 rounded-l-xl p-5 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg"><Icon name="cube"/> {product.name}</h3>
                    <div className="flex flex-row gap-2" key={product.id}>
                        <img src={product.image} alt="Image" className="w-40 h-50 rounded-2xl object-cover"/>
                        <div className="flex flex-col gap-2">
                            <p className="text-accent">Категория: {product.category}</p>
                            <p className="text-gray-600">Описание: {product.description}</p>
                            <p className="text-gray-600">На складе: {product.count} шт.</p>
                            <p className="text-gray-600">Продано: {product.ordersProcessed} шт.</p>
                            <p className="text-gray-600">Цена: {product.price} ₽</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/3 rounded-r-xl flex flex-col p-2 gap-2 mt-6">
                <Link href="/admin/logout" iconName="edit" iconGroup="solid">Изменить позицию</Link>
                <Link href="/admin/logout" iconName="trash-alt" iconGroup="solid">Удалить позицию</Link>
            </div>
        </section>
    </section>)
}