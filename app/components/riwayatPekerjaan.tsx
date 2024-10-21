import RowRiwayat from "./rowRiwayat"   

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2x1">Riwayat Pekerjaan</h2>
            </div>
            <RowRiwayat jenjang="Google" sekolah="manajer " tahun="2025" />
            <RowRiwayat jenjang="Tesla" sekolah="staf" tahun="2026" />
            <RowRiwayat jenjang="Presiden" sekolah="staf" tahun="2027" />
            <RowRiwayat jenjang="Dpr" sekolah="magang" tahun="2028" />
        </div>
    )
}