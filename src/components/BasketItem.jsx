function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    return (
        <li className="collection-item ">
            {name}
            <i
                className="material-icons basket-dec"
                onClick={() => decQuantity(id)}
            >
                remove
            </i>{" "}
            x {quantity}{" "}
            <i
                className="material-icons basket-inc"
                onClick={() => incQuantity(id)}
            >
                add
            </i>{" "}
            = {price * quantity} AZN
            <span
                className="secondary-content"
                onClick={() => removeFromBasket(id)}
            >
                <i className="material-icons remove-basket">
                    remove_shopping_cart
                </i>
            </span>
        </li>
    );
}

export { BasketItem };
