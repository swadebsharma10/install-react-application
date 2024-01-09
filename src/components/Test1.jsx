export default function Test1() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';

  return (
    <>
      <h1>{description}</h1>
      <img
        src={avatar}
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene </li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
