import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);
    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Basket</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        {...item}
                    />
                ))
            ) : (
                <li className="collection-item ">Basket is empty</li>
            )}
            <li className="collection-item active">
                total price: {totalPrice} AZN
                <button className="secondary-content btn btn-small right order-details-btn">
                    go to order details
                </button>
            </li>
            <li
                className="material-icons basket-close"
                onClick={handleBasketShow}
            >
                close
            </li>
        </ul>
    );
}

export { BasketList };
