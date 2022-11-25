import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import imageLoader from "../../imageLoader";
import { Character, GetCharacterResults } from "../../types";
import styles from "../../styles/Character.module.css";

function CharacterPage({ character }: { character: Character }) {
  const router = useRouter(); // for if you want to check character id import useRouter. You can see it on the browser and server terminal

  console.log(router.query);
  return (
    <div className={styles.container} key={character.id}>
      <h1>{character.name}</h1>
      <Image
        loader={imageLoader}
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
      />
    </div>
  );
}

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage) {
  return <Layout>{page}</Layout>;
};

// create anonymous function
// now if you console log character, you will only see the logs in the terminal and not in the browser
export const getServerSideProps: GetServerSideProps = async (context) => {
  //make one network request that results 1 character
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  );
  const character = await res.json(); // turn it into JSON
  return {
    props: { character },
  };
};

export default CharacterPage;
