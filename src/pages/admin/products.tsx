import {Product, PanelLayout} from "@/components";
import {ProductProps} from "@/components/Product";

export default function Products() {

    const products: ProductProps[] = [
        {
            id: 1,
            name: "MacBook Pro 16",
            description: "Мощный ноутбук с Retina дисплеем и процессором M1 Pro",
            price: 2499,
            image: "https://hips.hearstapps.com/hmg-prod/images/apple-m4-macbook-pro-lead-672b861685fd0.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*",
            category: "Ноутбуки",
            count: 10,
            ordersProcessed: 150,
        },
        {
            id: 2,
            name: "Беларусская картошка 1кг",
            description: "Свежая картошка из Беларуси, идеальна для варки и жарки",
            price: 999,
            image: "https://gosnovosti.com/wp-content/uploads/2015/08/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%9B%D1%83%D0%BA%D0%B0%D1%88%D0%B5%D0%BD%D0%BA%D0%BE-%D1%81-%D1%81%D1%8B%D0%BD%D0%BE%D0%BC-%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%BC-%D1%81%D0%BE%D0%B1%D0%B8%D1%80%D0%B0%D1%8E%D1%82-%D1%83%D1%80%D0%BE%D0%B6%D0%B0%D0%B9-%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%84%D0%B5%D0%BB%D1%8F-%D0%B2-%D1%81%D0%B2%D0%BE%D0%B5%D0%B9-%D1%80%D0%B5%D0%B7%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B8.jpg",
            category: "Продукты",
            count: 25,
            ordersProcessed: 300,
        },
        {
            id: 3,
            name: "YouTube Premium",
            description: "Подписка на YouTube без рекламы и с возможностью скачивания видео",
            price: 399,
            image: "https://images.hotukdeals.com/threads/raw/S1qmL/4575268_1/re/768x768/qt/60/4575268_1.jpg",
            category: "Подписки",
            count: 50,
            ordersProcessed: 200,
        }
    ];

    return (
        <PanelLayout title="Список товаров">
            {products.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </PanelLayout>
    )
}
