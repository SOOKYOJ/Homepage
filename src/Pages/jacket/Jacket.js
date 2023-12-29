import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

function Jacket() {
  return (
    <div style={{ backgroundColor: 'lightgray', height: '100vh' }}>
      <div className="Accessory" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Card
          title="Track Jacket"
          text="Supreme"
          img="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/071/955/883/original/940897_01.jpg.jpeg?action=crop&width=750"
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

export default Jacket;
