import { createContext, useReducer, useState } from "react";
import allProductDatas from "../AllproductData";
export const ProductContexts = createContext();
export const SelectContexts = createContext();
export const AllfunContext = createContext();

//giving data
const ProductProvider = (props) => {
  const [originProduct, setOriginProduct] = useState(allProductDatas);
  return (
    <ProductContexts.Provider value={[originProduct]}>
      {props.children}
    </ProductContexts.Provider>
  );
};

//giving data
const SelectProvider = (props) => {
  const [selectProduct, setSelectProduct] = useState([]);
  return (
    <SelectContexts.Provider value={[selectProduct, setSelectProduct]}>
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
  };

  return (
    <AllfunContext.Provider value={allCalobj}>
      {props.children}
    </AllfunContext.Provider>
  );
};

export { ProductProvider, SelectProvider, AllfunContextProvider };
