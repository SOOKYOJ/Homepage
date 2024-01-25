import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../../Components/Card';

function Top() {
  return (
    <div style={{ backgroundColor: 'lightgray', height: '100vh' }}>
      <div className="Top" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Card title="Yellow knit" text="ADER" img="https://bbbtan.cafe24.com/2023FW/season/BLAFWLK10YL_18.jpg" />
        <Card title="Black mtm" text="Volante" img="https://image.msscdn.net/images/prd_img/20231004/3602015/detail_3602015_16965968746876_500.jpg" />
        <Card title="Green Hoodie" text="Human made" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKea0zF5M3dRXkC5w_Wh27yBc_sNBAOYkIfG1B-6hGeuIMgMBsNSFwoU7vD1a3HfeN3mc&usqp=CAU" />
        <Card
          title="Gray Hoodie"
          text="Stussy"
          img="https://www.asphaltgold.com/cdn/shop/files/20cac03b408603d7fe766aa7156ab22bc3f7abdf_1924932_0062_Stussy_Dizzy_Stock_Hoodie_Ash_Heather_os_1_b28f544b-c767-45e1-8cfe-f87f93c91064_grande.jpg?v=1697439848"
        />
        <Card title="" text="" img="" />
        <Card title="" text="" img="" />
        <Card title="" text="" img="" />
        <Card title="" text="" img="" />
        <Card title="" text="" img="" />
      </div>
    </div>
  );
}

export default Top;
