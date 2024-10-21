import RowRiwayat from "./rowRiwayat"   

export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2x1">Riwayat Pendidikan</h2>
            </div>
            <RowRiwayat jenjang="SD" sekolah="SDN wargaluyu 1 " tahun="2008" />
            <RowRiwayat jenjang="SMP" sekolah="MTSN cikancung" tahun="2014" />
            <RowRiwayat jenjang="SMK" sekolah="SMK Bakti ilham" tahun="2017" />
            <RowRiwayat jenjang="Sarjana" sekolah="Universitas Masoem" tahun="2022" />
        </div>
    )
}

