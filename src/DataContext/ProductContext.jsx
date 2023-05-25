import { createContext, useReducer, useState } from "react";
export const ProductContexts = createContext();
export const SelectContexts = createContext();
export const AllfunContext = createContext();

//giving data

//giving data
const SelectProvider = (props) => {
  const [selectProduct, setSelectProduct] = useState([]);
  const [watchList, setWatchList] = useState([]);
  return (
    <SelectContexts.Provider
      value={[selectProduct, setSelectProduct, watchList, setWatchList]}
    >
      {props.children}
    </SelectContexts.Provider>
  );
};

//userReducer fun
const AllfunContextProvider = (props) => {
  const allCalobj = {
    /// add item fun
    addItem(product, select, setSelect) {
      let productExit = select.find((p) => p.id === product.id);
      if (productExit) {
        setSelect(
          select.map((sp) =>
            sp.id === product.id
              ? { ...sp, count: sp.count + 1, price: sp.price + sp.calPrice }
              : sp
          )
        );
      } else {
        setSelect((prev) => [...prev, { ...product, count: 1 }]);
      }
    },

    //increae fun
    increase(id, select, setSelect) {
      setSelect(
        select.map((sp) =>
          sp.id === id
            ? { ...sp, count: sp.count + 1, price: sp.price + sp.calPrice }
            : sp
        )
      );
    },

    //decrease fun
    decrease(id, select, setSelect) {
      let productExit = select.find((sp) => sp.id === id);
      if (productExit.count === 1) {
        setSelect(select.filter((sp) => sp.id !== id));
      } else {
        setSelect(
          select.map((sp) =>
            sp.id === id
              ? { ...sp, count: sp.count - 1, price: sp.price - sp.calPrice }
              : sp
          )
        );
      }
    },

    //remove
    remove(id, select, setSelect) {
      setSelect(select.filter((sp) => sp.id !== id));
    },

    //add watchlist
    addWatchList(product, watchList, setWatchList, selectProduct) {
      let productExist = watchList.find((wp) => wp.id === product.id);
      let productExistInCart = selectProduct.find((sp) => sp.id === product.id);

      if (productExistInCart) {
        return alert("Your product is alredy exit shopCart");
      }

      if (productExist) {
        alert("This product is already add watchlist");
      } else {
        setWatchList((prev) => [...prev, { ...product, count: 1 }]);
      }
    },

    //add watchlist to mycart
    addWatchListToMycart(product, watchList, setSelect, setWatchList) {
      setSelect((prev) => [...prev, product]);
      setWatchList(watchList.filter((wp) => wp.id !== product.id));
    },
  };

  return (
    <AllfunContext.Provider value={allCalobj}>
      {props.children}
    </AllfunContext.Provider>
  );
};

export { SelectProvider, AllfunContextProvider };
