export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  const limitedData = data.slice(0, 10);

  return {
    props: { ninjas: limitedData },
  };
};
const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Titles</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <p>{ninja.title} </p>
        </div>
      ))}
    </div>
  );
};

export default Ninjas;
