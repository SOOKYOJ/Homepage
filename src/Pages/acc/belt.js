import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../../Components/Card';

function Belt() {
  return (
    <div style={{ backgroundColor: 'lightgray', height: '100vh' }}>
      <div className="Belt" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Card title="Horseshoe Buckle" text="Montblanc" img="https://www.montblanc.com/variants/images/17411127376975571/A/w2500.jpg" />
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

export default Belt;
