import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../../Components/Card';

function Bottom() {
  return (
    <div style={{ backgroundColor: 'lightgray', height: '100vh' }}>
      <div className="Bottom" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Card title="Denim" text="Stussy" img="https://kr.stussy.com/cdn/shop/products/116599_NISH_1_bcc44466-dbed-4448-845e-d45fe420b304.jpg?v=1697193492&width=480" />
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

export default Bottom;
