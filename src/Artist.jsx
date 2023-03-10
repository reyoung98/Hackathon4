export default function Artist({ artists }) {
  return artists.map((artist) => {
    return <li>{artist.name}</li>;
  });
}
