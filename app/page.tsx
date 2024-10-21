import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RowRiwayat from "./components/rowRiwayat";
import foto from "./SAYA.jpg";
import "./style.css"
import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import WarnaFavorit from "./components/warnaFaforit";
import Form from "./components/formKontak";
export default function Gallery(){
  return(
    <section>
     <Hero/>
     <RiwayatPendidikan/>
     <RiwayatPekerjaan/>                 
     <WarnaFavorit/>
     <Form/>
    </section>
  );
  
}                                       