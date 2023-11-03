/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

export const getallUser = () => {
  return axios
    .get("http://localhost:5000/users")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data: ", error);
      return [];
    });
};

export const getsingleUser = (userId) => {
  return axios
    .get(`http://localhost:5000/users/${userId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data: ", error);
      return [];
    });
};

export const createUser = (data) => {
  return axios
    .post(`http://localhost:5000/users`, data)
    .then((res) => res.data)
    .catch((error) => {
      console.log("Data tidak berhasil di buat ", error);
      return [];
    });
};

export const updateUser = (data, userId) => {
  return axios
    .patch(`http://localhost:5000/users/${userId}`, data)
    .then((res) => res.data)
    .catch((error) => {
      console.log("Data tidak berhasil di ubah ", error);
      return [];
    });
};

export const deleteUser = (userId) => {
  return axios
    .delete(`http://localhost:5000/users/${userId}`)
    .catch((error) => {
      console.log("Data tidak berhasil di ubah ", error);
      return [];
    });
};

// Addresss
export const GetKabupatenBali = () => {
  return axios
    .get("https://www.emsifa.com/api-wilayah-indonesia/api/regencies/51.json")
    .then((res) => res.data)
    .catch((error) => {
      console.log("Data Kabupaten di bali tidak ditemukan ", error);
      return [];
    });
};


// Kecamatan
export const GetKecamatanJembrana = () => {   
  return axios
    .get( "https://www.emsifa.com/api-wilayah-indonesia/api/districts/5101.json")
    .then((res) => res.data)
    .catch((error) => {
      console.log("Data Kabupaten di bali tidak ditemukan ", error);
      return [];
    });
};

export const GetKecamatanTabanan = () => {   
  return axios
    .get( "https://www.emsifa.com/api-wilayah-indonesia/api/districts/5102.json")
    .then((res) => res.data)
    .catch((error) => {
      console.log("Data Kabupaten di bali tidak ditemukan ", error);
      return [];
    });
};

export const GetKecamatanBadung = () => {   
  return axios
    .get( "https://www.emsifa.com/api-wilayah-indonesia/api/districts/5103.json")
    .then((res) => res.data)
    .catch((error) => {
      console.log("Data Kabupaten di bali tidak ditemukan ", error);
      return [];
    });
};

export const GetKecamatanGianyar = () => {   
  return axios
    .get( "https://www.emsifa.com/api-wilayah-indonesia/api/districts/5104.json")
    .then((res) => res.data)
    .catch((error) => {
      console.log("Data Kabupaten di bali tidak ditemukan ", error);
      return [];
    });
};

export const GetKecamatanKlungkung = () => {   
  return axios
    .get( "https://www.emsifa.com/api-wilayah-indonesia/api/districts/5105.json")
    .then((res) => res.data)
    .catch((error) => {
      console.log("Data Kabupaten di bali tidak ditemukan ", error);
      return [];
    });
};

export const GetKecamatanBangli = () => {   
  return axios
    .get( "https://www.emsifa.com/api-wilayah-indonesia/api/districts/5106.json")
    .then((res) => res.data)
    .catch((error) => {
      console.log("Data Kabupaten di bali tidak ditemukan ", error);
      return [];
    });
};

export const GetKecamatanKarangasem = () => {   
  return axios
    .get( "https://www.emsifa.com/api-wilayah-indonesia/api/districts/5107.json")
    .then((res) => res.data)
    .catch((error) => {
      console.log("Data Kabupaten di bali tidak ditemukan ", error);
      return [];
    });
};

export const GetKecamatanBuleleng = () => {   
  return axios
    .get( "https://www.emsifa.com/api-wilayah-indonesia/api/districts/5108.json")
    .then((res) => res.data)
    .catch((error) => {
      console.log("Data Kabupaten di bali tidak ditemukan ", error);
      return [];
    });
};

export const GetKecamatanDenpasar = () => {   
  return axios
    .get( "https://www.emsifa.com/api-wilayah-indonesia/api/districts/5171.json")
    .then((res) => res.data)
    .catch((error) => {
      console.log("Data Kabupaten di bali tidak ditemukan ", error);
      return [];
    });
};
