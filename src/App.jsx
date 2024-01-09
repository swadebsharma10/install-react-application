import Avatar from "./components/Avatar";



function App() {
  return (
    <section>
    <h2>Learning React Components</h2>
    <Avatar
    person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
    size={100}
  />
    </section>
  );
}



export default App;



