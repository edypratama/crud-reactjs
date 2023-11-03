import { GetKabupatenBali, GetKecamatanBadung, GetKecamatanBangli, GetKecamatanBuleleng, GetKecamatanDenpasar, GetKecamatanGianyar, GetKecamatanJembrana, GetKecamatanKarangasem, GetKecamatanKlungkung, GetKecamatanTabanan } from "../API";

export const cascaderOptions = async () => {
try{
  const ProvinsiBali = await GetKabupatenBali();
  const KecamatanJembrana = await GetKecamatanJembrana();
  const KecamatanTabanan = await GetKecamatanTabanan();
  const KecamatanBadung = await GetKecamatanBadung();
  const KecamatanGianyar = await GetKecamatanGianyar();
  const KecamatanKlungkung = await GetKecamatanKlungkung();
  const KecamatanBangli = await GetKecamatanBangli();
  const KecamatanKarangasem = await GetKecamatanKarangasem();
  const KecamatanBuleleng = await GetKecamatanBuleleng();
  const KecamatanDenpasar = await GetKecamatanDenpasar();
  

  const options = [
    {
      value: "BALI",
      label: "BALI",
      children: ProvinsiBali.map((item) => ({
        value: item.name,
        label: item.name,
        children:
            item.id === "5101"
              ? KecamatanJembrana.map((kecamatan) => ({
                  value: kecamatan.name,
                  label: kecamatan.name,
                }))
            : item.id === "5102"
              ? KecamatanTabanan.map((kecamatan) => ({
                  value: kecamatan.name,
                  label: kecamatan.name,
                }))
            
            : item.id === "5103"
            ? KecamatanBadung.map((kecamatan) => ({
                value: kecamatan.name,
                label: kecamatan.name,
              }))
            : item.id === "5104"
            ? KecamatanGianyar.map((kecamatan) => ({
                value: kecamatan.name,
                label: kecamatan.name,
              }))
            : item.id === "5105"
              ? KecamatanKlungkung.map((kecamatan) => ({
                  value: kecamatan.name,
                  label: kecamatan.name,
                }))
            : item.id === "5106"
            ? KecamatanBangli.map((kecamatan) => ({
                value: kecamatan.name,
                label: kecamatan.name,
              }))
            : item.id === "5107"
            ? KecamatanKarangasem.map((kecamatan) => ({
                value: kecamatan.name,
                label: kecamatan.name,
              }))
            : item.id === "5108"
            ? KecamatanBuleleng.map((kecamatan) => ({
                value: kecamatan.name,
                label: kecamatan.name,
              }))
            : item.id === "5171"
            ? KecamatanDenpasar.map((kecamatan) => ({
                value: kecamatan.name,
                label: kecamatan.name,
              }))
            : []
            ,
      })),
    },
  ];

  return options

} catch (error) {
    console.error("Error feching data address " , error);
}

};

