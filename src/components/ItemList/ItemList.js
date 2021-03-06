import Item from "../Item/Item";

import "./ItemList.scss"

const ItemList = ({products}) => {
  return (
    <div className="itemList">
    {
      products.map(product => {
        return (
          <Item product={product} key={product.id} />
        );
      })
    }
    </div>
  )
}

export default ItemList
