import { Component } from "react";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import Title from "../components/Title/TItle";

class About extends Component<any> {
  render() {
    return (
      <Layout>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <Title>This is about page</Title>
      </Layout>
    );
  }
}

export default About;
