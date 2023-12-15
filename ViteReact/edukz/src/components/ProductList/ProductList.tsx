import { List, Card, Flex } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { SettingOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import "./ProductList.css";

const ProductList:React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const apiUrl = "https://fakestoreapi.com/products";
        axios.get(apiUrl).then((resp) => {
            const allProducts = resp.data;
            setProducts(allProducts);
        })
    },[products])
    return (
        <List
            grid={{ gutter: 16, column: 4 }}
            header="Products"
            bordered
            dataSource={products}
            style={{
                display: "flex"
            }}
            renderItem={(item) => (
                <List.Item>
                  <Card
                    style={{ width: 300 }}
                    cover={
                        <img id="img" src={item.image} alt={item.title}/>
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                  >
                    <Card.Meta title={item.title} description={item.description} />


                  </Card>
                </List.Item>
              )}
        />
    )
}

export default ProductList;