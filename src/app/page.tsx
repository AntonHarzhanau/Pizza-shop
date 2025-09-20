import { Categories, SortPopup, Title, TopBar } from "@/components/shared"
import { Container } from "@/components/shared"
import { Filters } from "@/components/shared/filters"
import { ProductCard } from "@/components/shared/product-card"
import { ProductsGroupList } from "@/components/shared/products-group-list"

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar/>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">

          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Pizzas" items={[
                {
                  id: 1,
                  name: 'Cheeseburger-pizza',
                  imageUrl: '/pizza.webp',
                  price: 30,
                  items: [{ price: 30}],
                },
                {
                  id: 2,
                  name: 'Cheeseburger-pizza',
                  imageUrl: '/pizza.webp',
                  price: 30,
                  items: [{ price: 30}],
                },
                {
                  id: 3,
                  name: 'Cheeseburger-pizza',
                  imageUrl: '/pizza.webp',
                  price: 30,
                  items: [{ price: 30}],
                },
                {
                  id: 4,
                  name: 'Cheeseburger-pizza',
                  imageUrl: '/pizza.webp',
                  price: 30,
                  items: [{ price: 30}],
                },
                {
                  id: 5,
                  name: 'Cheeseburger-pizza',
                  imageUrl: '/pizza.webp',
                  price: 30,
                  items: [{ price: 30}],
                },
              ]} categoryId={1} />
              <ProductsGroupList title="Combo" items={[
                {
                  id: 1,
                  name: 'Cheeseburger-pizza',
                  imageUrl: '/pizza.webp',
                  price: 30,
                  items: [{ price: 30}],
                },
                {
                  id: 2,
                  name: 'Cheeseburger-pizza',
                  imageUrl: '/pizza.webp',
                  price: 30,
                  items: [{ price: 30}],
                },
                {
                  id: 3,
                  name: 'Cheeseburger-pizza',
                  imageUrl: '/pizza.webp',
                  price: 30,
                  items: [{ price: 30}],
                },
                {
                  id: 4,
                  name: 'Cheeseburger-pizza',
                  imageUrl: '/pizza.webp',
                  price: 30,
                  items: [{ price: 30}],
                },
                {
                  id: 5,
                  name: 'Cheeseburger-pizza',
                  imageUrl: '/pizza.webp',
                  price: 30,
                  items: [{ price: 30}],
                },
              ]} categoryId={2} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
