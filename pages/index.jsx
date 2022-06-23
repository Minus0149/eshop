import React from "react";
import Head from "next/head";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components/index";
const Home = ({ products, bannerData }) => {
  return (
    <div>
      <Head>
        <title>Minus-Eshop : Home</title>
      </Head>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best selling product</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return { props: { products, bannerData } };
};

export default Home;
