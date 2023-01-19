import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { setColorAPI } from "../actions";
import { Fade } from "react-reveal";
import { collection, query, where, getDocs } from "firebase/firestore";
import Product from "../Components/Product.js";
import { db } from "../firebase";
import "../css/userpage.css";

function UserPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [fil, setfil] = useState(3);
  const filters = ["crops", "fruits", "poultry", "All"];
  const { role } = useParams();
  const getProducts = async () => {
    let proarr = [];
    const q = query(collection(db, "products"), where("role", "==", role));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      proarr.push({ ...doc.data(), id: doc.id });
      console.log(doc.id, " => ", doc.data());
    });
    setProducts(proarr);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="user__page__main main">
        <Fade bottom>
          <div className="user__page__child child">
            <p>Welcome, to agri-zone</p>
            <h1 className="heading">Become {role}, and Leave a Review</h1>
          </div>
        </Fade>
      </div>
      <div className="allProducts main">
        <div className="all__product__child child">
          <div className="search__and__filters">
            <div className="search__input">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Search..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <div className="filters__input">
              {filters.map((filter, index) => (
                <div
                  className="filter"
                  style={{
                    color: index === fil ? "white" : "black",
                    backgroundColor: index === fil ? "black" : "white",
                  }}
                  onClick={() => setfil(index)}
                >
                  {filter}
                </div>
              ))}
            </div>
          </div>
          <div className="all__products__grid">
            {products.map((product) => {
              if (
                (fil === 3 || filters[fil] === product.category) &&
                (product.title.includes(search) ||
                  product.description.includes(search))
              )
                return (
                  <Product
                    title={product.title}
                    img={product.img}
                    price={product.price}
                    description={product.description}
                  />
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  color: state.colorState,
});
const dispatchStateToProps = (dispatch) => ({
  setColor: (payload) => dispatch(setColorAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(UserPage);
