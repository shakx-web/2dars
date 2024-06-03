import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Title from "../Title";
import { gridContainer, cartFooter } from "./style.module.css";

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <section>
      <div className="container">
        <Title text={"Mahsulotlar"} />

        <Card.Grid className={gridContainer}>
          {data.length ? (
            data.map(({ id, title, description, images, price }) => (
              <Card
                hoverable
                key={id}
                style={{ width: 400 }}
                cover={<img alt="example" src={images[0]} />}
              >
                <div>
                  <h2>{title}</h2>
                  <div className={cartFooter}>
                    <h3>Price: {price}$</h3>
                    <ShoppingCartOutlined />
                  </div>
                  <p>{description.split(" ").slice(0, 50).join(" ") + "..."}</p>
                </div>
              </Card>
            ))
          ) : (
            <img
              src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952bcb00wwpym54nppu76z7dwv1jfuomltjg7qncpuh&ep=v1_gifs_search&rid=200w.gif&ct=g"
              alt="loader"
            />
          )}
        </Card.Grid>
      </div>
    </section>
  );
}

export default Products;
