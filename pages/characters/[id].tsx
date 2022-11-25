import Image from "next/image";
import imageLoader from "../../imageLoader";
import { Character, GetCharacterResults } from "../../types";

function CharacterPage({ character }: { character: Character }) {
  return (
    <div key={character.id}>
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

//Static website method

export async function getStaticPaths() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();

  return {
    paths: results.map((character) => {
      return { params: { id: String(character.id) } };
    }),
    fallback: false,
  };
}

/**
 *
 * @param params
 * the argument that you use is the object that you map in getStaticProps
 *
 * Create a static page for every single item in the array
 *
 */
export async function getStaticProps({ params }: { params: { id: String } }) {
  //make one network request that results 1 character
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const character = await res.json(); // turn it into JSON
  return {
    props: { character },
  };
}

export default CharacterPage;
