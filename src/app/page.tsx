import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";
import HomeElevenPage from "./(homes)/home-11/page";

export const metadata: Metadata = {
  title: "Liko - Home Page",
};

export default function Home() {
  return (
    <>
      <HomeElevenPage />
    </>
  );
}
