import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

function Earing() {
  return (
    <div style={{ backgroundColor: 'lightgray', height: '100vh' }}>
      <div className="Earing" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Card title="Gold earring" text="Channel" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8QfqIT9tuh5B3zAkrm5-3cbq8cygVdIdwrBtoyiJymYlxocMiNhLjIbWfgjns7NWx9dU&usqp=CAU" />
        <Card title="" text="" img="" />
        <Card title="" text="" img="" />
        <Card title="" text="" img="" />
        <Card title="" text="" img="" />
        <Card title="" text="" img="" />
        <Card title="" text="" img="" />
      </div>
    </div>
  );
}

export default Earing;
