import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../../Components/Card';

function Ring() {
  return (
    <div style={{ backgroundColor: 'lightgray', height: '100vh' }}>
      <div className="Ring" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Card
          title="Chrome ring"
          text="Chrome hearts"
          img="https://image-cdn.hypb.st/https%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Fa1%2F4e%2FCHROME-HEART-RING-DJM-1-a8a53.jpg?fit=max&w=460&q=60"
        />
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

export default Ring;
