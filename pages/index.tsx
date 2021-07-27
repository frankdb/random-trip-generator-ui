import Head from "next/head";
import Layout from "../components/application-ui/layout/Layout";
import Hero from "../components/marketing/Hero";

export default function Home() {
  return (
    <Layout>
      <Hero
        backgroundColor="bg-gray-800"
        header="Life's a trip."
        subheader="Track where you've been and where you're heading next"
        fontColor="text-blue-400"
        showCTAButton={true}
      />
    </Layout>
  );
}
